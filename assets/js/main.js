jQuery(document).ready(function($) {
    $('.js-popup').magnificPopup({
        type: 'inline',
        closeBtnInside:true,
        autoFocusLast: true,
        focus:".modal-title",
    });

    $(document).on("click", ".js-menu", function() {
        $('.header__bottom').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.form-screen__row').mouseleave(function(){
        console.log($(this).find('input, textarea').val().length)
        if ($(this).find('input, textarea').val().length === 0) {
            $(this).removeClass('active');
        }
    });

    $('.form-screen__row').mouseenter(function(){
        $(this).addClass('active');
    });


    // burger
    let body = document.body,
        burgerMenu = document.getElementsByClassName('b-menu')[0],
        burgerNav = document.getElementsByClassName('b-nav')[0];

    burgerMenu.addEventListener('click', function toggleClasses() {
        [body, burgerNav].forEach(function (el) {
            el.classList.toggle('open');
        });
    }, false);



});
