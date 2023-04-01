<script>
import FilmCard from "./FilmCard.vue";
import { store } from "../store";

export default {
    name: "FilmsContainer",
    components: {
        FilmCard,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="films-container">
        <h2>Film</h2>
        <div class="wrapper films">
            <FilmCard v-for="(film, index) in store.filmsList" :title="film.title" :originalTitle="film.original_title"
                :language="film.original_language" :avarage="vote_average">
            </FilmCard>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";
</style>