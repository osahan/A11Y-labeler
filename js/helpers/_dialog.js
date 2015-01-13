/**
 * @fileOverview _dialog.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._dialog = function(){

        var ele = aria.currentSelector.find("dialog"),
            self = this,
            labeler = {

                init: function(){
            
                    if(ele.length > 0 ){
                        this.defineRole();
                        this.assignLabels();
                    }

                },

                setOptions: function(){

                    options.role = options.role || aria.options.role;
                    options.label = options.label || aria.options.label;

                },

                defineRole: function(){
                    $.each(ele, function() {

                    var $this = $(this),
                        role = $this.prop("role");

                        if( typeof role === "undefined" ){

                            $(value).attr("role", "dialog");

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
