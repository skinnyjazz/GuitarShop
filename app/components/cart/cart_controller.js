import Publisher from "../../publisher.js";
import Cart_model from "./cart.model.js";
import Cart_view from "./cart_view.js";

export default class Cart_controller {

    constructor() {
        this.model = new Cart_model();
        this.view = new Cart_view(this.handleRemoveProductFromCart);
        this.publicher = new Publisher();
        this.publicher.subscribe('ON_CLICK_BY_BTN', this.handleAddToCart);


        this.init();

    }


    init() {
        this.view.renderWrapper()

        this.view.renderCartComponent();

        this.view.addListeners()
        this.view.listenerOrderBtn(this.handleRenderOrderForm)

    }



    handleAddToCart = (data) => {
        this.model.addProductToCart(data)
        this.view.renderShopingCardList(this.model.shopingCartData)


    }
    handleRemoveProductFromCart = (event) => {
        const id = event.target.dataset.id;
        this.model.removeProductFromCard(id)
        console.log(this.model.shopingCartData)
        this.view.renderShopingCardList(this.model.shopingCartData);
    }

    handleRenderOrderForm = (wrapper) => {
        this.publicher.notify('ON_CLICK_ORDER_BTN', wrapper)
    }



}