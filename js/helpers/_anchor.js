/**
 * @fileOverview anchor.js traverse throught DOM and assign ARIA labels.
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

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                        var $this = $(this),
                            href = $this.prop("href"),
                            role = $this.prop("role"),
                            roleType;

                            self.keetTrack( $this );

                            if(href && regex.test(href) && typeof role === "undefined"){
                                roleType =  "button";
                            }
                            else if(href && !regex.test(href) && typeof role === "undefined"){
                                roleType =  "link";
                            }

                            if(roleType){
                                $this.attr('role', roleType);
                            }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);