export default class CardPopup_view {


    constructor() {}


    removePopup() {
        const wrapper = document.querySelector('.popupWrapperProduct')
        wrapper.addEventListener('click', event => {
            if (event.target.dataset.wrapper) {
                wrapper.style.display = 'none';
            }
        })
    }


    renderComponentsWrapper() {
        const wrapper = `<div class="popupWrapperProduct" data-wrapper="true"></div>`
        document.body.insertAdjacentHTML('afterbegin', wrapper)


    }


    renderComponent = ({ name, img, description, manufacturer, construction, color, origin, guarantee }) => {
        const wrapper = document.querySelector('.popupWrapperProduct')
        wrapper.innerHTML = '';
        const popup = `
        <div class="card_popup row">
            <div class="card_popup_product col-4">
                <div class="card_popup_title">${name}</div>
                <img src="${img}" alt="">
                <ul class="list-group">
                    <li class="list-group-item">${construction}</li>
                    <li class="list-group-item">${manufacturer}</li>
                    <li class="list-group-item">${color}</li>
                    <li class="list-group-item">${origin}</li>
                    <li class="list-group-item">${guarantee}</li>
                </ul>
            </div>
            <div class="card_popup_discription col-8">
                <p class="discription">${description}</p>
                <button class="btn btn-success btnBy">BtnBy</button>
            </div>
        </div>
    `

        wrapper.insertAdjacentHTML('afterbegin', popup);
        wrapper.style.display = 'flex';
    }
}