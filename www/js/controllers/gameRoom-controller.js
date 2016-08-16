angular
  .module('dictionaryGame')
  .controller('gameRoom-controller', ['$scope','gameFactory','socketFactory', 'btford.socket-io', function($scope, gameFactory,socketFactory){
    $scope.player = ''
    $scope.role = ''
    $scope.gameId = 0
    $scope.gameData = {}
    $scope.socket = socketFactory.connect

    $scope.socket.on('set-user-info', function(userSpecificData){
      console.log('set-user-info data=', userSpecificData);
      $scope.$apply(function (){
        $scope.player = userSpecificData.username
        $scope.role = userSpecificData.role
        $scope.gameId = userSpecificData.gameId
        $scope.gameData = userSpecificData.gameInfo
      })
    })

    $scope.socket.on('player-joined', function(gameData){
      console.log('gameData=',gameData);
      $scope.$apply(function (){
        $scope.gameData = gameData
      })
    })

  }])
