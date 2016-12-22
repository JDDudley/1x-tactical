angular.module('1x')
    .component('navbar', {
        templateUrl: '/app/components/navbar/navbar.html',
        controller: navCtrl,
        controllerAs: 'nc'
    });

// angular.module('ng-firebase-auth', [])
//     .component('authComponent', {
//         templateUrl: 'app/components/auth/auth.html',
//         controller: AuthController
//     })
//     .factory('User', function(DS) {


//         return DS.defineResource({
//             name: 'user',
//             endpoint: 'users',
//             relations: {
//                 hasMany: {
//                     keep: {
//                         localField: 'keeps',
//                         localKey: 'userId'
//                     }
//                 }
//             }
//         });

//     })
//     .factory('AuthService', function(DSFirebaseAdapter, User) {
//         var db = DSFirebaseAdapter.ref;
//         var _member = {}
//         return {
//             register: register,
//             login: login,
//             logout: function() {
//                 db.unauth();
//                 _member = {};
//             },
//             getMember: authMember,
//             getAuth: function() {
//                 return db.getAuth()
//             }
//         }

//         function authMember() {
//             var authData = db.getAuth();
//             if (!authData) {
//                 return false;
//             }
//             setMember(authData.uid);
//             return _member
//         }

//         function setMember(id) {
//             return User.find(id).then(function(member) {
//                 Object.keys(member).forEach(function(k) {
//                     _member[k] = member[k]
//                 })
//             })
//         }

//         function createUser(authData, user) {
//             var member = {
//                 id: authData.uid,
//                 username: user.username,
//                 email: user.email,
//                 created: Date.now()
//             }
//             User.create(member);
//         }

//         function login(user, cb) {
//             db.authWithPassword(user, function(err, authData) {
//                 if (err) {
//                     return cb(null, err)
//                 }
//                 return cb(authMember());
//             })
//         }
//         function register(user, cb) {
//             db.createUser(user, function(err, authData) {
//                 if (err) {
//                     return cb(null, err)
//                 }
//                 createUser(authData, user);
//                 login(user, cb)
//             });
//         }
//     })

// function AuthController($scope, $state, AuthService) {
//     var ac = this;
//     ac.member = AuthService.getMember();
//     ac.login = function() {
//         clearErr();
//         AuthService.login(ac.auth, handleDBResponse);
//     };

//     ac.register = function() {
//         clearErr();
//         AuthService.register(ac.auth, handleDBResponse);
//     };

//     ac.logout = function() {
//         clearErr();
//         AuthService.logout();
//         ac.member = {};
//         $state.go('home')
//     };
//     function update() {
//         $scope.$evalAsync();
//     }
//     function clearErr() {
//         ac.authErr = '';
//     }

//     function handleDBResponse(member, err) {
//         if (member) {
//             ac.member = member;
//             ac.activeView = ''
//         }
//         if (err) {
//             ac.error = err.message;
//         }
//         update()
//     }
// }

<<<<<<< HEAD
function navCtrl() {
    let $ctrl = this

    $ctrl.activeView = null;

    $ctrl.logIn = function() {
        $ctrl.activeView = 'login';
    }

    let updateUser = (user) => {
        // $ctrl.member = user
        // $ctrl.activeView = null
        // update()
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
=======
navCtrl.$inject = ['AuthService', '$scope']

function navCtrl(AuthService, $scope) {
  let $ctrl = this
  
  $ctrl.activeView = null;
  
  $ctrl.logIn = function() {
    $ctrl.activeView = 'login';
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

  // GET LOGGED IN USER INFO
  let updateUser = (user) => {
    $ctrl.member = user
    $ctrl.activeView = null
    update()
  }

  $ctrl.$onInit = () => {
    AuthService.on('USER', updateUser)
  }

  let update = () => {
    $scope.$evalAsync()
  }
}
>>>>>>> 20ed96dadc5baa51144bd2d76290d8ff8d9c764a
