
//Ensures that the code can only run after the document has loaded

$(document).ready(function(){

	/* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });


    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Animate on Scroll */
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });


    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });


    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeInUp');
        }, {
            offset: '50%'
        });

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    /* mobile nav */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('menu')) {
            icon.addClass('menu');
            icon.removeClass('menu');
        } else {
            icon.addClass('menu');
            icon.removeClass('close');
        }
    })

 
});