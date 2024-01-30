/**
 * Copyright 2024 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
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
import "./kendo.html.base.js";

var __meta__ = {
    id: "html.chiplist",
    name: "Html.ChipList",
    category: "web",
    description: "HTML rendering utility for Kendo UI for jQuery.",
    depends: ["html.base"],
    features: []
};

(function($, undefined) {
    var kendo = window.kendo,
        HTMLBase = kendo.html.HTMLBase;

    var renderChipList = function(element, options) {
        if (arguments[0] === undefined || $.isPlainObject(arguments[0])) {
            options = element;
            element = $("<div></div>");
        }

        return (new HTMLChipList(element, options)).html();
    };

    var HTMLChipList = HTMLBase.extend({
        init: function(element, options) {
            var that = this;
            HTMLBase.fn.init.call(that, element, options);
            that.wrapper = that.element.addClass("k-chip-list");
            that._applyAriaAttributes(options);
            that._addClasses();
        },
        options: {
            name: "HTMLChipList",
            size: "medium",
            stylingOptions: ["size"]
        },
        _applyAriaAttributes: function(options) {
            var that = this;
            options = $.extend({ selectable: "none" }, options);
            var ariaLabelOption = (options.attributes || {})["aria-label"];

            if (options.selectable !== "none") {
                that.element.attr({
                    "aria-multiselectable": options.selectable === "multiple",
                    role: "listbox",
                    "aria-label": ariaLabelOption || that.element.attr("id") + " listbox",
                    "aria-orientation": "horizontal"
                });
            } else {
                that.element.removeAttr("role aria-label aria-multiselectable aria-orientation");
            }
        }
    });

    $.extend(kendo.html, {
        renderChipList: renderChipList,
        HTMLChipList: HTMLChipList
    });

    kendo.cssProperties.registerPrefix("HTMLChipList", "k-chip-list-");

})(window.kendo.jQuery);
export default kendo;

