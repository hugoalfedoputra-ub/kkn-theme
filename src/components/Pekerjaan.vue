<template>
    <div class="chart-container">
      <h2 class="text-2xl font-semibold text-center mb-4">Statistik Pekerjaan</h2>
      <div id="job-chart"></div>
    </div>
  </template>
  
  <script>
  import * as d3 from 'd3';
  
  export default {
    name: 'Pekerjaan',
    mounted() {
      this.createChart();
    },
    methods: {
      createChart() {
        const data = [
          { job: 'Petani / Pekebun', count: 2970 },
          { job: 'Belum / Tidak Bekerja', count: 1899 },
          { job: 'Pelajar / Mahasiswa', count: 1125 },
          { job: 'Buruh Harian Lepas', count: 790 },
          { job: 'Mengurus Rumah Tangga', count: 712 },
          { job: 'Karyawan Swasta', count: 348 },
          { job: 'Wiraswasta', count: 329 },
          { job: 'Pedagang', count: 79 }
        ];
  
        const margin = { top: 20, right: 30, bottom: 40, left: 150 };
        const width = 1175 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;
  
        const svg = d3.select("#job-chart")
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .style("border", "2px solid black")
          .append("g")
          .attr("transform", `translate(${margin.left},${margin.top})`);
  
        const x = d3.scaleLinear()
          .domain([0, 3000])
          .range([0, width]);
  
        svg.append("g")
          .attr("transform", `translate(0,${height})`)
          .call(d3.axisBottom(x));
  
        const y = d3.scaleBand()
          .domain(data.map(d => d.job))
          .range([0, height])
          .padding(0.1);
  
        svg.append("g")
          .call(d3.axisLeft(y));
  
        svg.selectAll(".bar")
          .data(data)
          .enter()
          .append("rect")
          .attr("class", "bar")
          .attr("x", x(0))
          .attr("y", d => y(d.job))
          .attr("width", d => x(d.count))
          .attr("height", y.bandwidth())
          .attr("fill", "#49A8ED");
      }
    }
  };
  </script>
  
  <style scoped>
  .chart-container {
    margin: 0 auto;
    max-width: 1200px;
  }
  </style>
  