/** 
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Licensed under the Apache License, Version 2.0 (the "License");                                                                                                                                      
 * you may not use this file except in compliance with the License.                                                                                                                                     
 * You may obtain a copy of the License at                                                                                                                                                              
 *                                                                                                                                                                                                      
 *     http://www.apache.org/licenses/LICENSE-2.0                                                                                                                                                       
 *                                                                                                                                                                                                      
 * Unless required by applicable law or agreed to in writing, software                                                                                                                                  
 * distributed under the License is distributed on an "AS IS" BASIS,                                                                                                                                    
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                                                                                                             
 * See the License for the specific language governing permissions and                                                                                                                                  
 * limitations under the License.                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
(function(f, define){
    define('kendo.html.chiplist',[
        "./kendo.html.base"
    ], f);
})(function(){

var __meta__ = { // jshint ignore:line
    id: "html.chiplist",
    name: "Html.ChipList",
    category: "web",
    description: "HTML rendering utility for Kendo UI for jQuery.",
    depends: [ "html.base" ],
    features: []
};

(function ($, undefined) {
    var kendo = window.kendo,
        HTMLBase = kendo.html.HTMLBase;

    var renderChipList = function (element, options) {
        if (arguments[0] === undefined || $.isPlainObject(arguments[0])) {
            options = element;
            element = $("<div></div>");
        }

        return (new HTMLChipList(element, options)).html();
    };

    var HTMLChipList = HTMLBase.extend({
        init: function (element, options) {
            var that = this;
            HTMLBase.fn.init.call(that, element, options);
            that.wrapper = that.element.addClass("k-chip-list");
            that._addClasses();
        },
        options: {
            name: "HTMLChipList",
            size: "medium",
            stylingOptions: [ "size" ]
        }
    });

    $.extend(kendo.html, {
        renderChipList: renderChipList,
        HTMLChipList: HTMLChipList
    });

    kendo.cssProperties.registerPrefix("HTMLChipList", "k-chip-list-");

})(window.kendo.jQuery);

return window.kendo;

}, typeof define == 'function' && define.amd ? define : function(a1, a2, a3){ (a3 || a2)(); });

