
//sticky footer
$(document).ready(function() {
	$(window).scroll(function() {
		var height = $(window).scrollTop();
   if($(window).scrollTop() + $(window).height() + $(document).height() - 90) {
       $('#footer').css('position', 'sticky', 'bottom', '0px');

		} else {
			$('#footer').css('position', 'relative');
		
   		}
	});
});

//#navbar
$(document).ready(function() {
	$(window).on('scroll', function() {
		var y = $(window).scrollTop();
		console.log(y);
		if (y > 1) {
			$('#navbar').addClass('fixedNav');
		} if(y < 1) {
			$('#navbar').removeClass('fixedNav');
		}
	});	
});

//setings for menu on small screens
$(document).ready(function() {
	$('.hamb').on('click', function() {
		$('#wrapNav').addClass('colapseNav').removeClass('hideNav');
		$('.hamb').fadeOut(200);
		$('.x-icon').fadeIn(200);		
	});
});

$(document).ready(function() {
	$('.x-icon').on('click', function() {
		$('#wrapNav').addClass('hideNav').removeClass('colapseNav');
		$('.x-icon').fadeOut(200);
		$('.hamb').fadeIn(200);		
	});
});

//Slider

 $(document).ready(function(){
  $('.slider').slick({
    dots: true,
    speed: 500,
    slidesToShow: 1,
    cssEase: 'ease-in-out',
    mobileFirst: true,
    pauseOnHover: true
  });
});


/*Dropdown menu*/
$(document).ready(function() {
	$('.wrapOfBtn').on('mouseleave', function() {
		$('.dropdown').fadeOut(200);
	});
	
	$('.wrapOfBtn').on('mouseover', function() {
		$('.dropdown').fadeIn(200);
	});
});


//Filter
// init Isotope

//Google
    
  