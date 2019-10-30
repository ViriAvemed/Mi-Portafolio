$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});


// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    }

    else {
        $('nav').removeClass('black');
    }
});



// Effect loader
$(document).ready(function() {
    // Users can skip the loading process if they want.
    $('.skip').click(function() {
        $('.overlay2, body').addClass('loaded');
    });

    // Will wait for everything on the page to load.
    $(window).bind('load', function() {
        $('.overlay2, body').addClass('loaded');
        setTimeout(function() {
            $('.overlay2').css({'display':'none'})
        }, 2000)
    });

    // Will remove overlay after 1min for users cannnot load properly.
    setTimeout(function() {
        $('.overlay2, body').addClass('loaded');
    }, 60000);
});
