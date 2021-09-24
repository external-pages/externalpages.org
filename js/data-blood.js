$(document).ready(function() {
  $('#tv-video')[0].play()
  $('.color').hide()
  $('.image').on('click', function() {
    $(this)
      .parent()
      .children('.color')
      .show()
  })
})
