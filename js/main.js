'use strict'

$(document).ready(function () {

    // Resume
    $('.resume__desc-btn').click(function () {
        $('.resume__desc-text').toggleClass('active')
        $(this).toggleClass('active');
    });
    $('.resume__map-title-box').click(function () {
        $('.resume__map-btn').toggleClass('active');
        $('.resume__map').slideToggle();
    });

});