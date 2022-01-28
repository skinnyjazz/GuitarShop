import Publisher from "../../publisher.js";
import Sort_view from "./sort_view.js";

export default class Sort_controller {
    constructor() {
        this.view = new Sort_view(this.handleSort);


        this.view.init();

        this.publisher = new Publisher();
    }

    handleSort = (event) => {
        const sortType = event.target.dataset.button;
        this.publisher.notify('ON_CLICK_SORT', sortType)
    }
}