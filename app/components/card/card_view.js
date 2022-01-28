export default class Card_view {
    product = document.body.querySelector('.product')

    constructor(cardPopupCallBack, shopingCartCallBack) {
        this.cardPopupCallBack = cardPopupCallBack;
        this.shopingCartCallBack = shopingCartCallBack;
    }

    renderCard = prod => {
        this.product.innerHTML = '';
        this.product.insertAdjacentHTML('beforeend', prod.map(this.cardComponent).join(''));
        this.addListeners(this.cardPopupCallBack);
        this.addListenersToByBtn(this.shopingCartCallBack);
    }

    addListeners(callBack) {
        [...document.querySelectorAll('.product')].forEach(card => card.addEventListener('click', callBack));

    }

    addListenersToByBtn(callBack) {
        [...document.querySelectorAll('.byProduct')].forEach(btn => btn.addEventListener('click', callBack))
    }



    cardComponent = ({ id, type, name, img, price, origin }) => {
        return `<div class="product-card" style="width: 18rem;" data-id="${id}">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="product-card-body">
             <h6 class="card-title">${name}</h6>
           <p class="card-text">${type}</p>
           <p class="card-text">${origin}</p>
            <p class="card-text price">&#8372 ${price}</p>
            <button class="byProduct" data-id="${id}">Add to Cart</button>
        </div>
      </div>`

    }
}