// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','baseController','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
   
    $stateProvider
     .state('Login', {
         url: "/Login",
         templateUrl: "templates/login.html",
         controller: 'LoginCtrl',
         cache: false,
         nativeTransitions: {
             "type": "fade",
             "duration": 250,
         }
     }) 
     .state('Playlist', {
         url: "/Playlist",
         templateUrl: "templates/playlists.html",
         controller: 'PlaylistsCtrl',
         cache: false,
         nativeTransitions: {
             "type": "fade",
             "duration": 250,
         }
     })


     .state('LoginData', {
         url: "/LoginData",
         templateUrl: "templates/LoginData.html",
         controller: 'LoginDataCtrl',
         cache: false,
         params: {'data':null},
         nativeTransitions: {
             "type": "fade",
             "duration": 250,
         }
     })


     .state('Yonlendir', {
         url: "/Yonlendir",
         templateUrl: "templates/Yonlendir.html",
         controller: 'YonlendirCtrl',
         cache: false,
         params: {'Username':null},
         nativeTransitions: {
             "type": "fade",
             "duration": 250,
         }
     })

     .state('Kisiler', {
         url: "/Kisiler",
         templateUrl: "templates/Kisiler.html",
         controller: 'KisilerCtrl',
         cache: false,
         nativeTransitions: {
             "type": "fade",
             "duration": 250,
         }
     })



      
    $urlRouterProvider.otherwise(function ($injector, $location) {
        var $state = $injector.get("$state");
        $state.go("Kisiler");
    });

});

