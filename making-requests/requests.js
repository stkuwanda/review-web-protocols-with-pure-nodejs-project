// sending HTTP requests using Nodejs core APIs

const http = require('node:http');
const fs = require('node:fs');
const { PassThrough } = require('node:stream');

const ws = fs.createWriteStream('./index.html');
const bridge = new PassThrough();

// send a request to the resource with the url
http
	.get('http://example.com', function (res) {
		res.pipe(bridge);
		bridge.pipe(process.stdout);
		bridge.pipe(ws);
	})
	.on('error', function (error) {
		console.error('Something failed:', error);
	});
