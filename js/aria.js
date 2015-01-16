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

aria.hiddenElements = [];

aria.setOptions = function(options){
    options.role = options.role || aria.options.role;
    options.label = options.label || aria.options.label;
    return options;
};

aria.isHidden = function(ele){

    if( ele.css("display") === "none" ){
        this.hiddenElements.push(ele);
    }

};

aria.keetTrack = function(ele){

// Placeholder for future watch method;

    return;
};
