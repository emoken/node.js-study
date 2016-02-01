// -------------------------------------------------------------------
//
// NOTE
// npm install minimist
// npm install -g node-inspector
//
// TODO
// ** write a usage, write a input argument validation.
//
// USAGE
// 
// node "c:/workhome/usr/src/study.home/nodejs/mysample.js" --start "2016/01/28 22:00:00" --end "2016/01/29 08:00:00" --cron ""
// 
// -------------------------------------------------------------------

// https://www.npmjs.com/package/cron-parser
var parser = require('cron-parser');

// https://www.npmjs.com/package/minimist
var argv = require('minimist')(process.argv.slice(2));

// TODO
// fix the time zone issue.
// Date.getTimezoneOffset();

console.dir(argv.start);
console.dir(argv.end);
console.dir(argv.cron);

// if ( argv.length != 6 ){
//   console.log("value = " + argv.length);
//   console.log('error');
//   return -1;
// }

var options = {
  currentDate: new Date(argv.start),
  endDate:     new Date(argv.end),
  iterator: true
};
 
try {

  var interval = parser.parseExpression('*/22 * * * *', options);
  var obj = interval.next();
  if (obj.done){
    console.log('Out of the Range : ' , obj.value.toUTC().toString());
  }else{
    console.log('Within the Range : ' , obj.value.toUTC().toString());
  }
} catch (err) {
  console.log('Error: ' + err.message);
}
