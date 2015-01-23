/**
 * @fileOverview _h1.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._h1 = function(scope, options){

        var ele = aria.currentSelector.find("h1"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                defineRole: function(){

                    $.each(ele, function() {

                      var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "heading");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);