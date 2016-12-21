var StoreData = angular.module('1x');
StoreData.service('CartService', function($http) {

    let sd = this;
    sd.getCart = function () {
        var cartData = localStorage.getItem('cart');
        if (cartData) {
            console.log(JSON.parse(cartData))
            return JSON.parse(cartData)
            
        }
            return [];
    }
    sd.saveCart = function () {
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log('item saved to cart')
    }
})