<template>
  <div class="max-w-[75rem] mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-yellow-primary mb-8 animate-fadeRight">Data Agama</h1>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeUp">
      <Card
        v-for="(religion, index) in filteredReligions"
        :key="index"
        :title="religion.title"
        :count="religion.count"
        class="cursor-pointer"
      />
    </div>
    <div class="mt-12 animate-fadeLeft">
      <h2 class="text-2xl font-semibold text-center mb-4">Statistik Agama</h2>
      <div id="chart" class="mx-auto flex justify-center w-[100%]"></div>
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
        { title: 'Hindu', count: 8 }
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
      const labels = filteredData.map((d) => d.title)

      const width = 1200
      const height = 600
      const margin = { top: 40, right: 20, bottom: 60, left: 60 }

      const svg = d3
        .select('#chart')
        .append('svg')
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet')
        .style('border', '2px solid black')

      const chartWidth = width - margin.left - margin.right
      const chartHeight = height - margin.top - margin.bottom

      const x = d3.scaleBand().domain(labels).range([0, chartWidth]).padding(0.2)

      const y = d3
        .scaleLog()
        .domain([1, d3.max(data)])
        .nice()
        .range([chartHeight, 0])

      const chart = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`)

      chart
        .append('g')
        .attr('transform', `translate(0,${chartHeight})`)
        .call(d3.axisBottom(x))
        .style('font-size', '16px')
        .style('font-weight', 'bold')

      chart.append('g').call(d3.axisLeft(y))

      chart
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (d, i) => x(labels[i]))
        .attr('y', (d) => y(d))
        .attr('width', x.bandwidth())
        .attr('height', (d) => chartHeight - y(d))
        .attr('fill', '#4682b4')

      chart
        .selectAll('.label')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'label')
        .attr('x', (d, i) => x(labels[i]) + x.bandwidth() / 2)
        .attr('y', (d) => y(d) - 5)
        .attr('text-anchor', 'middle')
        .text((d) => d)
        .style('font-size', '20px')
        .style('font-weight', 'bold')
    }
  }
}
</script>
