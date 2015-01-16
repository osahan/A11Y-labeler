/**
 * @fileOverview _main.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._menu = function(options){

        var ele = aria.currentSelector.find("menu"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role"),
                            eleType = $this.prop("type");

                            self.keepTrack( $this );

                         if(eleType === "toolbar" && typeof role === "undefined"){
                            $this.attr("role", "toolbar");
                         }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);