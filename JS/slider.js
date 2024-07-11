$(function () {
    let slider = $("#slider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScloll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
});