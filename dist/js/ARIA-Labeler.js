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

/**
 * @fileOverview anchor.js traverse throught DOM and assign ARIA labels to all anchors.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._anchor = function(options){

        var ele = aria.currentSelector.find("a"),
            regex = /(^#|#$)/,
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                defineRole: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            href = $this.prop("href"),
                            role = $this.prop("role");

                            self.isHidden( $this );

                             if(href && regex.test(href) && typeof role === "undefined"){
                                $this.attr("role", "button");
                             }  
                             else if(href && !regex.test(href) && typeof role === "undefined"){
                                $this.attr("role", "link");
                             }  

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _article.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._article = function(){


        var ele = aria.currentSelector.find("article"),
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                setOptions: function(){

                    options.role = options.role || aria.options.role;
                    options.label = options.label || aria.options.label;

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "article");

                        }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _aside.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._aside = function(){


        var ele = aria.currentSelector.find("aside"),
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "complementary");

                        }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _body.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._body = function(){


        var ele = aria.currentSelector.find("body"),
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "document");

                        }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _button.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._button = function(){


        var ele = aria.currentSelector.find("button"),
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "button");

                        }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _datalist.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._datalist = function(){


        var ele = aria.currentSelector.find("datalist"),
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "listbox");

                        }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _details.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._details = function(){


        var ele = aria.currentSelector.find("details"),
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                setOptions: function(){

                    options.role = options.role || aria.options.role;
                    options.label = options.label || aria.options.label;

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "group");

                        }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _dl.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._dl = function(){


        var ele = aria.currentSelector.find("dl"),
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "list");

                        }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _form.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._form = function(options){


        var ele = aria.currentSelector.find("form"),
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "form");

                        }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _h1.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._h1 = function(){


        var ele = aria.currentSelector.find("h1"),
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "heading");

                        }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _h2.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._h2 = function(options){


        var ele = aria.currentSelector.find("h2"),
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "heading");

                        }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _h3.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._h3 = function(){


        var ele = aria.currentSelector.find("h3"),
            labeler = {

                init: function(){
                    this.defineRole();
                    this.assignLabels();
                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "heading");

                        }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _h4.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._h4 = function(){


        var ele = aria.currentSelector.find("h4"),
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "heading");

                        }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _h5.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._h5 = function(){


        var ele = aria.currentSelector.find("h5"),
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "heading");

                        }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview area.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._h6 = function(){


        var ele = aria.currentSelector.find("h6"),
            self = this,
            labeler = {

                init: function(){
                    this.defineRole();
                    this.assignLabels();
                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "heading");

                        }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _hr.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._hr = function(){


        var ele = aria.currentSelector.find("hr"),
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "separator");

                        }

                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _img.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._img = function(){


        var ele = aria.currentSelector.find("img"),
            self = this,
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {

                        if( $(value).prop("alt") && typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "img");

                        }
                        else if( !$(value).prop("alt") && typeof $(value).prop("role") === "undefined"){

                            $(value).attr("role", "presentation");

                        }


                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview area.js traverse throught DOM and assign ARIA labels to all area elements with href.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._input = function(){


        var ele = aria.currentSelector.find("input"),
            labeler = {

                init: function(){

                    this.defineRole();
                    this.assignLabels();

                },

                defineRole: function(){

                    $.each(ele, function( index, value ) {


console.log( this );
                        // if( $(value).prop("alt") && typeof $(value).prop("role") === "undefined"){

                        //     $(value).attr("role", "img");

                        // }
                        // else if( !$(value).prop("alt") && typeof $(value).prop("role") === "undefined"){

                        //     $(value).attr("role", "presentation");

                        // }


                    });

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);
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