(() => {
    angular.module('1x')
        .config(
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home')
            $stateProvider
                .state({
                    name: 'home',
                    url: '/home',
                    template: '<home></home>'
                })
                .state({
                    name: 'mindset',
                    url: '/mindset',
                    template: '<mindset></mindset>'
                })
                .state({
                    name: 'benefits',
                    url: '/benefits',
                    template: '<benefits></benefits>'
                })
                .state({
                    name: 'membership',
                    url: '/membership',
                    template: '<membership></membership>'
                })
                .state({
                    name: 'join',
                    url: '/join',
                    template: '<join></join>'
                })
                .state({
                    name: 'armory',
                    url: '/armory',
                    template: '<armory></armory>'
                })
                .state({
                    name: 'cart',
                    url: '/cart',
                    template: '<cart></cart>'
                })
                .state({
                    name: 'admin',
                    url: '/admin',
                    template: '<admin></admin>'
                }).state({
                    name: 'events',
                    url: '/events',
                    template: '<events></events>'
                })
                .state('auth', {
					abstract: true,
					template: '<ui-view></ui-view>',
					resolve: {
						isAuthed: function(AuthService, $state){
						//^^^ The authService and $state attributes are injected just like they would be for a controller  
							if(!AuthService.getAuth()){
								return $state.go('home')
							}
						}
					}
				})
        })
})(); 