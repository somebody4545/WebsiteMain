(function () {
        var body = document.body,
                e = document.documentElement,
                scrollPercent;
        $(window).unbind("scroll").scroll(function () {
            scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
            body.style.backgroundPosition = "0px " + "-" + scrollPercent + "px";
        });
})();