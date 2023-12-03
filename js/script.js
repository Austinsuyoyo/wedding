'use strict';

/*==============================
	- Template Name: FOREVER - Responsive HTML Wedding Template
	- Author: DoubleEight
	- Version: 1.0
	- Website: www.dethemes.com
================================= */

/*----------------------
	Script Guide
------------------------
01. BROWSER AGENT FUNCTION
	01.1 Check CHROME (Mobile / Tablet)
	01.2 Check IOS
	01.3 Check FIREFOX
	01.4 Check IE (< IE10)
	01.5 Check IE11
	01.6 Check IE11 (Not Windows Phone)
	01.7 Check IE10
	01.8 Check IE9
	01.9 Check Safari/Chrome Mac

02. FULLSCREEN CLASS

03. HIDDEN ALL ANIMATION CLASS

04. PACE PRELOADER
	04.1 Gallery - Masonry
	04.2 Nav Header Position (Mobile / Tablet)
	04.3 Waypoint Sticky Navbar
		04.3.1 Top Bar
		04.3.2 Bottom Bar
	04.4 Waypoint Sticky Menu Icon (Sidebar Version)
	04.5 Waypoint Animate CSS
	04.6 Stellar Parallax

05. PRELOADER HEART ANIMATION (IE10 / 11)

06. BIND TOUCH FOR PHOTO ITEM (Mobile / Tablet)

07. COUNTDOWN

08. MOBILE MENU

09. DOUBLE TAP DROP DOWN MENU

10. OWL CAROUSEL
	10.1 OWL CAROUSEL - GIFT REGISTRY
	10.2 OWL CAROUSEL - MORE EVENTS (ONEPAGE)
	10.3 OWL CAROUSEL - REGISTRY LOGO (ONEPAGE)

11. RSVP
	11.1 Custom Checkbox
	11.2 Custom Radio

12. SMOOTH SCROLL

13. MAGNIFIC POPUP
	13.1 Magnific Zoom
	13.2 Magnific Zoom Gallery
	13.3 Magnific Ajax

14. DISALBE TRANSITION (Mobile / Tablet)

15. AUDIO
	15.1 Reset Mute Control (Chrome and Safari Mobile)
	15.2 On toggle mute button

16. VIDEO CONTROL
	16.1 Hide Video Control (Mobile / Tablet)
	16.2 Play Pause Video

17. OPTIONS SETTING

*/



$(document).ready(function () {

	// 01. BROWSER AGENT FUNCTION
	//==================================================================================

	// 01.1 Check Chrome (Mobile / Tablet)
	//----------------------------------------------------------------------------------
	var isChromeMobile = function isChromeMobile() {
		if (device.tablet() || device.mobile()) {
			if (window.navigator.userAgent.indexOf("Chrome") > 0 || window.navigator.userAgent.indexOf("CriOS") > 0) {
				return 1;
			}
		}
	}

	// 01.2 Check IOS
	//----------------------------------------------------------------------------------
	var isIOS = function isIOS() {
		if (window.navigator.userAgent.indexOf("iPhone") > 0 || window.navigator.userAgent.indexOf("iPad") > 0 || window.navigator.userAgent.indexOf("iPod") > 0) {
			return 1;
		}
	}

	// 01.3 Check FIREFOX
	//----------------------------------------------------------------------------------
	var is_firefox = function is_firefox() {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
			return 1;
		}
	}

	// 01.4 Check IE (< IE10)
	//----------------------------------------------------------------------------------
	var isIE = function isIE() {
		if (window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident\/7\./)) {
			return 1;
		}
	}

	// 01.5 Check IE11
	//----------------------------------------------------------------------------------
	var isIE11 = function isIE11() {
		if (!!navigator.userAgent.match(/Trident\/7\./)) {
			return 1;
		}
	}

	// 01.6 Check IE11 (Not Windows Phone)
	///----------------------------------------------------------------------------------
	var isIE11desktop = function isIE11desktop() {
		if (!!navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {
			return 1;
		}
	}

	// 01.7 Check IE10
	//----------------------------------------------------------------------------------
	var isIE10 = function isIE10() {
		if (window.navigator.userAgent.indexOf("MSIE 10.0") > 0) {
			return 1;
		}
	}

	// 01.8 Check IE9
	//----------------------------------------------------------------------------------
	var isIE9 = function isIE9() {
		if (window.navigator.userAgent.indexOf("MSIE 9.0") > 0) {
			return 1;
		}
	}

	// 01.9 Check Safari/Chrome Mac
	//----------------------------------------------------------------------------------
	var isSafari = function isSafari() {
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1) {
			return 1;
		}
	}


	// 02. FULLSCREEN CLASS
	//==================================================================================
	var fullscreen = function () {
		var fheight = $(window).height();
		$('.fullscreen').css("height", fheight);
	}

	//Execute on load
	fullscreen();

	//Execute on window resize
	$(window).resize(function () {
		fullscreen();
	});

	// 03. HIDDEN ALL ANIMATION CLASS
	//==================================================================================
	// Waypoint will animate it later (04.5 Waypoint Animate CSS)
	if (!device.tablet() && !device.mobile() && !isIE9()) {
		$('.animation').css({
			visibility: 'hidden'
		});
	}

	// 04. PACE PRELOADER
	//==================================================================================
	Pace.on('done', function () {
		$('#preloader').hide();
	});

	Pace.on('hide', function () {

		// 04.1 Gallery - Masonry
		//------------------------------------------------------------------------------
		var $gallery = $('#masonry-gallery');

		if (device.tablet() || device.mobile()) {
			$gallery.masonry({
				columnWidth: ".grid-sizer",
				itemSelector: ".masonry-col",
				gutter: ".gutter-sizer",
				transitionDuration: 0,
			});
		}
		else {
			$gallery.masonry({
				columnWidth: ".grid-sizer",
				itemSelector: ".masonry-col",
				gutter: ".gutter-sizer",
				transitionDuration: "1s",
			});
		}


		// 04.2 Nav Header Position (Mobile)
		//------------------------------------------------------------------------------
		if (device.tablet() || device.mobile()) {
			if ($("#nav-bar").hasClass("sticky-nav")) {
				$("#nav-header").css("position", "relative");
			}
		}

		// 04.3 Waypoint Sticky Navbar
		//------------------------------------------------------------------------------
		if ($("#nav-bar").hasClass("sticky-nav")) {

			// 04.3.1 Top Bar
			if ($("#nav-bar").hasClass("top-bar")) {

				var nav_header_waypoint = $('#nav-header').waypoint(function (direction) {

					if (direction === 'down') {
						if (!device.tablet() && !device.mobile()) {
							$("#nav-bar").addClass("stick-it animate__animated animate__fadeInDownBig");
						}
						else {
							$("#nav-bar").addClass("stick-it");
						}
					}
					else {
						$("#nav-bar").removeClass("stick-it animate__animated animate__fadeInDownBig");
					}

				}, {
					offset: '-100%'
				});
			}

			// 04.3.2 Bottom Bar
			else if ($("#nav-bar").hasClass("bottom-bar")) {

				var waypoints = $('#nav-header').waypoint(function (direction) {

					if (direction === 'down') {
						if (!device.tablet() && !device.mobile()) {
							$("#nav-bar").addClass("stick-it animate__animated animate__fadeInDownBig");
						}
						else {
							$("#nav-bar").addClass("stick-it");
						}
					}
					else if (direction === 'up') {
						$("#nav-bar").removeClass("stick-it animate__animated animate__fadeInDownBig");
					}

				}, {
					offset: '-145px'
				});
			}

		}

		// 04.4 Waypoint Sticky Menu Icon (Sidebar Version)
		//------------------------------------------------------------------------------

		var sticky_menuicon_waypoint = $('#menu-icon').waypoint(function (direction) {
			if (direction === 'down') {
				$('#sticky-menuicon').show();
			}
			else {
				$('#sticky-menuicon').hide();
			}

		}, {
			offset: '-100%'
		})


		// 04.5 Waypoint Animate CSS
		//------------------------------------------------------------------------------
		if (!device.tablet() && !device.mobile() && !isIE9()) {
			$(document).ready(function () {
				// Set up Waypoint to trigger at 90% offset for each .animation element
				$('.animation').waypoint({
					handler: function (direction) {
						if (direction === 'down' && !$(this.element).hasClass('animate__animated')) {
							const animations = ['bounce', 'fadeIn', 'fadeInLeft', 'fadeInRight', 'fadeInUp'];

							animations.forEach(animation => {
								if ($(this.element).hasClass(animation)) {
									$(this.element).removeClass(`${animation}`).addClass(`animate__animated animate__${animation}`).css({ visibility: 'visible' });
								}
							});
						}
					},
					offset: '90%'
				});
			});
		}

		// 04.6 Stellar Parallax
		//------------------------------------------------------------------------------
		if (!device.tablet() && !device.mobile() && !isIE9() && !isIE10() && !isSafari()) {
			$(".image-divider").css("background-attachment", "fixed");
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true,
			});
		}
	}); // END of Pace on Hide


	// 05. PRELOADER HEART ANIMATION (IE10 / 11)
	//==================================================================================
	if (isIE10() || isIE11()) {
		$(".heart-animation").css("letter-spacing", "normal");
	}

	// 05. IMAGE DIVIDER (Mobile / Tablet)
	//==================================================================================
	/*if (device.tablet() || device.mobile() || isIE9() || isIE10() ||isSafari()) {
		$(".image-divider").addClass("mobile");
	}*/

	// 06. BIND TOUCH FOR PHOTO ITEM (Mobile / Tablet)
	//==================================================================================
	$('.photo-item').bind('touchstart touchend', function (e) {
	});

	// 08. MOBILE MENU
	//==================================================================================
	$("#mobile-nav").click(function (e) {
		e.preventDefault()
		$("#nav-menu").toggleClass("open");
	});

	// Hide Menu After Click It. Will be used on onepage version.
	$("#nav-menu li a").click(function () {
		if ($(this).attr("href") !== "#") {
			$("#nav-menu").removeClass("open");
		}
	});

	// 09. DOUBLE TAP DROP DOWN MENU
	//==================================================================================
	if ($(window).width() > 991) {
		$('#nav-menu').doubleTapToGo();
	}

	// 10. OWL CAROUSEL
	//==================================================================================

	// 10.1 OWL CAROUSEL - GIFT REGISTRY
	//------------------------------------------------------------------------------
	if ($("#gift-registry").length) {
		$("#gift-registry").owlCarousel({
			items: 3,
			autoPlay: 2000,
			stopOnHover: true,
			pagination: true,
		});

		if (device.tablet() || device.mobile()) {
			var owl_gift = $("#gift-registry").data('owlCarousel');
			owl_gift.stop()
		}
	}

	// 10.2 OWL CAROUSEL - MORE EVENTS (ONEPAGE)
	//------------------------------------------------------------------------------
	if ($("#events-carousel").length) {
		$("#events-carousel").owlCarousel({
			items: 2,
			itemsDesktopSmall: [979, 2],
			autoPlay: 2000,
			stopOnHover: true,
			pagination: true,
			navigation: false,
		});

		if (device.tablet() || device.mobile()) {
			var owl_events = $("#events-carousel").data('owlCarousel');
			owl_events.stop()
		}
	}

	// 10.3 OWL CAROUSEL - REGISTRY LOGO (ONEPAGE)
	//------------------------------------------------------------------------------
	if ($("#friends-wishes").length) {
		$("#friends-wishes").ajax_wishes();
	}

	// 11. RSVP
	//==================================================================================
	if ($("#rsvpform").length) {
		$("#rsvpform").ajaxrsvp();
	}

	// 11.1 Custom Checkbox
	//----------------------------------------------------------------------------------
	$(".ajax-checkbox .custom-option-icon").click(function () {
		$(this).toggleClass("active-icon");
	});

	// 11.2 Custom Radio
	//----------------------------------------------------------------------------------
	$(".ajax-radio .custom-option-icon").click(function () {
		if (!($(this).parent().hasClass("radio"))) {
			$(this).siblings().removeClass("active-icon");
			$(this).addClass("active-icon");
		}
		else {
			$(this).parent().siblings().children(".custom-option-icon").removeClass("active-icon");
			$(this).addClass("active-icon");
		}
	});

	// 12. SMOOTH SCROLL
	//=========================================================================
	$('a.smooth-scroll').smoothScroll({
		speed: 1000,
	});

	$('.nav-smooth-scroll a').smoothScroll({
		speed: 1000,
		offset: -80,
	});

	// 13. MAGNIFIC POPUP
	//==================================================================================

	// 13.1 Magnific Zoom
	//----------------------------------------------------------------------------------
	$('.magnific-zoom').magnificPopup({
		type: 'image',
		image: {
			// options for image content type
			titleSrc: 'title'
		},
		//fixedContentPos:true,
		callbacks: {
			open: function () {
				// Will fire when this exact popup is opened
			},
			afterClose: function () {
				// Will fire when popup is closed
			}
		},
	});

	// 13.2 Magnific Zoom Gallery
	//----------------------------------------------------------------------------------
	$('.magnific-zoom-gallery').magnificPopup({
		type: 'image',
		image: {
			// options for image content type
			titleSrc: 'title'
		},
		gallery: {
			enabled: true
		},
		//fixedContentPos:true,
		callbacks: {
			open: function () {
				// Will fire when this exact popup is opened
			},
			afterClose: function () {
				// Will fire when popup is closed
			}
		},
	});

	// MAGNIFIC AJAX
	//==================================================================================
	$('.magnific-ajax').magnificPopup({
		type: 'ajax',
		ajax: {
			settings: { cache: false }
			// Ajax settings object that will extend default one - http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
			// For example:
			// settings: {cache:false, async:false}
		},
		callbacks: {
			open: function () {
				// Will fire when this exact popup is opened
			},
			afterClose: function () {
				// Will fire when popup is closed

			}
		},
	});

	// 14. DISALBE TRANSITION (Mobile / Tablet)
	//==================================================================================
	if (device.tablet() || device.mobile()) {
		if (!isIE11desktop()) {
			// de-icon
			$(".de-icon, .de-icon i").css("transition", "none");

			// Photo-item
			$(".photo-item img.hover-animation").css("transition", "none");
			$(".photo-item .layer.hover-animation").css("transition", "none");
		}
	}


	// 15. AUDIO
	//==================================================================================

	// 15.1 Reset Mute Control (Chrome and Safari Mobile)
	//----------------------------------------------------------------------------------
	//	Chrome and Safari IOS not cannot autoplay audio.
	//	Default audio will reset to mute
	if (isChromeMobile() || isIOS()) {
		var audioElm = document.getElementById('audioID');

		if (audioElm != null) {
			audioElm.muted = true;

			var mute_icon = $("#mute-audio").data("mute-icon");
			var unmute_icon = $("#mute-audio").data("unmute-icon");

			$("#mute-audio").removeAttr('data-start').attr({ 'data-start': 'mute' });
			$("#mute-audio").removeAttr('data-mute-icon').attr({ 'data-mute-icon': unmute_icon });
			$("#mute-audio").removeAttr('data-unmute-icon').attr({ 'data-unmute-icon': mute_icon });
			$("#mute-audio i").removeClass();
			$("#mute-audio i").addClass(mute_icon);
		}
	}


	// 15.2 On toggle mute button
	//----------------------------------------------------------------------------------
	$("#mute-audio").click(function (e) {
		e.preventDefault();
		var audioElm = document.getElementById('audioID');

		var on_start = $(this).data("start");
		var mute_icon = $(this).data("mute-icon");
		var unmute_icon = $(this).data("unmute-icon");

		if (on_start == "unmute") {
			if ($("#mute-audio i").hasClass(unmute_icon)) {
				$("#mute-audio i").removeClass(unmute_icon);
				$("#mute-audio i").addClass(mute_icon);
				if (isIOS()) {
					//Because of IOS cannot mute by script, then change it to pause.
					audioElm.pause();
				}
				else {
					audioElm.muted = true;
				}
			}
			else {
				$("#mute-audio i").removeClass(mute_icon);
				$("#mute-audio i").addClass(unmute_icon);
				audioElm.play();
				audioElm.muted = false;
			}
		}
		else if (on_start == "mute") {
			if ($("#mute-audio i").hasClass(mute_icon)) {
				$("#mute-audio i").removeClass(mute_icon);
				$("#mute-audio i").addClass(unmute_icon);
				audioElm.play();
				audioElm.muted = false;
			}
			else {
				$("#mute-audio i").removeClass(unmute_icon);
				$("#mute-audio i").addClass(mute_icon);
				if (isIOS()) {
					//Because of IOS cannot mute by script, then change it to pause.
					audioElm.pause();
				}
				else {
					audioElm.muted = true;
				}
			}
		}
	});


	// 16. VIDEO CONTROL
	//==================================================================================

	// 16.1 Hide Video Control (Mobile / Tablet)
	//----------------------------------------------------------------------------------
	if ((device.tablet() || device.mobile()) && !isIE11desktop()) {
		$(".hide-control-onmobile").addClass("mobile");
	}

	// 16.2 Play Pause Video
	//----------------------------------------------------------------------------------
	if (device.tablet() || device.mobile()) {
		$(".slide-video-control").hide();
	}

	$("#play-pause").click(function (e) {
		e.preventDefault();
		var video = $(".slide-video").data("vide").getVideoObject();
		var on_start = $(this).data("start");
		var pause_icon = $(this).data("pause-icon");
		var play_icon = $(this).data("play-icon");

		if (on_start == "play") {
			if ($("#play-pause i").hasClass(pause_icon)) {
				$("#play-pause i").removeClass(pause_icon);
				$("#play-pause i").addClass(play_icon);
				video.pause();
			}
			else {
				$("#play-pause i").removeClass(play_icon);
				$("#play-pause i").addClass(pause_icon);
				video.play();
			}
		}
		else if ($(this).data("start") == "pause") {
			if ($("#play-pause i").hasClass(play_icon)) {
				$("#play-pause i").removeClass(play_icon);
				$("#play-pause i").addClass(pause_icon);
				video.play();
			}
			else {
				$("#play-pause i").removeClass(pause_icon);
				$("#play-pause i").addClass(play_icon);
				video.pause();
			}
		}


	});

	$("#mute").click(function (e) {
		e.preventDefault();
		var on_start = $(this).data("start");
		var mute_icon = $(this).data("mute-icon");
		var unmute_icon = $(this).data("unmute-icon");

		if (on_start == "unmute") {
			if ($("#mute i").hasClass(unmute_icon)) {
				$("#mute i").removeClass(unmute_icon);
				$("#mute i").addClass(mute_icon);
				$(".slide-video video").prop('muted', true);
			}
			else {
				$("#mute i").removeClass(mute_icon);
				$("#mute i").addClass(unmute_icon);
				$(".slide-video video").prop('muted', false);
			}
		}
		else if (on_start == "mute") {
			if ($("#mute i").hasClass(mute_icon)) {
				$("#mute i").removeClass(mute_icon);
				$("#mute i").addClass(unmute_icon);
				$(".slide-video video").prop('muted', false);
			}
			else {
				$("#mute i").removeClass(unmute_icon);
				$("#mute i").addClass(mute_icon);
				$(".slide-video video").prop('muted', true);
			}
		}
	});



	// 17. OPTIONS SETTING
	//==================================================================================

	// 17.1 Setting Button
	//----------------------------------------------------------------------------------
	$("#setting-button").click(function (e) {
		e.preventDefault();
		if ($("#setting-button i").hasClass("de-icon-cog")) {
			$("#options-setting").addClass("move-right");
			$("#setting-button i").removeClass("de-icon-cog");
			$("#setting-button i").addClass("de-icon-cancel-3");
		}
		else {
			$("#options-setting").removeClass("move-right");
			$("#setting-button i").removeClass("de-icon-cancel-3");
			$("#setting-button i").addClass("de-icon-cog");
		}
	});

	// 17.2 Template Color & Navbar Background
	//----------------------------------------------------------------------------------
	var current_color = "default";
	var current_navbar = "white";

	//Coral
	$("#coral").click(function (e) {
		e.preventDefault();
		$('link[rel*=skin]').remove();
		$('head').append('<link rel="stylesheet skin" href="css/skin/coral/coral.css" type="text/css" />');
		if (current_navbar == "color") {
			$('link[rel*=navbar]').remove();
			$('head').append('<link rel="stylesheet navbar" href="css/skin/coral/coral-reverse-navbar.css" type="text/css" />');
		}
		current_color = "coral";
	});

	//Coral-Red
	$("#coral-red").click(function (e) {
		e.preventDefault();
		$('link[rel*=skin]').remove();
		$('head').append('<link rel="stylesheet skin" href="css/skin/coral-red/coral-red.css" type="text/css" />');
		if (current_navbar == "color") {
			$('link[rel*=navbar]').remove();
			$('head').append('<link rel="stylesheet navbar" href="css/skin/coral-red/coral-red-reverse-navbar.css" type="text/css" />');
		}
		current_color = "coral-red";
	});

	//Lapis
	$("#lapis").click(function (e) {
		e.preventDefault();
		$('link[rel*=skin]').remove();
		$('head').append('<link rel="stylesheet skin" href="css/skin/lapis/lapis.css" type="text/css" />');
		if (current_navbar == "color") {
			$('link[rel*=navbar]').remove();
			$('head').append('<link rel="stylesheet navbar" href="css/skin/lapis/lapis-reverse-navbar.css" type="text/css" />');
		}
		current_color = "lapis";
	});

	//Light Teal
	$("#light-teal").click(function (e) {
		e.preventDefault();
		$('link[rel*=skin]').remove();
		$('head').append('<link rel="stylesheet skin" href="css/skin/light-teal/light-teal.css" type="text/css" />');
		if (current_navbar == "color") {
			$('link[rel*=navbar]').remove();
			$('head').append('<link rel="stylesheet navbar" href="css/skin/light-teal/light-teal-reverse-navbar.css" type="text/css" />');
		}
		current_color = "light-teal";
	});

	//Tan
	$("#tan").click(function (e) {
		e.preventDefault();
		$('link[rel*=skin]').remove();
		$('head').append('<link rel="stylesheet skin" href="css/skin/tan/tan.css" type="text/css" />');
		if (current_navbar == "color") {
			$('link[rel*=navbar]').remove();
			$('head').append('<link rel="stylesheet navbar" href="css/skin/tan/tan-reverse-navbar.css" type="text/css" />');
		}
		current_color = "tan";
	});

	//Reset Color
	$("#reset-color").click(function (e) {
		e.preventDefault();
		$('link[rel*=skin]').remove();
		if (current_navbar == "color") {
			$('link[rel*=navbar]').remove();
			$('head').append('<link rel="stylesheet navbar" href="css/skin/default/default-reverse-navbar.css" type="text/css" />');
		}
		current_color = "default";
	});

	//White Navbar Background
	$("#white-navbar").click(function (e) {
		e.preventDefault();
		$("#white-navbar span").addClass("active");
		$("#color-navbar span").removeClass("active");

		current_navbar = "white";
		$('link[rel*=navbar]').remove();
	});

	//Color Navbar Background
	$("#color-navbar").click(function (e) {
		e.preventDefault();
		$("#color-navbar span").addClass("active");
		$("#white-navbar span").removeClass("active");

		current_navbar = "color";
		$('link[rel*=navbar]').remove();
		$('head').append('<link rel="stylesheet navbar" href="css/skin/' + current_color + "/" + current_color + '-reverse-navbar.css" type="text/css" />');
	});


	// Pattern
	//----------------------------------------------------------------------------------
	$("#pattern-1").click(function (e) {
		e.preventDefault();
		$("#pattern-1 span").addClass("active");
		$("#pattern-2 span").removeClass("active");
		$("#pattern-3 span").removeClass("active");
		$("#pattern-none span").removeClass("active");

		$('link[rel*=pattern]').remove();
		$('head').append('<link rel="stylesheet pattern" href="css/skin/pattern/pattern-1.css" type="text/css" />');
	});

	$("#pattern-2").click(function (e) {
		e.preventDefault();
		$("#pattern-1 span").removeClass("active");
		$("#pattern-2 span").addClass("active");
		$("#pattern-3 span").removeClass("active");
		$("#pattern-none span").removeClass("active");

		$('link[rel*=pattern]').remove();
		$('head').append('<link rel="stylesheet pattern" href="css/skin/pattern/pattern-2.css" type="text/css" />');
	});

	$("#pattern-3").click(function (e) {
		e.preventDefault();
		$("#pattern-1 span").removeClass("active");
		$("#pattern-2 span").removeClass("active");
		$("#pattern-3 span").addClass("active");
		$("#pattern-none span").removeClass("active");

		$('link[rel*=pattern]').remove();
		$('head').append('<link rel="stylesheet pattern" href="css/skin/pattern/pattern-3.css" type="text/css" />');
	});

	$("#pattern-none").click(function (e) {
		e.preventDefault();
		$("#pattern-1 span").removeClass("active");
		$("#pattern-2 span").removeClass("active");
		$("#pattern-3 span").removeClass("active");
		$("#pattern-none span").addClass("active");

		$('link[rel*=pattern]').remove();
	});
	// 效果1 - 滾動到特定位置觸發
	// // 標記是否已經觸發過confetti
	// var confettiTriggered = false;

	// // 註冊滾動事件監聽器
	// window.addEventListener('scroll', function () {
	// 	// 如果已經觸發過confetti，就不再執行
	// 	if (confettiTriggered) {
	// 		return;
	// 	}

	// 	// 獲取滾動位置
	// 	var scrollPosition = window.scrollY || window.pageYOffset;

	// 	// 獲取網頁的高度
	// 	var pageHeight = document.documentElement.scrollHeight - window.innerHeight;

	// 	// 計算滾動的百分比
	// 	var scrollPercentage = (scrollPosition / pageHeight) * 100;

	// 	// 判斷是否達到特定百分比，並觸發confetti效果
	// 	if (scrollPercentage >= 10 && scrollPercentage < 11) {
	// 		confetti({ particleCount: 100, startVelocity: 30, spread: 360, origin: { x: Math.random() * 0.7 + 0.15, y: Math.random() * 0.5 } });
	// 		confettiTriggered = true;
	// 	} else if (scrollPercentage >= 30 && scrollPercentage < 31) {
	// 		confetti({ particleCount: 100, startVelocity: 30, spread: 360, origin: { x: Math.random() * 0.7 + 0.15, y: Math.random() * 0.5 } });
	// 		confettiTriggered = true;
	// 	} else if (scrollPercentage >= 50 && scrollPercentage < 51) {
	// 		confetti({ particleCount: 100, startVelocity: 30, spread: 360, origin: { x: Math.random() * 0.7 + 0.15, y: Math.random() * 0.5 } });
	// 		confettiTriggered = true;
	// 	}
	// 	// 過一秒後重置confettiTriggered，以便允許再次觸發
	// 	setTimeout(function() {
	// 	confettiTriggered = false;
	// 	}, 1000);
	// });

	// 效果2 - 滾動時觸發
	// 變數，用於追踪上一個滾動位置
	var lastScrollPosition = 0;

	// 變數，用於標記是否可以觸發confetti
	var canTriggerConfetti = true;

	// 註冊滾動事件監聽器
	window.addEventListener('scroll', function () {
		// 獲取當前滾動位置
		var currentScrollPosition = window.scrollY || window.pageYOffset;

		// 判斷是否在持續滑動
		if (currentScrollPosition !== lastScrollPosition) {
			// 更新上一個滾動位置
			lastScrollPosition = currentScrollPosition;
			// 判斷是否可以觸發 confetti
			if (canTriggerConfetti) {
				// 觸發 confetti
				if (device.tablet() || device.mobile()) {
					confetti({ angle: Math.random() * 70 + 55, particleCount: Math.random() * 50 + 50, startVelocity: 30, spread: Math.random() * 20 + 50, origin: { y: 0.5 } });
				} else {
					confetti({ particleCount: 200, startVelocity: 25, spread: 360, origin: { x: Math.random() * 0.7 + 0.15, y: Math.random() * 0.5 } });
				}

				// 設定一秒後再次可以觸發 confetti
				canTriggerConfetti = false;
				setTimeout(function () {
					canTriggerConfetti = true;
				}, 5000);
			}
		}
	});
	// PWA
	// if ('serviceWorker' in navigator && 'PushManager' in window) {
		window.addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault();

			const deferredPrompt = e;

			const installButton = document.createElement('button');
			installButton.textContent = 'Install App';
			installButton.style.position = 'fixed';
			installButton.style.top = '10px';
			installButton.style.left = '50%';
			installButton.style.transform = 'translateX(-50%)';
			installButton.style.zIndex = '9999';
			installButton.style.padding = '10px 20px';
			installButton.classList.add('btn-grad');
			installButton.style.color = 'white';
			installButton.style.border = 'none';
			installButton.style.borderRadius = '5px';
			installButton.style.cursor = 'pointer';

			installButton.addEventListener('click', () => {

				deferredPrompt.prompt();

				deferredPrompt.userChoice.then(choiceResult => {
					if (choiceResult.outcome === 'accepted') {
						console.log('App installed');
					} else {
						console.log('App installation declined');
					}

					installButton.style.display = 'none';
				});
			});

			document.body.appendChild(installButton);
		});
	// }
});

// 07. COUNTDOWN
//===================================================================================
function handleTickInit(tick) {

	var counter = Tick.count.down('2024-01-07T12:00:00+08:00', { format: ['d', 'h', 'm', 's'] });

	counter.onupdate = function (value) {
		tick.value = value;
	};

	counter.onended = function () {
		// redirect, uncomment the next line
		// window.location = 'my-location.html'

		// hide counter, uncomment the next line
		// tick.root.style.display = 'none';

		// show message, uncomment the next line
		// document.querySelector('.tick-onended-message').style.display = '';
	};

}