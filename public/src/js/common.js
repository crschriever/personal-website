import "jquery/dist/jquery.js";
import "bootstrap-sass/assets/javascripts/bootstrap.js";

let $mobileDet;
let $menuSelect;
let $menu;
export var mobile = false;

//initializes variables whenever the page is loaded
function startUp() {
    $mobileDet = $(".mobile-detection");
    mobile = $mobileDet.width() > 0;

    // Set up menu and menu button for mobile
    $menuSelect = $(".menu-button");
    $menu = $(".mobile-nav");
    let $menuXDiv = $menu.find("div");
    $menuXDiv.css("height", $menuXDiv.find(".exit-button").height() + "px");
    $menuSelect.on("click", function(event) {
        $menu.animate({ left: "0px" }, "fast");
        $menuSelect.animate({ opacity: "0" }, "fast");
    });
    $(".wrapper").on("click", function() {
        closeMenu();
    });
    $menu.find(".exit-button").on("click", function() {
        closeMenu();
    });

    $(window).resize(onResize);

    scrollSet();

    // Tooltip init;
    $('[data-toggle="tooltip"]').tooltip();
}

function onResize() {
    mobile = $mobileDet.width() > 0;
}

// Sets up event listeners for navigation buttons
function scrollSet() {
    $('a[href$="#scroll"]').on("click", function(e) {
        e.preventDefault();
        scroll(false, this);
    });
    $('a[href$="#scrollmiddle"]').on("click", function(e) {
        e.preventDefault();
        scroll(true, this);
    });
}

// Scrolls page
function scroll(middle, t) {
    var $scrollLoc = $($(t).data("scroll-to"));
    console.log($scrollLoc);
    var scrollY = $scrollLoc.offset().top;
    if (middle) {
        scrollY += -$(window).height() / 2 + $scrollLoc.outerHeight() / 2;
    }

    $("html,body").animate({ scrollTop: scrollY }, 500, "swing");
    // Closes when a button is pressed in menu
    closeMenu();
}

function closeMenu() {
    $menu.animate({ left: "-81vw" }, "fast");
    $menuSelect.animate({ opacity: "1" }, "fast");
}

// Lazy loading
function lazyLoad() {
    // font
    $("head").append(
        '<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">'
    );
    $("head").append(
        '<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Raleway:200,400,800,1000">'
    );

    // images
    let $lazyLoadImages = $("img.lazy-load").toArray();
    $lazyLoadImages.forEach(function(image) {
        let $image = $(image);
        $image.attr("src", $image.data("src"));
        $image.on("load", function() {
            $image.removeAttr("data-src");
            $image.css("background-color", "rgba(0,0,0,0)");
        });
    });

    let $lazyLoadBackgrounds = $("div.lazy-load").toArray();
    $lazyLoadBackgrounds.forEach(function(bg) {
        let $bg = $(bg);
        if (mobile && $bg.hasClass("small-img")) {
            $bg.css(
                "background-image",
                "url(" +
                    $bg
                        .data("src")
                        .split(".")
                        .join("-small.") +
                    ")"
            );
        } else {
            $bg.css("background-image", "url(" + $bg.data("src") + ")");
        }
        $bg.on("load", function() {
            $bg.removeAttr("data-src");
            $bg.css("background-color", "rgba(0,0,0,0)");
        });
    });
}

$(startUp);
$(window).on("load", function() {
    startUp();
    lazyLoad();
});
