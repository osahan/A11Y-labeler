/**
 * @fileOverview _select.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._select = function(scope, options){

        var ele = scope.find("select"),
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
                            multiple = $this.prop("multiple");

                            self.keepTrack( $this );

                         if(multiple && typeof role === "undefined"){
                            $this.attr("role", "listbox");
                            $this.attr("a11y-multiselectable","true");
                         } 
                         else if(!multiple && typeof role === "undefined"){
                            $this.attr("role", "listbox");
                            $this.attr("a11y-multiselectable","false");
                         } 

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);