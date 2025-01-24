// creating the client side to communicate via websockets

const fs = require('node:fs');
const http = require('node:http');

const index = fs.readFileSync('./public/index.html');

http
	.createServer(function (req, res) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(index);
	})
	.listen(8080, function () {
		console.log('Server running on PORT: 8080...');
	});
