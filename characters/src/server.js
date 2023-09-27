const express = require('express');
const morgan = require('morgan');
const Router = require('./routes');

const server = express();

server.use(morgan('dev'));

server.use(express.json());

server.use('/characters', Router);

module.exports = server;