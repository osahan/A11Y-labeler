/**
 * @fileOverview _tfoot.js traverse throught DOM and assign ARIA labels to all anchors.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._tfoot = function(options){

        var ele = aria.currentSelector.find("tfoot"),
            // regex = /(^#|#$)/,
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.defineRole();
                        this.assignLabels();
                    }

                },

                defineRole: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role");

                            self.isHidden( $this );


                         if( typeof role === "undefined"){
                            $this.attr("role", "rowgroup");
                         }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);