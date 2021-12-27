// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         $('.mobile').addClass("d-none")
//         $('.desktop').removeClass("d-none")
//     }
// }

// var x = window.matchMedia("(min-width: 768px)")
// myFunction(x) // Call listener function at run time

// function myFunction2(y) {
//     if (y.matches) { // If media query matches
//         $('.mobile').removeClass("d-none")
//         $('.desktop').addClass("d-none")
//     }
// }

// var y = window.matchMedia("(max-width: 768px)")
// myFunction2(y) // Call listener function at run time



$(document).ready(function () {
    $('.preloader').fadeOut();
    gsap.from('.logo', {
        duration: 1.5,
        y: '-100%',
        opacity: 0,
        ease: 'bounce'
    })
    gsap.from('.title1desktop, .title', {
        duration: 1.5,
        y: '100%',
        opacity: 0,
        ease: 'power2.in'
    })
    gsap.from('.title1desktop-desc, .title2', {
        duration: 1.5,
        y: '100%',
        opacity: 0,
        ease: 'power2.in',
        delay: 0.7
    })



    var height = $('.nav').height();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > height) {
            $('.nav').removeClass('navTr');
            $('.nav').addClass('navLi');




        } else if (scroll <= height) {
            $('.nav').removeClass('navLi');
            $('.nav').addClass('navTr');


        }
        position = scroll;
    });


    $('.descripte-what').hide();
    $('.descripte-when').hide();
    $('.descripte-why').hide();
    $('.descripte-where').hide();
    $('.descripte-who').hide();
    $('.descripte-how').hide();

    $('.what-desc').click(function (e) {
        e.preventDefault();
        $(".what").addClass("animate__rubberBand");
        $('.descripte-what').fadeIn();
        $('.what-desc').fadeOut();
    });
    $('.descripte-what').click(function (e) {
        e.preventDefault();
        $(".what").removeClass("animate__rubberBand");
        $('.what-desc').fadeIn();
        $('.descripte-what').fadeOut();
    });
    $('.why-desc').click(function (e) {
        e.preventDefault();
        $(".why").addClass("animate__heartBeat");
        $('.descripte-why').fadeIn();
        $('.why-desc').fadeOut();
    });
    $('.descripte-why').click(function (e) {
        e.preventDefault();
        $(".why").removeClass("animate__heartBeat");
        $('.why-desc').fadeIn();
        $('.descripte-why').fadeOut();
    });
    $('.when-desc').click(function (e) {
        e.preventDefault();
        $(".when").addClass("animate__wobble");
        $('.descripte-when').fadeIn();
        $('.when-desc').fadeOut();
    });
    $('.descripte-when').click(function (e) {
        e.preventDefault();
        $(".when").removeClass("animate__wobble");
        $('.when-desc').fadeIn();
        $('.descripte-when').fadeOut();
    });
    $('.who-desc').click(function (e) {
        e.preventDefault();
        $(".who").addClass("animate__shakeY");
        $('.descripte-who').fadeIn();
        $('.who-desc').fadeOut();
    });
    $('.descripte-who').click(function (e) {
        e.preventDefault();
        $(".who").removeClass("animate__shakeY");
        $('.who-desc').fadeIn();
        $('.descripte-who').fadeOut();
    });
    $('.where-desc').click(function (e) {
        e.preventDefault();
        $(".where").addClass("animate__swing");
        $('.descripte-where').fadeIn();
        $('.where-desc').fadeOut();
    });
    $('.descripte-where').click(function (e) {
        e.preventDefault();
        $(".where").removeClass("animate__swing");
        $('.where-desc').fadeIn();
        $('.descripte-where').fadeOut();
    });
    $('.how-desc').click(function (e) {
        e.preventDefault();
        $(".how").addClass("animate__tada");
        $('.descripte-how').fadeIn();
        $('.how-desc').fadeOut();
    });
    $('.descripte-how').click(function (e) {
        e.preventDefault();
        $(".how").removeClass("animate__tada");
        $('.how-desc').fadeIn();
        $('.descripte-how').fadeOut();
    });
    $('.akademik-rulebook').hide();
    $('.akademik-title').click(function (e) {
        e.preventDefault();
        $('.akademik-rulebook').fadeIn();
        $('.akademik-title').fadeOut();
    });
    $('.akademik-rulebook').click(function (e) {
        e.preventDefault();
        $('.akademik-title').fadeIn();
        $('.akademik-rulebook').fadeOut();
    });
    $('.coverjingle-rulebook').hide();
    $('.coverjingle-title').click(function (e) {
        e.preventDefault();
        $('.coverjingle-rulebook').fadeIn();
        $('.coverjingle-title').fadeOut();
    });
    $('.coverjingle-rulebook').click(function (e) {
        e.preventDefault();
        $('.coverjingle-title').fadeIn();
        $('.coverjingle-rulebook').fadeOut();
    });
    $('.fotografi-rulebook').hide();
    $('.fotografi-title').click(function (e) {
        e.preventDefault();
        $('.fotografi-rulebook').fadeIn();
        $('.fotografi-title').fadeOut();
    });
    $('.fotografi-rulebook').click(function (e) {
        e.preventDefault();
        $('.fotografi-title').fadeIn();
        $('.fotografi-rulebook').fadeOut();
    });
    $('.mtq-rulebook').hide();
    $('.mtq-title').click(function (e) {
        e.preventDefault();
        $('.mtq-rulebook').fadeIn();
        $('.mtq-title').fadeOut();
    });
    $('.mtq-rulebook').click(function (e) {
        e.preventDefault();
        $('.mtq-title').fadeIn();
        $('.mtq-rulebook').fadeOut();
    });
    $('.puisi-rulebook').hide();
    $('.puisi-title').click(function (e) {
        e.preventDefault();
        $('.puisi-rulebook').fadeIn();
        $('.puisi-title').fadeOut();
    });
    $('.puisi-rulebook').click(function (e) {
        e.preventDefault();
        $('.puisi-title').fadeIn();
        $('.puisi-rulebook').fadeOut();
    });
    $('.shortmovie-rulebook').hide();
    $('.shortmovie-title').click(function (e) {
        e.preventDefault();
        $('.shortmovie-rulebook').fadeIn();
        $('.shortmovie-title').fadeOut();
    });
    $('.shortmovie-rulebook').click(function (e) {
        e.preventDefault();
        $('.shortmovie-title').fadeIn();
        $('.shortmovie-rulebook').fadeOut();
    });

    var position = $(window).scrollTop();

    $('.descripte-area').hide();
    $('.descripte-what-desktop').hide();
    $('.descripte-why-desktop').hide();
    $('.descripte-when-desktop').hide();
    $('.descripte-where-desktop').hide();
    $('.descripte-who-desktop').hide();
    $('.descripte-how-desktop').hide();


    // WHAT
    $('.what-desc-desk').mouseenter(function () {
        $(".what").addClass("animate__rubberBand");
        $('.descripte-what-desktop').show();
        $('.what-desc-desk').hide();
        $('.descripte-area').html('Assyifa Festival 2022 "Manifestasi Asa, Sang Pembaharu Masa.');
        $('.descripte-area').show();
    });
    $('.descripte-what-desktop').mouseout(function () {
        $(".what").removeClass("animate__rubberBand");
        $('.descripte-what-desktop').hide();
        $('.what-desc-desk').show();
        $('.descripte-area').hide();
    });

    // WHY
    $('.why-desc-desk').mouseenter(function () {
        $(".why").addClass("animate__heartBeat");
        $('.descripte-why-desktop').show();
        $('.why-desc-desk').hide();
        $('.descripte-area').html('Wadah dan fasilitas bagi pelajar Indonesia untuk mampu meluaskan dan memanfaatkan potensinya.');
        $('.descripte-area').show();
    });
    $('.descripte-why-desktop').mouseout(function () {
        $(".why").removeClass("animate__heartBeat");
        $('.descripte-why-desktop').hide();
        $('.why-desc-desk').show();
        $('.descripte-area').hide();
    });
    // WHEN
    $('.when-desc-desk').mouseenter(function () {
        $(".when").addClass("animate__wobble");
        $('.descripte-when-desktop').show();
        $('.when-desc-desk').hide();
        $('.descripte-area').html('12-19 Februari 2022.');
        $('.descripte-area').show();
    });
    $('.descripte-when-desktop').mouseout(function () {
        $(".when").removeClass("animate__wobble");
        $('.descripte-when-desktop').hide();
        $('.when-desc-desk').show();
        $('.descripte-area').hide();
    });
    // WHERE
    $('.where-desc-desk').mouseenter(function () {
        $(".where").addClass("animate__swing");
        $('.descripte-where-desktop').show();
        $('.where-desc-desk').hide();
        $('.descripte-area').html('SMAIT ASSYIFA BOARDING SCHOOL JALANCAGAK dan media daring.');
        $('.descripte-area').show();
    });
    $('.descripte-where-desktop').mouseout(function () {
        $(".where").removeClass("animate__swing");
        $('.descripte-where-desktop').hide();
        $('.where-desc-desk').show();
        $('.descripte-area').hide();
    });
    // WHO
    $('.who-desc-desk').mouseenter(function () {
        $(".who").addClass("animate__shakeY");
        $('.descripte-who-desktop').show();
        $('.who-desc-desk').hide();
        $('.descripte-area').html('SMPIT & SMAIT ASSYIFA BOARDING SCHOOL.');
        $('.descripte-area').show();
    });
    $('.descripte-who-desktop').mouseout(function () {
        $(".who").removeClass("animate__shakeY");
        $('.descripte-who-desktop').hide();
        $('.who-desc-desk').show();
        $('.descripte-area').hide();
    });
    // HOW
    $('.how-desc-desk').mouseenter(function () {
        $(".how").addClass("animate__tada");
        $('.descripte-how-desktop').show();
        $('.how-desc-desk').hide();
        $('.descripte-area').html('Pengadaann seminar dan ragam bentuk lomba yang melibatkan aspek pendidikan dan seni yang bersifat edukatif dan terampil.');
        $('.descripte-area').show();
    });
    $('.descripte-how-desktop').mouseout(function () {
        $(".how").removeClass("animate__tada");
        $('.descripte-how-desktop').hide();
        $('.how-desc-desk').show();
        $('.descripte-area').hide();
    });

    $('.fotografi-rulebook-desk').hide();
    $('.fotografi-title-desk').mouseenter(function () {
        console.log("enter")
        $('.fotografi-title-desk').fadeOut();
        $('.fotografi-rulebook-desk').fadeIn();
    });
    $('.fotografi-rulebook-desk').mouseleave(function () {
        console.log("out")
        $('.fotografi-rulebook-desk').fadeOut();
        $('.fotografi-title-desk').fadeIn();
    });
    $('.shortmovie-rulebook-desk').hide();
    $('.shortmovie-title-desk').mouseenter(function () {
        console.log("enter")
        $('.shortmovie-title-desk').fadeOut();
        $('.shortmovie-rulebook-desk').fadeIn();
    });
    $('.shortmovie-rulebook-desk').mouseleave(function () {
        console.log("out")
        $('.shortmovie-rulebook-desk').fadeOut();
        $('.shortmovie-title-desk').fadeIn();
    });
    $('.akademik-rulebook-desk').hide();
    $('.akademik-title-desk').mouseenter(function () {
        console.log("enter")
        $('.akademik-title-desk').fadeOut();
        $('.akademik-rulebook-desk').fadeIn();
    });
    $('.akademik-rulebook-desk').mouseleave(function () {
        console.log("out")
        $('.akademik-rulebook-desk').fadeOut();
        $('.akademik-title-desk').fadeIn();
    });
    $('.coverjingle-rulebook-desk').hide();
    $('.coverjingle-title-desk').mouseenter(function () {
        console.log("enter")
        $('.coverjingle-title-desk').fadeOut();
        $('.coverjingle-rulebook-desk').fadeIn();
    });
    $('.coverjingle-rulebook-desk').mouseleave(function () {
        console.log("out")
        $('.coverjingle-rulebook-desk').fadeOut();
        $('.coverjingle-title-desk').fadeIn();
    });
    $('.puisi-rulebook-desk').hide();
    $('.puisi-title-desk').mouseenter(function () {
        console.log("enter")
        $('.puisi-title-desk').fadeOut();
        $('.puisi-rulebook-desk').fadeIn();
    });
    $('.puisi-rulebook-desk').mouseleave(function () {
        console.log("out")
        $('.puisi-rulebook-desk').fadeOut();
        $('.puisi-title-desk').fadeIn();
    });
    $('.mtq-rulebook-desk').hide();
    $('.mtq-title-desk').mouseenter(function () {
        console.log("enter")
        $('.mtq-title-desk').fadeOut();
        $('.mtq-rulebook-desk').fadeIn();
    });
    $('.mtq-rulebook-desk').mouseleave(function () {
        console.log("out")
        $('.mtq-rulebook-desk').fadeOut();
        $('.mtq-title-desk').fadeIn();
    });
    $('.regis-btn').mouseenter(function () {
        $('.regis-btn').addClass("animate__heartBeat");
    });
    $('.regis-btn').mouseleave(function () {
        $('.regis-btn').removeClass("animate__heartBeat");
    });

    // $('.descripte-what').click(function (e) {
    //     e.preventDefault();
    //     $('.what-desc').show();
    //     $('.descripte-what').hide();
    // });
    // should start at 0

    // $('.what-desc').mouseenter(function () {

    //     $('.descripte').show();
    //     $('.what-desc').hide();
    // });
    // $('.descripte').mouseleave(function () {

    //     $('.what-desc').show();
    //     $('.descripte').hide();
    // });

});