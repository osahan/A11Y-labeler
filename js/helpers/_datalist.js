/**
 * @fileOverview _datalist.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._datalist = function(){


        var ele = aria.currentSelector.find("datalist"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.defineRole();
                        this.assignLabels();
                    }

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "listbox");

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