<script>
import AppHeader from "./components/AppHeader.vue";
import CardsList from "./components/CardsList.vue";
import axios from "axios";
import { store } from "./store";

export default {
  components: {
    AppHeader,
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
    getFilmGenres() {
      let urlFilmGenres = "https://api.themoviedb.org/3/genre/movie/list?api_key=a9828f321f8e3d3034e0951224f59b30";
      axios.get(urlFilmGenres)
        .then(response => {
          this.store.filmGenresList = response.data.genres;
          console.log(this.store.filmGenresList);
        })
    },
    getSerieGenres() {
      let urlSerieGenres = "https://api.themoviedb.org/3/genre/tv/list?api_key=a9828f321f8e3d3034e0951224f59b30";
      axios.get(urlSerieGenres)
        .then(response => {
          this.store.serieGenresList = response.data.genres;
          console.log(this.store.serieGenresList);
        })
    },
    generateContent() {
      this.generateFilms();
      this.generateSeries();
      this.getFilmGenres();
      this.getSerieGenres();
    },
  }
}
</script>


<template>
  <AppHeader @showContent="generateContent" @showContentEnter="generateContent"></AppHeader>

  <main>
    <h1 class="title-start" v-if="store.filmsList.length == 0 && store.seriesList.length == 0">Cerca un film o una serie
      TV</h1>
    <CardsList></CardsList>
  </main>
</template>


<style lang="scss">
@use "./styles/general.scss";
</style>

