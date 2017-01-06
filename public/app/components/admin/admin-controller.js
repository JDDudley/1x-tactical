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
            CartService.getAll(function (products) {
                ac.allProducts = products;
                console.log(ac.allProducts);
            })
        }


        ac.addItem = (product) => {
            console.log(product)
            as.addProduct(product);
        }

        ac.addEvent = (event) => {
            as.addEvent(event)
        }

        ac.addDiscount = (discount) => {
            as.addDiscount(discount)
        }

        ac.putProduct = function (product) {
            //call a function in service to do PUT request
            debugger
            console.log(product)
        }


        var template;
        ac.editProduct = id => {
            debugger
            ac.allProducts.data.forEach((product) => {
                if (product.id == id) {
                    console.log(product)
                    template =
                        ` <form ng-submit="ac.putProduct(ac.editedProduct)" >
                <label>Product Name:</label>
                <input class="form-control" type="text" ng-model="ac.editedProduct.name" value="${product.name}" required>
                <label>Description</label>
                <textarea class="form-control" ng-model="ac.editedProduct.description" type="text" placeholder="${product.description}" required></textarea>
                <label>MSRP</label >
            <input  class="form-control" ng-model="ac.editedProduct.msrp" type="text" value="${product.msrp}" required>
            <label>Non-Member Price</label>
                <input class="form-control" ng-model="ac.editedProduct.memberPrice" type="text" value="${product.nonMemberPrice}" required>
                <label>Member Price</label>
                <input class="form-control" ng-model="ac.editedProduct.nonMemberPrice" type="text" value="${product.memberPrice}" required>
                <label>Images</label>                        
                <input class="form-control image-class" ng-model="ac.editedProduct.images[0]" type="text" placeholder="${product.images[0]}">
               <input class="form-control image-class" ng-model="ac.editedProduct.images[1]" type="text" placeholder="${product.images[1] || 'No Image Added Yet'} ">
                <input class="form-control image-class" ng-model="ac.editedProduct.images[2]" type="text" placeholder="${product.images[2] || 'No Image Added Yet'}">
                <input class="form-control image-class" ng-model="ac.editedProduct.images[3]" type="text" placeholder="${product.images[3] || 'No Image Added Yet'}">
                <input class="form-control image-class" ng-model="ac.editedProduct.images[4]" type="text" placeholder="${product.images[4] || 'No Image Added Yet'}">
                
                <button type="reset" class="btn-primary"> Resest Form</button>
                <button type="button" class="btn-primary" id="submitPutForm" ng-submit="{{ac.putProduct(ac.editedProduct)}}">Submit</button>
                </form>`
                }

            })

            $('#renderProduct').replaceWith(template)
            // $('#submitPutForm').on('submit', ac.putProduct(ac.editedProduct))
        }

        ac.deleteProduct = id => { 
            ac.allProducts.data.forEach((product) => {
                if (id == product.id) {
                    console.log({working: id})
        }
            })
            as.deleteProduct(id)
            console.log("deleted")
        }





    }
})(); 