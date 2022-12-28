// Пересчет rem в px для swiper
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/375) * (0.1 * $(window).width()) * rem;
    }
}

const card_slider_thumb = new Swiper('.card-slider__thumb-slider', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 4,
    spaceBetween: rem(1.7),
    initialSlide: 1,
});

const card_slider = new Swiper('.card-slider__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: rem(5),

    navigation: {
        nextEl: '.card-slider .next',
        prevEl: '.card-slider .prev',
    },

    pagination: {
        el: '.card-slider__pagination',
        type: 'fraction'
    },

    on: {
        slideChange: function (slider) {
            card_slider_thumb.slideToLoop(slider.realIndex + 1);
        },
    }
});

$('.card-slider__thumb-slide').click(function () {
    card_slider.slideToLoop($(this).data('swiper-slide-main'));
});