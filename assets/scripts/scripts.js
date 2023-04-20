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

if($(".drop-down")){
    $(".drop-down").on("click",function(){
        $(this).siblings(".drop-down-list").toggleClass("active");
    })
}
if($(".filter-sec")){
    $(".filter-open").on("click",function(){
        $(".filter-sec").addClass("active");
    })
    $(".filter-close").on("click",function(){
        $(".filter-sec").removeClass("active");
    })
}