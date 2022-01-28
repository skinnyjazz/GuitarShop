import Publisher from "../publisher.js";
import Filter_viwe from "./filter_view.js";

export default class Filter_Controller {
    constructor() {
        this.view = new Filter_viwe(this.handleFilter);

        this.view.init();
        this.publisher = new Publisher()
    }

    handleFilter = (event) => {
        const filterType = event.target.dataset.type;
        const filterCategory = event.target.dataset.category;
        console.dir(event.target)

        this.view.removeChecks(event.target)
        console.log(this.view.filteredStatus)
        this.publisher.notify('ON_CLICK_FILTER', {
            filterCategory: filterCategory,
            filterType: filterType,
            filteredStatus: this.view.filteredStatus
        })
    }
}