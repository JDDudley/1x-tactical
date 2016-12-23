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

  this.login = (credentials) => {
    AuthService.login(credentials,function(res) {
      if (res == 'wrongpass') {
        nc.error = 'wrongpass';
      }
    })
  }

  this.logout = () => {
    AuthService.logout()
  }

  this.register = (credentials) => {
    AuthService.register(credentials)
  }

  // GET LOGGED IN USER INFO
  let updateUser = (user) => {
    $ctrl.member = user
    $ctrl.activeView = null
    update()
    console.log($ctrl.member);
  }

  $ctrl.$onInit = () => {
    AuthService.on('USER', updateUser)
  }

  let update = () => {
    $scope.$evalAsync()
  }
}