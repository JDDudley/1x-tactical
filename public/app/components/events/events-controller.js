(function () {

    angular.module('1x')
        .component('events', {
            templateUrl: 'app/components/events/events.html',
            controller: EventsController
        })

EventsController.$inject=['EventsService']
    function EventsController(ES) {
        var ec = this;
        ec.events=[];

        ES.getEvents((events)=>{
            console.log(events)
            ec.events=events.data
        });
        
    }

})(); 