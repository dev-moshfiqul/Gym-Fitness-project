$(document).ready(function(){

/* ===================================
    toggle menu
    ====================================== */

    $(document).on("click", function(event){
    	if($(event.target).closest(".sidebar-toggle").length){
    		$(".fixed-menu").toggleClass("active");
    		$('.sidebar-menu').toggleClass("active");
    	} else if(!$(event.target).closest(".sidebar-toggle").length){
    		$(".fixed-menu").removeClass("active");
    		$(".sidebar-menu").removeClass("active");
    	}
    });


    $(document).on("click", function(event){
        if($(event.target).closest(".toggle-menu").length){
            $(".navbar_collapse").toggleClass("static");
            $('.navbar-toggle').toggleClass("static");
        } else if(!$(event.target).closest(".toggle-menu").length){
            $(".navbar_collapse").removeClass("static");
            $(".navbar-toggle").removeClass("static");
        }
    });


/* ===================================
    sticky header
    ====================================== */

    $(window).scroll(function() {
        var sticky = $('.navbar-header'),
        scroll = $(window).scrollTop();

        if (scroll >= 40) { 
            sticky.addClass('sticky'); 
        }
        else { 
            sticky.removeClass('sticky');
        }
    });

});


/* ===================================
    Loading Timeout
    ====================================== */

    $(window).on("load", function() {
        $('.preloader').fadeOut(); 
    });


/* ===================================
    AOS Animtion
    ====================================== */
    AOS.init({
        once: true,
        disable:  function() {
         var maxWidth = 767;
         return window.innerWidth < maxWidth;
     }
 });


 /* ===================================
    header menu Active class
    ====================================== */

    $(document).ready(function () {
        $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        var target = this.hash,
        menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+1
        }, 300, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

    function onScroll(event){
        var currentScrollPos = $(document).scrollTop();
        $('.navbar_collapse ul li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= currentScrollPos+1 && refElement.position().top + refElement.height() > currentScrollPos+1) {
                $('.navbar_collapse ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }



/* ===================================
    Counter on scroll section
    ====================================== */
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
      } else {
          reveals[i].classList.remove("active");
      }
  }
}

window.addEventListener("scroll", reveal);


/* ===================================
    Counter Section
    ====================================== */
    $(function () {
      function isScrolledIntoView($elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function count($this) {
        var current = parseInt($this.html(), 10);
        if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
          $this.html(++current);
          $this.data("isCounting", true);
          setTimeout(function () {
            $this.data("isCounting", false);
            count($this);
        }, 20);
      }
  }

  $(".coundown-number").each(function () {
    $(this).data('count', parseInt($(this).html(), 10));
    $(this).html('0');
    $(this).data("isCounting", false);
});

  function startCount() {
    $(".coundown-number").each(function () {
      count($(this));
  });
};

$(window).scroll(function () {
    startCount();
});

startCount();
});



/* ===================================
    Testimonial slider
    ====================================== */
    var swiper = new Swiper(".testimonial_slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 900,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
});


/* ===================================
    trainer slider
    ====================================== */
    var swiper = new Swiper(".trainer_slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 900,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});



/* ===================================
    blog slider
    ====================================== */
    var swiper = new Swiper(".blog_slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 900,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


/* ===================================
    Move Image On Mouse Hover
    ====================================== */

    $('.video-img, .service_img').tilt();


/* ===================================
    bottom-top scroll
    ====================================== */

    !function(o){
        "use strict";
        o(document).ready(function(){
            function t(){var t=o(window).scrollTop(),e=o(document).height()-o(window).height();
                r.style.strokeDashoffset=n-t*n/e}var r=document.querySelector(".scroll-top path"),n=r.getTotalLength();
                r.style.transition=r.style.WebkitTransition="none",
                r.style.strokeDasharray=n+" "+n,r.style.strokeDashoffset=n,
                r.getBoundingClientRect(),
                r.style.transition=r.style.WebkitTransition="stroke-dashoffset 10ms linear",
                t(),
                o(window).scroll(t);
                jQuery(window).on("scroll",function(){
                    50<jQuery(this).scrollTop()?jQuery(".scroll-top").addClass("active"):
                    jQuery(".scroll-top").removeClass("active")}),
                jQuery(".scroll-top").on("click",function(t){return t.preventDefault(),
                    jQuery("html, body").animate({
                        scrollTop:0
                    },550),!1
                })
            })
    }(jQuery)


/* ===================================
    mouse-hover animated
    ====================================== */

    $(document).ready(function($) {

    // Whole Script Strict Mode Syntax
    "use strict";
});

    // Banner Moving JS Start
    var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

    function moveBackground() {
        x += (lFollowX - x) * friction;
        y += (lFollowY - y) * friction;

        //  translate = 'translateX(' + x + 'px, ' + y + 'px)';
        translate = 'translateX(' + x + 'px) translateY(' + y +'px)';

        $('.animate-this').css({
            '-webit-transform': translate,
            '-moz-transform': translate,
            'transform': translate
        });

        window.requestAnimationFrame(moveBackground);
    }

    $(window).on('mousemove click', function(e) {

        var isHovered = $('.animate-this:hover').length > 0;
        console.log(isHovered);
        
        //if(!$(e.target).hasClass('animate-this')) {
            if(!isHovered) {
                var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX)),
                lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));

                lFollowX = (20 * lMouseX) / 100;
                lFollowY = (10 * lMouseY) / 100;
            }
        });

    moveBackground();
    // Banner Moving JS End


/* ===================================
    main slider
    ====================================== */

    var menu = [];
    jQuery('.swiper-slide').each( function(index){
        menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
    });
    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: false,
        centeredSlides: true,
        speed: 1500,
        simulateTouch: true,
        clickable: true,
        parallax: true,
        effect: "coverflow",

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        watchSlidesProgress: true,
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

// DATA BACKGROUND IMAGE
var sliderBgSetting = $(".slide-bg-image");
sliderBgSetting.each(function(indx){
    if ($(this).attr("data-background")){
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
});


/* ===================================
    mouse pointer cursor
    ====================================== */

    function itCursor() {
        var myCursor = jQuery(".mouseCursor");
        if (myCursor.length) {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
                let n,
                i = 0,
                o = !1;
                (window.onmousemove = function(s) {
                    o ||
                    (t.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (e.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (n = s.clientY),
                    (i = s.clientX);
                }),
                $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                    e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                }),
                $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                    ($(this).is("a", "button") &&
                        $(this).closest(".cursor-pointer").length) ||
                    (e.classList.remove("cursor-hover"),
                        t.classList.remove("cursor-hover"));
                }),
                (e.style.visibility = "visible"),
                (t.style.visibility = "visible");
            }
        }
    }
    itCursor();
    var cursor = $(".cursor-outer"),
    follower = $(".cursor-inner");

    $(".box-tool").on("mouseenter",function(){
        cursor.addClass("active");
        follower.addClass("active");
    });

    $(".box-tool").on("mouseleave",function(){
        cursor.removeClass("active");
        follower.removeClass("active");
    });

    $(".triangle-1, .banner_social").on("mouseenter",function(){
        cursor.addClass("hover");
        follower.addClass("hover");
    });

    $(".triangle-1, .banner_social").on("mouseleave",function(){
        cursor.removeClass("hover");
        follower.removeClass("hover");
    });


/* ===================================
    Mouse hover dropdown menu
    ====================================== */

    $(document).ready(function(){
        $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).not('.dropdown-menu').stop(true,true).slideDown("400");
                $(this).toggleClass('open');        
            },
            function() {
                $('.dropdown-menu', this).not('.dropdown-menu').stop(true,true).slideUp("400");
                $(this).toggleClass('open');       
            }
            );
    });