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
    }
}
</script>

<template>
    <div class="serie">
        <img class="image" :src="'https://image.tmdb.org/t/p/w342' + img" alt="">

        <h1>{{ title }}</h1>
        <h2>{{ originalTitle }}</h2>

        <h3>{{ language }}</h3>

        <h4>{{ average }}</h4>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";

.serie {
    width: 250px;
    background-color: green;
    margin: 1rem;
}
</style>