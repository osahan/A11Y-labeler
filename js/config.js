/**
 * @fileOverview This is the Config file for a11y-labeller, where we call all the plugins.
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

a11y.applyLabels  = function(scope, options){

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
         a11y[val](scope, options);
    });

};


$.fn.a11y = function( options ){
    a11y.currentSelector = this;

    var  defaults = a11y.options,
    settings = $.extend( {}, defaults, options );

    a11y.applyLabels(this,  settings );
    a11y.keepTrack();

    return this;
};