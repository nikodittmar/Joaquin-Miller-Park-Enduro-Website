$(window).scroll(function() {
    if ($(document).scrollTop() > 45) {
        $('nav').addClass('nav-active');
    } else {
        $('nav').removeClass('nav-active');
    }
    if ($(document).scrollTop() > 300) {
        document.getElementById('scroll-note').style.color = '#FFFFFF00';
    } else {
        document.getElementById('scroll-note').style.color = 'white';
    }
});