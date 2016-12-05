var StoreData = angular.module('1x');
StoreData.service('AdminService', function ($http) {

    let storeUrl = 'http://localhost:8080/api/store'
    let eventUrl = 'http://localhost:8080/api/events'
    let as = this;

    as.addProduct = (product) => {
        let productObj = {
            "product": {
                // "category": product.category,
                "name": product.name,
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

        // for (img in product.image['*']){
        //   productObj.product.[images].push(img)
        // }
        $http.post(storeUrl, productObj)
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
    }



})