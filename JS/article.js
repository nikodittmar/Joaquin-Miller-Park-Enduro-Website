let MobileMenuToggled = false;

$(window).scroll(function() {
    if ($(document).scrollTop() > 45) {
        if (!$('#nav').hasClass('nav-active')) {
            $('nav').addClass('nav-active');
        }
    } else {
        if (!MobileMenuToggled) {
            $('nav').removeClass('nav-active');
        }
    }
});

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    MobileMenuToggled = !MobileMenuToggled;
    if ($(document).scrollTop() < 45) {
        document.getElementById('nav').classList.toggle('nav-active');
    }
}