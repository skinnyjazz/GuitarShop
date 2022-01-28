import Publisher from "../../publisher.js";
import Order_model from "./order_model.js";
import Order_view from "./order_view.js";

export default class Order_controller {
    constructor() {
        this.view = new Order_view();
        this.model = new Order_model();
        this.publisher = new Publisher();

        this.publisher.subscribe('ON_CLICK_ORDER_BTN', this.handleRenderOrderForm)



    }

    init() {}



    handleRenderOrderForm = (wrapper) => {
        this.view.renderForm(wrapper)
        if (!this.model.isOrderFormRendered) {
            this.model.isOrderFormRendered = true
        }
        this.view.addListenersToBtn(this.model.getFormData)
    }


}