/**
 * @fileOverview _dialog.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._dialog = function(scope, options){

        var ele = scope.find("dialog"),
            self = this,
            labeler = {

                init: function(){
            
                    if(ele.length > 0 ){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                    var $this = $(this),
                        role = $this.prop("role");

                        self.keepTrack( $this );

                        if( typeof role === "undefined" ){

                            $(value).attr("role", "dialog");

                        }

                    });

                }
            };

        labeler.init();
    };

})(this, jQuery);
