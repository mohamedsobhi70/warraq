
// mobile menu 
$(".mobile-menu-btn").on("click", function () {
    $(".mobile-menu").addClass("active");
})

$(".mobile-menu-close").on("click", function () {
    $(".mobile-menu").removeClass("active");
})

// page loader 
$(document).ready(function () {
    setTimeout(() => {
        $(".page-loader").fadeOut(400)
    }, 900);
    $(".page-loader svg").hide(900)
})

//

$('.book-details').owlCarousel({
    rtl: true,
    margin: 16,
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
        0: {
            items: 2,
            nav: false,
        },
        768: {
            items: 3,
            nav: true,
        }
    }
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
            items: 4.5,
        },
        676: {
            items: 6
        },
        1024: {
            items: 7,
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
if ($(".drop-down")) {

    $(".drop-down").on("click", function () {
        $(this).parent().find(".drop-down-items").slideToggle(300);
        if ($(this).parent().find(".drop-down-icon")) {
            $(this).parent().find(".drop-down-icon").toggleClass("open");
        }
    })
    $(".drop-down-list li").on("click", function () {
        $(".drop-down span").text($(this).text().trim());
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
    $("#price-range").slider({
        isRTL: true,
        step: 10,
        range: true,
        min: 0,
        max: 2500,
        values: [20, 600],
        slide: function (event, ui) { $("#priceRange").html("السعر:" + ui.values[0] + " ريال - " + ui.values[1] + " ريال  "); }
    });
    $("#priceRange").html($("#price-range").slider("values", 0) + " - " + $("#price-range").slider("values", 1));

}

// pagination 

if ($("#paginated-list").length > 0) {

    function pagenat() {
        const paginationNumbers = document.querySelector(".pagination-numbers");
        const paginatedList = document.querySelector(".paginated-list");
        const listItems = paginatedList.querySelectorAll(".paginated-list > li:not(.hidden)");
        const nextButton = document.querySelector(".next-button");
        const prevButton = document.querySelector(".prev-button");
        const paginationLimit = 8;
        const pageCount = Math.ceil(listItems.length / paginationLimit);
        let currentPage = 1;

        const disableButton = (button) => {
            button.setAttribute("disabled", true);
        };

        const enableButton = (button) => {
            button.removeAttribute("disabled");
        };

        const handlePageButtonsStatus = () => {
            if (currentPage === 1) {
                disableButton(prevButton);
            } else {
                enableButton(prevButton);
            }

            if (pageCount === currentPage) {
                disableButton(nextButton);
            } else {
                enableButton(nextButton);
            }
        };

        const handleActivePageNumber = () => {
            document.querySelectorAll(".pagination-item").forEach((button) => {
                button.classList.remove("active");
                const pageIndex = Number(button.getAttribute("page-index"));
                if (pageIndex == currentPage) {
                    button.classList.add("active");
                }
            });
        };

        const appendPageNumber = (index) => {
            const pageNumber = document.createElement("button");
            pageNumber.className = "pagination-item transition-all duration-300 p-2 rounded-[20px] text-sm text-[#000000B2] leading-[18px] flex items-center justify-center w-[34px] h-[34px]";
            pageNumber.innerHTML = index;
            pageNumber.setAttribute("page-index", index);
            pageNumber.setAttribute("aria-label", "Page " + index);
            paginationNumbers.appendChild(pageNumber);
        };

        const getPaginationNumbers = () => {
            for (let i = 1; i <= pageCount; i++) {
                appendPageNumber(i);
            }
        };

        const setCurrentPage = (pageNum) => {
            currentPage = pageNum;
            handleActivePageNumber();
            handlePageButtonsStatus();

            const prevRange = (pageNum - 1) * paginationLimit;
            const currRange = pageNum * paginationLimit;

            listItems.forEach((item, index) => {
                item.classList.add("hidden");
                if (index >= prevRange && index < currRange) {
                    item.classList.remove("hidden");
                }
            });
        };

        function pag() {
            getPaginationNumbers();
            setCurrentPage(1);

            prevButton.addEventListener("click", () => {
                setCurrentPage(currentPage - 1);
            });

            nextButton.addEventListener("click", () => {
                setCurrentPage(currentPage + 1);
            });

            document.querySelectorAll(".pagination-item").forEach((button) => {
                const pageIndex = Number(button.getAttribute("page-index"));

                if (pageIndex) {
                    button.addEventListener("click", () => {
                        setCurrentPage(pageIndex);
                    });
                }
            });

        }
        window.addEventListener("load", () => {
            pag()
        });


    }
    pagenat();

    $(".filter-item").on("click", function () {
        $(".filter-item").removeClass("active")
        $(this).addClass("active");
        let cat = $(this).attr("data-type");
        $(".paginated-list li").addClass("hidden")
        $(".paginated-list").find(`[data-cat='${cat}']`).removeClass("hidden");
        $(".pagination-numbers").html("");
        pagenat();
        if ($(".pagination-numbers").html() == "") {

            $(".pagination").addClass("hidden")
        }
        else {
            $(".pagination").removeClass("hidden")
        }
    })
}
