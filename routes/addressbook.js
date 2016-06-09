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
			return x.ZIP_CD + '	' + x.ROAD_NAME_ADDRESS;
		}).sort();
		res.send(formatted);
	});
});

router.post('/', function (req, res) {
	var id = 'johndoe';
	var name = req.body.name;
	var zipcode = req.body.zipcode;
	var address = req.body.address;

	if (name && zipcode && address) {
		zipcode = zipcode.split('\t');

		Escrow.putAddress(id, name, zipcode[0], roadAddr[1], address, function (res) {
			res.send('Done. name=' + name + ', zipcode=' + zipcode + ', address=' + address);
		});
	}
	else {
		res.send('Incomplete. name=' + name + ', zipcode=' + zipcode + ', address=' + address);
	}
});

module.exports = router;
