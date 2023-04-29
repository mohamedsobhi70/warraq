// page loader 
$(document).ready(function () {
    setTimeout(() => {
        $(".page-loader").fadeOut(400)
    }, 900);
    $(".page-loader svg").hide(900)
})


//
$('.owl-heaeder-categories').owlCarousel({
    rtl: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 30,
    dots: false,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        676: {
            items: 2
        },
        1024: {
            items: 4,
            nav: true,
        }
    }
})
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

if ($(".show-more-btn")) {
    $(".expanded").hide();
    $(".show-more-btn").click(function (eve) {
        eve.preventDefault();
        let th = $(this);
        console.log(th.siblings(".expanded"));
        th.parent().find(".expanded").toggle();
    });
}

if ($(".counter")) {
    function minusCheck() {
        if (+$(".counter .counter-num").html() > 1) {
            $(".counter .decrease").removeClass("opacity-20");
        } else {
            $(".counter .decrease").addClass("opacity-20");
        }
    }
    minusCheck()

    $(".counter .decrease").on("click", function () {
        if (+$(".counter .counter-num").html() > 1) {
            $(".counter .counter-num").text(+$(".counter .counter-num").html() - 1);
            minusCheck()
        }
    })
    $(".counter .increase").on("click", function () {
        $(".counter .counter-num").text(+$(".counter .counter-num").html() + 1);
        minusCheck()

    })

}

if ($(".drop-down")) {
    $(".drop-down").on("click", function () {
        $(this).siblings(".drop-down-list").toggleClass("active");
    })
}
if ($(".filter-sec")) {
    $(".filter-open").on("click", function () {
        $(".filter-sec").addClass("active");
    })
    $(".filter-close").on("click", function () {
        $(".filter-sec").removeClass("active");
    })
}
if ($(".filters")) {
    const filters = document.querySelectorAll('.filters li');

    filters.forEach(filter => {

        filter.addEventListener('click', function () {
            console.log(filter);
            let selectedFilter = filter.getAttribute('data-filter');
            let itemsToHide = document.querySelectorAll(`.items-filt .item:not([data-filter='${selectedFilter}'])`);
            let itemsToShow = document.querySelectorAll(`.items-filt [data-filter='${selectedFilter}']`);

            if (selectedFilter == 'all') {
                itemsToHide = [];
                itemsToShow = document.querySelectorAll('.items-filt [data-filter]');
            }

            itemsToHide.forEach(el => {
                el.classList.add('hide');
                el.classList.remove('show');
            });

            itemsToShow.forEach(el => {
                el.classList.remove('hide');
                el.classList.add('show');
            });

        });
    });

}

if ($(".focused-input")) {
    $(".focused-input").on("focus", function () {
        $(this).parent().addClass("shadow-inpt")
    }).on("blur", function () {
        $(this).parent().removeClass("shadow-inpt")
    })
}


// dropdown lists 
if ($(".drop-down")) {
    $(".drop-down").on("click", function () {
        $(this).parent().find(".drop-down-items").slideToggle(300);
        if ($(this).parent().find(".drop-down-icon")) {
            $(this).parent().find(".drop-down-icon").toggleClass("open");
        }
    })
}

// header categories
$(".header-cat-toggle").on("click", function () {
    $(".header-cat").slideToggle(300);
})

// if ($("#price-range")) {
//     $("#price-range").slider({
//         step: 10,
//         range: true,
//         min: 0,
//         max: 2500,
//         values: [20, 600],
//         isRTL: false,
//         slide: function (event, ui) { $("#priceRange").html("السعر:" + ui.values[0] + " ريال - " + ui.values[1] + " ريال  "); }
//     });
//     $("#priceRange").html($("#price-range").slider("values", 0) + " - " + $("#price-range").slider("values", 1));
// }

