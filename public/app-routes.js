(()=>{

angular.module('1x')
    .config(
        function($stateProvider, $urlRouterProvider) {
        
                $urlRouterProvider.otherwise('/home')
        
        $stateProvider
            .state({
                name: 'home',
                url: '/home',
                template: '<home></home>', 
            })
            .state({
                name: 'mindset',
                url: '/mindset',
                template: '<mindset></mindset>', 
            })
            .state({
                name: 'benefits',
                url: '/benefits',
                template: '<benefits></benefits>', 
            })
            .state({
                name: 'membership',
                url: '/membership',
                template: '<membership></membership>', 
            })
            .state({
                name: 'armory',
                url: '/armory',
                template: '<armory></armory>', 
            })
            .state({
                name: 'cart',
                url: '/cart',
                template: '<cart></cart>', 
            })

        })
        

             


})(); 