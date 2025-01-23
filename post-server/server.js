// a server that accepts and handles both HTTP GET and HTTP POST requests using the Node.js core APIs provided by the http module

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const pathOfForm = path.resolve(process.cwd(), './puplic', 'form.html');
const form = fs.readFileSync(pathOfForm);

function get(res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end(form);
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

		error(res, 405);
	})
	.listen('3000', function () {
		console.log('Server running on port 3000...');
	});
