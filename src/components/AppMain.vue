<script>
export default {
    name: "AppMain",
}
</script>

<template>
    <main>
        <div class="container">
            <h2>Testo</h2>
            <div class="wrapper-films">testo</div>

            <h2>testo</h2>
            <div class="wrapper-series">testo</div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";

main {
    background-color: grey;
    padding: 2rem 0;

    .container {
        max-width: 1400px;
        padding: 0 2rem;
        margin: auto;
    }
}
</style>