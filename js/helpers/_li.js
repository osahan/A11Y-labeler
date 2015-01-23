/**
 * @fileOverview _li.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._li = function(scope, options){

        var ele = scope.find("li"),
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
                            ul = $this.closest('ul'),
                            ol = $this.closest('ol');

                            self.keepTrack( $this );

                        if( ( ul.length > 0 || ol.length > 0 ) && typeof role === "undefined"){

                            $this.attr("role", "listitem");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);