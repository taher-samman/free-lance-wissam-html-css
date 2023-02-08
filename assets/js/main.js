(function ($) {
    $(window).scroll(function () {
        var header = $('header')
        if ($(window).scrollTop() > 0) {
            header.addClass('fixed');
            $('main').css('margin-top', parseInt(header.css('height')))
        } else {
            header.removeClass('fixed');
            $('main').css('margin-top', parseInt(0))
        }
    });

    $(document).ready(function () {
        if ($(window).scrollTop() > 0) {
            $('main').css('margin-top', parseInt($('header').css('height')))
        }
        if ($('.home-page-swiper').length) {
            const homePageSwiper = new Swiper('.home-page-swiper', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
            });
        }
        if ($('.books-swiper').length) {
            const booksSwiper = new Swiper('.books-swiper', {
                loop: true,
                pagination: {
                    el: '.books-swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },
                slidesPerView: 3,
                // spaceBetween: 10,
                // Responsive breakpoints
                // breakpoints: {
                //     // when window width is >= 320px
                //     320: {
                //         slidesPerView: 2,
                //         spaceBetween: 20
                //     },
                //     // when window width is >= 480px
                //     480: {
                //         slidesPerView: 3,
                //         spaceBetween: 30
                //     },
                //     // when window width is >= 640px
                //     640: {
                //         slidesPerView: 4,
                //         spaceBetween: 40
                //     }
                // }
            });
        }
    })
})(jQuery)