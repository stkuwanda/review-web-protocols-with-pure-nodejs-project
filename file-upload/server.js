// server to handle client side file upload requests in single file upload mode

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { formidable } = require('formidable');

const pathOfForm = path.join(__dirname, 'public', 'form.html');
const form = fs.readFileSync(pathOfForm);

function error(res, code) {
	res.statusCode = code;
	res.end(http.STATUS_CODES[code]);
}

function get(res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end(form);
}

function post(req, res) {
	if (!/multipart\/form-data/.test(req.headers['content-type'])) {
		error(res, 415);
		return;
	}

	const form = formidable({
		keepExtensions: true,
		uploadDir: './uploads',
	});

	form.parse(req, function (err, fields, files) {
		if (err) {
			return error(err, 400);
		}

		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ fields, files }), null, 2);
	});
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
