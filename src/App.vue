<template>
  <div class="app">
    <router-link
      class="app__title"
      to="/"
    >
      <h1 class="test">Hello Vue 3 + Vite + Vuex + VueRouter</h1>
      <img
        alt="Vue logo"
        src="./assets/logo.png"
      />
    </router-link>
    <router-view />
    <footer>
      <a href="https://github.com/Jellfedora/Skeleton-Vuejs3-Router-Vuex">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </footer>
  </div>
</template>

<style lang="scss">
@import "./styles/main.scss";
</style>
