// enable link to tab

var url = document.location.toString();

if (url.match('#')) {
	$('.nav-tabs a[data-href="#'+url.split('#')[1]+'"]').tab('show');
} 

// with HTML5 history API, prevent scrolling when tab is visible

$('.nav-tabs a').on('shown.bs.tab', function (e) {
	if(history.pushState) {
	    history.pushState(null, null, $(this).data('href')); 
	} else {
	    window.location.hash = $(this).data('href'); //polyfill for old browsers
	}

});

$(document).ready(function(){

	// make title open a certain subtitle in nav bar
	// title = #b1
	// subtitle = .box

	$('#b1').on('click', function() {
		$('.box').slideToggle('fast').css('display', 'block');
		$('.colon').toggle('fast');
	});

	$('#b1').hover(function() {
		$('.colon').css({'color': 'Lime'});
	}, function() {
		$('.colon').css({'color': 'coral'});
	});

	// other misc titles like in manifesto page?

	$('#b2').on('click', function() {
		$('.two').slideToggle('fast');
	});
	$('#b3').on('click', function() {
		$('.three').slideToggle('fast');
	});
	$('#b4').on('click', function() {
		$('.four').slideToggle('fast');
	});

	// show date on subtitle hover

	$('.date').css('visibility', 'hidden');
	$('.box, .visiblebox').mouseenter(function () {
		$(this).find('.date').css('visibility', 'visible');
	}).mouseleave(function () {
		$(this).find('.date').css('visibility', 'hidden');
	});

	// (phone) check if you support touch

$(window).resize(function(){

	if ($(window).width() <= 320) {
		let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
		$('#b1').on(touchEvent, function() {
		  $('.box').slideToggle('fast');
		  $('.colon').toggle('fast');
		});

    }     

});

});
