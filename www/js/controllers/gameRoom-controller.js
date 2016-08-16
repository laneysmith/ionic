angular
  .module('dictionaryGame')
  .controller('gameRoom-controller', ['$scope','gameFactory','socketFactory', function($scope, gameFactory,socketFactory){
    $scope.player = ''
    $scope.gameId = 0
    $scope.gameData = {}
    $scope.socket = socketFactory.connect

    $scope.socket.on('player-joined', function(userData, gameData){
      console.log('userData=',userData);
      $scope.gameData = gameData
      $scope.$apply(function (){
        $scope.gameId = userData.gameId
        $scope.player = userData
      })
    })
  }])
