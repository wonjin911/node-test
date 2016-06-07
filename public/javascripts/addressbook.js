$(document).ready(function () {
	$('#city').on('keyup', function () {
		var city = $('#city').val();
		//console.log(city); 					// for debug

		$.get('/addressbook/zipcode?city=' + encodeURIComponent(city), function (zipcodes, status) {
			//console.log(zipcodes); 			// for debug
			$('#zipcode').empty();
			for (zipcode of zipcodes) {
				$('#zipcode').append('<option>' + zipcode + '</option>');
			}
		});
	});
});
