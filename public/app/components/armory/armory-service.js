var StoreData = angular.module('1x');
StoreData.service('ArmoryService', function ($http) {

    let url = '/api/store'
    let as = this;

    as.getAll=(cb)=>{
        $http.get(url)
           .then(function(res){
              cb(res)
           },function(err){
             console.log(err)
             })
    }
})