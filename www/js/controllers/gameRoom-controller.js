angular
  .module('dictionaryGame')
  .controller('gameRoom-controller', ['$scope','gameFactory','socketFactory', '$stateParams', '$localStorage', function($scope, gameFactory,socketFactory, $stateParams, $localStorage){
    $scope.player = ''
    $scope.gameId = $stateParams.gameId
    $scope.gameData = {}
    $scope.socket = socketFactory.connect
    $scope.socket.on('player-joined', function(userData, gameData){
      console.log('userData=', userData);
      $scope.gameData = gameData
      console.log($scope.gameData);
      $localStorage.sdUserName = userData.username
      $scope.$apply(function (){
        $scope.player = $localStorage.sdUserName
      })
    })
  }])
