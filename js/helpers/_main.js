/**
 * @fileOverview _main.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._main = function(scope, options){

        var ele = aria.currentSelector.find("main"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    // Role for main is only assigned once

                    var $this = el.first(),
                        role = $this.prop('role');

                    if(typeof role === "undefined"){
                        $this.attr("role", "main");
                    }

                }
            };

        labeler.init();

    };

})(this, jQuery);