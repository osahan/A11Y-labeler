/**
 * @fileOverview This is the Config file for ARIA-labeller, where we call all the plugins.
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

aria.applyLabels  = function(scope, options){

    var eleGroups = [
        "_anchor",
        "_article",
        "_aside",
        "_body",
        "_button",
        "_datalist",
        "_details",
        "_dialog",
        "_dl",
        "_form",
        "_h1",
        "_h2",
        "_h3",
        "_h4",
        "_h5",
        "_h6",
        "_header",
        "_hr",
        "_img",
        "_input",
        "_li",
        "_link",
        "_main",
        "_menu",
        "_menuitem",
        "_meter",
        "_nav",
        "_ol",
        "_option",
        "_output",
        "_section",
        "_select",
        "_tbody",
        "_textarea",
        "_tfoot",
        "_thead",
        "_ul"
    ];

    $.each(eleGroups, function(index, val) {
         aria[val](scope, options);
    });

};


$.fn.aria = function( options ){
    aria.currentSelector = this;

    var  defaults = {
        
    },
    settings = $.extend( {}, defaults, options );

    aria.applyLabels( settings );
    aria.keepTrack();

    return this;
};