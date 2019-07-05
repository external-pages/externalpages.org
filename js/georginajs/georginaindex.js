

$(window).on("load",function() {
  $(window).scroll(function() {


    var startPos = 0.2;

    var endPos = 0.65;


  // Cache window object
  var $w = $(window);

  // Basically, we go through each element and check its relative position within the viewport
  $('.scrollFade').each(function() {

    // Get current relative position in viewport, based on the top edge
    var pos = $(this).offset().top - $w.scrollTop();

    // Get viewport height
    var vh = $w.height();




    if (pos < vh * startPos) {
      // If element has past the starting threshold, we fade it
      $(this).css('opacity', pos / (vh * startPos) * 1);
    } else {
      $(this).css('opacity', 1);
    }

    if(pos > vh * endPos) {
           $(this).css('opacity', pos / (vh * startPos) * 0);
       }

     

  });
  }).scroll(); //invoke scroll-handler on page-load


});


  