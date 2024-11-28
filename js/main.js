(function ($) {
    "use strict";
    
    // Loader
    const loader = () => {
        setTimeout(() => {
            $('#loader').removeClass('show');
        }, 1);
    };
    loader();

    // Back to top button
    const backToTopButton = () => {
        const $backToTop = $('.back-to-top');
        $(window).scroll(() => {
            if ($(this).scrollTop() > 200) {
                $backToTop.fadeIn('slow');
            } else {
                $backToTop.fadeOut('slow');
            }
        });
        $backToTop.click(() => {
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
            return false;
        });
    };
    backToTopButton();

    // Sticky Navbar
    const stickyNavbar = () => {
        $(window).scroll(() => {
            $('.navbar').toggleClass('nav-sticky', $(this).scrollTop() > 0);
        });
    };
    stickyNavbar();

    // Dropdown on mouse hover
    const dropdownHover = () => {
        const toggleNavbarMethod = () => {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').hover(
                    function () {
                        $('.dropdown-toggle', this).trigger('click');
                    }, 
                    function () {
                        $('.dropdown-toggle', this).trigger('click').blur();
                    }
                );
            } else {
                $('.navbar .dropdown').off('mouseenter mouseleave');
            }
        };
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    };
    dropdownHover();

    // Main carousel
    const mainCarousel = () => {
        $(".carousel .owl-carousel").owlCarousel({
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            smartSpeed: 300,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ]
        });
    };
    mainCarousel();

    // Modal Video
    const modalVideo = () => {
        let $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });

        $('#videoModal').on('shown.bs.modal', () => {
            $("#video").attr('src', `${$videoSrc}?autoplay=1&modestbranding=1&showinfo=0`);
        });

        $('#videoModal').on('hide.bs.modal', () => {
            $("#video").attr('src', $videoSrc);
        });
    };
    modalVideo();

    // Causes carousel
    const causesCarousel = () => {
        $(".causes-carousel").owlCarousel({
            autoplay: true,
            animateIn: 'slideInDown',
            animateOut: 'slideOutDown',
            items: 1,
            smartSpeed: 450,
            dots: false,
            loop: true,
            responsive: {
                0: { items: 1 },
                576: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });
    };
    causesCarousel();

    // Causes progress
    const causesProgress = () => {
        $('.causes-progress').waypoint(() => {
            $('.progress .progress-bar').each(function () {
                $(this).css("width", $(this).attr("aria-valuenow") + '%');
            });
        }, { offset: '80%' });
    };
    causesProgress();

    // Facts counter
    const factsCounter = () => {
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });
    };
    factsCounter();

    // Testimonials carousel
    const testimonialsCarousel = () => {
        $(".testimonials-carousel").owlCarousel({
            center: true,
            autoplay: true,
            dots: true,
            loop: true,
            responsive: {
                0: { items: 1 },
                576: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });
    };
    testimonialsCarousel();

    // Related post carousel
    const relatedPostCarousel = () => {
        $(".related-slider").owlCarousel({
            autoplay: true,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: { items: 1 },
                576: { items: 1 },
                768: { items: 2 }
            }
        });
    };
    relatedPostCarousel();
    
})(jQuery);