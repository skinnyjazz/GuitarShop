import Publisher from "../../publisher.js";
import Search_Vuew from "./search_vuew.js";

export default class Search_controller {
    constructor() {
        this.view = new Search_Vuew();
        this.publisher = new Publisher();
        this.init();
    }

    init() {
        this.view.renderSearchInput();
        this.view.addListenerToSearch(this.handleSearch.bind(this))
    }

    handleSearch = (event) => {
        const searchString = event.target.value;
        this.publisher.notify('ON_INPUT_SEARCH', searchString)
    }
}