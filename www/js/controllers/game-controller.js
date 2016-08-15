angular
  .module('dictionaryGame')
  .controller('game-controller', ['$scope', '$rootScope', 'gameFactory', 'socketFactory', function($scope, $rootScope, gameFactory, socketFactory){
    $scope.socket = socketFactory.connect
    $scope.newGame = function (name) {
      $scope.socket.emit('new-game', name)
    }
    $scope.socket.on('recieve-message', function(data){
      console.log(data)
    })
  }])
