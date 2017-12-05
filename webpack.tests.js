// *Some* environments (phantomjs) don't have es5 (Function.prototype.bind)
require('babel-polyfill');

//make sure you have your directory and regex test set correctly!
const context = require.context('./src', true, /-test\.js$/);
context.keys().forEach(context);