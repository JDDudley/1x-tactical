var StoreData = angular.module('1x');
StoreData.service('CartService', function($http) {

    let sd = this;
    sd.getAll = (cb) => {
        $http({
            method: 'GET',
            url: '/api/store'
        }).then(cb).catch(cb)
    }
})