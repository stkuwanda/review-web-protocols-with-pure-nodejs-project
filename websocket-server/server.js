// creating a websocket server using the npm module ws

const WebSocket = require('ws');

// WebSocket instance and port config
const WebSocketServer = new WebSocket.Server({ port: 3000 });

// listen for connections and messages to our WebSocketServer instance
WebSocketServer.on('connection', function (socket) {
	socket.on('message', function (msg) {
		console.log('Received:', msg.toString());

		if (msg.toString() === 'Hello') socket.send('World!');
	});
});
