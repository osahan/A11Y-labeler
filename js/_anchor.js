/**
 * @fileOverview anchor.js traverse throught DOM and assign ARIA labels to all anchors.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._anchor = function(options){

        var ele = aria.currentSelector.find("a"),
            regex = /(^#|#$)/,
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                defineRole: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            href = $this.prop("href"),
                            role = $this.prop("role");

                            self.isHidden( $this );

                             if(href && regex.test(href) && typeof role === "undefined"){
                                $this.attr("role", "button");
                             }  
                             else if(href && !regex.test(href) && typeof role === "undefined"){
                                $this.attr("role", "link");
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