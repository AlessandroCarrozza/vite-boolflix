<script>
import AppSearch from "./AppSearch.vue";

export default {
    name: "AppHeader",
    components: {
        AppSearch,
    }
}
</script>

<template>
    <header>
        <div class="container">
            <h1 class="title">BOOLFLIX</h1>

            <AppSearch></AppSearch>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";

header {
    height: 80px;
    background-color: black;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        max-width: 1600px;
        margin: auto;
        padding: 0 2rem;

        .title {
            color: red;
        }
    }

}
</style>