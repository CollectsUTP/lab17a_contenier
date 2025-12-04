// test.js - test muy simple (puedes sustituir por Jest/Mocha)
const http = require('http');

const opts = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET'
};

const req = http.request(opts, res => {
  console.log(`STATUS: ${res.statusCode}`);
  res.setEncoding('utf8');
  res.on('data', d => process.stdout.write(d));
  res.on('end', () => process.exit(res.statusCode === 200 ? 0 : 1));
});

req.on('error', e => {
  console.error(e);
  process.exit(1);
});

req.end();
