<template>
  <div class="max-w-full">
    <h2 class="text-2xl font-semibold text-center mb-4">Penduduk Berdasarkan Usia</h2>
    <div id="age-chart" class="max-w-full"></div>
  </div>
</template>

<script>
import * as d3 from 'd3'

const ageData = {
  "0-12 bulan": { "Laki-laki": 22, "Perempuan": 20 },
  "1 tahun": { "Laki-laki": 37, "Perempuan": 34 },
  "2": { "Laki-laki": 36, "Perempuan": 35 },
  "3": { "Laki-laki": 37, "Perempuan": 43 },
  "4": { "Laki-laki": 36, "Perempuan": 41 },
  "5": { "Laki-laki": 25, "Perempuan": 27 },
  "6": { "Laki-laki": 35, "Perempuan": 35 },
  "7": { "Laki-laki": 39, "Perempuan": 40 },
  "8": { "Laki-laki": 37, "Perempuan": 36 },
  "9": { "Laki-laki": 39, "Perempuan": 36 },
  "10": { "Laki-laki": 38, "Perempuan": 41 },
  "11": { "Laki-laki": 39, "Perempuan": 39 },
  "12": { "Laki-laki": 38, "Perempuan": 39 },
  "13": { "Laki-laki": 27, "Perempuan": 32 },
  "14": { "Laki-laki": 25, "Perempuan": 32 },
  "15": { "Laki-laki": 26, "Perempuan": 33 },
  "16": { "Laki-laki": 31, "Perempuan": 37 },
  "17": { "Laki-laki": 37, "Perempuan": 31 },
  "18": { "Laki-laki": 38, "Perempuan": 43 },
  "19": { "Laki-laki": 39, "Perempuan": 35 },
  "20": { "Laki-laki": 38, "Perempuan": 43 },
  "21": { "Laki-laki": 43, "Perempuan": 44 },
  "22": { "Laki-laki": 33, "Perempuan": 41 },
  "23": { "Laki-laki": 30, "Perempuan": 32 },
  "24": { "Laki-laki": 35, "Perempuan": 35 },
  "25": { "Laki-laki": 39, "Perempuan": 42 },
  "26": { "Laki-laki": 35, "Perempuan": 40 },
  "27": { "Laki-laki": 31, "Perempuan": 37 },
  "28": { "Laki-laki": 33, "Perempuan": 35 },
  "29": { "Laki-laki": 41, "Perempuan": 39 },
  "30": { "Laki-laki": 33, "Perempuan": 37 },
  "31": { "Laki-laki": 31, "Perempuan": 39 },
  "32": { "Laki-laki": 35, "Perempuan": 31 },
  "33": { "Laki-laki": 35, "Perempuan": 32 },
  "34": { "Laki-laki": 33, "Perempuan": 38 },
  "35": { "Laki-laki": 32, "Perempuan": 35 },
  "36": { "Laki-laki": 34, "Perempuan": 33 },
  "37": { "Laki-laki": 42, "Perempuan": 39 },
  "38": { "Laki-laki": 41, "Perempuan": 49 },
  "39": { "Laki-laki": 36, "Perempuan": 50 },
  "40": { "Laki-laki": 37, "Perempuan": 42 },
  "41": { "Laki-laki": 35, "Perempuan": 35 },
  "42": { "Laki-laki": 33, "Perempuan": 33 },
  "43": { "Laki-laki": 32, "Perempuan": 36 },
  "44": { "Laki-laki": 35, "Perempuan": 43 },
  "45": { "Laki-laki": 34, "Perempuan": 32 },
  "46": { "Laki-laki": 35, "Perempuan": 31 },
  "47": { "Laki-laki": 41, "Perempuan": 34 },
  "48": { "Laki-laki": 36, "Perempuan": 30 },
  "49": { "Laki-laki": 39, "Perempuan": 45 },
  "50": { "Laki-laki": 31, "Perempuan": 41 },
  "51": { "Laki-laki": 37, "Perempuan": 48 },
  "52": { "Laki-laki": 45, "Perempuan": 43 },
  "53": { "Laki-laki": 42, "Perempuan": 40 },
  "54": { "Laki-laki": 33, "Perempuan": 34 },
  "55": { "Laki-laki": 29, "Perempuan": 31 },
  "56": { "Laki-laki": 30, "Perempuan": 33 },
  "57": { "Laki-laki": 28, "Perempuan": 28 },
  "58": { "Laki-laki": 37, "Perempuan": 32 },
  "59": { "Laki-laki": 30, "Perempuan": 43 },
  "60": { "Laki-laki": 18, "Perempuan": 20 },
  "61": { "Laki-laki": 23, "Perempuan": 28 },
  "62": { "Laki-laki": 20, "Perempuan": 24 },
  "63": { "Laki-laki": 19, "Perempuan": 21 },
  "64": { "Laki-laki": 23, "Perempuan": 25 },
  "65": { "Laki-laki": 21, "Perempuan": 24 },
  "66": { "Laki-laki": 25, "Perempuan": 28 },
  "67": { "Laki-laki": 21, "Perempuan": 24 },
  "68": { "Laki-laki": 20, "Perempuan": 25 },
  "69": { "Laki-laki": 22, "Perempuan": 31 },
  "70": { "Laki-laki": 19, "Perempuan": 22 },
  "71": { "Laki-laki": 11, "Perempuan": 17 },
  "72": { "Laki-laki": 18, "Perempuan": 13 },
  "73": { "Laki-laki": 13, "Perempuan": 11 },
  "74": { "Laki-laki": 10, "Perempuan": 9 },
  "75": { "Laki-laki": 7, "Perempuan": 7 },
  "Lebih dari 75": { "Laki-laki": 98, "Perempuan": 96 }
};

const ageGroups = [
  { min: 0, max: 9 },
  { min: 10, max: 19 },
  { min: 20, max: 29 },
  { min: 30, max: 39 },
  { min: 40, max: 49 },
  { min: 50, max: 59 },
  { min: 60, max: 69 },
  { min: 70, max: 75 },
  // { min: 80, max: 89 },
  { min: 76, max: Infinity } // For "Lebih dari 75"
];

const result = ageGroups.map(group => {
  const minAge = group.min;
  const maxAge = group.max;
  
  let male = 0;
  let female = 0;
  
  for (const age in ageData) {
    const ageNumber = parseInt(age.split(' ')[0]);
    
    if (isNaN(ageNumber)) {
      // Special handling for "Lebih dari 75"
      if (age === "Lebih dari 75") {
        male += ageData[age]["Laki-laki"];
        female += ageData[age]["Perempuan"];
      }
    } else if (ageNumber >= minAge && ageNumber <= maxAge) {
      male += ageData[age]["Laki-laki"];
      female += ageData[age]["Perempuan"];
    }
  }
  
  return { ageGroup: `${minAge}-${maxAge}`, male, female };
});

console.log(result);

export default {
  name: 'UsiaPenduduk',
  mounted() {
    this.createChart()
  },
  methods: {
    createChart() {
      const data = result
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
