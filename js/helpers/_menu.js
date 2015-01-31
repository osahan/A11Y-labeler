/**
 * @fileOverview _main.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._menu = function(scope, options){

        var ele = scope.find("menu"),
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