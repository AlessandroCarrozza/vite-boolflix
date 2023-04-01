<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {

  },
  methods: {

  }
}
</script>


<template>
  <AppHeader></AppHeader>

  <AppMain></AppMain>
</template>


<style lang="scss">
@use "./styles/general.scss";
</style>


<!-- https://api.themoviedb.org/3/search/movie?api_key=a9828f321f8e3d3034e0951224f59b30&query=star -->