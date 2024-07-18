<template>
  <div id="app">
    <header>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
      <div class="wrapper">
        <nav>
          <RouterLink to="/"></RouterLink>
          <RouterLink to="/about"></RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<script setup>
<<<<<<< HEAD
import { RouterView } from 'vue-router'
=======
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
>>>>>>> 58d173dfddb41928d0394061bd582bf7df8f2975
</script>


<<<<<<< HEAD
<template>
  <!-- <div>Hello, world! <br />Here is a message from our API:</div>
  <div>{{ data }}</div>
  <div v-if="error.length != 0">{{ error }}</div>
  <a href="https://blitar-butun.desa.id/siteman" rel="noopener noreferrer" target="_blank"
    >Login Admin</a
  >
  <h1 class="font-primary">Tes</h1>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
=======
>>>>>>> 58d173dfddb41928d0394061bd582bf7df8f2975


<<<<<<< HEAD
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
=======
>>>>>>> 58d173dfddb41928d0394061bd582bf7df8f2975



<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
