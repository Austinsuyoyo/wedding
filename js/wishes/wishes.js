(function ($) {
  "use strict";

  $.fn.ajax_wishes = function () {
    $.get(
      "https://script.google.com/macros/s/AKfycbwsTMbaEG_QEWNIq8h1N8i3GYcV5Uietch3wvYqpkPlAxxduJ1vdV7k28NEbRNbym6e/exec",
      function (response) {
        if (response.result != "success") {
          return;
        }

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
          container: ".wish-slider", // 替换为你的轮播容器选择器
          items: 3,
          nav: false,
          center: true,
          arrowKeys: true,
          lazyload: true,
          rewind: true,
          mouseDrag: true,
          controls: false,
          preventScrollOnTouch: "auto"
        });
        if (!device.tablet() && !device.mobile() && !isIE9() && !isIE10() && !isSafari()) {
          // need refresh when whises show up
          $(window).data("plugin_stellar").refresh();
        }
      }
    );
  };
})(jQuery);
