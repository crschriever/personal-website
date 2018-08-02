import { mobile } from "./common.js";
import "../styles/main.scss";

function requireAll(r) {
    r.keys().forEach(r);
}
requireAll(require.context("../res/", true, /\.(gif|png|jpe?g|pdf)$/i));

import { projectsArray } from "./projects";

let $tTextCont,
    $tCont,
    $tNavCont,
    $slows,
    $modal,
    $projectHeadT,
    $projectHeadCont,
    $wrapper,
    $projectDesc,
    projectMoveable = true,
    $projects,
    selectedProject;

// var selectedProject = projectsArray.ER;
// console.log(selectedProject);

function startUpStyling() {
    $tTextCont = $(".top-text-cont");
    $tCont = $(".top-container");
    $tNavCont = $(".nav-container");
    $projectHeadCont = $(".project-head-container");
    $projectHeadT = $(".project-head-text");
    $wrapper = $(".wrapper");
    $modal = $(".modal");
    $modal.title = $modal.find(".modal-title");
    $modal.body = $modal.find(".modal-body>p");

    $(window).resize(onResize);

    onResize();

    // Array of scrolling background
    $slows = [];
    $(".slow-scroll").each(function() {
        $slows.push($(this));
    });

    // Scrolling background images
    $(document).on("scroll", function() {
        for (var i = $slows.length - 1; i >= 0; i--) {
            var slow = $slows[i];
            var hOff = slow.offset().top - $(this).scrollTop() - slow.height() / 2;
            slow.css("background-position-y", "calc(50% + " + hOff / 5 + "px)");
        }
    });

    // Clicking the project pics
    $(".project-img-cont").on("click", function(e) {
        var id = $(this)
            .closest(".project")
            .attr("id");
        selectedProject = projectsArray[id];

        $modal.title.html(selectedProject.title);
        $modal.body.html(selectedProject.description);
        $modal.modal();
    });
}

function onResize() {
    if (mobile) {
        $tCont.attr("style", ($tCont.attr("style") || "").replace(/padding-top:[^;]*;/, ""));
        $tTextCont.removeAttr("style");
    } else {
        $tCont.css("padding-top", 50 + $tNavCont.height() + "px");
        $tTextCont.css(
            "top",
            $tCont.height() / 2 - $tTextCont.height() / 2 - $tNavCont.height() + "px"
        );
    }

    $projectHeadT.css("top", $projectHeadCont.height() / 2 - $projectHeadT.height() / 2 + "px");
    $wrapper.css("width", $(window).width() + "px");
}

$(function() {
    startUpStyling();
});
$(window).on("load", function() {
    startUpStyling();
});
