const express = require('express');
const app = express();
const session = require('express-session');
const fs = require('fs');

app.use(
    session({
        secret: '',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            maxAge: 1000 * 60 * 60,
        },
    })
);

app.use(
    express.json({
        limit: '50mb',
    })
);
