$(function () {


    $(".rate-star").rateYo({
        rating: 5,
        starWidth: '12px',
        readOnly: true
    });

    $('.product-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
    });



    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });




    $('.header__btn-menu').on('click', function () {
        $('.header__box').toggleClass('active');
    });

    


    var mixer = mixitup('.products__inner-box');    //писать последним

});

