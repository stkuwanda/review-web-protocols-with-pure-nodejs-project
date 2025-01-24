// making 2 node programs to communicate via websockets: node-client websocket

const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:3000');

socket.on('open', () => {
	console.log('Connected.');
});

socket.on('close', () => {
	console.log('Disconnected.');
});

socket.on('message', (msg) => {
	console.log('Received:', msg.toString());
});

setInterval(() => {
	socket.send('Hello');
}, 3000);
