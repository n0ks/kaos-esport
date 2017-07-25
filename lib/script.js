$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');


    $("#btn-bars").on("click", function () {
        $("header").toggleClass("abrir-menu")
    });

    $("#menu-sombra, .btn-fechar").on("click", function () {
        $("header").removeClass("abrir-menu")
    });

    $("#btn-search").on("click", function () {
        $("header").toggleClass("abrir-procura");
        $("#procura-mobile").focus();
    });



});
