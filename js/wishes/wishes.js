(function ($) {
  "use strict";

  $.fn.ajax_wishes = function () {
    $.get(
      "https://script.google.com/macros/s/AKfycbxcdX-vC4mujuOARG403oUgp1zhVNO27XyOrTnVVyhNmWbeYKOfwfHEIgzteR16XoIJrw/exec",
      function (response) {
        if (response.result != "success") {
          return;
        }

        var wishes = response.data;
        wishes.slice(0, 3).forEach(function (wish, index) {
          // 判斷是否是前三個，是的話加上 slide-visible 類
          var visibilityClass = index < 3 ? 'slide-visible' : '';

          var wishHtml =
            '<div class="' + visibilityClass + '">' +
            '<div>' +
            '<h3 class="mb-0 h6" style="color:#DF1E1E;">' + wish.name + '</h3>' +
            '<small class="text-muted text-uppercase">' + wish.message + '</small>' +
            '</div>' +
            '</div>';

          $(".wish-slider").append(wishHtml);
        });

        var slider = swiffyslider.initSlider($(".swiffy-slider")[0], {
          nav: true,
          prevNextButtons: true,
          indicators: true,
          mouseDrag: true,
          preventScrollOnTouch: "auto",
          autoHeight: false,
          initialSlide: 0,
          autoPlay: true,
          autoPlayInterval: 5000, // Set the autoplay interval in milliseconds
        });

        // Handle custom indicators
        $(".slider-indicators li").on("click", function () {
          var index = $(this).index();
          slider.goTo(index);
        });
      }
    );
  };
})(jQuery);