(function () {

    angular.module('1x')
        .component('membership', {
            templateUrl: 'app/components/membership/membership.html',
            controller: MembershipController
        })

    MembershipController.$inject = ['AuthService', '$scope']

    function MembershipController(AuthService, $scope) {
        var $ctrl = this;

        // GET LOGGED IN USER INFO
        let updateUser = (user) => {
            $ctrl.user = user
            update()
        }

        $ctrl.$onInit = () => {
            AuthService.on('USER', updateUser)
        }

        $ctrl.addToCart = function() {
            // var localCart = JSON.parse(localStorage.getItem('localCart')) || [];
            var localCart = [];
            localCart.push({
                name: '1 Year 1XTactical Membership',
                quantity: 1,
                msrp: 99.00,
                memberPrice: 0,
                nonMemberPrice: 99.00
            })
            localStorage.setItem('localCart', JSON.stringify(localCart));
            console.log('Added membership to cart.');
        }

        let update = () => {
            $scope.$evalAsync()
        }

    }


})(); 