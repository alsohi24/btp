$(document).ready(function(){
	 var offset = 100,
    scroll_top_duration = 700,
    $back_to_top = $('.btn-top'),
    $thedial = $('.dial'),
    $progress_bar = $('.progress-bar');
  
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

      if (s <= 0 ) {
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
});