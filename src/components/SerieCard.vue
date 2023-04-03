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
        key: Number,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="serie">
        <div class="card">
            <div class="flip-card-front">
                <img v-if="image != null" class="image" :src="'https://image.tmdb.org/t/p/w342' + image" alt="">
                <img v-else class="image empty" src="../../public/film-empty.webp" alt="">
            </div>


            <div class="flip-card-back">
                <h1 class="title">{{ title }}</h1>
                <h2 class="original-title">{{ originalTitle }}</h2>

                <img class="flag" v-if="store.flags.includes(language)" :src="'../../public/' + language + '-flag.png'"
                    alt="">
                <h3 v-else>{{ language }}</h3>

                <div v-if="Math.ceil(average) != 0">
                    <i v-for="star, index in 5" class=" fa-star"
                        :class="Math.ceil(average) > index ? 'fa-solid' : 'fa-regular'"></i>
                </div>
                <h3 v-else>Media voti non disponibile</h3>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";
</style>