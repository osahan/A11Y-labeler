/**
 * @fileOverview area.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._input = function(){


        var ele = aria.currentSelector.find("input"),
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.defineRole();
                        this.assignLabels();
                    }

                },

                defineRole: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            eleType = $this.prop("type"),
                            role = $this.prop("role"),
                            listAttr = $(this).prop("list"),
                            roleType;


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

                },

                assignLabels: function(){


                },

                uiStates: function(){

                }
            };

        labeler.init();

    };

})(this, jQuery);