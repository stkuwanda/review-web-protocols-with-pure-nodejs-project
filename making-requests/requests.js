// sending HTTP requests using Nodejs core APIs

const http = require('node:http');

// send a request to the resource with the url
http.get('http://example.com', function (res) {
  res.pipe(process.stdout);
});