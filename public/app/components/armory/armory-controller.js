(function () {

  angular.module('1x')
        .component('armory', {
            templateUrl: 'app/components/armory/armory.html',
            controller: ArmoryController
                    })
    
  ArmoryController.$inject = ['ArmoryService', 'CheckoutService']
    function ArmoryController(AS, CS) {
        var ac = this;
        ac.products = [];

        AS.getAll((products) => {
            console.log(products)
            ac.products = products.data
        });

        ac.addToCart = (product) => {
            console.log('add to cart working')
            debugger 
            CS.addToCart(product)
        }

    ac.removeFromCart=(id)=>{
        CS.removeFromCart(id)
        console.log(product.name + " has been removed from your shopping cart.")
    }

    }

})();  