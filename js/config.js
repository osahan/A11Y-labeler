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