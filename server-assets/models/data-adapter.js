let uuid = require('node-uuid'),
  JsData = require('js-data'),
  FBAdapter = require('js-data-firebase'),
  firebase = require('firebase'),
  DS = new JsData.DS();

let fbAdapter = new FBAdapter({
  basePath: 'https://x-landing.firebaseio.com/'
})


formatQuery= function(query){
  query = query || ''
  return { with: query.split(',').join(' ').split(' ') }
}


DS.registerAdapter('firebase', fbAdapter, { default: true })

//firebase attempts - add in server-side authorization
// let config = {
//   apiKey: 'AIzaSyDSo9P5PjcuV5UsFH2wwvCkI2PNqdUFGm8',
//   authDomain: 'x-tactical.firebaseapp.com',
//   databaseURL: 'https://x-tactical.firebaseio.com',
//   storageBucket: 'x-tactical.appspot.com',
//   messagingSenderId: '801571924462'
// }

// const firebaseApp = firebase.initializeApp(config)
// const authStore = new FirebaseAuthStore(firebaseApp)

//end firebase tests

module.exports = {
  fbAdapter, 
  DS,
  uuid,
  formatQuery
}