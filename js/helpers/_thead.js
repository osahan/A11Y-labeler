/**
 * @fileOverview _thead.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._thead = function(options){

        var ele = aria.currentSelector.find("thead"),
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