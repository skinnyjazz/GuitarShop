import Publisher from "../../publisher.js";
import CardPopup_view from "./cardPopup_view.js";

export default class CardPopup_controller {
    constructor() {
        this.view = new CardPopup_view();

        this.init()

        this.publicher = new Publisher();

        this.publicher.subscribe('ON_CLICK_CARD_POP', this.getElementsData)


    }

    init() {
        this.view.renderComponentsWrapper();
        this.view.removePopup()

    }

    getElementsData = (data) => {
        this.view.renderComponent(data)
    }
}