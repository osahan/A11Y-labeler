/**
 * @fileOverview _meter.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._meter = function(scope, options){

        var ele = scope.find("meter"),
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
                            $this.attr("role", "progressbar");
                         }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);