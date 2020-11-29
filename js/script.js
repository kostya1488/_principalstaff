// ---------------------------------------------------------------

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
// ---------------------------------------------------------------

$(document).ready(function() {
    $('.munu_button').click(function(e) {
        e.preventDefault();
        $('.header').toggleClass('menu_opened');
        $('.body').css('overflow', 'hidden');
    });
    $('.card').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('flipped');
    });

});