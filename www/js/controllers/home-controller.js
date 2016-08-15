angular
  .module('dictionaryGame')
  .controller('home-controller', ['$scope', '$rootScope','socketFactory', function($scope, $rootScope, socketFactory){
    socketFactory.connect('localhost:5000')
    $scope.view = {}
  }])
