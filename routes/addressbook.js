var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addressbook', { 
  	title: 'Address Book'
  });
});

router.get('/zipcode', function (req, res, next) {
	var city = req.query.city;
	var address = [ '21510', '21513', '06702', '06707', '06708', '06709' ];

	res.send(address);
});

router.post('/', function (req, res) {
	var name = req.body.name;
	var zipcode = req.body.zipcode;
	var address = req.body.address;

	if (name && zipcode && address) {
		res.send('Done. name=' + name + ', zipcode=' + zipcode + ', address=' + address);
	}
	else {
		res.send('Incomplete. name=' + name + ', zipcode=' + zipcode + ', address=' + address);
	}
});

module.exports = router;
