// setting up an SMTP server using an npm module named smtp-server

const { SMTPServer } = require('smtp-server');

const PORT = 4321;

const server = new SMTPServer({
	disabledCommands: ['STARTTLS', 'AUTH'],
	logger: true,
});

server.on('error', function (error) {
	console.error(error);
});

server.listen(PORT);

// test connection by using either of the command line tools below in another terminal
// $ telnet localhost 4321
// $ nc -c localhost 4321
// Win 11 enable telnet client run the command on the command prompt: dism /online /Enable-Feature /FeatureName:TelnetClient
