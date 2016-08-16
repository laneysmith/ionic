angular
  .module('dictionaryGame')
  .controller('gameRoom-controller', ['$scope','gameFactory','socketFactory', '$stateParams', '$localStorage', function($scope, gameFactory,socketFactory, $stateParams, $localStorage){
    $scope.players = []
    $scope.socket = socketFactory.connect
    $scope.socket.on('player-joined', function(userData, gameData){
      console.log('userData=', userData)
      console.log('gameData=', gameData)
      $localStorage.sdUserName = 'Hello World!'
      // $scope.$apply(function (){
      //   $scope.players.push(data)
      //   console.log($scope.players)
      // })
    })
  }])
