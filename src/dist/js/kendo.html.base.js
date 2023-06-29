/**
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
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
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('kendo.core.js')) :
    typeof define === 'function' && define.amd ? define(['kendo.core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.kendohtml = global.kendohtml || {}, global.kendohtml.base = global.kendohtml.base || {}, global.kendohtml.base.js = factory()));
})(this, (function () {
    var __meta__ = {
        id: "html.base",
        name: "Html.Base",
        category: "web",
        description: "",
        depends: ["core"],
        features: []
    };

    (function($, undefined$1) {
        var kendo = window.kendo,
            Class = kendo.Class;

        kendo.html = kendo.html || {};

        var HTMLBase = Class.extend({
            init: function(element, options) {
                var that = this;
                that.element = $(element);
                options = options || {};
                delete options.name;
                that._initOptions(options);
            },
            options: {
                stylingOptions: []
            },
            _addClasses: function() {
                var that = this,
                    options = that.options,
                    stylingOptions = options.stylingOptions,
                    previouslyAddedClasses = that.wrapper.data("added-classes");

                stylingOptions = stylingOptions.map(function(option) {
                    var validFill;

                    if (option === "themeColor") {
                        validFill = kendo.cssProperties.getValidClass({
                            widget: options.name,
                            propName: "fillMode",
                            value: options.fillMode
                        });

                        if (!validFill || validFill.length === 0) {
                            return "";
                        }
                    }

                    return kendo.cssProperties.getValidClass({
                        widget: options.name,
                        propName: option,
                        value: options[option],
                        fill: options.fillMode
                    });
                });

                if (previouslyAddedClasses) {
                    that.wrapper.removeClass(previouslyAddedClasses.join(" "));
                }

                that.wrapper.data("added-classes", stylingOptions);
                that.wrapper.addClass(stylingOptions.join(" "));
            },
            html: function() {
                var that = this;

                return that.wrapper[0].outerHTML;
            }
        });

        $.extend(kendo.html, {
            HTMLBase: HTMLBase
        });

    })(window.kendo.jQuery);
    var kendo$1 = kendo;

    return kendo$1;

}));
