(() => {

    var StoreData = angular.module('1x');
    StoreData.service('AdminService', function ($http) {

        let storeUrl = '/api/store'
        let eventUrl = '/api/events'
        let discountUrl= '/api/discount';
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

            !product.category ? alert("Your Product Doesn't Have a Category. It cannot be posted to the store without a category")
                :
                $http.post(storeUrl, productObj)
                    .success(function (data) {
                        console.log(data)
                        data.error? 
                        alert("Could not add " + productObj.product.name  + " to the Store. Make sure you are filling out all required fields. ")
                                    : 
                        alert(" You Successfully Posted the Product " + productObj.product.name + "  to the store.")
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
                    console.log(data)
                    data.error ?
                        alert("could not add " + eventObj.event.name + " to the Event Page. Make sure all required fields are filled out.")
                        : alert("successfully posted the event " + eventObj.event.name + " to the event page")
                })
        }



         as.addDiscount = (discount) => {
    var percent = discount.percentageOff*0.01;
    var code = discount.id.toUpperCase(); 
            let discountObj = {
                // "discount": {
                    "id": code,
                    "percentageOff": percent,
                    "product": discount.product,
                    "activeCode": true
                // }
            }
            console.log(discountObj)
                $http.post(discountUrl, discountObj)
                .success(function (data) {
                    data.error ?
                        alert("could not add " + discountObj.id + " to the Discount Database. Make sure all required fields are filled out.")
                        : alert("successfully posted the event " + discountObj.id + " to the event page")
                })
        }
    })
})();