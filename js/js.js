$(document).ready(function(){
	 var offset = 100,
    scroll_top_duration = 700,
    $back_to_top = $('.btn-top'),
    $thedial = $('.dial'),
    $progress_bar = $('.progress-bar'),
    $card_select = $('#cards .col-md-6 .modal-content');
  
  // Initialize the progress dial
    // $thedial.knob({
    //   'min' : 0,
    //   'max' : 100,
    //   'width' : 50,
    //   'height' : 50,
    //   'fgColor' : 'rgba(77, 91, 109, 0.8)',
    //   'skin' : 'tron',
    //   'thickness' : .2,
    //   'displayInput' : false,
    //   'displayPreview' : false,
    //   'readOnly' : true
    // });

  $(window).scroll(function(){
    
    // Hide or show the progress bar
    ( $(this).scrollTop() > offset ) ? $progress_bar.addClass('is-visible') : $progress_bar.removeClass('is-visible');
    
     // Get the window position and set it to a variale
      var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();
      scrollPercent = (s / (d-c)) * 100;

      // Bind the window position to the progress dial
      $('.dial').val(scrollPercent).change();
      
      if (s > 600 ) {
         $('nav').addClass('navbar-default');
     }

      if (s <= 600 ) {
        $('nav').removeClass('scrolled navbar-default');
      }    
     
    });

  //smooth scroll to top
  $back_to_top.on('click', function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
        }, scroll_top_duration
      );
    });



      $('.owl-carousel').owlCarousel({
                items: 2,
                margin: 20,
                autoHeight: true
              });

      var mouseX = 0, mouseY = 0, limitX = 150-15, limitY = 150-15;
$(window).mousemove(function(e){
  var offset = $('#section2.eye').offset();
   mouseX = Math.min(e.pageX - offset.left, limitX);
   mouseY = Math.min(e.pageY - offset.top, limitY);
   if (mouseX < 0) mouseX = 0;
   if (mouseY < 0) mouseY = 0;
});

// cache the selector
var follower = $("#iris");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 12;
    yp += (mouseY - yp) / 12;
    follower.css({left:xp, top:yp});
    
}, 30);
});