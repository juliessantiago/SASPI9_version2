//Efeitos 
    (function ($) {
    "use strict"; 

    // Scrolling 
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Fecha o menuzinho quando dá scroll 
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
    // Efeito Collapse quando página não esta no topo 
    navbarCollapse();
    // Efeito Collapse quando dá scroll 
    $(window).scroll(navbarCollapse);
})(jQuery); 
