var StoreData = angular.module('1x');
StoreData.service('ArmoryService', function($http) {

    let as = this;
    as.getAll = (cb) => {
        $http({
            method: 'GET',
            url: '/api/store'
        }).then(cb).catch(cb)
    }
})