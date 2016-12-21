angular.module('1x')
  .service('AuthService', function () {

    var authStore = Object.assign(this, new Emitter());
    var creds;
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDDkvMcUuCcHoGfLAInCo6jtQvq0t4_GsQ",
      authDomain: "x-landing.firebaseapp.com",
      databaseURL: "https://x-landing.firebaseio.com",
      storageBucket: "x-landing.appspot.com",
      messagingSenderId: "16372921640"
    };

    firebaseApp = firebase.initializeApp(config);

    authStore.currentUser = firebaseApp.auth().currentUser

    authStore.getCurrentUserId = () => {
      return authStore.currentUser ? authStore.currentUser.uid : null
    }

    authStore.login = (credentials) => {
      debugger
      firebaseApp.auth().signInWithEmailAndPassword(credentials.email, credentials.password).catch(errorHandler).catch(errorHandler)
    }

    authStore.register = (credentials) => {
      creds = credentials
      firebaseApp.auth().createUserWithEmailAndPassword(credentials.email, credentials.password).catch(errorHandler)
    }

    authStore.logout = () => {
      firebaseApp.auth().signOut().then(() => {
        authStore.currentUser = null
        authStore.CHANGE('USER', null)
      }).catch(errorHandler)
    }

    let errorHandler = (NOTIFICATION) => {
      NOTIFICATION.type = 'error'
      authStore.CHANGE('NOTIFICATION', NOTIFICATION)
    }

    firebaseApp.auth().onAuthStateChanged((user) => {
      authStateChanged(user)
    })

    let onAuthStateChanged = (Object, optError, optCompleted) => {
      return authStore.firebaseApp.auth().onAuthStateChanged(nextOrObserver, optError, optCompleted)
    }

    let authStateChanged = (user) => {
      if ((user && authStore.currentUserId === user.uid) || (!user && !authStore.currentUserId)) {
        return
      }

      authStore.CHANGE('USER', user)
      authStore.currentUser = user

      if (user) {
        writeUserData(user.uid, user.displayName, user.email, user.photoURL)
      }
    }

    let writeUserData = (userId, displayName, email, photoURL) => {
      firebaseApp.database().ref('users/' + userId).set({
        id: userId,
        displayName: displayName || creds ? creds.displayName : 'Member',
        email: email,
        photoURL: photoURL
      })
    }

  });