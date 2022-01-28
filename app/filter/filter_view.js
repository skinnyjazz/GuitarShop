export default class Filter_viwe {
    filterDiv = document.querySelector('.filter');



    constructor(filter) {
        this.filter = filter;
    }
    init() {
        this.filterComponentRender();
        this.addListenersTocheckbox(this.filter);
    }

    addListenersTocheckbox(callBack) {
        const checkboxes = [...document.querySelectorAll('.filterCheck')];
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('click', callBack)
        })
    }

    removeChecks(eventTarget) {
        this.filteredStatus = 0;

        [...document.querySelectorAll('.filterCheck')].forEach(checkbox => {
            if (checkbox != eventTarget) {
                checkbox.checked = false
            }
            if (checkbox.checked == true) {
                return this.filteredStatus = 1
            }
        })
    }

    filterComponentRender() {
        console.dir(this.filterDiv)
        const filter = `
        <ul class="list-group" >
            <li class="list-group-item active">Type</li>
            <li class="list-group-item">Electric Guitar<input class="filterCheck" type="checkbox" data-category="type" data-type="ElectricGuitar"></li>
            <li class="list-group-item">Electric Bass guitar<input class="filterCheck"type="checkbox"data-category="type" data-type="ElectricBassguitar"></li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item active">manufacturer></li>
            <li class="list-group-item">CORT<input type="checkbox" class="filterCheck"data-category="manufacturer" data-type="CORT"></li>
            <li class="list-group-item">LTD<input type="checkbox"class="filterCheck" data-category="manufacturer"data-type="LTD"></li>
            <li class="list-group-item">YAMAHA<input type="checkbox" class="filterCheck"data-category="manufacturer"data-type="YAMAHA"></li>
            <li class="list-group-item">PRS<input type="checkbox" class="filterCheck"data-category="manufacturer"data-type="PRS"></li>
            <li class="list-group-item">DANELECTRO<input type="checkbox" class="filterCheck"data-category="manufacturer"data-type="DANELECTRO"></li>
            <li class="list-group-item">FRIEDMAN<input type="checkbox" class="filterCheck"data-category="manufacturer"data-type="FRIEDMAN"></li>
            <li class="list-group-item">PARKSONS<input type="checkbox" class="filterCheck"data-category="manufacturer"data-type="PARKSONS"></li>
            <li class="list-group-item">SADOWSKY<input type="checkbox" class="filterCheck"data-category="manufacturer"data-type="SADOWSKY"></li>
        </ul>
`
        this.filterDiv.insertAdjacentHTML('afterbegin', filter)
    }
}