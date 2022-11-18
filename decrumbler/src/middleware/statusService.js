
// @ts-ignore
const https = require('https');

const options = {
  host: '8.8.8.8',
  path: '/',
  method: 'GET',
  timeout: 3000,
};

const req = https.request(options, (res) => {
  res.setEncoding('utf8');

  let body = '';

  res.on('data', (chunk) => {
    body += chunk;
  });

  if(res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302) {
    res.on('end', () => console.log("Server is running, status is " + res.statusCode));
  } else
        if(res.statusCode === 503) {
            res.on('end', () => console.log("Server is likely down, status is " + res.statusCode));
        } else{
            res.on('end', () => console.log(body));
          }  
});

req.on('error', (err) => {
    if (err.name === 'ECONNRESET') {
      console.log('timeout!');
      return;
    }
  
    console.error(err);
  });
  
  req.on('timeout', () => {
    req.destroy();
  });
  
  req.end();
