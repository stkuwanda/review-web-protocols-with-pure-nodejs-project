// installed npm module nodemailer and implemented program to send email to smtp server
const nodemailer = require('nodemailer');

const transporter = new nodemailer.createTransport({
	host: 'localhost',
	port: 4321,
});

transporter.sendMail(
	{
		from: 'simba@example.com',
		to: 'tendie@example.com',
		subject: 'Hello',
		text: 'Hello world!',
	},
	function (err, info) {
		if (err) {
			console.log(err);
		}
    
		console.log('Message Sent:', info);
	}
);
