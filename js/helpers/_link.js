/**
 * @fileOverview _link.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._link = function(scope, options){

        var ele = scope.find("link"),
            // regex = /(^#|#$)/,
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
                            href = $this.prop("href"),
                            role = $this.prop("role");

                            self.keepTrack( $this );


                         if(href && typeof role === "undefined"){
                            $this.attr("role", "link");
                         }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);