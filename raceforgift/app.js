! function(t) {
    function e(o) {
        if (n[o]) return n[o].exports;
        var a = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(a.exports, a, a.exports, e), a.l = !0, a.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.i = function(t) {
        return t
    }, e.d = function(t, n, o) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 1)
}([function(t, e, n) {
    "use strict";

    function o(t) {
        var e = Date.parse(t) - Date.parse(new Date),
            n = Math.floor(e / 1e3 % 60),
            o = Math.floor(e / 1e3 / 60 % 60),
            a = Math.floor(e / 36e5 % 24),
            i = Math.floor(e / 864e5);
        return {
            total: e,
            days: i,
            hours: a,
            minutes: o,
            seconds: n
        }
    }
    window.$ = $;
    try {
        $(document).foundation()
    } catch (a) {}
    $(document).ready(function() {
        if ($(".amountcollect").length > 0) {
            var t = $(".amountcollect").text();
            $(".amountcollect").text(t.replace(" CHF", ""))
        }
        // if ($(".dixneuf").length > 0) {
        //     var e = $(".dixneuf").text();
        //     e = parseInt(e) - 19, $(".dixneuf").text(e)
        // }
        if ($(".vingt").length > 0) {
          var e = $(".vingt").text();
          e = parseInt(e) - 20, $(".vingt").text(e)
        }
        if ($(".eventslist__data .tagZone").length > 0 && $(".eventslist__data .tagZone").each(function() {
                var t = $(this).text();
                $(this).text(t.replace(" CHF", ""))
            }), $(".main-donation").length > 0) {
            var t = $(".main-donation .donation-title").html();
            $(".intro-my-event .donation-title").html(t.replace(" CHF", ""))
        }
        if ($("#countdown__timedisplay").length > 0 || $(".race-secondary-color.number").length > 0) {
            var n = "June 14 2020 00:00:00 GMT+0100",
                a = o(n);
            a = a.days, $({
                n: 0
            }).animate({
                n: a
            }, {
                duration: 1e3,
                step: function(t, e) {
                    $("#countdown__timedisplay,.data-donation div:nth-child(2) .number").text(Math.ceil(t))
                }
            })
        }
        if ($("#shuffle").length > 0) {
            for (var i = $("#shuffle"), l = i.children(); l.length;) i.append(l.splice(Math.floor(Math.random() * l.length), 1)[0]);
            i.fadeIn()
        }
        $("#type-b #amount-list-once").length > 0 && ($("#type-b #amount-list-once li").length > 1 && $("body").addClass("big"), $("#type-b #amount-list-once label").on("click", function() {
            $(".active").removeClass("active"), $(this).parent("li").addClass("active")
        }), $("#famount-once").on("focus", function() {
            $(".active").removeClass("active")
        }), $("#type-b #amount-list-once span").each(function() {
            var t = $(this).html();
            t = "<small>CHF </small>" + t.replace(" CHF", ""), $(this).html(t)
        }))
    })
}, function(t, e, n) {
    t.exports = n(0)
}]);

// <script src="https://dev.tisseur-de-toile.fr/externalassets/raceforgift/assets/js/app.js"></script>

