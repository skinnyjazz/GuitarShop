export default class Cart_model {

    shopingCartData = []

    addProductToCart = (product) => {
        let isItInCart = 0
        console.log(isItInCart)
        if (!this.shopingCartData.length) {
            this.shopingCartData.push(product);

        } else {
            isItInCart = this.shopingCartData.reduce((acc, item) => {
                if (acc == 1) {
                    return acc
                }
                console.log(item['id'] == product['id'])
                return acc = item['id'] == product['id'] ? isItInCart = 1 : isItInCart = 0;
            }, 0)

            if (!isItInCart) {
                this.shopingCartData.push(product);
            }
        }
    }

    removeProductFromCard = (id) => {
        this.shopingCartData = this.shopingCartData.filter(item => item.id != id);
    }



}