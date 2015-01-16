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
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                        var $this = $(this),
                            alt = $this.prop("alt"),
                            eleType = $this.prop("type"),
                            role = $this.prop("role"),
                            roleType;

                            self.keepTrack( $this );

                        if( alt && typeof role === "undefined"){

                            $this.attr("role", "img");

                        }
                        else if( !alt && typeof role === "undefined"){

                            $this.attr("role", "presentation");

                        }
                        else if( (eleType === "button" || eleType === "reset" || eleType === "submit" || eleType === "image") && typeof role === "undefined"){

                            $this.attr("role", "button");

                        }
                        else if( ( eleType === "email" || eleType === "password" ) && typeof role === "undefined"){

                            $this.attr("role", "textbox");

                        }
                        else if(eleType === "radio" && typeof role === "undefined"){

                            $this.attr("role", "radio");

                        }
                        else if(eleType === "range" && typeof role === "undefined"){

                            $this.attr("role", "slider");

                        }
                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);