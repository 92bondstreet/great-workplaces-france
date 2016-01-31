'use strict';

let json2md = require('json2md');
let places = require('./places.json');

let less500 = places['less-500'];

//Format less 500 employees best place
let ol = less500.places.map(place => {
  let company = Object.keys(place)[0];
  let url = place[company];

  return `[${company}](${url})`;
});

//Display to the console then
//copy-paste in README.md file
console.log(json2md([
  {'h2': `[${less500.label}](${less500.url})`},
  {'ol': ol}
]));
