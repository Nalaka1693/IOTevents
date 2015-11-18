var express = require('express');
var eventsIOT = require('./eventsIOT');

var app = express();

app.use('/events', eventsIOT);

module.exports = app;
