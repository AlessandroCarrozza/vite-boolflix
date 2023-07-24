<script>
import showCard from "./showCard.vue";
import { store } from "../store";

export default {
    name: "CardsList",
    components: {
        showCard,
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
        <h2 class="results" v-if="store.filmsList.length > 0">Film - {{ store.filmsList.length }} risultati</h2>
        <div class="wrapper films">
            <showCard v-for="film in store.filmsList" :key="film.id" :show="film">
            </showCard>
        </div>

        <h2 class="results" v-if="store.seriesList.length > 0">Serie - {{ store.seriesList.length }} risultati</h2>
        <div class="wrapper series">
            <showCard v-for="serie in store.seriesList" :key="serie.id" :show="serie">
            </showCard>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";

.results {
    padding: 3rem 0 1rem;
}
</style>



<!-- :title="film.title"
:originalTitle="film.original_title" :language="film.original_language" :average="film.vote_average / 2"
:image="film.poster_path" :overview="film.overview" :genres="film.genre_ids" -->