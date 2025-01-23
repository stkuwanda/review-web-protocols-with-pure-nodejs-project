// using the NodeJS core fetch API to make a post request to a target url and writing data to json file

const fs = require('node:fs');

const url = 'https://postman-echo.com/post';
const payload = JSON.stringify({ name: 'Simba', race: 'Black' });
const options = {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: payload,
};

function storeToJSONDataFile(data) {
	return new Promise(function (resolve, reject) {
		fs.writeFile('data3.json', data, function (err) {
			if (err) {
				reject(err);
				return;
			}

			resolve('Data file creation is complete.');
		});
	});
}

async function postWebResource(url, options) {
	try {
		const res = await fetch(url, options);
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

postWebResource(url, options);
