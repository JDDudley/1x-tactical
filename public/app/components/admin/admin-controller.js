(function () {

    angular.module('1x')
        .component('admin', {
            templateUrl: 'app/components/admin/admin.html',
            controller: AdminController
        })

        AdminController.$inject=['AdminService']

    function AdminController(AdminService) {
        var ac = this;
        var as = AdminService;
        ac.imgId = 0;
  

        ac.addItem = (product) => {

            console.log(product)
            as.addProduct(product);
        }

        ac.addEvent = (event) => {

            as.addEvent(event)
        }

        ac.addDiscount=(discount)=>{
            debugger 
            as.addDiscount(discount)
        }

    }
})(); 