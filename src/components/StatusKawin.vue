<template>
  <div class="max-w-[75rem] my-auto">
    <h2 class="text-2xl font-semibold text-center mb-4">Status Perkawinan</h2>
    <div id="marriage-chart"></div>
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'MarriageStatus',
  mounted() {
    this.createChart()
  },
  methods: {
    createChart() {
      const data = [
        { status: 'Kawin', count: 3792 },
        { status: 'Belum Kawin', count: 3450 },
        { status: 'Cerai Hidup', count: 138 },
        { status: 'Cerai Meninggal', count: 1000 }
      ]

      const width = 1100
      const height = 450
      const margin = 40
      const radius = Math.min(width, height) / 2 - margin

      const svg = d3
        .select('#marriage-chart')
        .append('svg')
        .attr('viewBox', `0 0 ${width + margin * 2} ${height + margin * 2}`)
        .attr('preserveAspectRatio', 'xMidYMid meet')
        .style('border', '2px solid black')
        .append('g')
        .attr('transform', `translate(${width / 2 + margin}, ${height / 2 + margin})`)

      const color = d3
        .scaleOrdinal()
        .domain(data.map((d) => d.status))
        .range(['#004F2D', '#4682b4', '#32cd32', '#EDAE49'])

      const pie = d3.pie().value((d) => d.count)

      const data_ready = pie(data)

      const arc = d3.arc().innerRadius(0).outerRadius(radius)

      svg
        .selectAll('path')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', (d) => color(d.data.status))
        .attr('stroke', 'white')
        .style('stroke-width', '2px')

      const outerArc = d3
        .arc()
        .innerRadius(radius * 0.9)
        .outerRadius(radius * 0.9)

      svg
        .selectAll('allPolylines')
        .data(data_ready)
        .enter()
        .append('polyline')
        .attr('stroke', 'black')
        .style('fill', 'none')
        .attr('stroke-width', 1)
        .attr('points', function (d) {
          const posA = arc.centroid(d)
          const posB = outerArc.centroid(d)
          const posC = outerArc.centroid(d)
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
          posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1)
          return [posA, posB, posC]
        })

      svg
        .selectAll('allLabels')
        .data(data_ready)
        .enter()
        .append('text')
        .text((d) => `${d.data.status}: ${d.data.count}`)
        .attr('transform', function (d) {
          const pos = outerArc.centroid(d)
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
          pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1)
          return `translate(${pos})`
        })
        .style('text-anchor', function (d) {
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
          return midangle < Math.PI ? 'start' : 'end'
        })
    }
  }
}
</script>
