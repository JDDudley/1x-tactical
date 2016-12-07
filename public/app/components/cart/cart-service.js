var StoreData = angular.module('1x');
StoreData.service('CartService', function($http) {

    let sd = this;
    sd.getAll = (cb) => {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/api/store'
        }).then(cb).catch(cb)
    }
})