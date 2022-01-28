export default class Search_Vuew {
    constructor() {

    }

    addListenerToSearch = (callback) => {
        document.querySelector('.header-search-input').addEventListener('input', callback)
    }

    renderSearchInput() {
        const inputPlase = document.querySelector('.header-search');
        const input = `
        <input class="header-search-input" type="text" placeholder="Найти">
        `;

        inputPlase.insertAdjacentHTML('afterbegin', input)
    }
}