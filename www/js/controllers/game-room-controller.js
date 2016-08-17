angular
	.module('dictionaryGame')
	.controller('game-room-controller', ['$scope', 'gameFactory', 'mySocket', function($scope, gameFactory, mySocket) {

		$scope.socket = mySocket.connect

		mySocket.on('set-user-info', function(userSpecificData) {
			console.log('set-user-info data=', userSpecificData);
			$scope.$apply(function() {
				$scope.player = userSpecificData.username
				$scope.role = userSpecificData.role
				$scope.gameId = userSpecificData.gameId
        if (userSpecificData.gameInfo) {
          $scope.gameData = userSpecificData.gameInfo
        }
			})
		})

		mySocket.on('player-joined', function(gameData) {
			console.log('gameData=', gameData);
			$scope.$apply(function() {
				$scope.gameData = gameData
			})
		})

	}])
