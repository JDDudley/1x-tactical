(function () {

    angular.module('1x')
        .component('admin', {
            templateUrl: 'app/components/admin/admin.html',
            controller: AdminController
        })

    function AdminController(AdminService) {
        var ac = this;
        var as = AdminService;
        ac.imgId = 0;
  
        ac.addItem = (product) => {
            debugger
            console.log(product)
            as.addProduct(product);
        }

        ac.addEvent = (event) => {
            as.addEvent(event)
        }

    }
})(); 