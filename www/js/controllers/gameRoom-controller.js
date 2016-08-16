angular
  .module('dictionaryGame')
  .controller('gameRoom-controller', ['$scope','gameFactory','socketFactory', '$stateParams', function($scope, gameFactory,socketFactory, $stateParams){
    $scope.players = []
    $scope.socket = socketFactory.connect
    $scope.socket.on('player-joined', function(data){
      $scope.$apply(function (){
        $scope.players.push(data)
        console.log($scope.players)
      })
    })
  }])
