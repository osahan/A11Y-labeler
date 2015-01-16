/**
 * @fileOverview _article.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._article = function(){


        var ele = aria.currentSelector.find("article"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "article");

                        }

                    });

                },

            };

        labeler.init();

    };

})(this, jQuery);