var StoreData = angular.module('1x');
StoreData.service('AdminService', function ($http) {

    var url = 'http://localhost:8080/api/store'
    let as = this;

    as.addProduct = (product) => {
        debugger
        var productObj = {
            "product": {
                "category": product.category,
                "name": product.name,
                "description": product.description,
                "specs": product.specs || '',
                "images": product.images || [],
                "msrp": product.msrp,
                "memberPrice": product.memberPrice,
                "nonMemberPrice": product.nonMemberPrice,
                "inStock": true,
                "inStore": true
            }
        }
        $http.post(url, productObj)
    }
})