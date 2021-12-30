<template>
  <div class='home'>
    <h2>Home</h2>
    <p class="blink">Message de Vuex: {{storeState}}</p>
    <router-link to="/about">Voir la seconde page</router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'Home',
  setup () {

    const store = useStore()
    const storeState = computed(() => store.getters.getTest())

    return {
      storeState
    }
  }
}
</script>

