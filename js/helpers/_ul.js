/**
 * @fileOverview _ul.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._ul = function(scope, options){


        var ele = scope.find("ul"),
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

                        if( typeof role === "undefined"){

                            $this.attr("role", "list");

                        }

                    });

                }

            };

        labeler.init();

    };

})(this, jQuery);