(function () {

    angular.module('1x')
        .component('events', {
            templateUrl: 'app/components/events/events.html',
            controller: EventsController
        })

    EventsController.$inject = ['EventsService', 'CheckoutService']
    function EventsController(ES, CS) {
        var ec = this;
        ec.events = [];

        ES.getEvents((events) => {
            ec.events = events.data
        });

        ec.addToCart = (event) => {
            CS.addToCart(event)
        }

    ec.removeFromCart=(id)=>{
        CS.removeFromCart(id)
    }

    }

})(); 