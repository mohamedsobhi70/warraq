
// mobile menu 
$(".mobile-menu-btn").on("click", function () {
    $(".mobile-menu").addClass("active");
})

$(".mobile-menu-close").on("click", function () {
    $(".mobile-menu").removeClass("active");
})

function id(v) { return document.getElementById(v); }
function loadbar() {
    var ovrl = document.querySelector(".page-loader"),
        stat = id("progstat"),
        img = document.images,
        c = 0;
    tot = img.length;

    function imgLoaded() {
        c += 1;
        var perc = ((100 / tot * c) << 0);
        stat.innerHTML = perc;
        if (c === tot) return doneLoading();
    }
    function doneLoading() {
        setTimeout(function () {
            ovrl.style.display = "none";
        }, 300);
    }
    for (var i = 0; i < tot; i++) {
        var tImg = new Image();
        tImg.onload = imgLoaded;
        tImg.onerror = imgLoaded;
        tImg.src = img[i].src;
    }
}
document.addEventListener('DOMContentLoaded', loadbar, false);

//

$('.book-details').owlCarousel({
    rtl: true,
    margin: 16,
    autoplay: true,
    loop: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
        0: {
            nav: false,
            items: 2,
        },
        768: {
            items: 3,
            nav: true,
        }
    }
})

$('.package-details').owlCarousel({
    rtl: true,
    margin: 16,
    autoplay: true,
    loop: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
        0: {
            items: 1.5,
            nav: false,
        },
        768: {
            items: 2.5,
            nav: true,
        }
    }
})

$('.owl-hero-book').owlCarousel({
    items: 2.4,
    rtl: true,
    loop: true,
    margin: 30,
    dots: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    touchDrag: false,
})

$('.owl-header-categories').owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    dots: false, items: 4,
    nav: true,

})

$('.owl-filters').owlCarousel({
    rtl: true,
    margin: 12,
    dots: false,
    nav: false,
    autoWidth: true,
    responsive: {
        0: {
            items: 24.5,
        },
        676: {
            items: 5
        },
        1024: {
            items: 6,
            mouseDrag: false
        }
    }
})

$('.owl-categories').owlCarousel({
    rtl: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
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
    autoplayTimeout: 4000,
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


// show more texr 
if ($(".show-more-btn")) {
    $(".expanded").hide();
    $(".show-more-btn").click(function (eve) {
        eve.preventDefault();
        let th = $(this);
        th.parent().find(".expanded").toggle();
    });
}

// counter 

if ($(".counter")) {
    $(".counter").each(function () {
        let th = $(this);
        function minusCheck() {
            if (+(th.find(".counter-num").html()) > 1) {
                th.find(".decrease").removeClass("opacity-20");
            } else {
                th.find(".decrease").addClass("opacity-20");
            }
        }
        minusCheck()

        th.find(".decrease").on("click", function () {
            if (+(th.find(".counter-num").html()) > 1) {
                th.find(".counter-num").text(+(th.find(".counter-num").html()) - 1);
                minusCheck()
            }
        })

        th.find(".increase").on("click", function () {
            th.find(".counter-num").text(+(th.find(".counter-num").html()) + 1);
            minusCheck()

        })

    }
    )

}

if ($(".drop-down")) {
    $(".drop-down").on("click", function () {
        $(this).siblings(".drop-down-list").toggleClass("active");
    })
}

if ($(".filter-sec").length > 0) {
    $(".filter-sec").on("click", function (e) {
        if (e.target.className.includes("filter-sec") || e.target.className.includes("filter-close")) {
            $(".filter-sec").removeClass("active");
        }
    })
    $(".filter-open").on("click", function () {
        $(".filter-sec").addClass("active");
    })
    $(".filter-close").on("click", function () {
        $(".filter-sec").removeClass("active");
    })
}

if ($(".filters").length > 0) {
    const filters = document.querySelectorAll('.filters li');

    filters.forEach(filter => {

        filter.addEventListener('click', function () {
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

// shadow on input parent 
if ($(".focused-input")) {
    $(".focused-input").on("focus", function () {
        $(this).parent().addClass("shadow-inpt")
    }).on("blur", function () {
        $(this).parent().removeClass("shadow-inpt")
    })
}


// dropdown lists 
if ($(".drop-down").length > 0) {

    $(".drop-down").on("click", function () {
        $(this).parent().find(".drop-down-items").slideToggle(300);
        if ($(this).parent().find(".drop-down-icon")) {
            $(this).parent().find(".drop-down-icon").toggleClass("open");
        }
    })
    $(".drop-down-list li").on("click", function () {
        $(this).closest(".relative").find(".drop-down span").text($(this).text().trim());
        $(this).parent().removeClass("active");
    })
}

$(".mobile-dropdown").on("click", function () {
    $(this).siblings(".mobile-dropdown-list").slideToggle(300);
    if ($(this).parent().find(".drop-down-icon")) {
        $(this).parent().find(".drop-down-icon").toggleClass("open");
    }
})


// header categories
$(".header-cat-toggle").on("click", function () {
    $(".header-cat").slideToggle(400);
})

if ($("#price-range").length > 0) {
    // price range slider
    let rangeInput = document.querySelectorAll(".range-input input"),
        progress = document.querySelector(".slider .progress");
    rangeInput.forEach(input => {
        input.addEventListener("input", e => {
            let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value);
            if (maxVal - minVal < 0) {
                rangeInput[0].value = maxVal;
                rangeInput[1].value = minVal;
            }
            else {
                progress.style.right = (minVal / rangeInput[0].max * 100) + "%";
                progress.style.left = 100 - (maxVal / rangeInput[0].max * 100) + "%";
            }
            document.querySelector(".price-input .min").innerHTML = rangeInput[0].value + " ريال"
            document.querySelector(".price-input .max").innerHTML = rangeInput[1].value + " ريال"
        })
    })
}


if ($(".warraq-modal").length > 0) {

    // modal popup 


    $(".modal-close").on("click", function () {
        $(this).closest(".warraq-modal").removeClass("active")
    })

    $(".warraq-modal-btn").on("click", function () {
        let th = $(this);
        th.siblings(".warraq-modal").addClass("active");
    })
}