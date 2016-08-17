angular
	.module('dictionaryGame')
	.factory('mySocket', function(socketFactory) {

    // return socketFactory({
    //   prefix: 'foo~',
    //   ioSocket: io.connect('localhost:3000')
    // });

		var myIoSocket = io.connect('localhost:3000');
		mySocket = socketFactory({
			ioSocket: myIoSocket
		});
		return mySocket;


		// return {
		// 	connect: window.io('localhost:3000')
		// 		// connect: window.io('http://q3-socket-server.herokuapp.com/')
		// }
	})
