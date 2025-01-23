// custom promisified version of an http GET request using Nodejs core APIs

const http = require('node:http');
const fs = require('node:fs');
const { PassThrough } = require('node:stream');

const ws = fs.createWriteStream('./index.html');
const bridge = new PassThrough();

function httpGET(url) {
	return new Promise(function (resolve, reject) {
		http
			.get(url, function (res) {
				resolve(res);
			})
			.on('error', function (error) {
				reject(error);
			});
	});
}

async function run(url) {
	try {
    const res = await httpGET(url);
    res.pipe(bridge);
		bridge.pipe(process.stdout);
		bridge.pipe(ws);
	} catch (err) {
    console.error('Error:',err);
  }
}

run('http://example.com');
