const express = require('express');
const app = express();
const session = require('express-session');
const fs = require('fs');

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// app.use(
//     session({
//         secret: '',
//         resave: false,
//         saveUninitialized: false,
//         cookie: {
//             secure: false,
//             maxAge: 1000 * 60 * 60,
//         },
//     })
// );

// app.use(
//     express.json({
//         limit: '50mb',
//     })
// );

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
