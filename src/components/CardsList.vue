<script>
import FilmCard from "./FilmCard.vue";
import SerieCard from "./SerieCard.vue";
import { store } from "../store";

export default {
    name: "CardsList",
    components: {
        FilmCard,
        SerieCard,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="container">
        <h2 v-if="store.filmsList.length > 0">Film</h2>
        <div class="wrapper films">
            <FilmCard v-for="(film, index) in store.filmsList" :key="index" :title="film.title"
                :originalTitle="film.original_title" :language="film.original_language" :average="film.vote_average / 2"
                :image="film.poster_path" :overview="film.overview">
            </FilmCard>
        </div>

        <h2 v-if="store.seriesList.length > 0">Serie</h2>
        <div class="wrapper series">
            <SerieCard v-for="(serie, index) in store.seriesList" :key="index" :title="serie.name"
                :originalTitle="serie.original_name" :language="serie.original_language" :average="serie.vote_average / 2"
                :image="serie.poster_path" :overview="serie.overview">
            </SerieCard>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";
</style>