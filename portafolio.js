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

//Name
function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = "";

    let i = 0;
    const timer = setInterval(function () {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}


// application
const speed = 75;
const h4 = document.querySelector('h4');
const h6 = document.querySelector('h6');
const delay = h4.innerHTML.length * speed + speed;

// type affect to header
typeEffect(h4, speed);


// type affect to body
setTimeout(function(){
    h6.style.display = "inline-block";
    typeEffect(h6, speed);
}, delay);
