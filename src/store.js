import { reactive } from "vue"
export const store = reactive({
    searchText: "",
    filmsList: [],
    seriesList: [],
    flags: ["it", "en", "de", "es", "ja", "pt", "fr"],
})