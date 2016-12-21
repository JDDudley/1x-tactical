angular.module('1x')
  .component('navbar', {
    templateUrl: '/app/components/navbar/navbar.html',
    controller: navCtrl,
    controllerAs: 'nc'
  });

navCtrl.$inject = ['AuthService', '$scope']

function navCtrl(AuthService, $scope) {
  let $ctrl = this
  
  $ctrl.activeView = null;
  
  $ctrl.logIn = function() {
    $ctrl.activeView = 'login';
  }

  let updateUser = (user) => {
    $ctrl.member = user
    $ctrl.activeView = null
    update()
  }

  $ctrl.$onInit = () => {
    AuthService.on('USER', updateUser)
  }

  this.login = (credentials) => {
    AuthService.login(credentials)
  }

  this.logout = () => {
    AuthService.logout()
  }

  this.register = (credentials) => {
    AuthService.register(credentials)
  }

  let update = () => {
    $scope.$evalAsync()
  }
}
