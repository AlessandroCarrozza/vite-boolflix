<script>
import AppSearch from "./components/AppSearch.vue";
import FilmsContainer from "./components/FilmsContainer.vue";
import SeriesContainer from "./components/SeriesContainer.vue";
import axios from "axios";
import { store } from "./store";

export default {
  components: {
    AppSearch,
    FilmsContainer,
    SeriesContainer,
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
    },
    generateSeries() {
      let urlSeries = "https://api.themoviedb.org/3/search/tv?api_key=a9828f321f8e3d3034e0951224f59b30";
      axios.get(`${urlSeries}&query=${this.store.searchText}`)
        .then(response => {
          this.store.seriesList = response.data.results;
          console.log(this.store.seriesList);
        })
    },
    generateContent() {
      this.generateFilms();
      this.generateSeries();
    }
  }
}
</script>


<template>
  <header>
    <div class="container">
      <h1 class="title">BOOLFLIX</h1>

      <AppSearch @showFilms="generateContent"></AppSearch>
    </div>
  </header>

  <main>
    <h1 class="title-start" v-if="store.filmsList.length == 0 || store.seriesList == 0">Cerca un film o una serie TV</h1>
    <FilmsContainer></FilmsContainer>
    <SeriesContainer></SeriesContainer>
  </main>
</template>


<style lang="scss">
@use "./styles/general.scss";
</style>


<!-- https://api.themoviedb.org/3/search/movie?api_key=a9828f321f8e3d3034e0951224f59b30&query=star -->