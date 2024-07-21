<script setup>
import { RouterView } from 'vue-router'
</script>

<script>
export default {
  data() {
    return {
      data: '',
      error: []
    }
  },
  created() {
    var url = ''
    if (import.meta.env.MODE != 'production') {
      url = import.meta.env.VITE_TEST_API_URL
    } else {
      url = import.meta.env.VITE_STAGING_API_URL
    }
    fetch(url)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          this.error.push('Failed to fetch API response')
        }
        return response.json()
      })
      .then((data) => {
        if (data.message == '') {
          this.error.push('Data is an empty string')
        }
        this.data = data.message
      })
      .catch((error) => {
        this.error.push(error)
        console.log(error)
      })
  }
}
</script>

<template>
  <RouterView />
</template>