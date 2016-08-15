angular
  .module('dictionaryGame')
  .controller('game-controller', ['$scope', '$rootScope', 'gameFactory', 'socketFactory', function($scope, $rootScope, gameFactory, socketFactory){
    $scope.test = gameFactory.test()
    $scope.socket = socketFactory.connect
    $scope.newGame = function () {
      $scope.socket.emit('new-game', 'hello!')
    }
    $scope.socket.on('recieve-message', function(data){
      console.log(data)
    })
  }])
