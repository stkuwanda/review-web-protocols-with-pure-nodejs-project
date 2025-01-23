// using the NodeJS core fetch API to make a get request to a target url
const url = 'https://api.github.com/orgs/nodejs';

async function getWebResource(url) {
  try {
    const res = await fetch(url);
    if(!res.ok){
      throw new Error(`HTTP Error! Status code: ${res.status}`)
    }

    const data = await res.json();
    console.log('GET request succeeded. Data:', data);
  } catch (error) {
    console.error('GET request errored:', error);
  }
}

getWebResource(url);