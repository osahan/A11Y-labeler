/**
 * @fileOverview _footer.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._footer = function(scope, options){

        var ele = scope.find("footer"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    // Role for footer is only assigned once (assumed the first footer is main);

                    var $this = el.first(),
                        role = $this.prop('role');

                        self.keepTrack( $this );

                    if(typeof role === "undefined"){
                        $this.attr("role", "contentinfo");
                    }

                }
            };

        labeler.init();

    };

})(this, jQuery);