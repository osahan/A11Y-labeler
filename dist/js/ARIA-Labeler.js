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
/**
 * @fileOverview anchor.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._anchor = function(scope, options){

        var ele = aria.currentSelector.find("a"),
            regex = /(^#|#$|\b^javascript:\b|\b^mailto:\b)/,
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                        var $this = $(this),
                            href = $this.prop("href"),
                            role = $this.prop("role"),
                            roleType;

                            self.keepTrack( $this );

                            if(href && regex.test(href) && typeof role === "undefined"){
                                roleType =  "button";
                            }
                            else if(href && !regex.test(href) && typeof role === "undefined"){
                                roleType =  "link";
                            }

                            if(roleType){
                                $this.attr('role', roleType);
                            }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _article.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._article = function(scope, options){

        var ele = aria.currentSelector.find("article"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                        var $this = $(this),
                            role = $this.prop("role");

                        self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "article");

                        }

                    });

                },

            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _aside.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._aside = function(scope, options){

        var ele = aria.currentSelector.find("aside"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                      var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "complementary");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _body.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._body = function(scope, options){

        var ele = aria.currentSelector.find("body"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                      var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "document");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _button.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._button = function(scope, options){

        var ele = aria.currentSelector.find("button"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                      var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "button");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _datalist.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._datalist = function(scope, options){

        var ele = aria.currentSelector.find("datalist"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                      var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "listbox");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _details.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._details = function(scope, options){

        var ele = aria.currentSelector.find("details"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                      var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "group");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _dialog.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._dialog = function(scope, options){

        var ele = aria.currentSelector.find("dialog"),
            self = this,
            labeler = {

                init: function(){
            
                    if(ele.length > 0 ){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                    var $this = $(this),
                        role = $this.prop("role");

                        self.keepTrack( $this );

                        if( typeof role === "undefined" ){

                            $(value).attr("role", "dialog");

                        }

                    });

                }
            };

        labeler.init();
    };

})(this, jQuery);

/**
 * @fileOverview _dl.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._dl = function(scope, options){

        var ele = aria.currentSelector.find("dl"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }
                },

                assignLabels: function(){

                    $.each(ele, function( index, value ) {

                      var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "list");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _footer.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._footer = function(scope, options){

        var ele = aria.currentSelector.find("footer"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    // Role for footer is only assigned once (assumed the first footer is main);

                    var $this = el.first(),
                        role = $this.prop('role');

                        self.keepTrack( $this );

                    if(typeof role === "undefined"){
                        $this.attr("role", "contentinfo");
                    }

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _form.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._form = function(scope, options){

        var ele = aria.currentSelector.find("form"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                      var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "form");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _h1.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._h1 = function(scope, options){

        var ele = aria.currentSelector.find("h1"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                defineRole: function(){

                    $.each(ele, function() {

                      var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "heading");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _h2.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._h2 = function(scope, options){

        var ele = aria.currentSelector.find("h2"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function( index, value ) {

                      var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "heading");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _h3.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._h3 = function(scope, options){

        var ele = aria.currentSelector.find("h3"),
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                      var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "heading");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _h4.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._h4 = function(scope, options){

        var ele = aria.currentSelector.find("h4"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                      var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "heading");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _h5.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._h5 = function(scope, options){

        var ele = aria.currentSelector.find("h5"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                      var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "heading");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview area.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._h6 = function(scope, options){

        var ele = aria.currentSelector.find("h6"),
            self = this,
            labeler = {

                init: function(){
                    this.assignLabels();
                },

                assignLabels: function(){

                    $.each(ele, function() {

                      var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "heading");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _header.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._header = function(scope, options){

        var ele = aria.currentSelector.find("header"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    // Role for header is only assigned once (assumed the first header is main);

                    var $this = el.first(),
                        role = $this.prop('role');

                    if(typeof role === "undefined"){
                        $this.attr("role", "banner");
                    }

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _hr.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._hr = function(scope, options){

        var ele = aria.currentSelector.find("hr"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                      var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "separator");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _img.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._img = function(scope, options){

        var ele = aria.currentSelector.find("img"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function() {

                        var $this = $(this),
                            alt = $this.prop("alt"),
                            eleType = $this.prop("type"),
                            role = $this.prop("role"),
                            roleType;

                            self.keepTrack( $this );

                        if( alt && typeof role === "undefined"){

                            $this.attr("role", "img");

                        }
                        else if( !alt && typeof role === "undefined"){

                            $this.attr("role", "presentation");

                        }
                        else if( (eleType === "button" || eleType === "reset" || eleType === "submit" || eleType === "image") && typeof role === "undefined"){

                            $this.attr("role", "button");

                        }
                        else if( ( eleType === "email" || eleType === "password" ) && typeof role === "undefined"){

                            $this.attr("role", "textbox");

                        }
                        else if(eleType === "radio" && typeof role === "undefined"){

                            $this.attr("role", "radio");

                        }
                        else if(eleType === "range" && typeof role === "undefined"){

                            $this.attr("role", "slider");

                        }
                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview area.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._input = function(scope, options){

        var ele = aria.currentSelector.find("input"),
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            eleType = $this.prop("type"),
                            role = $this.prop("role"),
                            listAttr = $(this).prop("list"),
                            roleType;

                            self.keepTrack( $this );

                        switch (eleType) {
                            case button:
                                roleType = "button";
                                break;
                            case email:
                                roleType = (listAttr) ? "combobox" : "textbox";
                                break;
                            case image:
                                roleType = "button";
                                break;
                            case password:
                                roleType = "textbox";
                                break;
                            case radio:
                                roleType = "radio";
                                break;
                            case range:
                                roleType = "slider";
                                break;
                            case reset:
                                roleType = "button";
                                break;
                            case submit:
                                roleType = "button";
                                break;
                            case tel:
                                roleType = (listAttr) ? "combobox" : "textbox";
                                break;
                            case text:
                                roleType = (listAttr) ? "combobox" : "textbox";
                                break;
                            case search:
                                roleType = (listAttr) ? "combobox" : "textbox";
                                break;
                            case url:
                                roleType = (listAttr) ? "combobox" : "textbox";
                                break;


                        }

                        $(this).attr("role", roleType);

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _li.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._li = function(scope, options){

        var ele = aria.currentSelector.find("li"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role"),
                            ul = $this.closest('ul'),
                            ol = $this.closest('ol');

                            self.keepTrack( $this );

                        if( ( ul.length > 0 || ol.length > 0 ) && typeof role === "undefined"){

                            $this.attr("role", "listitem");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _link.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._link = function(scope, options){

        var ele = aria.currentSelector.find("link"),
            // regex = /(^#|#$)/,
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            href = $this.prop("href"),
                            role = $this.prop("role");

                            self.keepTrack( $this );


                         if(href && typeof role === "undefined"){
                            $this.attr("role", "link");
                         }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _main.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._main = function(scope, options){

        var ele = aria.currentSelector.find("main"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    // Role for main is only assigned once

                    var $this = el.first(),
                        role = $this.prop('role');

                    if(typeof role === "undefined"){
                        $this.attr("role", "main");
                    }

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _main.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._menu = function(scope, options){

        var ele = aria.currentSelector.find("menu"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role"),
                            eleType = $this.prop("type");

                            self.keepTrack( $this );

                         if(eleType === "toolbar" && typeof role === "undefined"){
                            $this.attr("role", "toolbar");
                         }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _menuitem.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._menuitem = function(scope, options){

        var ele = aria.currentSelector.find("menuitem"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            eleType = $this.prop("type"),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                         if(eleType === "checkbox" && typeof role === "undefined"){
                            $this.attr("role", "menuitemcheckbox");
                         }
                         else if(eleType === "radio" && typeof role === "undefined"){
                            $this.attr("role", "menuitemradio");
                         }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _meter.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._meter = function(scope, options){

        var ele = aria.currentSelector.find("meter"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );


                         if(typeof role === "undefined"){
                            $this.attr("role", "progressbar");
                         }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _meter.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._nav = function(scope, options){

        var ele = aria.currentSelector.find("nav"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                         if(typeof role === "undefined"){
                            $this.attr("role", "navigation");
                         }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _ol.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._ol = function(scope, options){

        var ele = aria.currentSelector.find("ol"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }
                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "list");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _option.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._option = function(scope, options){

        var ele = aria.currentSelector.find("option"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role"),
                            select = $this.closest('select'),
                            datalist = $this.closest('datalist');

                            self.keepTrack( $this );

                        if( ( select.length > 0 || datalist.length > 0 ) && typeof role === "undefined"){

                            $this.attr("role", "option");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _output.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._output = function(scope, options){

        var ele = aria.currentSelector.find("output"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                         if(typeof role === "undefined"){
                            $this.attr("role", "status");
                         }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _section.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._section = function(scope, options){

        var ele = aria.currentSelector.find("section"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                         if(typeof role === "undefined"){
                            $this.attr("role", "region");
                         }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _select.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._select = function(scope, options){

        var ele = aria.currentSelector.find("select"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role"),
                            multiple = $this.prop("multiple");

                            self.keepTrack( $this );

                         if(multiple && typeof role === "undefined"){
                            $this.attr("role", "listbox");
                            $this.attr("aria-multiselectable","true");
                         } 
                         else if(!multiple && typeof role === "undefined"){
                            $this.attr("role", "listbox");
                            $this.attr("aria-multiselectable","false");
                         } 

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _tbody.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._tbody = function(scope, options){

        var ele = aria.currentSelector.find("tbody"),
            // regex = /(^#|#$)/,
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                         if( typeof role === "undefined"){
                            $this.attr("role", "rowgroup");
                         }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _textarea.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._textarea = function(scope, options){

        var ele = aria.currentSelector.find("textarea"),
            // regex = /(^#|#$)/,
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                         if( typeof role === "undefined"){
                            $this.attr("role", "textarea");
                         }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _tfoot.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._tfoot = function(scope, options){

        var ele = aria.currentSelector.find("tfoot"),
            // regex = /(^#|#$)/,
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                         if( typeof role === "undefined"){
                            $this.attr("role", "rowgroup");
                         }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _thead.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._thead = function(scope, options){

        var ele = aria.currentSelector.find("thead"),
            // regex = /(^#|#$)/,
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );


                         if( typeof role === "undefined"){
                            $this.attr("role", "rowgroup");
                         }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _ul.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._ul = function(scope, options){


        var ele = aria.currentSelector.find("ul"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }
                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                        if( typeof role === "undefined"){

                            $this.attr("role", "list");

                        }

                    });

                }

            };

        labeler.init();

    };

})(this, jQuery);