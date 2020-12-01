const { setDefaultTimeout } = require('cucumber');
const moment = require('moment-timezone');

setDefaultTimeout(60 * 1000);

// github.com/cucumber/cucumber-js/blob/master/docs/support_files/timeouts.md#timeouts
console.log('Config setDefaultTimeout');

moment.tz.setDefault('America/Los_Angeles');

// momentjs.com/timezone/docs/#/using-timezones/default-timezone
console.log('Set default time zone as Los Angeles');
