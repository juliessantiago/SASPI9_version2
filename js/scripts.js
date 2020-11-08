//Efeitos 
    (function ($) {
    "use strict";  
    
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Mostra item ativo do menuzinho
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Efeito Collapse do menu 
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
   
    navbarCollapse();
    
    $(window).scroll(navbarCollapse);

    
})(jQuery); 
