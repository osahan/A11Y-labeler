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

    // if( ele.css("display") === "none" ){
    //     this.hiddenElements.push(ele);
    // }

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

    this.checkStates( ele );

};


a11y.checkStates = function(ele){

    // this.isHidden(ele);

    // console.log( $(ele).is(":disabled") );

    // console.log( $(ele).prop("aria-hidden") );
// $("").is(":disabled")
};

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
/**
 * @fileOverview anchor.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._anchor = function(scope, options){

        var ele = scope.find("a"),
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
 * @fileOverview _article.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._article = function(scope, options){

        var ele = scope.find("article"),
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
 * @fileOverview _aside.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._aside = function(scope, options){

        var ele = scope.find("aside"),
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
 * @fileOverview _body.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._body = function(scope, options){

        var ele = scope.find("body"),
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
 * @fileOverview _button.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._button = function(scope, options){

        var ele = scope.find("button"),
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
 * @fileOverview _datalist.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._datalist = function(scope, options){

        var ele = scope.find("datalist"),
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
 * @fileOverview _details.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._details = function(scope, options){

        var ele = scope.find("details"),
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
 * @fileOverview _dialog.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._dialog = function(scope, options){

        var ele = scope.find("dialog"),
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
 * @fileOverview _dl.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._dl = function(scope, options){

        var ele = scope.find("dl"),
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
 * @fileOverview _footer.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._footer = function(scope, options){

        var ele = scope.find("footer"),
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
 * @fileOverview _form.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._form = function(scope, options){

        var ele = scope.find("form"),
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
 * @fileOverview _h1.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._h1 = function(scope, options){

        var ele = scope.find("h1"),
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
 * @fileOverview _h2.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._h2 = function(scope, options){

        var ele = scope.find("h2"),
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
 * @fileOverview _h3.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._h3 = function(scope, options){

        var ele = scope.find("h3"),
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
 * @fileOverview _h4.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._h4 = function(scope, options){

        var ele = scope.find("h4"),
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
 * @fileOverview _h5.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._h5 = function(scope, options){

        var ele = scope.find("h5"),
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
 * @fileOverview area.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._h6 = function(scope, options){

        var ele = scope.find("h6"),
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
 * @fileOverview _header.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._header = function(scope, options){

        var ele = scope.find("header"),
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
 * @fileOverview _hr.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._hr = function(scope, options){

        var ele = scope.find("hr"),
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
 * @fileOverview _img.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._img = function(scope, options){

        var ele = scope.find("img"),
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
                        // else if( (eleType === "button" || eleType === "reset" || eleType === "submit" || eleType === "image") && typeof role === "undefined"){

                        //     $this.attr("role", "button");

                        // }
                        // else if( ( eleType === "email" || eleType === "password" ) && typeof role === "undefined"){

                        //     $this.attr("role", "textbox");

                        // }
                        // else if(eleType === "radio" && typeof role === "undefined"){

                        //     $this.attr("role", "radio");

                        // }
                        // else if(eleType === "range" && typeof role === "undefined"){

                        //     $this.attr("role", "slider");

                        // }
                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview area.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._input = function(scope, options){

        var ele = scope.find("input"),
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
                            role = $this.prop("role"),
                            listAttr = $(this).prop("list"),
                            roleType;

                            self.keepTrack( $this );

                        switch (eleType) {
                            case "button":
                                roleType = "button";
                                break;
                            case "email":
                                roleType = (listAttr) ? "combobox" : "textbox";
                                break;
                            case "image":
                                roleType = "button";
                                break;
                            case "password":
                                roleType = "textbox";
                                break;
                            case "radio":
                                roleType = "radio";
                                break;
                            case "range":
                                roleType = "slider";
                                break;
                            case "reset":
                                roleType = "button";
                                break;
                            case "submit":
                                roleType = "button";
                                break;
                            case "tel":
                                roleType = (listAttr) ? "combobox" : "textbox";
                                break;
                            case "text":
                                roleType = (listAttr) ? "combobox" : "textbox";
                                break;
                            case "search":
                                roleType = (listAttr) ? "combobox" : "textbox";
                                break;
                            case "url":
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
 * @fileOverview _li.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._li = function(scope, options){

        var ele = scope.find("li"),
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
 * @fileOverview _link.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._link = function(scope, options){

        var ele = scope.find("link"),
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
 * @fileOverview _main.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._main = function(scope, options){

        var ele = scope.find("main"),
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
 * @fileOverview _main.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._menu = function(scope, options){

        var ele = scope.find("menu"),
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
 * @fileOverview _menuitem.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._menuitem = function(scope, options){

        var ele = scope.find("menuitem"),
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
 * @fileOverview _meter.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._meter = function(scope, options){

        var ele = scope.find("meter"),
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
 * @fileOverview _meter.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._nav = function(scope, options){

        var ele = scope.find("nav"),
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
 * @fileOverview _ol.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._ol = function(scope, options){

        var ele = scope.find("ol"),
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
 * @fileOverview _option.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._option = function(scope, options){

        var ele = scope.find("option"),
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
 * @fileOverview _output.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._output = function(scope, options){

        var ele = scope.find("output"),
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
 * @fileOverview _section.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._section = function(scope, options){

        var ele = scope.find("section"),
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
 * @fileOverview _select.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._select = function(scope, options){

        var ele = scope.find("select"),
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
                            $this.attr("a11y-multiselectable","true");
                         } 
                         else if(!multiple && typeof role === "undefined"){
                            $this.attr("role", "listbox");
                            $this.attr("a11y-multiselectable","false");
                         } 

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);
/**
 * @fileOverview _tbody.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._tbody = function(scope, options){

        var ele = scope.find("tbody"),
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
 * @fileOverview _textarea.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._textarea = function(scope, options){

        var ele = scope.find("textarea"),
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
 * @fileOverview _tfoot.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._tfoot = function(scope, options){

        var ele = scope.find("tfoot"),
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
 * @fileOverview _thead.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._thead = function(scope, options){

        var ele = scope.find("thead"),
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
 * @fileOverview _ul.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._ul = function(scope, options){


        var ele = scope.find("ul"),
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