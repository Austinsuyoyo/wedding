(function ($) {
  "use strict";

  $.fn.ajax_wishes = function () {
    $.get(
      "https://script.google.com/macros/s/AKfycbxcdX-vC4mujuOARG403oUgp1zhVNO27XyOrTnVVyhNmWbeYKOfwfHEIgzteR16XoIJrw/exec",
      function (response) {
        if (response.result != "success") {
          return;
        }
        var isIE9 = function isIE9() {
          if (window.navigator.userAgent.indexOf("MSIE 9.0") > 0) {
            return 1;
          }
        };
        var isIE10 = function isIE10() {
          if (window.navigator.userAgent.indexOf("MSIE 10.0") > 0) {
            return 1;
          }
        };
        var isSafari = function isSafari() {
          if (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Mac") != -1) {
            return 1;
          }
        };
        var wishes = response.data;
        wishes.forEach(function (wish) {
          var wishHtml =
            '<div><div class="item">' +
            '<b class="wish-name">' +
            wish.name +
            "</b>" +
            '<p class="wish-message">' +
            wish.message +
            "</p>" +
            "</div></div>";

          $(".wish-slider").append(wishHtml);
        });

        var slider = tns({
          container: ".wish-slider",
          nav: false,
          center: true,
          arrowKeys: true,
          lazyload: true,
          rewind: true,
          mouseDrag: true,
          controls: false,
          preventScrollOnTouch: "auto",
          autoWidth: true,
          responsive: {
            0: {
              items: response.data.length,
              gutter: 70,
            },
            992: {
              gutter: 70,
              items: response.data.length,
            },
          },
        });
        var customizedFunction = function (info, eventName) {
          console.log(info.event.type, info.container.id);
          if (eventName === 'transitionEnd') {
            try {
              if (!device.tablet() && !device.mobile() && !isIE9() && !isIE10() && !isSafari())
                $(window).data("plugin_stellar").refresh();
            } catch (error) {
              console.error("Refresh failed:", error);
            }
          }
        };
        slider.events.on('transitionEnd', customizedFunction);
      }
    );
  };
})(jQuery);
