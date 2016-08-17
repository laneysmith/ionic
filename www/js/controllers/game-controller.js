angular
	.module('dictionaryGame')
	.controller('game-controller', ['$scope', '$rootScope', 'gameFactory', 'mySocket', '$stateParams', function($scope, $rootScope, gameFactory, mySocket, $stateParams) {
		$scope.view = {}
		$scope.view.test = $stateParams.gameId
		$scope.newGame = function() {
			var data = {
				gameId: (Math.random() * 100000) | 0,
				username: $scope.inputHostName
			}
			mySocket.emit('new-game', data)
		}

		$scope.joinGame = function() {
			var data = {
				gameId: $scope.inputGameId,
				username: $scope.inputPlayerName
			}
			mySocket.emit('join-game', data)
		}

	}])
