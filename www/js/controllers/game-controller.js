angular
<<<<<<< HEAD
  .module('dictionaryGame')
  .controller('game-controller', ['$scope', '$rootScope', 'gameFactory', 'socketFactory', function($scope, $rootScope, gameFactory, socketFactory){
    $scope.socket = socketFactory.connect
    $scope.newGame = function (name) {
      $scope.socket.emit('new-game', name)
    }
    $scope.socket.on('recieve-message', function(data){
      console.log(data)
    })
  }])
=======
	.module('dictionaryGame')
	.controller('game-controller', ['$scope', '$rootScope', 'gameFactory', 'socketFactory', function($scope, $rootScope, gameFactory, socketFactory) {
		$scope.test = gameFactory.test()
		$scope.socket = socketFactory.connect

		$scope.newGame = function() {
			var data = {
				gameId: (Math.random() * 100000) | 0,
				hostUsername: $scope.inputHostName
			}
			console.log(data);
			$scope.socket.emit('new-game', data)
		}

		$scope.joinGame = function() {
			var data = {
				gameId: $scope.inputGameId,
				playerUsername: $scope.inputPlayerName
			}
      $scope.socket.emit('join-game', data)
		}

		$scope.socket.on('recieve-message', function(data) {
			console.log(data)
		})
	}])
>>>>>>> 69330bd95fb82030ed295070311d83268ce04c9e
