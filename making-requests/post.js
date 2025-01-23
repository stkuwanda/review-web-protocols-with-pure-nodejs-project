// send post request to a target url

const http = require('node:http');
const fs = require('node:fs');
const { PassThrough } = require('node:stream');

const ws = fs.createWriteStream('./data.json');
const bridge = new PassThrough();
const payload = JSON.stringify({ name: 'Simba', race: 'Black' });

const opts = {
	method: 'POST',
	hostname: 'postman-echo.com',
	path: '/post',
	headers: {
		'Content-Type': 'application/json',
		'Content-Length': Buffer.byteLength(payload),
	},
};

const req = http.request(opts, function (res) {
	process.stdout.write(`Status Code: ${res.statusCode}\n`);
	process.stdout.write('Body: ');
	res.pipe(bridge);
	bridge.pipe(process.stdout);
	bridge.pipe(ws);
});

req.on('error', function (error) {
	console.error('Error:', error);
});

req.end(payload);
