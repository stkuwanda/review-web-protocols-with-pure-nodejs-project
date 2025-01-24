const form = document.querySelector('form');
const url = 'http://localhost:3000';

async function makePostRequest(url, data) {
	try {
		const res = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
      mode: 'cors' // *cors, no-cors, same-origin
		});

		return res.json();
	} catch (error) {
		console.log(error);
	}
}

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const forename = document.getElementById('forename').value;
	const surname = document.getElementById('surname').value;
	const data = { forename, surname };

	makePostRequest(url, data)
		.then(function (data) {
			console.log('Parsed data:', data);
		})
		.catch(function (err) {
			console.log(err);
		});
});

// async function postData(url = '', data = {}) {
// 	// Default options are marked with *
// 	const response = await fetch(url, {
// 		method: 'POST', // *GET, POST, PUT, DELETE, etc.
// 		mode: 'same-origin', // *cors, no-cors, same-origin
// 		headers: {
// 			'Content-Type': 'application/json',
// 			// 'Content-Type': 'application/x-www-form-urlencoded',
// 		},
// 		body: JSON.stringify(data), // body data type must match "Content-Type" header
// 	});
// 	return response.json(); // parses JSON response into native JavaScript objects
// }

// // Example usage:
// const myData = { name: 'John Doe', age: 30 };
// const url = 'http://localhost:3000'; // Replace with your server endpoint

// postData(url, myData)
// 	.then((data) => {
// 		console.log('Success:', data);
// 	})
// 	.catch((error) => {
// 		console.error('Error:', error);
// 	});
