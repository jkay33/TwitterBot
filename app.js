
var twitter = require('twitter');
var cred = require('./config.js');
const csv = require('csv-parser');
const fs = require('fs');

var T = twitter(cred);
