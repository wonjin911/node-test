var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addressbook', { 
  	title: 'Address Book'
  });
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
