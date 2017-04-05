var main = function() {};
	
	$(function() {
		$( "#accordion" ).accordion();
	});

	$(function() {
		$('.bxslider').bxSlider({
		mode: 'horizontal',
		slideWidth: 350,
		minSlides: 2,
		maxSlides: 3,
		moveSlides: 1,
		slideMargin: 5
		});
	});

	function initMap() {
		var myLatLng = {
			lat:40.742110, 
			lng: -74.185128
		};
		var map = new google.maps.Map(document.getElementById('map'), {
			center: myLatLng,
			zoom: 12,
			scrollwheel: false,
			draggable: false
		});
		var image = {
			url: '../img/map-marker.png'
		};
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: image
		});
	};

$(document).ready(main);