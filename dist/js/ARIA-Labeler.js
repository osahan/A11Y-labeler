/**
 * @fileOverview This is the top-level file for ARIA-labeller.
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

/*
var aria = window.aria || {};
aria.version = '1.0.0';
aria.options = {
    role: true,
    label: true
};
*/


/**
 * @fileOverview anchor.js traverse throught DOM and assign ARIA labels to all anchors.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    $.fn.anchor = function( options ){

        var  defaults = {
            
        };


        var settings = $.extend( {}, defaults, options ),
            regx = /(^#|#$)/;

        return this.each(function(i, ele){

            if(settings.role){
                defineRole(ele);
            }
            
            if(settings.label){
                setLabels(ele);
            }

        });

        function defineRole(ele){
            var $ele = $(ele),
                href = $ele.prop("href"),
                role = $ele.prop("role");

            if( regx.test(href) && typeof role === "undefined"){
                $ele.attr("role", "button");
            }
            else if( !regx.test(href) && typeof role === "undefined"){
                $ele.attr("role", "link");
            }
        }

        
        function setLabels(ele){
            
        }
    };

})(this, jQuery);

/**
 * @fileOverview This is the Config file for ARIA-labeller, where we call all the plugins.
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

var options = {
    role: true,
    label: true
};

$("a").anchor(options);
