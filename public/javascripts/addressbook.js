var zipcodeData = '';
var timer;
var interval = 1000; 		// 2s

var drawZipcode = function () {
	$('#zipcode').empty();
	for (zipcode of zipcodeData) {
		$('#zipcode').append('<option>' + zipcode + '</option>');
	}
};

$(document).ready(function () {
	$('#city').on('keyup', function () {
		var city = $('#city').val();
		//console.log(city); 					// for debug

		$.get('/addressbook/zipcode?city=' + encodeURIComponent(city), function (zipcodes, status) {
			zipcodeData = zipcodes;

			clearTimeout(timer);
			timer = setTimeout(drawZipcode, interval);
		});
	});
});
