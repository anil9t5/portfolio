jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');
	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();

	});
	//$('#cd-vertical-nav').addClass('hide-anchor');
	
	/*$(window).scroll(function(){
		if($(window).scrollTop() > 0) {
                // apply effects
                $('#tagline').addClass('animated fadeOutUp');
                

            }
            else{
				$('#tagline').removeClass('animated fadeOutUp');
            }


		if($(window).scrollTop() > 500){
			//$('#cd-vertical-nav').removeClass('hide-anchor');
			//$('#cd-vertical-nav').addClass('animated tada');
			

			
		} else {
			$('#cd-vertical-nav').addClass('hide-anchor');
			//$('#cd-vertical-nav').removeClass('animated tada');
			
			
		}
	});*/
	
	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

   

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});