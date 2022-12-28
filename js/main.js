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

    // New ads
    $('.mask-gosnomer').length ? $('.mask-gosnomer').mask('a  999  a a') : false;
    $('.mask-vin').length ? $('.mask-vin').mask('999') : false;
    $('.new-ad__radio input').change(function () {
        $(this).parents('.new-ad__radio-box').find('.new-ad__radio').removeClass('active');
        $(this).parent().addClass('active');
    });
    $('.new-ad__checkbox-label input').change(function () {
        $(this).parent().toggleClass('active');
    });
    $('.brand-ad__label input').change(function () {
        $(this).parents('.brand-ad__list').find('.brand-ad__label.active').removeClass('active');
        $(this).parent().addClass('active');
    });
    $('.contacts-ad__radio-label input').change(function () {
        $('.contacts-ad__radio-label.active').removeClass('active');
        $(this).parent().addClass('active');
    });
    $('.photo-ad__del').click(function () {
        $(this).parents('.photo-ad__photo-item').remove();
    });
    $('.photo-ad__photo-list').sortable({
        items: '.photo-ad__photo-item:not(:last-child)'
    });

});