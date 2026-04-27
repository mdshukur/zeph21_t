/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(window).on('scroll', function() {
    var scrollPos = $(document).scrollTop();
    var offset = 150;

    $('.nav li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.length > 0) {
            if (refElement.position().top - offset <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav li').removeClass("active");
                currLink.parent().addClass("active");
            }
        }
    });

    var portfolioSection = $('#portfolio-banner');
    if (portfolioSection.length > 0) {
        var pTop = portfolioSection.offset().top - offset;
        var pBottom = pTop + portfolioSection.outerHeight();

        if (scrollPos >= pTop && scrollPos <= pBottom) {
            $('.nav li').removeClass('active');
            $('.nav li a[href="portfolio.html"]').parent().addClass('active');
        }
    }
});


$(document).ready(function () {

  var path = window.location.pathname;
  var hash = window.location.hash;

  // 🔹 Portfolio page active
  if (path.indexOf("portfolio") !== -1) {
    $('.nav-portfolio').parent().addClass('active');
  }

  // 🔹 About / Contact active when coming from another page
  if (hash) {

    $('.navbar-nav li').removeClass('active');

    $('.navbar-nav a').each(function () {
      var href = $(this).attr('href');

      if (href === hash || href === 'index.html' + hash) {
        $(this).parent().addClass('active');
      }
    });

    // 🔹 Smooth scroll after page load
    if ($(hash).length) {
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, 'easeInOutExpo');
    }
  }

});

