// use of the url NodeJs core module API to parse a Uniform Resource Locator
import { URL } from 'node:url'; // named export

const myUrl = new URL(
	'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
);

console.log('Hash:', myUrl.hash);
console.log('Host:', myUrl.host);
console.log('Hostname:', myUrl.hostname);
console.log('Href:', myUrl.href);
console.log('Origin:', myUrl.origin);
console.log('Pathname:', myUrl.pathname);
console.log('Search params:', myUrl.searchParams);
console.log('Search:', myUrl.search);
console.log('Protocol:', myUrl.protocol);
console.log('Username:', myUrl.username);
console.log('Password:', myUrl.password);
