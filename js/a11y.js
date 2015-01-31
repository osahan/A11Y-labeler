/**
 * @fileOverview This is the top-level file for a11y-labeller.
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

var a11y = window.a11y || {};

a11y.version = '1.0.0';

a11y.options = {
    role: true,
    label: true
};

a11y.hiddenElements = [];

a11y.setOptions = function(options){
    options.role = options.role || a11y.options.role;
    options.label = options.label || a11y.options.label;
    return options;
};

a11y.isHidden = function(ele){

    if( ele.css("display") === "none" ){
        this.hiddenElements.push(ele);
    }

};

a11y.keepTrack = function(ele){

    var observer = new MutationObserver(function(mutations) {
      var   scope = $(mutations[0].target),
            options = a11y.options;
        a11y.applyLabels(scope, options);
    });

    observer.observe(this.currentSelector[0], {
        attributes: true,
        childList: true,
        characterData: true
    });
};
