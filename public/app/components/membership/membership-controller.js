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
            var cartData = JSON.parse(localStorage.getItem('cart'));
            // var localCart = [];
            cartData.push({
                name: '1 Year 1XTactical Membership',
                quantity: 1,
                // msrp: 99.00
                memberPrice: 99.00,
                nonMemberPrice: 99.00
            })
            localStorage.setItem('cart', JSON.stringify(cartData));
            console.log('Added membership to cart.');
        }

        let update = () => {
            $scope.$evalAsync()
        }

    }


})(); 