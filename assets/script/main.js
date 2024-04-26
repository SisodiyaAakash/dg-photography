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
         // Scroll Functions
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
         // Event handlers
      },
   }; // end dgTheme

   $(document).ready(dgTheme.init);

} // end dgThemeWrapper()

scriptWrapper(jQuery);
