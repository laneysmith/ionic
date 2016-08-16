angular
  .module('dictionaryGame')
  .controller('gameRoom-controller', ['$scope','gameFactory','socketFactory', '$stateParams', '$localStorage', function($scope, gameFactory,socketFactory, $stateParams, $localStorage){
    $scope.player = ''
    $scope.gameId = $stateParams.gameId
    $scope.gameData = {}
    $scope.socket = socketFactory.connect
    $scope.socket.on('player-joined', function(userData, gameData){
      $scope.gameData = gameData
      $localStorage.sdUserName = userData.username
      $scope.$apply(function (){
        $scope.player = $localStorage.sdUserName
      })
    })
  }])
