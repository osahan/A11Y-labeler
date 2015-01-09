/**
 * @fileOverview area.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._h1 = function(options){


        var ele = aria.currentSelector.find("h1"),
            labeller = {

                init: function(){

                    this.setOptions();

                    if(options.role){

                        this.defineRole();

                    }

                    if(options.label){

                        this.assignLabels();

                    }

                },

                setOptions: function(){

                    options.role = options.role || aria.options.role;
                    options.label = options.label || aria.options.label;

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "heading");

                        }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeller.init();

    };

})(this, jQuery);