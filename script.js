(function () {
        var body = document.body,
                e = document.documentElement,
                scrollPercent;
        $(window).unbind("scroll").scroll(function () {
            scrollPercent = $(window).scrollTop() / 1.2;
            body.style.backgroundPosition = "0px " + scrollPercent + "px";
        });
})();