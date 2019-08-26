
var twitter = require('twitter'),
cred = require('./config.js');
const fs = require('fs');

var T = twitter(cred);

// converting date to MMM DD format ex: Jan 1
Date.prototype.toShortFormat = function(){
  var months =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var day = this.getDate();
  var months_index = this.getMonth();

  return months[months_index] + " " + day;
}
// setting formatted date to vars
var date = new Date();
var formatted = date.toShortFormat();

// reading/parsing json file scraped from python script
var dfile = fs.readFileSync('./webScraper/release.json');
let data = JSON.parse(dfile);

//console.log(Object.keys(data.date));

// function to find all key values on matching date
function getKeyByValue(object, value){
  return Object.keys(object).filter(key => object[key] === value);
}
// set 'keys' variable to list of keys with matching date to find title
var keys = getKeyByValue(data.date, formatted);
// for statement to find all titles with date keys
var tweet = [];
for (items in keys){
  tweet += data.title[items] + '\n';
  //console.log(data.title[items]);
}

console.log(tweet);
console.log(formatted);
