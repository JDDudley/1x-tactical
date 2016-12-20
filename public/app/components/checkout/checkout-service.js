var CartData = angular.module('1x');
CartData.service('CheckoutService', function ($http) {

    // We will be saving all cart data to local storage. 

    var cs = this;
    var cart = [];

    cs.addToCart = (item) => {
        cart.push(item)
        cs.saveCart();
        cs.getCart();

    }

    cs.removeFromCart = (id) => {
        cart = cs.getCart();
        cart = cart.filter((i) => {
            return (id != i.id)
        })
        cs.saveCart();
        cs.getCart();
    
    }


    cs.saveCart = function () {
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log('item saved to cart')

    }

    cs.getCart = function () {
        var cartData = localStorage.getItem('cart');
        if (cartData) {
            console.log(JSON.parse(cartData))
            return JSON.parse(cartData)
            
        }
            return [];
    }

    cs.checkout = function () {
        //logic
    }

})