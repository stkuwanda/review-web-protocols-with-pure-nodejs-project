// a server that handles json data from the client side with Node.js core APIs provided by the http module

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const pathOfForm = path.resolve(process.cwd(), './puplic', 'form.html');
const form = fs.readFileSync(pathOfForm);

function get(res) {
	console.log('res.url:', res.url);
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end(form);
}

function post(req, res) {
	console.log('content-type:', req.headers['content-type']);

	if (req.headers['content-type'] !== 'application/json') {
		error(res, 415);
		return;
	}

	let input = '';

	req.on('data', function (chunk) {
		input += chunk.toString();
	});

	req.on('end', function () {
		try {
			console.log(`All data received: ${input}`);
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(`{"data": ${input}}`);
		} catch (error) {
			error(res, 400);
		}
	});
}

function error(res, code) {
	res.statusCode = code;
	res.end(http.STATUS_CODES[code]);
}

http
	.createServer(function (req, res) {
		if (req.method === 'GET') {
			get(res);
			return;
		}

		if (req.method === 'POST') {
			post(req, res);
			return;
		}

		error(res, 405);
	})
	.listen('3000', function () {
		console.log('Server running on port 3000...');
	});
