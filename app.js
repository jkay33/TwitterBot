
var twitter = require('twit');
var cred = require('./config.js');
const fs = require('fs');
var T = new twitter(cred);

// function to find all key values on matching date
function getKeyByValue(object, value){
  return Object.keys(object).filter(key => object[key] === value);
}

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

// set 'keys' variable to list of keys with matching date to find title
var keys = getKeyByValue(data.date, formatted);

// for statement to find all titles with date keys
var tweet = new Array();
for (index in keys){
  tweet += data.title[keys[index]] + '\n';
}

T.post('statuses/update', {status: tweet}, function(error, tweet, response){
  if (error){
    console.log(error)
  }
  console.log(tweet);
  console.log(response);
})
