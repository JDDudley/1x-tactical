var StoreData = angular.module('1x');
StoreData.service('CartService', function($http) {

    let sd = this;
    sd.getAll = (cb) => {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/api/store'
        }).then(cb).catch(cb)
    }
    sd.saveCart = function () {
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log('item saved to cart')

    }

    sd.getCart = function () {
        var cartData = localStorage.getItem('cart');
        if (cartData) {
            console.log(JSON.parse(cartData))
            return JSON.parse(cartData)
            
        }
            return [];
    }
})