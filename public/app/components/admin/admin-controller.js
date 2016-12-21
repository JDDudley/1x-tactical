(function () {

    angular.module('1x')
        .component('admin', {
            templateUrl: 'app/components/admin/admin.html',
            controller: AdminController
        })

    AdminController.$inject = ['AdminService', 'CartService']

    function AdminController(AdminService, CartService) {
        var ac = this;
        var as = AdminService;
        ac.imgId = 0;

        ac.allProducts = [];
        ac.$onInit = function () {
            // debugger 
            CartService.getAll(function (products) {
                ac.allProducts = products; 
                console.log(ac.allProducts);
            })
        }


        ac.addItem = (product) => {
            debugger
            console.log(product)
            as.addProduct(product);
        }

        ac.addEvent = (event) => {
            debugger
            as.addEvent(event)
        }

        ac.addDiscount = (discount) => {
            debugger
            as.addDiscount(discount)
        }

    }
})(); 