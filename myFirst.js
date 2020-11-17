var http = require('http');
var time = require('./myFirstModule');
var url = require('url');
var fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('demo1file.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();

    });
}).listen(8080);