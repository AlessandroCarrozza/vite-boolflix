<script>

export default {
    name: "FilmCard",
    props: {
        title: String,
        originalTitle: String,
        language: String,
        avarage: String,
    }
}
</script>

<template>
    <div class="film">
        <h1>{{ title }}</h1>
        <h2>{{ originalTitle }}</h2>
        <h3>{{ language }}</h3>
        <h4>{{ avarage }}</h4>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";

.film {
    width: 250px;
    height: 400px;
    background-color: red;
    margin: 1rem;
}
</style>