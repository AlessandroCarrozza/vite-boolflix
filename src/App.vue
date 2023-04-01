<script>
import AppSearch from "./components/AppSearch.vue";
import FilmsContainer from "./components/FilmsContainer.vue";
import axios from "axios";
import { store } from "./store";

export default {
  components: {
    AppSearch,
    FilmsContainer,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    generateFilms() {
      let urlFilms = "https://api.themoviedb.org/3/search/movie?api_key=a9828f321f8e3d3034e0951224f59b30";
      axios.get(`${urlFilms}&query=${this.store.searchText}`)
        .then(response => {
          this.store.filmsList = response.data.results;
          console.log(this.store.filmsList);
        })
    }

  }
}
</script>


<template>
  <header>
    <div class="container">
      <h1 class="title">BOOLFLIX</h1>

      <AppSearch @showFilms="generateFilms"></AppSearch>
    </div>
  </header>

  <main>
    <FilmsContainer></FilmsContainer>
  </main>
</template>


<style lang="scss">
@use "./styles/general.scss";
</style>


<!-- https://api.themoviedb.org/3/search/movie?api_key=a9828f321f8e3d3034e0951224f59b30&query=star -->