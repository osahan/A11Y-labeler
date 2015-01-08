/**
 * @fileOverview anchor.js traverse throught DOM and assign ARIA labels to all anchors.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._anchor = function(options){


        var ele = $("a"),
            regx = /(^#|#$)/,
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

                        if( $(value).prop("href") && regx.test($(value).prop("href")) && typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "button");

                        }
                        else if( $(value).prop("href") && !regx.test($(value).prop("href")) && typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "link");

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