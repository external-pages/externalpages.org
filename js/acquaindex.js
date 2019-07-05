for (var i = 0; i < 5; i++) {
  $('.background').append('.fairies');
}
$( '.fairies' ).each(function( index ) {
  $(this).css({
    left : Math.random() * ($('.background').width() - $(this).width())
    ,
    top : Math.random() * ($('.background').height() - $(this).height())
  });
});




$(document).ready(function() {
    animateDiv($('.q img'));
        animateDiv($('.r img'));
        animateDiv($('.s img'));

            animateDiv($('.d img'));
        animateDiv($('.e img'));
        animateDiv($('.f img'));
            animateDiv($('.g img'));
        animateDiv($('.h img'));
        animateDiv($('.i img'));
        
            animateDiv($('.j img'));
        animateDiv($('.k img'));
        animateDiv($('.l img'));
        //     animateDiv($('.m img'));
        // animateDiv($('.n img'));
        // animateDiv($('.o img'));
        //     animateDiv($('.p img'));
        // animateDiv($('.q img'));
        // animateDiv($('.r img'));
        //     animateDiv($('.s img'));
        animateDiv($('.t img'));

});


function makeNewPosition($container) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = 1000;
    var w = 1000;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}





$(window).load(function() {
    //show();
});


function show() {
    $('#loading').hide();
    $('#myDiv').fadeIn();
};

setTimeout(show, 3000);


//

var timeline = new TimelineMax({
    repeat: -1,
    yoyo: true
  }),
  feTurb = document.querySelector('#feturbulence');

timeline.add(
  new TweenMax.to(feTurb, 30, {
    onUpdate: function() {
      var bfX = this.progress() * 0.045, //base frequency x
        bfY = this.progress() * 0.030, //base frequency y
        bfStr = bfX.toString() + ' ' + bfY.toString(); //base frequency string
      feTurb.setAttribute('baseFrequency', bfStr);
    }
  }), 0
);


// $(document).ready(function() {
//   var clientWidth = document.getElementById("container").clientWidth
//   var clientHeight = document.getElementById("container").clientHeight;

//   $('.fairies').each(function(idx, img) {
//     var randPosX = Math.floor((Math.random() * clientWidth));
//     var randPosY = Math.floor((Math.random() * clientHeight));
//     console.log(randPosY);
//     $(img).css('left', randPosX);
//     $(img).css('top', randPosY);

//   });
// });






