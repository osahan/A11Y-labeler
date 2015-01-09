/**
 * @fileOverview This is the Config file for ARIA-labeller, where we call all the plugins.
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

    var config  = function(options){

        aria._anchor(options);
        // aria._area(options);
        aria._article(options);
        aria._aside(options);
        aria._body(options);
        aria._button(options);
        aria._datalist(options);
        aria._details(options);
        aria._dl(options);
        aria._form(options);
        aria._h1(options);
        aria._h2(options);
        aria._h3(options);
        aria._h4(options);
        aria._h5(options);
        aria._h6(options);
        aria._hr(options);
        aria._img(options);
        aria._input(options);


    };



    $.fn.aria = function( options ){
       
        aria.currentSelector = this;

        var  defaults = {
            
        },
        settings = $.extend( {}, defaults, options );

        config( settings );

        return this;

    };