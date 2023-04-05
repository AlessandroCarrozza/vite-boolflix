<script>
import { store } from "../store";

export default {
    name: "AppHeader",

    data() {
        return {
            store,
        }
    }
}
</script>



<template>
    <header>
        <div class="container">
            <h1 class="logo-name"><a href="#">BOOLFLIX</a></h1>

            <div class="input-search">
                <input type="text" placeholder="Cerca un film o una serie" v-model="store.searchText"
                    @keyup.enter="$emit('showContentEnter')">
                <span class="btn-search" @click="$emit('showContent')">Cerca</span>
            </div>
        </div>
    </header>
</template>



<style scoped lang="scss">
@use "../styles/general.scss";
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

header {
    height: 80px;
    width: 100%;
    background-color: $blk-color;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    .container {
        @include flex-ali-center;
        justify-content: space-between;
        height: 100%;
        max-width: 1600px;
        margin: auto;
        padding: 0 2rem;

        .logo-name a {
            color: $primary-color;
            text-decoration: none;
        }

        .input-search {
            width: 380px;
            height: 35px;
            display: flex;

            input {
                width: 180px;
                padding-left: 0.5rem;
                outline: none;
            }

            .btn-search {
                width: 70px;
                background-color: red;
                @include flex-center;
                color: $wht-color;
                cursor: pointer;
            }

            select {
                width: 130px;
                text-align: center;
            }
        }
    }

}
</style>