<script>
import SerieCard from "./SerieCard.vue";
import { store } from "../store";

export default {
    name: "SeriesContainer",
    components: {
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
    <div class="series-container">
        <h2 v-if="store.seriesList.length > 0">Serie</h2>
        <div class="wrapper series">
            <SerieCard v-for="(serie, index) in store.seriesList" :key="index" :title="serie.name"
                :originalTitle="serie.original_name" :language="serie.original_language" :average="serie.vote_average / 2"
                :image="serie.poster_path">
            </SerieCard>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";
</style>