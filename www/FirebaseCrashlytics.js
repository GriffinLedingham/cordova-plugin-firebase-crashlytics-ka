var exec = require("cordova/exec");
var PLUGIN_NAME = "FirebaseCrashlytics";

module.exports = {
  crash: function(success, error) {
    exec(success, error, PLUGIN_NAME, 'crash', []);
  },
  logPriority: function(priority, tag, message, success, error) {
    exec(success, error, PLUGIN_NAME, 'logPriority', [priority, tag, message]);
  },
  log: function(message, success, error) {
    exec(success, error, PLUGIN_NAME, 'log', [message]);
  },
  logException: function(message, success, error) {
    exec(success, error, PLUGIN_NAME, 'logException', [message]);
  },
  setString: function(key, value, success, error) {
    exec(success, error, PLUGIN_NAME, 'setString', [key, value]);
  },
  setBool: function(key, value, success, error) {
    exec(success, error, PLUGIN_NAME, 'setBool', [key, value]);
  },
  setDouble: function(key, value, success, error) {
    exec(success, error, PLUGIN_NAME, 'setDouble', [key, value]);
  },
  setFloat: function(key, value, success, error) {
    exec(success, error, PLUGIN_NAME, 'setFloat', [key, value]);
  },
  setInt: function(key, value, success, error) {
    exec(success, error, PLUGIN_NAME, 'setInt', [key, value]);
  }
};
