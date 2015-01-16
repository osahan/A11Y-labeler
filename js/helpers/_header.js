/**
 * @fileOverview _header.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._header = function(options){

        var ele = aria.currentSelector.find("header"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    // Role for header is only assigned once (assumed the first header is main);

                    var $this = el.first(),
                        role = $this.prop('role');

                    if(typeof role === "undefined"){
                        $this.attr("role", "banner");
                    }

                }
            };

        labeler.init();

    };

})(this, jQuery);