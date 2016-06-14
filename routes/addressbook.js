/*
 * Module Dependencies
 */
var express = require('express');
var router = express.Router();

var Search = require('../lib/search');
var Escrow = require('../lib/escrow');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addressbook', { 
  	title: 'Address Book'
  });
});

router.get('/zipcode', function (req, res, next) {
	var city = req.query.city;

	Search.getAddress(city, function (addr) {
		var formatted = addr.map(function (x) {
			return {
				zipcode: x.ZIP_CD,
				road_addr: x.ROAD_NAME_ADDRESS
			};
		}).sort();
		res.send(formatted);
	});
});

router.post('/', function (req, res) {
	var DELIM = '|';

	var id = 'johndoe';
	var name = req.body.name;
	var zipcode_field = req.body.zipcode;
	var address = req.body.address;
	var zipcode;
	var road_addr;

	if (zipcode_field && typeof zipcode_field === 'string' && zipcode_field.indexOf(DELIM) > 0) {
		zipcode_field = zipcode_field.split(DELIM);
		zipcode = zipcode_field[0].trim();
		road_addr = zipcode_field[1].trim();
	}

	if (name && zipcode && road_addr && address) {
		Escrow.putAddress(id, name, zipcode, road_addr, address, function (status) {
			res.render('addressbook_resp', {
				title: 'Done: ' + status,
				name: name,
				zipcode: zipcode,
				roadname_addr: road_addr,
				additional_addr: address
			});
		});
	}
	else {
		res.render('addressbook_resp', {
			title: 'Incomplete',
			name: name,
			zipcode: zipcode,
			roadname_addr: road_addr,
			additional_addr: address
		});
	}
});

module.exports = router;
