/*
 * Escrow
 */

/*
 * Module Dependencies
 */
var http = require('http');
var config = require('config');
var querystring = require('querystring');

/*
 * @constructor
 */
function Escrow () {

}

/*
 * Exports
 */
module.exports = Escrow;

/*
 * Consts
 */
var host = config.get('api.escrow.host') || localhost;
var port = config.get('api.escrow.port') || 80;

Escrow.putAddress = function (id, name, zipcode, roadAddr, additionalAddr, callback) {
	var data = querystring.stringify({
		'ADDRESS_NAME': name,
		'ZIP_CODE': zipcode,
		'ROAD_NAME_ADDRESS': roadAddr,
		'ADDITIONAL_ADDRESS': additionalAddr
	});
	var options = {		
		host: host,
		port: port,
		path: '/AddressBook/' + encodeURIComponent(id),
		method: 'POST',
		headers: {
			//'Content-Type': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded', 
			'Content-Length': Buffer.byteLength(data),
			'Accept-Encoding': 'gzip, deflate'

		}
	};
	var req = http.request(options, function (res) {
		var response = '';
		res.on('data', function (chunk) {			
			response += chunk;
		});
		res.on('end', function () {
			//console.log(response);
			callback('OK, response=' + response);
		});
	});
	req.on('error', function (e) {
		console.error(e.message);
		callback('ERROR');
	});
	req.write(data);
	req.end();
};

/*
Escrow.putAddress('johndoe', 'home', '1', '2', '3', function (ret) {
	console.log(ret);
});
*/
