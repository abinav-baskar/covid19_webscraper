const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/COVID-19_pandemic';

var covidCases = {};
var days = 0;
main();
function main() {

}
function readCovidWebsite() {
  rp(url)
  .then(function(html){
    //console.log(html);
    //var table = cheerio('.wikitable', html)[0];
    //console.log(table.text());

  var tablerow = cheerio('.sorttop', html).find('th');
  var tableRowText = tablerow.text();
  var result = tableRowText.split("\n");
    
  var today = new Date();
  var todayMonth = today.getMonth()+1;
  var todayDay = today.getDate();
  updateCases(todayMonth, todayDay, result[1]);
  updateDeaths(todayMonth, todayDay, result[2]);
  })
  
  .catch(function(err){
    console.log("failure");
    //handle error
  }); 
}


  function updateCases(monthNumber, dayNumber, caseNumber) {
    covidCases[days] = {
      month: monthNumber,
      day: dayNumber,
      cases: caseNumber
    }
  }

  function updateDeaths(monthNumber, dayNumber, deathNumber) {
    covidDeath[days] = {
      month: monthNumber,
      day: dayNumber,
      deaths: deathNumber
    }
  }