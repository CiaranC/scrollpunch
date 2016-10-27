	
	//adds a class of .animate to an element as you scroll past it
	////trigger = determines element that should be animated when reached 
	////reset = determines an element that resets the animation 
	////offset = offsets trigger by a pixel value
	var addClassOnScroll = function(trigger,reset,offset){
		$(window).scroll(function() {
		   var hT = $(trigger).offset().top,
		       hH = $(trigger).outerHeight(),
		       wH = $(window).height(),
		       wS = $(this).scrollTop(),
		       resetAnimation = $(reset).offset().top;

		   	if(wS >= ((hT-wH)-(offset))){
		   		$(trigger).addClass('animate');
		   	}
		
		   //reset when the distance to page top is less than the distance of reset element to page top
		   if (wS <= resetAnimation){
		   	$('.animate').removeClass('animate');
		   }
		});
	};

	//only fires the above onScroll event if element is present on page - (called on doc ready)
	var scrollPunch = function(trigger,reset,offset){ 
		if($(trigger).length>0){
			addClassOnScroll(trigger,reset,offset);
		}
	};

	//trigger animations like this: 
	// scrollPunch('.my-element','.header','200');