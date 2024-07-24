<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3 font-primary font-bold bg-gray-100 dark:bg-gray-800">
            Peraturan Desa
          </th>
          <th scope="col" class="px-6 py-3 font-primary font-bold">
            Nomor dan Tanggal Peraturan Desa
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(peraturan, index) in peraturanDesa"
          :key="index"
          class="border-b border-gray-200 dark:border-gray-700"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
          >
            {{ peraturan }}
          </th>
          <td class="px-6 py-4">{{ nomorPeraturanDesa[index] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  peraturanDesa: {
    type: String,
    required: true
  },
  nomorPeraturanDesa: {
    type: String,
    required: true
  }
})
</script>
