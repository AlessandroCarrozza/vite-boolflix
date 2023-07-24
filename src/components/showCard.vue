<script>
import { store } from "../store";

export default {
    name: "showCard",
    props: {
        show: Object,
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
                <img v-if="show.poster_path != null" class="image"
                    :src="'https://image.tmdb.org/t/p/w342' + show.poster_path"
                    :alt="'immagine di: ' + show.title ? show.title : show.name">
                <img v-else class="image empty" src="../../public/film-empty.jpg" alt="Immagine di default">
            </div>


            <div class="flip-card-back">
                <div class="sub-title">Titolo:</div>
                <h1 class="title">{{ show.title ? show.title : show.name }}</h1>


                <div class="sub-title">Titolo originale:</div>
                <h2 class="original-title">{{ show.original_title ? show.original_title : show.original_name }}</h2>


                <img class="flag" v-if="store.flags.includes(show.original_language)"
                    :src="'../../public/' + show.original_language + '-flag.png'" alt="">
                <h3 class="lang" v-else>{{ show.original_language }}</h3>


                <div v-if="Math.ceil(show.vote_average) != 0">
                    <i v-for="star, index in 5" class=" fa-star"
                        :class="Math.ceil(show.vote_average / 2) > index ? 'fa-solid' : 'fa-regular'"></i>
                </div>
                <h3 v-else>Media voti non disponibile</h3>


                <div class="sub-title">Generi:</div>
                <div class="genres" v-for="genre in store.filmGenresList" v-if="show.genre_ids.length > 0">
                    <span v-for="genreId in show.genre_ids">
                        <span v-if="genreId == genre.id">
                            <span>{{ genre.name }}&nbsp</span>
                        </span>
                    </span>
                </div>
                <div class="not-genre" v-else>Nessun genere da mostrare</div>


                <div v-if="show.overview.length > 0">
                    <div class="sub-title">Trama:</div>
                    <p class="overview">{{ show.overview }}</p>
                </div>
                <div class="not-overview" v-else>Trama non disponibile</div>

            </div>
        </div>


    </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";
</style>