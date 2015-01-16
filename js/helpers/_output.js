/**
 * @fileOverview _output.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._output = function(options){

        var ele = aria.currentSelector.find("output"),
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
                            role = $this.prop("role");

                            self.keepTrack( $this );

                         if(typeof role === "undefined"){
                            $this.attr("role", "status");
                         }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);