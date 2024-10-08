<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-yellow-primary mb-8">Pendidikan</h1>
    <div class="grid grid-cols-4 gap-6">
      <Card
        v-for="(pendidikan, index) in Pendidikan"
        :key="index"
        :title="pendidikan.title"
        :count="pendidikan.count"
        class="cursor-pointer"
      />
    </div>
    <div class="mt-12">
      <h2 class="text-2xl font-semibold text-center mb-4">Statistik Pendidikan</h2>
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
      Pendidikan: [
        { title: 'Tidak/Belum Sekolah', count: '167' },
        { title: 'Belum Tamat SD/Sederajat', count: '278' },
        { title: 'SD/Sederajat', count: '280' },
        { title: 'SMP/Sederajat', count: '1037' },
        { title: 'SMA/Sederajat', count: '1014' },
        { title: 'DI/DII', count: '36' },
        { title: 'DIII/Akademik', count: '123' },
        { title: 'S1 (Sarjana)', count: '190' }
      ]
    }
  },
  mounted() {
    this.createChart()
  },
  methods: {
    createChart() {
      const data = this.Pendidikan.map((d) => d.count)
      const labels = this.Pendidikan.map(
        (d) => `${d.title}: ${((d.count / d3.sum(data)) * 100).toFixed(1)}% ${d.count} Orang`
      )

      const width = 1200
      const height = 600 // Increased height
      const margin = 40

      const radius = Math.min(width, height) / 2 - margin

      const svg = d3
        .select('#chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('border', '2px solid black')
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`)

      const color = d3
        .scaleOrdinal()
        .domain(labels)
        .range([
          '#ff6347', '#4682b4', '#32cd32', '#ff69b4', '#ff7f50', '#dda0dd', '#8a2be2', '#7fffd4'
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

      // Function to check for label overlap
      function checkOverlap(current, others) {
        for (let i = 0; i < others.length; i++) {
          if (others[i] !== current) {
            const dx = current.x - others[i].x
            const dy = current.y - others[i].y
            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance < 50) return true // Adjust this value to control spacing
          }
        }
        return false
      }

      // Calculate label positions
      const labelPositions = data_ready.map((d) => {
        const pos = outerArc.centroid(d)
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2
        pos[0] = radius * 1.15 * (midAngle < Math.PI ? 1 : -1)
        return { x: pos[0], y: pos[1], angle: midAngle }
      })

      // Adjust label positions to avoid overlap
      labelPositions.forEach((pos, i) => {
        let angle = pos.angle
        let radius = 1.15
        while (checkOverlap(pos, labelPositions)) {
          angle += 0.1 * (pos.angle < Math.PI ? 1 : -1)
          radius += 0.05
          pos.x = radius * (-width / 4) * (angle < Math.PI ? 1 : -1)
          pos.y = radius * (height /1.5) * Math.sin(angle)
        }
      })

      svg
        .selectAll('lines')
        .data(data_ready)
        .enter()
        .append('polyline')
        .attr('points', (d, i) => {
          const posA = arc.centroid(d)
          const posB = outerArc.centroid(d)
          const posC = [labelPositions[i].x, labelPositions[i].y]
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
        .attr('transform', (d, i) => `translate(${labelPositions[i].x},${labelPositions[i].y})`)
        .style('text-anchor', (d, i) => (labelPositions[i].x > 0 ? 'start' : 'end'))
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
