<script>
import { store } from "../store";

export default {
    name: "FilmCard",
    props: {
        title: String,
        originalTitle: String,
        language: String,
        average: Number,
        image: String,
        overview: String,
        genres: Array,
        key: Number,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="film">


        <div class="card">
            <div class="flip-card-front">
                <img v-if="image != null" class="image" :src="'https://image.tmdb.org/t/p/w342' + image" alt="">
                <img v-else class="image empty" src="../../public/film-empty.jpg" alt="">
            </div>


            <div class="flip-card-back">
                <div class="sub-title">Titolo:</div>
                <h1 class="title">{{ title }}</h1>


                <div class="sub-title">Titolo originale:</div>
                <h2 class="original-title">{{ originalTitle }}</h2>


                <img class="flag" v-if="store.flags.includes(language)" :src="'../../public/' + language + '-flag.png'"
                    alt="">
                <h3 class="lang" v-else>{{ language }}</h3>


                <div v-if="Math.ceil(average) != 0">
                    <i v-for="star, index in 5" class=" fa-star"
                        :class="Math.ceil(average) > index ? 'fa-solid' : 'fa-regular'"></i>
                </div>
                <h3 v-else>Media voti non disponibile</h3>


                <div class="sub-title">Generi:</div>
                <div class="genres" v-for="genre in store.genresList">
                    <span v-for="(genreId, index) in genres">
                        <span v-if="genreId == genre.id">
                            <span>{{ genre.name }}</span>
                            <span v-if="store.genresList.length != (index - 1)">,</span>
                        </span>
                    </span>
                </div>


                <div v-if="overview.length > 0">
                    <div class="sub-title">Trama:</div>
                    <p class="overview">{{ overview }}</p>
                </div>
                <div class="not-overview" v-else>Trama non disponibile</div>

            </div>
        </div>


    </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";
</style>