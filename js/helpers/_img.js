/**
 * @fileOverview _img.js traverse throught DOM and assign ARIA labels.
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

                    if( ele.length > 0){
                        this.defineRole();
                        this.assignLabels();
                    }

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( $(value).prop("alt") && typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "img");

                        }
                        else if( !$(value).prop("alt") && typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "presentation");

                        }
                        else if( ($(value).prop("type") === "button" || $(value).prop("type") === "reset" || $(value).prop("type") === "submit" || $(value).prop("type") === "image") && typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "button");

                        }
                        else if( ( $(value).prop("type") === "email" || $(value).prop("type") === "password" ) && typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "textbox");

                        }
                        else if($(value).prop("type") === "radio" && typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "radio");

                        }
                        else if($(value).prop("type") === "range" && typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "slider");

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