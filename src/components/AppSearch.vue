<script>
import { store } from "../store";

export default {
    name: "AppSearch",

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="input-search">
        <input type="text" placeholder="Cerca un film o una serie" v-model="store.searchText"
            @keyup.enter="$emit('showContentEnter')">
        <span class="btn-search" @click="$emit('showContent')">Cerca</span>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";

.input-search {
    width: 250px;
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
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
    }
}
</style>