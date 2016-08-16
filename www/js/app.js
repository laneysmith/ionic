 // Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('dictionaryGame', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
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


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('home',  {
    abstract: true,
    url:"/home",
    templateUrl:"../templates/home.html"
  })

  .state('home.splash', {
    url:"/splash",
    views: {
      "tab-splash": {
        templateUrl: "../templates/splash.html"
      }
    }
  })

  .state('home.tessel',  {
    url:"/tessel",
    views: {
      "tab-tessel": {
        templateUrl: "../templates/tessel.html"
      }
    }

  })
  .state('home.gameMode',  {
    url:"/gameMode",
    views: {
      "tab-gameMode": {
        templateUrl: "../templates/gameMode.html"
      }
    }
  })
  .state('home.signup', {
    url:"/signup",
    views: {
      "tab-signup": {
        templateUrl: "../templates/signup.html"
      }
    }
  })
  .state('home.game', {
    url:"/gameroom/:gameId",
    views: {
      "tab-gameRoom": {
        templateUrl: "../templates/game.html"
      }
    }
  })
  //
  // .state('app', {
  //   url: "/app",
  //   templateUrl: "../templates/menu-layout.html"
  // });

  $urlRouterProvider.otherwise('/home/splash')
});
