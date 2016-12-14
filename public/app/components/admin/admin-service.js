(() => {

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

            !product.category ?  alert("Your Product Doesn't Have a Category. It cannot be posted to the store without a category") : 
           
            $http.post(storeUrl, productObj)
  .success(function (data) {
                     alert(" You Successfully Posted the Product " + product.name + "  to the store.")
                }).error(function (data) {
                     alert("error in posting")
                }) 
        }

        as.addEvent = (event) => {
            let eventObj = {
                "event": {
                    "name": event.name,
                    "category": "Event",
                    "date": event.date,
                    "time": event.time,
                    "minSeat": event.minSeat,
                    "maxSeat": event.maxSeat,
                    "price": event.price,
                    "description": event.description,
                    "images": event.image || {},
                    "deleted": false
                }
            }

            console.log(eventObj)
            console.log(eventObj.event.category)
            $http.post(eventUrl, eventObj)
                .success(function (data) {
                    alert("successfully posted the event " + eventObj.event.name + " to the event page")
                }).error(function (data) {
                    alert(eventObj.event.name + " was NOT added to the event page. Make sure you filled out all required fields.")
                })
        }

    })

})();
