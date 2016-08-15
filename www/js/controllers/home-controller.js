angular
  .module('dictionaryGame')
  .controller('home-controller', ['$scope', '$rootScope','socketFactory', function($scope, $rootScope, socketFactory){
    socketFactory.connect
    $scope.view = {}
  }])
