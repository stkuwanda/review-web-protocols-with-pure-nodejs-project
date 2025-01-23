// a server app do-task-server built on NodeJs core APIs

const http = require('node:http');
const { env } = require('node:process');

const HOSTNAME = env.HOSTNAME || '0.0.0.0';
const PORT = env.PORT || 3000;

// error handler
function error(res, code) {
	res.statusCode = code;
	res.end(JSON.stringify({ error: http.STATUS_CODES[code] }), null, 2);
}

function todo(res) {
	res.end(
		JSON.stringify([{ task_id: 1, description: 'walk the cat' }], null, 2)
	);
}

function index(res) {
	res.end(JSON.stringify({ name: 'do-task-server' }, null, 2));
}

const server = http.createServer(function (req, res) {
	if (req.method !== 'GET') return error(res, 405);
	if (req.url === '/todo') return todo(res);
	if (req.url === '/') return index(res);
	error(res, 404);
});

server.listen(PORT, HOSTNAME, function () {
	console.log(`Server listening on port ${server.address().port}`);
});
