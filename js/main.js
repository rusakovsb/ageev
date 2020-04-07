(function ($) {

    $(".our-photo").each(function() {
        var attr = $(this).attr('data-image-src');
        $(this).css('background-image', 'url('+attr+')');      
    }); 

    $(".scrollbar-inner").scrollbar(); 
        
    $("#menu-icon") .click(function () {    
        TweenMax.to(".region-sidebar-first", 0.5, {
            ease: Power3.easeOut,
            x: "0%"     
        })    
    }); 
      
    $("#menu-close-icon").click(function () {   
        TweenMax.to(".region-sidebar-first", 0.5, {
            ease: Power3.easeOut,
            x: "-100%"     
        })    
    }); 
		
	$(".region-popup").once().append('<button id="popup-close"><span></span><span></span></button>');	    
	  
	$(".popup-trigger").click(function () {	
        $("#popup").fadeIn(); 
	});	
	  
	$("#popup-close").click(function () {	
        $("#popup").fadeOut();	
	});

	$("#popup-overlay").click(function () {
        $("#popup").fadeOut();
    });

    $(window).on("load", function() { 

        TweenMax.to(".our-photo", 1, {
            ease: Expo.easeOut,
            opacity: "1"
        });

		TweenMax.to(".animated-logo__letter-blue", 2, {
            ease: Expo.easeOut,
            opacity: "1",
            y: "0"
        });

        TweenMax.to(".animated-logo__letter-grey", 2, {
            ease: Expo.easeOut,
            delay: 0.5,
            opacity: "1",
            y: "0"
        });

        TweenMax.to(".animated-logo__line", 2, {
            ease: Expo.easeInOut,
            delay: 0.25,
            opacity: "1",
            x: "0"
        });

        TweenMax.staggerTo(".animated-site-name span", 2, {
            ease: Expo.easeOut,
            delay: 1.75,
            opacity: "1",
            y: "0"    
        }, 0.025);

	  	TweenMax.to(".animated-site-slogan", 1.75, {
            ease: Expo.easeOut,
            delay: 2.5,
            opacity: "1",
            y: "0"
        });

        TweenMax.staggerTo(".view-service-description ul li", 1, {
            ease: Power3.easeOut,
            opacity: "1",
            x: "0"     
        }, 0.05);

        TweenMax.to(".view-service-subtitle", 1, {
            ease: Power3.easeOut,
            opacity: "1",
            x: "0"
        });

        TweenMax.to(".view-article-subtitle", 1, {
            ease: Power3.easeOut,
            opacity: "1",
            x: "0"
        });

        TweenMax.staggerTo(".view-services .views-row", 1, {
            ease: Power3.easeOut,
            opacity: "1",
            x: "0"     
        }, 0.05);

        TweenMax.staggerTo(".view-articles .views-row", 1, {
            ease: Power3.easeOut,
            opacity: "1",
            x: "0"     
        }, 0.05);

        TweenMax.staggerTo(".view-practice .views-row", 1, {
            ease: Power3.easeOut,
            opacity: "1",
            x: "0"     
        }, 0.05);

        TweenMax.staggerTo(".view-team .views-row", 1, {
            ease: Power3.easeOut,
            opacity: "1"
        }, 0.05);

        TweenMax.to(".node__content", 1, {
            ease: Power3.easeOut,
            opacity: "1"
        });

        TweenMax.staggerTo(".node__content ul li", 1, {
            ease: Power3.easeOut,
            opacity: "1",
            x: "0"     
        }, 0.05);

    });

})(jQuery);



