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

aria.keepTrack = function(ele){

    var observer = new MutationObserver(function(mutations) {
      // Need to write a logic based on what got changed
        aria.applyLabels();
    });

    observer.observe(this.currentSelector[0], {
        attributes: true,
        childList: true,
        characterData: true
    });
};
