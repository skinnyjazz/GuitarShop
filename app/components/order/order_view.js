export default class Order_view {
    addListenersToBtn = (callBack) => {
        const formInputs = [...document.querySelectorAll('form-control')]
        const btn = document.querySelector('.sendBtn');

        btn.addEventListener('click', (event) => {
            event.preventDefault()
            callBack()
        })
    }

    renderForm = (wrapper) => {
        const lastElement = wrapper.childNodes[wrapper.childNodes.length - 1];
        if (lastElement.classList) {
            return
        }


        const form = `<form action="" class="orderForm">
        <h3>Enter Data</h3>
        <div class="form-group col-md-3">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" placeholder="Email">
        </div>
        <div class="form-group col-md-3">
            <label for="">name</label>
            <input type="text" class="form-control" placeholder="name">
        </div>
        <div class="form-group col-md-3">
            <label for="">address</label>
            <input type="text" class="form-control" placeholder="name">
        </div>
        <button class="sendBtn"></button>
    </form>`;
        wrapper.insertAdjacentHTML('beforeend', form)
    }
}