$(document).ready(function(){

	//Background Main
	$(".main-menu").hover(function(){
		$(".menu-me").hover(function(){
			$(".main").css("background", "url(img/new/main-me.jpg)")
			$(".main").css("background-repeat", "no-repeat");
			$(".main").css("background-position","center");
		});

		$(".menu-prog").hover(function(){
			$(".main").css("background", "url(img/new/main-prog.jpg) no-repeat center center");
		});

		$(".menu-music").hover(function(){
			$(".main").css("background", "url(img/new/main-music.jpg) no-repeat center center");
		});

		$(".menu-contact").hover(function(){
			$(".main").css("background", "url(img/new/main-contact.jpg) no-repeat center center");
		});
	});
	
	//reset



	//Menu Main

	$(".menu-me").hover(function(){
		$(".menu-me i").css("color","#000000");
		$(".menu-item").mouseleave(function(){
			$(".menu-me i").css("color","#ffc107")
		});
		$(".carousel-item").removeClass("active");
		$(".carousel-me").addClass("active");
	});

	$(".menu-prog").hover(function(){
		$(".menu-prog i").css("color","#ffffff");
		$(".menu-item").mouseleave(function(){
			$(".menu-prog i").css("color","#28a745")
		});
		$(".carousel-item").removeClass("active");
		$(".carousel-prog").addClass("active");
	});

	$(".menu-music").hover(function(){
		$(".menu-music i").css("color","#ffffff");
		$(".menu-item").mouseleave(function(){
			$(".menu-music i").css("color","#004085")
		});
		$(".carousel-item").removeClass("active");
		$(".carousel-music").addClass("active");
	});

	$(".menu-contact").hover(function(){
		$(".menu-contact i").css("color","#ffffff");
		$(".menu-item").mouseleave(function(){
			$(".menu-contact i").css("color","#6E1919")
		});
		$(".carousel-item").removeClass("active");
		$(".carousel-contact").addClass("active");
	});

	//smooth scroll

	// Select all links with hashes
	$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
    	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    	&& 
    	location.hostname == this.hostname
    	) {
      // Figure out element to scroll to
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
        	scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
          	return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });
    }
}
});

});