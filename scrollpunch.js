	
	//adds a class of .animate to an element as you scroll past it
	////trigger = determines element that should be animated when reached 
	////reset = determines an element that resets the animation 
	////offset = offsets trigger by a pixel value

	
	var addClassOnScroll = function(trigger,reset,offset){
		var hT = $(trigger).offset().top,
		    wH = window.innerHeight;

			if(hT < wH){
				if(!$(trigger).hasClass('animate')){
					trigger.className += ' '+ 'animate';
				}
			}


		$(window).scroll(function() {

			var hT = $(trigger).offset().top,
		       hH = $(trigger).outerHeight(),
		       wH = window.innerHeight;
		       wS = $(this).scrollTop();
		       var resetAnimation; 

		   	if(wS >= ((hT-wH)-(offset))){

				if(!$(trigger).hasClass('animate')){
					trigger.className += ' '+ 'animate';
				}

		   	}

			if(reset !== 'no-reset'){
				resetAnimation = $(reset).offset().top;
				removeAnimation();
			}
		
		   //reset when the distance to page top is less than the distance of reset element to page top
		   function removeAnimation(){
			if (wS <= resetAnimation){
				$(trigger).removeClass('animate');
			}
		   }
		});
	};

	//only fires the above onScroll event if element is present on page - (called on doc ready)
	var scrollPunch = function(trigger,reset,offset){ 
		if($(trigger).length>0){
			var triggers = document.body.querySelectorAll(trigger);
			for(var i = 0; i< triggers.length; i++){
				var currentTrigger = triggers[i];
				addClassOnScroll(currentTrigger,reset,offset);
			}
		}
	};

	//trigger animations like this: 
	// scrollPunch('.my-element','.header','200');


