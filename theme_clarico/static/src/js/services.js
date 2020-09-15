odoo.define('theme_clarico.services', function (require) {
'use strict';

$(document).ready(function(){

    console.log("hellooooo")
    $('#myCarousel').carousel({
    interval: 5000
})

$('.carousel .carousel-item').each(function() {
    if(window.innerWidth <= 992){
        var minPerSlide = 2;
    }
    else {
      var itemsPerSlide = 1;
    }
    var next = $(this).next();
    console.log("------window-------", window)
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});

$(".owl-carousel").owlCarousel({
      items:3,
      autoplay:false,
      margin:30,
      loop:true,
      nav:true,
      navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>" ]
  });


$(document).on('click', '#globle_sourcing_a', function(){
    $('.globle_header').addClass('d-none')
    $('.globle_div').addClass('d-none')
    $('.globle_a').removeClass('service_a')
    $('#globle_sourcing_header').removeClass('d-none')
    $('#globle_sourcing_div').removeClass('d-none')
    $('#globle_sourcing_a').addClass('service_a')
});

$(document).on('click', '#outsourcing_a', function(){
    $('.globle_header').addClass('d-none')
    $('.globle_div').addClass('d-none')
    $('.globle_a').removeClass('service_a')
    $('#outsourcing_header').removeClass('d-none')
    $('#outsourcing_div').removeClass('d-none')
    $('#outsourcing_a').addClass('service_a')
});

$(document).on('click', '#international_service_a', function(){
    $('.globle_header').addClass('d-none')
    $('.globle_div').addClass('d-none')
    $('.globle_a').removeClass('service_a')
    $('#international_service_header').removeClass('d-none')
    $('#international_service_div').removeClass('d-none')
    $('#international_service_a').addClass('service_a')
});

$(document).on('click', '#small_orders_a', function(){
    $('.globle_header').addClass('d-none')
    $('.globle_div').addClass('d-none')
    $('.globle_a').removeClass('service_a')
    $('#small_orders_header').removeClass('d-none')
    $('#small_orders_div').removeClass('d-none')
    $('#small_orders_a').addClass('service_a')
});

$(document).on('click', '#urgent_orders_a', function(){
    $('.globle_header').addClass('d-none')
    $('.globle_div').addClass('d-none')
    $('.globle_a').removeClass('service_a')
    $('#urgent_orders_header').removeClass('d-none')
    $('#urgent_orders_div').removeClass('d-none')
    $('#urgent_orders_a').addClass('service_a')
});

$(document).on('click', '#system_engineering_a', function(){
    $('.globle_header').addClass('d-none')
    $('.globle_div').addClass('d-none')
    $('.globle_a').removeClass('service_a')
    $('#system_engineering_header').removeClass('d-none')
    $('#system_engineering_div').removeClass('d-none')
    $('#system_engineering_a').addClass('service_a')
});

$(document).on('click', '#key_benefits_a', function(){
    $('.globle_header').addClass('d-none')
    $('.globle_div').addClass('d-none')
    $('.globle_a').removeClass('service_a')
    $('#key_benefits_header').removeClass('d-none')
    $('#key_benefits_div').removeClass('d-none')
    $('#key_benefits_a').addClass('service_a')
});


});


});