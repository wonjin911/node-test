/*
 * Escrow
 */

/*
 * Module Dependencies
 */
var http = require('http');
var config = require('config');

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

/*
Escrow.getAddress = function (name, zipcode, roadAddr, additionalAddr, callback) {
	var options = {		
		host: host,
		port: port,
		//path: '/Address/Escrow?query=' + encodeURIComponent(city), 			// TODO
		method: 'POST',
		headers: {
			'Accept-Encoding': 'gzip, deflate'
		}
	};
	var req = http.request(options, function (res) {
		var body = '';
		res.on('data', function (chuck) {
			body += chuck;
			//console.log(chuck);
		});

		res.on('end', function () {
			callback(JSON.parse(body));
		});
	});
	req.on('error', function (e) {
		console.error(e.message);
	});
	req.end();
};
*/
