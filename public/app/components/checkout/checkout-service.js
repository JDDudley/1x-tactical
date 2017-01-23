var CartData = angular.module('1x');
CartData.service('CheckoutService', function ($http) {

    // We will be saving all cart data to local storage. 

    var cs = this;
    cs.cart = [];

    cs.addToCart = (item) => {
        cs.cart.push(item)
        cs.saveCart();
        cs.cart = cs.getCart();
        console.log(cs.cart )

    }

    cs.removeFromCart = (id) => {
        cs.cart.forEach(item=>{ 
        if(id == item.id){
            cs.cart.splice(item,1)
        }
        })
        // cs.cart[id] = null;
        cs.saveCart();
        cs.getCart();
    }


    cs.saveCart = function () {
        localStorage.setItem('cart', JSON.stringify(cs.cart))
        console.log('item saved to cart')
    }

    cs.getCart = function () {
        var cartData = localStorage.getItem('cart');
        if (cartData) {
            console.log(JSON.parse(cartData))
            cs.cart = JSON.parse(cartData)
            console.log(cs.cart)
           return cs.cart
    }
    }

    cs.checkout = function () {
        //logic
    }

})
