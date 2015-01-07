/**
 * @fileOverview This is the top-level file for ARIA-labeller.
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

var aria = window.aria || {};

aria.version = '1.0.0';

aria.options = {
    role: true,
    label: true
};

/**
 * @fileOverview anchor.js traverse throught DOM and assign ARIA labels to all anchors.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria.anchor = function(options){


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

                        if( regx.test($(value).prop("href")) && typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "button");

                        }
                        else if( !regx.test($(value).prop("href")) && typeof $(value).prop("role") === "undefined"){

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
/**
 * @fileOverview This is the Config file for ARIA-labeller, where we call all the plugins.
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

    var config  = function(options){

        aria.anchor(options);

    };



    $.fn.aria = function( options ){
        
        var  defaults = {
            
        },
        settings = $.extend( {}, defaults, options );

        config( settings );

        return this;

    };