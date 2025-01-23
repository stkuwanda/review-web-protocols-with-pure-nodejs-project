// using the NodeJS core fetch API to make a get request to a target url

const fs = require('node:fs');

const url = 'https://api.github.com/orgs/nodejs';

function storeToJSONDataFile(data) {
	return new Promise(function (resolve, reject) {
		fs.writeFile('data2.json', data, function (err) {
			if (err) {
				reject(err);
				return;
			}

			resolve('Data file creation is complete.');
		});
	});
}

async function getWebResource(url) {
	try {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`HTTP Error! Status code: ${res.status}`);
		}

		const data = await res.json();
		const message = await storeToJSONDataFile(JSON.stringify(data, null, 2));
		console.log(message);
		console.log('GET request succeeded. Data:', data);
	} catch (error) {
		console.error('GET request errored:', error);
	}
}

getWebResource(url);
