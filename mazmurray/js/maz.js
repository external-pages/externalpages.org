$(document).ready(function() {

	$('textarea').each(function() {
		$(this).height($(this).prop('scrollHeight'));
	});

	$(".zero").show();
	
	$(".one").hide();
	$("#nextButton1").click(function() {
		$(".one").toggle();
	});

	$(".two").hide();
	$("#nextButton2").click(function() {
		$(".two").toggle();
	});

	$(".three").hide();
	$("#nextButton3").click(function() {
		$(".three").toggle();
	});

	$(".four").hide();
	$("#nextButton4").click(function() {
		$(".four").toggle();
	});

	$(".five").hide();
	$("#nextButton5").click(function() {
		$(".five").toggle();
	});

	$(".six").hide();
	$("#nextButton6").click(function() {
		$(".six").toggle();
	});

	$(".seven").hide();
	$("#nextButton7").click(function() {
		$(".seven").toggle();
	});

	$(".eight").hide();
	$("#nextButton8").click(function() {
		$(".eight").toggle();
	});

	$('.inview').each(function(){
	    if ($(this).is(":in-viewport")) {
	        $(this)[0].play();
	    } else {
	        $(this)[0].pause();
	    }
	})

});

	function picture() {
	  var x = document.getElementById("myDIV");
	  if (x.style.display === "none") {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
	  document.getElementById("end").innerHTML = "The End";
	}
