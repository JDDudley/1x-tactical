; (function () {
    angular.module('1x')

        .component('cart', {
            templateUrl: 'app/components/cart/cart.html',
            controller: CartController
        })

    function CartController() {

        this.cartStatus = 'Working'

        this.cart = []

        // this.store = {
        //     products: Service
        //     Need to know the Data Store, check the cart branch
        // }

        this.name = 'My Cart'

        this.getCartCount = function () {
            return this.cart.length
        }

        this.calculateMsrp = function () {            
            var sum = 0;
            for (var i = 0; i < this.cart.length; i++) {
                var total = this.cart[i].msrp * this.cart[i].quantity;
                sum += total;
            }
            return sum
        }

        this.calculateMembers = function () {            
            var sum = 0;
            for (var i = 0; i < this.cart.length; i++) {
                var total = this.cart[i].memberPrice * this.cart[i].quantity;
                sum += total;
            }
            return sum
        }

        this.calculateNonMembers = function () {            
            var sum = 0;
            for (var i = 0; i < this.cart.length; i++) {
                var total = this.cart[i].nonMemberPrice * this.cart[i].quantity;
                sum += total;
            }
            return sum
        }

        this.removeProductFromCart = function (product) {
            for (var i = 0; i < this.cart.length; i++) {
                var productToDrop = this.cart[i];
                if (productToDrop == product) {
                    this.cart.splice(i, 1)
                }
            }
            return this.cart
        }

        this.addProductToCart = function (product) {
            var newProduct = {
                quantity: 1,
                name: product.name,
                description: product.description,
                specs: product.specs,
                reviews: product.reviews,
                msrp: product.msrp,
                memberPrice: product.memberPrice,
                nonMemberPrice: product.nonMemberPrice
            }
            this.cart.push(newProduct)
        }
    }

} ());