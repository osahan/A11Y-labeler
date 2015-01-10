/**
 * @fileOverview _img.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._img = function(){


        var ele = aria.currentSelector.find("img"),
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( $(value).prop("alt") && typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "img");

                        }
                        else if( !$(value).prop("alt") && typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "presentation");

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