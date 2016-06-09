/*
 * Search
 */

/*
 * Module Dependencies
 */
var http = require('http');
var config = require('config');

/*
 * @constructor
 */
function Search () {

}

/*
 * Exports
 */
module.exports = Search;

/*
 * Consts
 */
var host = config.get('api.search.host') || localhost;
var port = config.get('api.search.port') || 80;


Search.getAddress = function (city, callback) {
	var options = {		
		host: host,
		port: port,
		path: '/Address/Search?query=' + encodeURIComponent(city),
		method: 'GET',
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

// Search.getAddress('인천', function (ret) {
// 	console.log(ret);
// });