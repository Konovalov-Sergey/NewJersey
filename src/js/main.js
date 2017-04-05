$(function() {
//accordion
	$( "#accordion" ).accordion();
//slider
	$('.bxslider').bxSlider({
	mode: 'horizontal',
	slideWidth: 350,
	minSlides: 2,
	maxSlides: 3,
	moveSlides: 1,
	slideMargin: 5
	});
//popup
	$( "#tel" ).dialog({
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 1000
		},
		hide: {
			effect: "explode",
			duration: 1000
		}
	});

	$( "#opener" ).on( "click", function() {
		$( "#tel" ).dialog( "open" );
	});
//	form-validate
	$("#consult-form").validate({
		rules: {
			consult_form_name: {
				required: true
			},
			consult_form_phone: {
				required: true,
				digits: true
			}
		}
	});
	
});
//map
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
	
