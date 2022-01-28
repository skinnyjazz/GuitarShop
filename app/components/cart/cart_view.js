export default class Cart_view {

    constructor(handleRemoveProductFromCart) {
        this.handleRemoveProductFromCart = handleRemoveProductFromCart;
    }

    addListeners() {
        this.removeCart();
        this.openCart();
    }
    openCart() {
        const shopingCartBtn = document.querySelector('.shopingCart');
        const wrapper = document.querySelector('.popupWrapperShopCart');
        shopingCartBtn.addEventListener('click', () => {
            wrapper.style.display = 'flex';

        })

    }
    removeCart() {
        const wrapper = document.querySelector('.popupWrapperShopCart');
        wrapper.addEventListener('click', event => {
            if (event.target.dataset.wrapper) {
                wrapper.style.display = 'none';
            }
        })
    }





    ProductComponent({ id, img, name, price }) {
        const tbody = document.querySelector('.cart-body');
        const product = `
        <tr class="shopingCard_item">
        <th scope="col"><img class="shopingcart_img" src="${img}" alt=""></th>
        <th scope="col" >${name}</th>
        <th scope="col"></th>
        <th scope="col" data-cost="${price}">&#8372 ${price}</th>
        <th scope="col"></th>
        <th scope="col"><button class="btn btn-danger removeBtn" data-id="${id}">Remove</button></th>
    </tr>
        `
        tbody.insertAdjacentHTML('beforeend', product)
    }

    renderShopingCardList = (productList) => {
        const tbody = document.querySelector('.cart-body');
        tbody.innerHTML = '';
        productList.forEach(item => this.ProductComponent(item));
        this.listenerRemoveProductFromCart(this.handleRemoveProductFromCart)

    }


    renderWrapper() {
        const wrapper = `<div class="popupWrapperShopCart" data-wrapper="true"></div>`
        document.body.insertAdjacentHTML('afterbegin', wrapper)
    }


    listenerRemoveProductFromCart = (callBack) => {
        [...document.querySelectorAll('.removeBtn')].forEach(btn => btn.addEventListener('click', callBack))
    }

    listenerOrderBtn = (callback) => {
        const wrapper = document.querySelector('.shopCart_Popup')
        document.querySelector('.btnBy').addEventListener('click', (event) => {
            callback(wrapper)
        })
    }





    renderCartComponent() {
        const wrapper = document.querySelector('.popupWrapperShopCart')
        const cartModul = `
        <div class="shopCart_Popup">
            <h3 class="title">Ваш Заказ</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Picture</th>
                        <th scope="col">Product</th>
                        <th scope="col">Count</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody class='cart-body'>
                 
                </tbody>

            </table>
            <div class="totalPrice">
                <p class="price">Всего с вас: 6</p>
            </div>
            <button class="btn btn-success btnBy">BtnBy</button>
        </div>
    `;


        wrapper.insertAdjacentHTML('afterbegin', cartModul);


        // wrapper.style.display = 'flex';
    }
}