(function ($) {
  "use strict";

  $.fn.ajax_wishes = function () {
    $.get(
      "https://script.google.com/macros/s/AKfycbwsTMbaEG_QEWNIq8h1N8i3GYcV5Uietch3wvYqpkPlAxxduJ1vdV7k28NEbRNbym6e/exec",
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
          items: 3,
          nav: false,
          center: true,
          arrowKeys: true,
          lazyload: true,
          rewind: true,
          mouseDrag: true,
          controls: false,
          preventScrollOnTouch: "auto",
        });
        // need refresh when whises show up
        if (!device.tablet() && !device.mobile() && !isIE9() && !isIE10() && !isSafari()) {
          $(window).data("plugin_stellar").refresh();
        }
      }
    );
  };
})(jQuery);
