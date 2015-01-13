/**
 * @fileOverview _option.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._option = function(){


        var ele = aria.currentSelector.find("option"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.defineRole();
                        this.assignLabels();
                    }

                },

                defineRole: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role"),
                            select = $this.closest('select'),
                            datalist = $this.closest('datalist');

                        if( ( select.length > 0 || datalist.length > 0 ) && typeof role === "undefined"){

                            $this.attr("role", "option");

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