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

        let update = () => {
            $scope.$evalAsync()
        }

    }


})(); 