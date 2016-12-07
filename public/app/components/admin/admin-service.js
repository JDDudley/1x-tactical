var StoreData = angular.module('1x');
StoreData.service('AdminService', function ($http) {

    let storeUrl = '/api/store'
    let eventUrl = '/api/events'
    let as = this;

    as.addProduct = (product) => {
        let productObj = {
            "product": {
                "name": product.name,
                "category": product.category,
                "description": product.description,
                "specs": product.specs || '',
                "images": product.image || {},
                "msrp": product.msrp,
                "memberPrice": product.memberPrice,
                "nonMemberPrice": product.nonMemberPrice,
                "inStock": true,
                "inStore": true
            }
        }
            console.log(productObj.product.category)

        $http.post(storeUrl, productObj)
            .success(function(data){
                console.log("successfully posted")
            }).error(function(data){
                console.log("error in posting")
            })

 }


    as.addEvent = (event) => {
        let eventObj = {
            "event": {
                "name": event.name,
                "date": event.date,
                "time": event.time, 
                "minSeat": event.minSeat,
                "maxSeat": event.maxSeat,
                "price": event.price,
                "description": event.description,
                "photos": event.image || [],
                "deleted": false
            }
        }
        $http.post(eventUrl, eventObj)
        .success(function(data){
                console.log("successfully posted")
            }).error(function(data){
                console.log("error in posting")
            })
    }



})