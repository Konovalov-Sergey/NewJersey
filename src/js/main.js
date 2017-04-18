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
//touch-menu
	$(".touch-menu").on("click", function() {
		$(".nav").slideToggle();
	});
	$(window).resize(function() {
		var wid = $(window).width();
		if (wid > 950 && $(".nav").is(':hidden')) {
			$(".nav").removeAttr('style');
		}
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
//	mask phone
	$('.phone_us').mask("+1 (999) 999-9999");
	$('.date').mask('9999/99/99');
//	form-validate
	$("#consult-form").validate({
		rules: {
			form_name: {
				required: true
			},
			form_phone: {
				required: true,
			}
		}
	});
	$("#quote-form").validate({
		rules: {
			form_name: {
				required: true,
			},
			form_email: {
				required: true,
				email: true
			},
			form_tel: {
				required: true,
			},
			form_date: {
				required: true,
			},
			form_from: {
				required: true
			},
			form_to: {
				required: true
			}
			
		}
	});
	$("#question-form").validate({
		rules: {
			form_name: {
				required: true,
			},
			form_email: {
				required: true,
				email: true
			},
			form_tel: {
				required: true,
			},
			form_textarea: {
				required: true
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
	
