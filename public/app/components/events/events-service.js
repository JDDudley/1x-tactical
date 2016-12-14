var StoreData = angular.module('1x');
StoreData.service('EventsService', function ($http) {

    let url = '/api/events'
    let es = this;

    es.getEvents=(cb)=>{
        $http.get(url)
           .then(function(res){
              cb(res)
           },function(err){
             console.log(err)
             })
    }

})



