/**
 * @fileOverview This is the Config file for ARIA-labeller, where we call all the plugins.
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

aria.applyLabels  = function(options){

        aria._anchor();
        // aria._area(options);
        aria._article();
        aria._aside();
        aria._body();
        aria._button();
        aria._datalist();
        aria._details();
        aria._dialog();
        aria._dl();
        aria._form();
        aria._h1();
        aria._h2();
        aria._h3();
        aria._h4();
        aria._h5();
        aria._h6();
        aria._header();
        aria._hr();
        aria._img();
        aria._input();
        aria._li();
        aria._link();
        aria._main();
        aria._menu();
        aria._menuitem();
        aria._meter();
        aria._nav();
        aria._ol();
        aria._option();
        aria._output();
        aria._section();
        aria._select();
        aria._tbody();
        aria._textarea();
        aria._tfoot();
        aria._thead();
        aria._ul();

    };



aria.observeMutation  = function(){

    var observer = new MutationObserver(function(mutations) {
      // mutations.forEach(function(mutation) {
      //   console.log(mutation.type);
      // });
      // Need to write a logic based on what got changed
        aria.applyLabels();
    });

    observer.observe(this.currentSelector[0], {
        attributes: true,
        childList: true,
        characterData: true
    });

};


$.fn.aria = function( options ){
    aria.currentSelector = this;

    var  defaults = {
        
    },
    settings = $.extend( {}, defaults, options );

    aria.applyLabels( settings );
    aria.observeMutation();

    return this;
};