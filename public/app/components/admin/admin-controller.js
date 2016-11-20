(function () {

    angular.module('1x')
        .component('admin', {
            templateUrl: 'app/components/admin/admin.html',
            controller: AdminController
        })

    function AdminController(AdminService) {
        var ac = this;
        var as = AdminService;

        ac.moreImage = () => {
            var newImg = angular.element(document.querySelector('#images'));
            newImg.append(`<input id="img" ng-model="$ctrl.newItem.image" type="text" placeholder="Image Url">`);
        }

        ac.addItem = (product) => { as.addProduct(product) }
    }



})(); 