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
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('kendo.html.base.js')) :
    typeof define === 'function' && define.amd ? define(['kendo.html.base'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.kendohtml = global.kendohtml || {}, global.kendohtml.input = global.kendohtml.input || {}, global.kendohtml.input.js = factory()));
})(this, (function () {
    var __meta__ = {
        id: "html.input",
        name: "Html.Input",
        category: "web",
        description: "HTML rendering utility for Kendo UI for jQuery.",
        depends: [ "html.base" ],
        features: []
    };

    (function($, undefined$1) {
        var kendo = window.kendo,
            HTMLBase = kendo.html.HTMLBase;

        var renderCheckBox = function(element, options) {
            if (arguments[0] === undefined$1 || $.isPlainObject(arguments[0])) {
                options = element;
                element = $("<input />");
            }

            return (new HTMLCheckBox(element, options)).html();
        };

        var renderRadioButton = function(element, options) {
            if (arguments[0] === undefined$1 || $.isPlainObject(arguments[0])) {
                options = element;
                element = $("<input />");
            }

            return (new HTMLRadioButton(element, options)).html();
        };

        var HTMLInput = HTMLBase.extend({
            init: function(element, options) {
                var that = this;
                HTMLBase.fn.init.call(that, element, options);
                that._wrapper();
                that._addClasses();
            },
            options: {
                label: null,
                labelPosition: "after",
                labelId: null,
                encoded: true
            },
            _wrapper: function() {
                var that = this,
                    element = that.element[0],
                    options = that.options,
                    elementId = element.id;

                that.wrapper = that.element
                    .addClass(options.inputClass)
                    .prop("type", options.type);

                if (!elementId && !!options.label) {
                    element.id = elementId = kendo.guid();
                }

                if (!!options.label) {
                    that.labelEl = $("<label for='" + elementId + "' class='" + options.labelClass + "'>");

                    if (options.encoded) {
                        that.labelEl.text(options.label);
                    } else {
                        that.labelEl.html(options.label);
                    }

                    if (options.labelId) {
                        that.labelEl.attr("id", options.labelId);
                    }

                    if (options.optional) {
                        that.labelEl.append("<span class='" + options.optionalClass + "'>" + options.optionalText + "</span>");
                    }

                    that.element[options.labelPosition](that.labelEl);
                }
            },
            html: function() {
                var that = this,
                    after = that.options.labelPosition === "after",
                    wrapperHtml = HTMLBase.fn.html.call(that);

                if (!that.labelEl) {
                    return wrapperHtml;
                }

                if (after) {
                    return wrapperHtml + that.labelEl[0].outerHTML;
                }

                return that.labelEl[0].outerHTML + wrapperHtml;
            }
        });

        var HTMLCheckBox = HTMLInput.extend({
            init: function(element, options) {
                var that = this;
                HTMLInput.fn.init.call(that, element, options);
                that._addClasses();
            },
            options: {
                name: "HTMLCheckBox",
                inputClass: "k-checkbox",
                labelClass: "k-checkbox-label",
                optionalClass: "k-label-optional",
                optionalText: "(Optional)",
                type: "checkbox",
                rounded: "medium",
                size: "medium",
                stylingOptions: [ "size", "rounded" ]
            }
        });

        var HTMLRadioButton = HTMLInput.extend({
            init: function(element, options) {
                var that = this;
                HTMLInput.fn.init.call(that, element, options);
                that._addClasses();
            },
            options: {
                name: "HTMLRadioButton",
                inputClass: "k-radio",
                labelClass: "k-radio-label",
                optionalClass: "k-label-optional",
                optionalText: "(Optional)",
                type: "radio",
                size: "medium",
                stylingOptions: [ "size"]
            }
        });

        $.extend(kendo.html, {
            renderCheckBox: renderCheckBox,
            renderRadioButton: renderRadioButton,
            HTMLInput: HTMLInput,
            HTMLCheckBox: HTMLCheckBox,
            HTMLRadioButton: HTMLRadioButton
        });

        kendo.cssProperties.registerPrefix("HTMLCheckBox", "k-checkbox-");

        kendo.cssProperties.registerValues("HTMLCheckBox", [{
            prop: "rounded",
            values: kendo.cssProperties.roundedValues.concat([['full', 'full']])
        }]);

        kendo.cssProperties.registerPrefix("HTMLRadioButton", "k-radio-");

    })(window.kendo.jQuery);
    var kendo$1 = kendo;

    return kendo$1;

}));
