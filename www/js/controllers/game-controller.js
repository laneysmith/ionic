angular
	.module('dictionaryGame')
	.controller('game-controller', ['$scope', '$rootScope', 'gameFactory', 'socketFactory','$stateParams', function($scope, $rootScope, gameFactory, socketFactory, $stateParams) {
		$scope.socket = socketFactory.connect
    $scope.view = {}
    $scope.view.test = $stateParams.gameId
		$scope.newGame = function() {
			var data = {
				gameId: (Math.random() * 100000) | 0,
				username: $scope.inputHostName
			}
			$scope.socket.emit('new-game', data)
		}

		$scope.joinGame = function() {
			var data = {
				gameId: $scope.inputGameId,
				username: $scope.inputPlayerName
			}
      $scope.socket.emit('join-game', data)
		}

	}])
