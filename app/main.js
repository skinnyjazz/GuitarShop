import Card_controller from "./components/card/card_controller.js";
import CardPopup_controller from "./components/cardPopup/cardPopup_controller.js";
import Cart_controller from "./components/cart/cart_controller.js";
import Order_controller from "./components/order/order_controller.js";
import Search_controller from "./components/search/search_controller.js";
import Sort_controller from "./components/sort/sort_controller.js";
import Filter_Controller from "./filter/filter_controller.js";

const cardController = new Card_controller();
const sortController = new Sort_controller();
const filterController = new Filter_Controller();

const cardPopupController = new CardPopup_controller();

const cartPopupComtroller = new Cart_controller()
const orderController = new Order_controller();

const searchController = new Search_controller()