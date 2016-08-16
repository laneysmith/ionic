angular
  .module('dictionaryGame')
  .controller('gameRoom-controller', ['$scope','gameFactory', '$stateParams', function($scope, gameFactory, $stateParams){
    gameFactory.getPlayers($stateParams.gameId)
  }])
