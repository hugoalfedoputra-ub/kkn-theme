<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-yellow-primary mb-8">Data Agama</h1>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card
        v-for="(religion, index) in filteredReligions"
        :key="index"
        :title="religion.title"
        :count="religion.count"
        class="cursor-pointer"
      />
    </div>
    <div class="mt-12">
      <h2 class="text-2xl font-semibold text-center mb-4">Statistik Agama</h2>
      <div id="chart" class="mx-auto"></div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'
import Card from './StatisticCard.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      religions: [
        { title: 'Islam', count: 5271 },
        { title: 'Kristen', count: 30 },
        { title: 'Katolik', count: 7 },
        { title: 'Hindu', count: 8 },
        // { title: 'Budha', count: 999999 },
        // { title: 'Konghucu', count: 0 }
      ]
    }
  },
  computed: {
    filteredReligions() {
      return this.religions.filter((religion) => religion.count > 0)
    }
  },
  mounted() {
    this.createChart()
  },
  methods: {
    createChart() {
      const filteredData = this.religions.filter((d) => d.count > 0) 
      const data = filteredData.map((d) => d.count)
      const labels = filteredData.map(
        (d) => `${d.title}: ${((d.count / d3.sum(data)) * 100).toFixed(1)}% ${d.count} Orang`
      )

      const width = 1200 
      const height = 600
      const margin = 40

      const radius = Math.min(width, height) / 2 - margin

      const svg = d3
      .select('#chart')
        .append('svg')
        .attr('viewBox', `0 0 ${width} ${height}`) 
        .attr('preserveAspectRatio', 'xMidYMid meet') 
        .style('border', '2px solid black')
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`)

      const color = d3
        .scaleOrdinal()
        .domain(labels)
        .range([
          '#ff6347',
          '#4682b4',
          '#32cd32',
          '#ff69b4',
          '#ff7f50',
          '#dda0dd',
          '#8a2be2',
          '#7fffd4'
        ]) 

      const pie = d3.pie().value((d) => d)

      const data_ready = pie(data)

      const arc = d3.arc().innerRadius(0).outerRadius(radius)

      const outerArc = d3
        .arc()
        .innerRadius(radius * 1.1)
        .outerRadius(radius * 1.1)

      svg
        .selectAll('pieces')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', (d, i) => color(labels[i]))
        .style('opacity', 0.7)

      function checkOverlap(current, others) {
        for (let i = 0; i < others.length; i++) {
          if (others[i] !== current) {
            const dx = current.x - others[i].x
            const dy = current.y - others[i].y
            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance < 50) return true 
          }
        }
        return false
      }


      const labelPositions = data_ready.map((d) => {
        const pos = outerArc.centroid(d)
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2
        pos[0] = radius * 1.15 * (midAngle < Math.PI ? 1 : -1)
        return { x: pos[0], y: pos[1], angle: midAngle }
      })

      labelPositions.forEach((pos, i) => {
        let angle = pos.angle
        let radius = 1.15
        while (checkOverlap(pos, labelPositions)) {
          angle += 0.1 * (pos.angle < Math.PI ? 1 : -1)
          radius += 0.05
          pos.x = radius * (-width / 4) * (angle < Math.PI ? 1 : -1)
          pos.y = radius * (height / 1.5) * Math.sin(angle)
        }
      })

      svg
        .selectAll('lines')
        .data(data_ready)
        .enter()
        .append('polyline')
        .attr('points', (d) => {
          const posA = arc.centroid(d)
          const posB = outerArc.centroid(d)
          const posC = outerArc.centroid(d)
          const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2
          posC[0] = radius * 1.3 * (midAngle < Math.PI ? 1 : -1)
          return [posA, posB, posC]
        })
        .style('fill', 'none')
        .style('stroke', 'black')
        .style('stroke-width', 1)

      svg
        .selectAll('labels')
        .data(data_ready)
        .enter()
        .append('text')
        .attr('dy', '.35em')
        .text((d, i) => labels[i])
        .attr('transform', (d) => {
          const pos = outerArc.centroid(d)
          const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2
          pos[0] = radius * 1.35 * (midAngle < Math.PI ? 1 : -1)
          return `translate(${pos})`
        })
        .style('text-anchor', (d) => {
          const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2
          return midAngle < Math.PI ? 'start' : 'end'
        })
        .style('font-size', 12)
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
#chart {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
