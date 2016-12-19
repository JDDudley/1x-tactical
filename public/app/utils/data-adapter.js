// (function() {
//     angular.module('1x')
//     .config(function(DSFirebaseAdapterProvider) {
//         DSFirebaseAdapterProvider.defaults.basePath = 'https://keeprio.firebaseio.com/';
//     })
//     .run(function(DS, DSFirebaseAdapter) {
//         // the firebase adapter was already registered
//         DS.adapters.firebase === DSFirebaseAdapter;

//         // but we want to make it the default
//         DS.registerAdapter('firebase', DSFirebaseAdapter, { default: true });
//     })
// } ())