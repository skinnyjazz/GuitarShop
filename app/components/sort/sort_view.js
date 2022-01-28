export default class Sort_view {
    sortDiv = document.body.querySelector('.sort')

    constructor(sort) {
        // прокинуть листенеры другим образом
        this.sort = sort;
    }

    init() {
        this.renderButtons();
        this.addListeners(this.sort)
    }


    // переделать через паблишер
    addListeners(callBack) {
        [...document.querySelectorAll('.sortBtn')]
        .forEach(btn => btn.addEventListener('click', callBack))
    }


    renderButtons() {
        const buttons = `<div class="sort">
        <button type="button" class="btn btn-primary sortBtn" data-button="price">По цене</button>
    </div>`
        this.sortDiv.insertAdjacentHTML('afterbegin', buttons)
    }
}