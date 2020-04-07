(function ($) {	
	  
	$(".region-mobile-panel").once().prepend('<div id="mobile-panel-header"><button id="menu-close-icon"><span></span><span></span></button></div>' );	  
	  
    $("#menu-icon").click(function () {
        $("#mobile-panel-overlay").fadeIn();
        TweenMax.to(".region-mobile-panel", 0.5, {
            ease: Power1.easeOut,
            x: "0%"        
        })   
    });	

    $("#menu-close-icon").click(function () {
        $("#mobile-panel-overlay").fadeOut();
        TweenMax.to(".region-mobile-panel", 0.5, {
            ease: Power1.easeOut,
            x: "100%"
        })   
    });	

    $("#mobile-panel-overlay").click(function () {
        $(this).fadeOut();
        TweenMax.to(".region-mobile-panel", 0.5, {
            ease: Power1.easeOut,
            x: "100%"        
        })   
    }); 

	  
})(jQuery);



