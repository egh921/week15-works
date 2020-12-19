$(document).ready(function () {

    var button_stautus = 1;
    $(".tape1_1").on("click", function () {
        if (button_stautus == 1) {
            $(".tapetape").addClass("move");
            $(".tapetapetape").addClass("move");
            $(".sound1")[0].play();
            button_stautus = 0;

        } else if
            (button_stautus == 0) {
            $(".sound1")[0].pause();
            $(".tapetape").removeClass("move")
            $(".tapetapetape").removeClass("move");
            button_stautus = 1;
        }
    })

    $(".tape1_2").on("click", function () {
        if (button_stautus == 1) {
            $(".tapetape").addClass("move");
            $(".tapetapetape").addClass("move");
            $(".sound2")[0].play();
            button_stautus = 0;
        } else if
            (button_stautus == 0) {
            $(".sound2")[0].pause();
            $(".tapetape").removeClass("move")
            $(".tapetapetape").removeClass("move");
            button_stautus = 1;
        }
    })


    $(".tape1_3").on("click", function () {
        if (button_stautus == 1) {
            $(".tapetape").addClass("move");
            $(".tapetapetape").addClass("move");
            $(".sound3")[0].play();
            button_stautus = 0;
        } else if
            (button_stautus == 0) {
            $(".sound3")[0].pause();
            $(".tapetape").removeClass("move")
            $(".tapetapetape").removeClass("move");
            button_stautus = 1;
        }
    })


    $(".tape1_4").on("click", function () {
        if (button_stautus == 1) {
            $(".tapetape").addClass("move");
            $(".tapetapetape").addClass("move");
            $(".sound4")[0].play();
            button_stautus = 0;
        } else if
            (button_stautus == 0) {
            $(".sound4")[0].pause();
            $(".tapetape").removeClass("move")
            $(".tapetapetape").removeClass("move");
            button_stautus = 1;
        }
    })


    $(".tape1_5").on("click", function () {
        if (button_stautus == 1) {
            $(".tapetape").addClass("move");
            $(".tapetapetape").addClass("move");
            $(".sound5")[0].play();
            button_stautus = 0;
        } else if
            (button_stautus == 0) {
            $(".sound5")[0].pause();
            $(".tapetape").removeClass("move")
            $(".tapetapetape").removeClass("move");
            button_stautus = 1;
        }
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })  
})

