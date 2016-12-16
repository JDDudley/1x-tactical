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
            console.log(events)
            ec.events = events.data
        });

        ec.addToCart = (event) => {
            debugger
            console.log(event)
            CS.addToCart(event)
            console.log('adding event to cart..')
        }

    ec.removeFromCart=(id)=>{
        debugger 
        CS.removeFromCart(id)
        console.log(event.name + " has been removed from your shopping cart.")
    }

    }

})(); 