/**
 * @fileOverview This is the Config file for ARIA-labeller, where we call all the plugins.
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

    var config  = function(options){

        aria._anchor();
        // aria._area(options);
        aria._article();
        aria._aside();
        aria._body();
        aria._button();
        aria._datalist();
        aria._details();
        aria._dl();
        aria._form();
        aria._h1();
        aria._h2();
        aria._h3();
        aria._h4();
        aria._h5();
        aria._h6();
        aria._hr();
        aria._img();
        aria._input();


    };



    $.fn.aria = function( options ){
       
        aria.currentSelector = this;

        var  defaults = {
            
        },
        settings = $.extend( {}, defaults, options );

        config( settings );

        return this;

    };