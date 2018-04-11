/********************************************************************************/
/*										*/
/*	Configuration parameters for security lab server			*/
/*										*/
/********************************************************************************/

var _ = require("underscore");
var path = require("path");

var finalEnv = process.env.NODE_ENV || "development";

var PORT_NUMBER = 7032;


var PORT = PORT_NUMBER;
var DB_CONNECT = 'mysql://group33:group33_password@http://cs1320SL.CS.Brown.edu:7032/group33_db';
var COOKIE_SECRET = "SessionCookieSecretKey";
var HOSTNAME = "localhost";




/********************************************************************************/
/*										*/
/*	Exports 								*/
/*										*/
/********************************************************************************/


exports.PORT = 8080;
exports.DB_CONNECT = DB_CONNECT;
exports.COOKIE_SECRET = COOKIE_SECRET;
exports.HOSTNAME = HOSTNAME;




/* end of config.js */
