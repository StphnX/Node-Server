// INSTALL PG
let pg = require('pg');

// GET URL AND PASSWORD FROM ELEPHANTSQL
let conString =
  'postgres://jfsirgzc:9Dt9g7B3aZPSVnWht6BTgtf9UstQcytK@snuffleupagus.db.elephantsql.com/jfsirgzc'; //Can be found in the Details page

// CREATE A VARIABLE FOR CONNECTING THE CLIENT FOR ELEPHANTSQL AND THIS BACKEND
let client = new pg.Client(conString);

// DB CONNECTION AND ERROR HANDLING 
client.connect((err) => {
  if (err) {
    return console.error('Could not connect to postgres', err);
  }
  console.log("Connected to SQL DB")
});

module.exports = client;
