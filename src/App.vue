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
