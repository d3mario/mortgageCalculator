//Dump is a handy debugging function 
exports.dump = (obj) => JSON.stringify(obj, null, 2);

// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require('moment');
// Makes the siteName available throuhhout the website
exports.siteName = `Mortgage Calculator!`;

exports.numeral = require('numeral');
