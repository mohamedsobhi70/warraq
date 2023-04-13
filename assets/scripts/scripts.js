$('.owl-categories').owlCarousel({
    rtl: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 30,
    dots: false,
    responsive: {
        0: {
            items: 2,
            nav: false,
        },
        676: {
            items: 3
        },
        1024: {
            items: 6,
            nav: true,
        }
    }
})

$('.owl-bestseller').owlCarousel({
    rtl: true,
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 30,
    nav: false,
    responsive: {
        0: {
            items: 2,
            dots: true,
        },
        768: {
            items: 3,
            dots: false,
        },
        1024: {
            items: 4
        }
    }
})
