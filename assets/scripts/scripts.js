// determine font color based on background col
function determineTextColor(r, g, b) {
    let d = 0;
    let contrast = (0.299 * parseInt(r) + 0.587 * parseInt(g) + 0.114 * parseInt(b)) / 255;
    if (contrast > 0.5) {
        d = 0;
    }
    else {
        d = 255;
    }
    return `rgb(${d},${d},${d})`
}

// get bg for section title 
if ($(".det-bg").length > 0) {
    let bgSection = document.querySelector(".det-bg"),
        book = document.querySelector(`.book-colored[data-color=${bgSection.getAttribute("data-color")}]`),
        colorThief = new ColorThief();


    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }).join('');

    function getDominantColor(img) {
        const dominantRGB = colorThief.getColor(img)
        bgSection.style.background = rgbToHex(dominantRGB[0], dominantRGB[1], dominantRGB[2])
    }

    if (book.complete) {
        getDominantColor(book);
    } else {
        book.addEventListener('load', function () {
            getDominantColor(book)
        });
    }

}

if ($(".det-bg .det-text").length > 0) {
    let txt = $(".det-text"),
        svgs = $(".det-strok"),
        secBg = $(".det-bg").css("background-color"),
        rgb = secBg.substring(4, secBg.length - 1).replace(/ /g, '').split(',');
    txt.css("color", determineTextColor(rgb[0], rgb[1], rgb[2]));
    svgs.css("stroke", determineTextColor(rgb[0], rgb[1], rgb[2]));
}

// mobile menu 
$(".mobile-menu-btn").on("click", function () {
    $(".mobile-menu").addClass("active");
})

$(".mobile-menu-close").on("click", function () {
    $(".mobile-menu").removeClass("active");
})
if ($(".page-loader").length > 0) {
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
}
if ($(".slider-books").length > 0) {
    let swiper = new Swiper(".slider-categories", {
        spaceBetween: 30,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            676: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 6,
            }
        },
        navigation: {
            prevEl: ".swiper-button-next",
            nextEl: ".swiper-button-prev",
        },
    });
}


// blog slider 

if ($(".slider-blog").length > 0) {

    let swiper = new Swiper(".slider-blog", {
        spaceBetween: 30,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            }
        }
    });

}



if ($(".slider-books").length > 0) {
    let swiper = new Swiper(".slider-books", {
        spaceBetween: 40,
        centeredSlides: true,
        loop: true,
        navigation: {
            prevEl: ".swiper-button-next",
            nextEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.8,
            },
            680: {
                slidesPerView: 3,
            }
        }

    });
}

if ($(".slider-bestseller").length > 0) {
    let swiper1 = new Swiper(".slider-bestseller", {
        spaceBetween: 30,
        loop: true,

        slidesPerView: 6, pagination: {
            el: ".bestseller-pagination",
        },

        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            676: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            }
        }
    });
}

if ($(".slider-usedbooks").length > 0) {
    let swiper1 = new Swiper(".slider-usedbooks", {
        spaceBetween: 30,
        loop: true,
        slidesPerView: 6, pagination: {
            el: ".usedbooks-pagination",
        },

        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            676: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            }
        }
    });
}

if ($(".slider-recomended").length > 0) {
    let swiper1 = new Swiper(".slider-recomended", {
        spaceBetween: 30,
        loop: true,

        slidesPerView: 6, pagination: {
            el: ".recomended-pagination",
        },

        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            676: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            }
        }
    });
}

if ($(".slider-filter").length > 0) {
    let swiper = new Swiper(".slider-filter", {
        spaceBetween: 12,
        slidesPerView: "auto",

    });
}
if ($(".reviews-slider").length > 0) {

    var swiper = new Swiper(".reviews-slider", {
        direction: "vertical",
        spaceBetween: 0,
        slidesPerView: 4,
        autoHeight: true,
        on: {
            init: (swiper) => {
                let totalGap =
                    swiper.passedParams.spaceBetween *
                    (swiper.passedParams.slidesPerView - 1);
                let containerHeight =
                    swiper.passedParams.slidesPerView *
                    swiper.slides[0].clientHeight +
                    totalGap;
                swiper.el.style.height = containerHeight + "px";
            },
        },
        pagination: {
            el: ".reviews-pagination",
            clickable: true,
        },
    });

}

if ($(".rating input").length > 0) {

    $(".rating input").on("change", function () {
        $(".rating svg path").css("fill", "#E2E2E9");
        let rate = $(this).attr("data-num");
        let stars = document.querySelectorAll(".rating svg path");

        for (let i = 0; i < rate; i++) {
            stars[i].style.fill = "#EAAA08";
        }
    });

}


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

// dropdown menus 
if ($(".drop-down")) {
    $(".drop-down").on("click", function () {
        $(this).siblings(".drop-down-list").toggleClass("active");
    })
}

// filter section 
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

$(".war-header-cat-toggle").on("click", function () {
    $(".war-header-cat").slideToggle(400);
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


$(document).on('click', 'button.plus, button.minus', function () {

    var qty = $(this).parent('.quantity').find('.qty');
    var val = parseFloat(qty.val());
    var max = parseFloat(qty.attr('max'));
    var min = parseFloat(qty.attr('min'));
    var step = parseFloat(qty.attr('step'));

    if ($(this).is('.plus')) {
        if (max && (max <= val)) {
            qty.val(max).change();
        } else {
            qty.val(val + step).change();
        }
    } else {
        if (min && (min >= val)) {
            qty.val(min).change();
        } else if (val > 1) {
            qty.val(val - step).change();
        }
    }

});

$(".filter-item").on("click", function () {
    $(".filter-item").removeClass("active")
    $(this).addClass("active");
    let cat = $(this).attr("data-type");
    $(".paginated-list li").addClass("hidden")
    $(".paginated-list").find(`[data-cat*='${cat}']`).removeClass("hidden");
    $(".pagination-numbers").html("");
    //    pagenat();
    if ($(".pagination-numbers").html() == "") {

        $(".pagination").addClass("hidden")
    }
    else {
        $(".pagination").removeClass("hidden")
    }
})

$(document).ready(function () {
    $('.wpfMainWrapper').css('overflow-x', 'hidden');
    $('aside .wpfFilterWrapper').addClass('p-8 flex flex-col gap-8 border-b border-[#E2E2E9]');
    $('.wpfFilterTitle').addClass('flex items-center justify-between cursor-pointer drop-down').css("display", "flex");
    $('.wpfFilterTitle .wfpTitle').addClass('text-base text-[#000000E5] leading-5 font-semibold');
    $('.wpfFilterContent').addClass('w-full text-base leading-5 text-[#00000066]');
    $('.wpfFilterVerScroll').addClass('wpfFilterVerScroll').css("display", "flex");
})


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

