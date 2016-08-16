angular
	.module('dictionaryGame')
	.factory('socketFactory', function() {
		return {
			connect: window.io('localhost:3000')
			// connect: window.io('http://q3-socket-server.herokuapp.com/')
		}
	})
