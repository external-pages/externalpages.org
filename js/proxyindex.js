



////////////////////////////

function random_int(max) {
  return Math.floor(Math.random() * max);
}

$(document).ready(function() {
  var images = ['images/proxyimages/1st/2.png',
  'images/proxyimages/1st/4.png',
  'images/proxyimages/1st/8.png',
  'images/proxyimages/1st/11.png',
  'images/proxyimages/1st/16.png',
  'images/proxyimages/1st/18.png',
  'images/proxyimages/1st/21.png',
  'images/proxyimages/1st/23.png',
  'images/proxyimages/1st/26.png',
  'images/proxyimages/1st/27.png',
  ];
  var $divs = $('div.projectItem');

  $divs.each(function() {
    $('<img width="100%" />', {
      alt: this.id
    }).appendTo(this);
  });

  function switchImage() {
    var $div = $divs.eq(random_int($divs.length));
    var image = images[random_int(images.length)];

    $div.find('img').attr('src', image);
  }

  var imageChanger = setInterval(switchImage, 500);
  var imageChanger = setTimeout(10);

});

////////////////////////////

function random_int2(max) {
  return Math.floor(Math.random() * max);
}

$(document).ready(function() {
  var images2 = ['images/proxyimages/2nd/1.png',
  'images/proxyimages/2nd/2.png',
  'images/proxyimages/2nd/3.png',
  'images/proxyimages/2nd/4.png',
  'images/proxyimages/2nd/5.png',
  'images/proxyimages/2nd/6.png',
  'images/proxyimages/2nd/7.png',
  'images/proxyimages/2nd/8.png',
  'images/proxyimages/2nd/9.png',
  'images/proxyimages/2nd/10.png',
  'images/proxyimages/2nd/11.png',
  'images/proxyimages/2nd/12.png',
  'images/proxyimages/2nd/13.png',
  'images/proxyimages/2nd/14.png',
  'images/proxyimages/2nd/15.png',
  'images/proxyimages/2nd/16.png',
  'images/proxyimages/2nd/17.png',
  'images/proxyimages/2nd/18.png',
  'images/proxyimages/2nd/19.png',
  'images/proxyimages/2nd/20.png',
  'images/proxyimages/2nd/21.png',
  'images/proxyimages/2nd/22.png',
  'images/proxyimages/2nd/23.png',
  'images/proxyimages/2nd/24.png',
  'images/proxyimages/2nd/25.png',
  'images/proxyimages/2nd/26.png',
  'images/proxyimages/2nd/27.png',
  ];
  var $divs = $('div.projectItem2');

  $divs.each(function() {
    $('<img width="100%" />', {
      alt: this.id
    }).appendTo(this);
  });


  function switchImage2() {
    var $div = $divs.eq(random_int2($divs.length));
    var image2 = images2[random_int2(images2.length)];

    $div.find('img').attr('src', image2);
  }

  var imageChanger = setInterval(switchImage2, 250);
  var imageChanger = setTimeout(100);

});

////////////////////////////

function random_int(max) {
  return Math.floor(Math.random() * max);
}

$(document).ready(function() {
  var images = ['images/proxyimages/3rd/2.png',
  'images/proxyimages/3rd/2.png',
  'images/proxyimages/3rd/7.png',
  'images/proxyimages/3rd/21.png',
  'images/proxyimages/3rd/23.png',
  'images/proxyimages/3rd/33.png',
  ];
  var $divs = $('div.projectItem3');

  $divs.each(function() {
    $('<img width="100%" />', {
      alt: this.id
    }).appendTo(this);
  });

  function switchImage() {
    var $div = $divs.eq(random_int($divs.length));
    var image = images[random_int(images.length)];

    $div.find('img').attr('src', image);
  }

  var imageChanger = setInterval(switchImage, 1000);
  var imageChanger = setTimeout(5000);

});

////////////////////////////

function random_int(max) {
  return Math.floor(Math.random() * max);
}

$(document).ready(function() {
  var images = ['images/proxyimages/4th/10.png',
  'images/proxyimages/4th/11.png',
  'images/proxyimages/4th/12.png',
  'images/proxyimages/4th/13.png',
  'images/proxyimages/4th/14.png',
  'images/proxyimages/4th/15.png',
  'images/proxyimages/4th/16.png',
  'images/proxyimages/4th/17.png',
  'images/proxyimages/4th/18.png',
  'images/proxyimages/4th/19.png',
  'images/proxyimages/4th/20.png',
  'images/proxyimages/4th/21.png',
  'images/proxyimages/4th/22.png',
  'images/proxyimages/4th/23.png',
  'images/proxyimages/4th/24.png',
  'images/proxyimages/4th/25.png',
  'images/proxyimages/4th/26.png',
  'images/proxyimages/4th/27.png',
  ];
  var $divs = $('div.projectItem4');

  $divs.each(function() {
    $('<img width="100%" />', {
      alt: this.id
    }).appendTo(this);
  });

  function switchImage() {
    var $div = $divs.eq(random_int($divs.length));
    var image = images[random_int(images.length)];

    $div.find('img').attr('src', image);
  }

  var imageChanger = setInterval(switchImage, 200);
  var imageChanger = setTimeout(10000);

});

////////////////////////////

function random_int(max) {
  return Math.floor(Math.random() * max);
}

$(document).ready(function() {
  var images = ['images/proxyimages/5th/10.png',
  'images/proxyimages/5th/11.png',
  'images/proxyimages/5th/12.png',
  'images/proxyimages/5th/13.png',
  'images/proxyimages/5th/14.png',
  ];
  var $divs = $('div.projectItem5');

  $divs.each(function() {
    $('<img width="100%" />', {
      alt: this.id
    }).appendTo(this);
  });

  function switchImage() {
    var $div = $divs.eq(random_int($divs.length));
    var image = images[random_int(images.length)];

    $div.find('img').attr('src', image);
  }

  var imageChanger = setInterval(switchImage, 500);
  var imageChanger = setTimeout(15000);

});

////////////////////////////

function random_int(max) {
  return Math.floor(Math.random() * max);
}

$(document).ready(function() {
  var images = ['images/proxyimages/6th/10.png',
  'images/proxyimages/6th/25.png',
  'images/proxyimages/6th/37.png',
  'images/proxyimages/6th/39.png',
  ];
  var $divs = $('div.projectItem6');

  $divs.each(function() {
    $('<img width="100%" />', {
      alt: this.id
    }).appendTo(this);
  });

  function switchImage() {
    var $div = $divs.eq(random_int($divs.length));
    var image = images[random_int(images.length)];

    $div.find('img').attr('src', image);
  }

  var imageChanger = setInterval(switchImage, 2000);
  var imageChanger = setTimeout(20000);

});

////////////////////////////

function random_int(max) {
  return Math.floor(Math.random() * max);
}

$(document).ready(function() {
  var images = ['images/proxyimages/7th/1.png',
  'images/proxyimages/7th/2.png',
  'images/proxyimages/7th/3.png',
  'images/proxyimages/7th/4.png',
  'images/proxyimages/7th/5.png',
  'images/proxyimages/7th/6.png',
  'images/proxyimages/7th/7.png',
  'images/proxyimages/7th/8.png',
  'images/proxyimages/7th/9.png',
  'images/proxyimages/7th/10.png',
  'images/proxyimages/7th/11.png',
  'images/proxyimages/7th/12.png',
  'images/proxyimages/7th/13.png',
  'images/proxyimages/7th/14.png',
  'images/proxyimages/7th/15.png',
  'images/proxyimages/7th/16.png',
  'images/proxyimages/7th/17.png',
  'images/proxyimages/7th/18.png',
  'images/proxyimages/7th/19.png',
  'images/proxyimages/7th/20.png',
  'images/proxyimages/7th/21.png',
  'images/proxyimages/7th/22.png',
  'images/proxyimages/7th/23.png',
  'images/proxyimages/7th/24.png',
  'images/proxyimages/7th/25.png',
  'images/proxyimages/7th/26.png',
  'images/proxyimages/7th/27.png',
  'images/proxyimages/7th/28.png',
  'images/proxyimages/7th/29.png',
  'images/proxyimages/7th/30.png',
  'images/proxyimages/7th/31.png',
  'images/proxyimages/7th/32.png',
  'images/proxyimages/7th/33.png',
  'images/proxyimages/7th/34.png',
  'images/proxyimages/7th/35.png',
  'images/proxyimages/7th/36.png',
  'images/proxyimages/7th/37.png',
  'images/proxyimages/7th/38.png',
  'images/proxyimages/7th/39.png',
  'images/proxyimages/7th/40.png',
  ];
  var $divs = $('div.projectItem7');

  $divs.each(function() {
    $('<img width="100%" />', {
      alt: this.id
    }).appendTo(this);
  });

  function switchImage() {
    var $div = $divs.eq(random_int($divs.length));
    var image = images[random_int(images.length)];

    $div.find('img').attr('src', image);
  }

  var imageChanger = setInterval(switchImage, 300);
  var imageChanger = setTimeout(25000);

});

////////////////////////////

function random_int(max) {
  return Math.floor(Math.random() * max);
}

$(document).ready(function() {
  var images = ['images/proxyimages/8th/1.png',
  'images/proxyimages/8th/2.png',
  'images/proxyimages/8th/3.png',
  'images/proxyimages/8th/4.png',
  'images/proxyimages/8th/5.png',
  'images/proxyimages/8th/6.png',
  'images/proxyimages/8th/7.png',
  'images/proxyimages/8th/8.png',
  'images/proxyimages/8th/9.png',
  'images/proxyimages/8th/10.png',
  'images/proxyimages/8th/11.png',
  'images/proxyimages/8th/12.png',
  'images/proxyimages/8th/13.png',
  'images/proxyimages/8th/14.png',
  'images/proxyimages/8th/15.png',
  'images/proxyimages/8th/20.png',
  'images/proxyimages/8th/21.png',
  'images/proxyimages/8th/22.png',
  'images/proxyimages/8th/23.png',
  'images/proxyimages/8th/24.png',
  'images/proxyimages/8th/25.png',
  'images/proxyimages/8th/26.png',
  'images/proxyimages/8th/27.png',
  'images/proxyimages/8th/28.png',
  'images/proxyimages/8th/29.png',
  'images/proxyimages/8th/30.png',
  'images/proxyimages/8th/31.png',
  'images/proxyimages/8th/32.png',
  'images/proxyimages/8th/33.png',
  'images/proxyimages/8th/34.png',
  'images/proxyimages/8th/35.png',
  'images/proxyimages/8th/36.png',
  ];
  var $divs = $('div.projectItem8');

  $divs.each(function() {
    $('<img width="100%" />', {
      alt: this.id
    }).appendTo(this);
  });

  function switchImage() {
    var $div = $divs.eq(random_int($divs.length));
    var image = images[random_int(images.length)];

    $div.find('img').attr('src', image);
  }

  var imageChanger = setInterval(switchImage, 1000);
  var imageChanger = setTimeout(30000);

});

////////////////////////////

function random_int(max) {
  return Math.floor(Math.random() * max);
}

$(document).ready(function() {
  var images = ['images/proxyimages/9th/11.png',
  'images/proxyimages/9th/25.png',
  ];
  var $divs = $('div.projectItem9');

  $divs.each(function() {
    $('<img width="100%" />', {
      alt: this.id
    }).appendTo(this);
  });

  function switchImage() {
    var $div = $divs.eq(random_int($divs.length));
    var image = images[random_int(images.length)];

    $div.find('img').attr('src', image);
  }

  var imageChanger = setInterval(switchImage, 4000);
  var imageChanger = setTimeout(35000);

});

////////////////////////////

function random_int(max) {
  return Math.floor(Math.random() * max);
}

$(document).ready(function() {
  var images = ['images/proxyimages/10th/1.png',
  'images/proxyimages/10th/2.png',
  'images/proxyimages/10th/3.png',
  'images/proxyimages/10th/4.png',
  'images/proxyimages/10th/5.png',
  'images/proxyimages/10th/6.png',
  'images/proxyimages/10th/7.png',
  'images/proxyimages/10th/8.png',
  'images/proxyimages/10th/9.png',
  'images/proxyimages/10th/10.png',
  'images/proxyimages/10th/12.png',
  'images/proxyimages/10th/13.png',
  'images/proxyimages/10th/14.png',
  'images/proxyimages/10th/15.png',
  'images/proxyimages/10th/16.png',
  'images/proxyimages/10th/17.png',
  'images/proxyimages/10th/18.png',
  'images/proxyimages/10th/19.png',
  'images/proxyimages/10th/20.png',
  'images/proxyimages/10th/21.png',
  'images/proxyimages/10th/22.png',
  ];
  var $divs = $('div.projectItem10');

  $divs.each(function() {
    $('<img width="100%" />', {
      alt: this.id
    }).appendTo(this);
  });

  function switchImage() {
    var $div = $divs.eq(random_int($divs.length));
    var image = images[random_int(images.length)];

    $div.find('img').attr('src', image);
  }

  var imageChanger = setInterval(switchImage, 250);
  var imageChanger = setTimeout(40000);

});

////////////////////////////


$('.position').each(function() {
    moveRandom($(this));
});



$(document).ready(function() {
  var bodyWidth = document.body.clientWidth
  var bodyHeight = document.body.clientHeight;

  $('.projectItem').each(function(idx, img) {
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));
    console.log(randPosY);
    $(img).css('right', randPosX);
    $(img).css('top', randPosY);

  });

  $('.projectItem2').each(function(idx, img) {
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));
    console.log(randPosY);
    $(img).css('left', randPosX);
    $(img).css('top', randPosY);

  });

    $('.projectItem3').each(function(idx, img) {
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));
    console.log(randPosY);
    $(img).css('right', randPosX);
    $(img).css('bottom', randPosY);

  });

    $('.projectItem4').each(function(idx, img) {
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));
    console.log(randPosY);
    $(img).css('left', randPosX);
    $(img).css('bottom', randPosY);

  });

    $('.projectItem5').each(function(idx, img) {
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));
    console.log(randPosY);
    $(img).css('right', randPosX);
    $(img).css('bottom', randPosY);

  });

    $('.projectItem6').each(function(idx, img) {
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));
    console.log(randPosY);
    $(img).css('left', randPosX);
    $(img).css('top', randPosY);

  });

    $('.projectItem7').each(function(idx, img) {
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));
    console.log(randPosY);
    $(img).css('left', randPosX);
    $(img).css('bottom', randPosY);

  });

  $('.projectItem8').each(function(idx, img) {
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));
    console.log(randPosY);
    $(img).css('right', randPosX);
    $(img).css('top', randPosY);

  });

  $('.projectItem9').each(function(idx, img) {
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));
    console.log(randPosY);
    $(img).css('right', randPosX);
    $(img).css('bottom', randPosY);

  });

  $('.projectItem10').each(function(idx, img) {
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));
    console.log(randPosY);
    $(img).css('left', randPosX);
    $(img).css('bottom', randPosY);

  });

});



$(document).ready(function() {
    // Hide the div
    $('.projectItem').hide();
    // Show the div in 5s
    $('.projectItem').show(10);
});

$(document).ready(function() {
    // Hide the div
    $('.projectItem2').hide();
    // Show the div in 5s
    $('.projectItem2').show(100);
});

$(document).ready(function() {
    // Hide the div
    $('.projectItem3').hide();
    // Show the div in 5s
    $('.projectItem3').show(5000);
});

$(document).ready(function() {
    // Hide the div
    $('.projectItem4').hide();
    // Show the div in 5s
    $('.projectItem4').show(10000);
});

$(document).ready(function() {
    // Hide the div
    $('.projectItem5').hide();
    // Show the div in 5s
    $('.projectItem5').show(15000);
});

$(document).ready(function() {
    // Hide the div
    $('.projectItem6').hide();
    // Show the div in 5s
    $('.projectItem6').show(20000);
});

$(document).ready(function() {
    // Hide the div
    $('.projectItem7').hide();
    // Show the div in 5s
    $('.projectItem7').show(25000);
});

$(document).ready(function() {
    // Hide the div
    $('.projectItem8').hide();
    // Show the div in 5s
    $('.projectItem8').show(30000);
});

$(document).ready(function() {
    // Hide the div
    $('.projectItem9').hide();
    // Show the div in 5s
    $('.projectItem9').show(35000);
});

$(document).ready(function() {
    // Hide the div
    $('.projectItem10').hide();
    // Show the div in 5s
    $('.projectItem10').show(40000);
});








