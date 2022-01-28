import Publisher from "../../publisher.js";
import Card_model from "./card_model.js";
import Card_view from "./card_view.js";

export default class Card_controller {
    constructor() {
        this.model = new Card_model();
        this.view = new Card_view(this.handleCardPopup, this.handleAddToCart);
        this.init()

        this.publicher = new Publisher()
        this.publicher.subscribe('ON_CLICK_SORT', this.handleSort);
        this.publicher.subscribe('ON_CLICK_FILTER', this.handleFilter);
        this.publicher.subscribe('ON_INPUT_SEARCH', this.handleSearch);
    }
    init() {
        this.model.getData()
            .then(data => this.view.renderCard(data))
    }

    handleSort = (sortType) => {
        const data = this.model.getSortData(sortType);
        this.view.renderCard(data);
    }

    handleFilter = (filterType) => {
        const data = this.model.getFilteredData(filterType);
        this.view.renderCard(data)
    }

    handleCardPopup = (event) => {
        let id = null;
        [...event.path].forEach(item => {
            if (item.classList != undefined && item.classList.contains('product-card')) {
                id = item.dataset['id']
            }
        })
        if (id) {
            this.publicher.notify('ON_CLICK_CARD_POP', ...this.model.getPopupCard(id));
        }
    }

    handleAddToCart = (event) => {
        const id = event.target.dataset.id
        this.publicher.notify('ON_CLICK_BY_BTN', this.model.getProductToShopingCart(id));
    }
    handleSearch = (searchString) => {
        const data = this.model.getSearchData(searchString);
        this.view.renderCard(data)

    }
}