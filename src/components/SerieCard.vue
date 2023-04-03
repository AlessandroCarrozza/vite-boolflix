<script>

export default {
    name: "FilmCard",
    props: {
        title: String,
        originalTitle: String,
        language: String,
        average: Number,
        img: String,
        key: Number,
    },
}
</script>

<template>
    <div class="serie">
        <img v-if="img != null" class="image" :src="'https://image.tmdb.org/t/p/w342' + img" alt="">
        <img v-else class="image empty" src="../../public/film-empty.webp" alt="">

        <h1>{{ title }}</h1>
        <h2 class="original-title">{{ originalTitle }}</h2>

        <h3>{{ language }}</h3>

        <i v-if="Math.ceil(average) != 0" v-for="star, index in 5" class=" fa-star"
            :class="Math.ceil(average) > index ? 'fa-solid' : 'fa-regular'"></i>
        <h3 v-else>Media voti non disponibile</h3>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";

.serie {
    width: 250px;
    margin: 1rem;
    border: 3px solid green;
}
</style>