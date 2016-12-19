angular.module('1x')
  .component('navbar', {
    templateUrl: '/app/components/navbar/navbar.html',
    controller: navCtrl,
    controllerAs: 'nc'
  });

function navCtrl() {
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
    // authStore.on('USER', updateUser)
  }

  this.login = (providerString, credentials) => {
    // authStore.login(providerString, credentials)
  }

  this.logout = () => {
    // authStore.logout()
  }

  this.register = (credentials) => {
    // authStore.register(credentials)
  }

  let update = () => {
    // $scope.$evalAsync()
  }
}
