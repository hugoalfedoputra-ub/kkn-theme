<template>
  <div class="max-w-full">
    <h2 class="text-2xl font-semibold text-center mb-4">Penduduk Berdasarkan Usia</h2>
    <div id="age-chart" class="max-w-full"></div>
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'UsiaPenduduk',
  mounted() {
    this.createChart()
  },
  methods: {
    createChart() {
      const data = [
        { ageGroup: '0-5', male: 1000, female: 1100 },
        { ageGroup: '5-17', male: 1500, female: 1600 },
        { ageGroup: '17-30', male: 1200, female: 1300 },
        { ageGroup: '30-60', male: 1800, female: 1700 },
        { ageGroup: '60+', male: 800, female: 900 }
      ]

      const margin = { top: 20, right: 30, bottom: 40, left: 40 }
      const width = 1175 - margin.left - margin.right
      const height = 400 - margin.top - margin.bottom

      const svg = d3
        .select('#age-chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .style('border', '2px solid black')
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`)

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.ageGroup))
        .range([0, width])
        .padding([0.2])

      svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x))

      const y = d3.scaleLinear().domain([0, 2000]).range([height, 0])

      svg.append('g').call(d3.axisLeft(y))

      svg
        .selectAll('.bar-male')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar-male')
        .attr('x', (d) => x(d.ageGroup))
        .attr('y', (d) => y(d.male))
        .attr('width', x.bandwidth() / 2)
        .attr('height', (d) => height - y(d.male))
        .attr('fill', '#49A8ED')

      svg
        .selectAll('.bar-female')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar-female')
        .attr('x', (d) => x(d.ageGroup) + x.bandwidth() / 2)
        .attr('y', (d) => y(d.female))
        .attr('width', x.bandwidth() / 2)
        .attr('height', (d) => height - y(d.female))
        .attr('fill', '#ED5349')
    }
  }
}
</script>
