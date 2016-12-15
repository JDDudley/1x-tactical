(function () {

    angular.module('1x')
        .component('events', {
            templateUrl: 'app/components/events/events.html',
            controller: EventsController
        })

EventsController.$inject=['EventsService', 'CartService',]
    function EventsController(ES, CS) {
        var ec = this;
        ec.events=[];

        ec.$onInit=function(){
        ES.getEvents((events)=>{
            console.log(events)
            ec.events=events.data
        })
        }

        ec.addToCart=(event)=>{
            debugger 
            CS.addEventToCart(event)
            alert('Event Added To Cart.')
        }
        
    }

})(); 