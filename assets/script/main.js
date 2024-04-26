function scriptWrapper($) {
   var dgTheme = {
      /**
       * Main entry point
       */
      init: function () {
         dgTheme.customFunctions();
         dgTheme.scrollFunctions();
         dgTheme.sliderFunctions();
         dgTheme.registerEventHandlers();
      },

      /**
       * Custom Functions
       */
      customFunctions: function () {
         // Initializing the Animation On Scroll 
         AOS.init();
      },

      /**
       * Scroll Functions 
       */
      scrollFunctions: function () {
         // Header variation on scroll
         // Adding colored Header class after scroll down
         $(window).scroll(function () {
            if ($(this).scrollTop() > 60) {
               $('header#header').addClass('colored-header');
            } else {
               $('header#header').removeClass('colored-header');
            }
         });

         // Parallax Effect for hero background image
         const parallaxEffectHero = function () {
            const backgroundImage = $('section.hero-section-wrap .hero-section');

            $(window).on('scroll', function () {
               const scrollPos = $(window).scrollTop();
               backgroundImage.css('background-size', 'calc(100% + ' + scrollPos * 0.8 + 'px)');
            });
         };

         // Parallax Effect for about dg section
         const parallaxEffectAbout = function () {
            const imgLeft = $('section.about-section-wrap .about-img.img-left img');
            const imgRight = $('section.about-section-wrap .about-img.img-right img');

            $(window).on('scroll', function () {
               const scrollPos = $(window).scrollTop();
               imgLeft.css({
                  'object-position': 'center ' + scrollPos * (-0.05) + 'px',
                  'background-size': 'calc(100% + ' + scrollPos * 0.8 + 'px)'
              });
              imgRight.css({
                  'object-position': 'center ' + scrollPos * (-0.09) + 'px',
                  'background-size': 'calc(100% + ' + scrollPos * 0.8 + 'px)'
              });              
            });
         };

         // Execute Parallax
         parallaxEffectHero();
         parallaxEffectAbout();
      },

      /**
       * Slider Functions
       */
      sliderFunctions: function () {
         // Slick slider initialization
      },

      /**
       * Registers event handlers
       */
      registerEventHandlers: function () {
         $(document).on('click', 'body header.header nav.navbar .brand-area a.toggle-btn', dgTheme.toggleMobileMenu);
         $(document).on('click', 'ul li.menu-itm a.menu-link', dgTheme.scrollToSection);
      },

      /**
       * On click of the toggle button of mobile header it will execute toggleMobileMenu function
       * This function will toggle different class for mobile menu
       */
      toggleMobileMenu: function (event) {
         event.preventDefault();
         // Toggle open-mobile-menu class on body header.header .mobile-menu
         $('body').toggleClass('oveflow-hidden');
         $('body header.header').toggleClass('open-mobile-header');
         $('body header.header .mobile-menu').toggleClass('open-mobile-menu');

         // Toggle hide class on body header.header nav.navbar .brand-area a.toggle-btn span
         $('body header.header nav.navbar .brand-area a.toggle-btn span').toggleClass('hide');
      },


      /**
       * On click of menu items this function will execute
       * This function will redirect to corresponding section if section exist 
       */
      scrollToSection: function (event) {
         var targetId = $(this).attr('href');

         if ($(targetId).length > 0) {
            event.preventDefault();
            $('html, body').animate({
               scrollTop: $(targetId).offset().top - $('header#header').height()
            }, 1000);
         }

         // Also need to remove the classes for mobile menu close
         $('body').removeClass('oveflow-hidden');
         $('body header.header').removeClass('open-mobile-header');
         $('body header.header .mobile-menu').removeClass('open-mobile-menu');

         // Toggle hide class on body header.header nav.navbar .brand-area a.toggle-btn span
         $('body header.header nav.navbar .brand-area a.toggle-btn span').toggleClass('hide');
      },
   }; // end dgTheme

   $(document).ready(dgTheme.init);

} // end dgThemeWrapper()

scriptWrapper(jQuery);
