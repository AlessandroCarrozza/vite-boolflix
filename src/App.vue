<script>
import AppSearch from "./components/AppSearch.vue";
import CardsList from "./components/CardsList.vue";
import axios from "axios";
import { store } from "./store";

export default {
  components: {
    AppSearch,
    CardsList,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    generateFilms() {
      let urlFilms = "https://api.themoviedb.org/3/search/movie?api_key=a9828f321f8e3d3034e0951224f59b30&language=it-IT";
      axios.get(`${urlFilms}&query=${this.store.searchText}`)
        .then(response => {
          this.store.filmsList = response.data.results;
          console.log(this.store.filmsList);
        })
    },
    generateSeries() {
      let urlSeries = "https://api.themoviedb.org/3/search/tv?api_key=a9828f321f8e3d3034e0951224f59b30&language=it-IT";
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
      <h1 class="logo-name">BOOLFLIX</h1>

      <AppSearch @showContent="generateContent" @showContentEnter="generateContent"></AppSearch>
    </div>
  </header>

  <main>
    <h1 class="title-start" v-if="store.filmsList.length == 0 && store.seriesList.length == 0">Cerca un film o una serie
      TV</h1>
    <CardsList></CardsList>
  </main>
</template>


<style lang="scss">
@use "./styles/general.scss";
</style>

