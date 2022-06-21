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
(function(f, define) {
    define('kendo.html.chip',[
        "kendo.html.base"
    ], f);
})(function() {

var __meta__ = { // jshint ignore:line
    id: "html.chip",
    name: "Html.Chip",
    category: "web",
    description: "HTML rendering utility for Kendo UI for jQuery.",
    depends: [ "html.base" ],
    features: []
};

(function($, undefined) {
    var kendo = window.kendo,
        HTMLBase = kendo.html.HTMLBase;

    var renderChip = function(element, options) {
        if (!element || $.isPlainObject(element)) {
            options = element;
            element = $("<span></span>");
        }

        return (new HTMLChip(element, options)).html();
    };

    var HTMLChip = HTMLBase.extend({
        init: function(element, options) {
            var that = this;
            HTMLBase.fn.init.call(that, element, options);
            that._wrapper();
        },
        options: {
            name: "HTMLChip",
            size: "medium",
            rounded: "medium",
            fillMode: "solid",
            themeColor: "base",
            attr: {},
            icon: "",
            iconAttr: {},
            removable: false,
            removableAttr: {},
            removeIcon: "x-circle",
            content: "",
            text: "",
            stylingOptions: [ "size", "rounded", "fillMode", "themeColor" ]
        },
        _wrapper: function() {
            var that = this,
                options = that.options;

            that.wrapper = that.element.wrap("<span class='k-chip'></span>").parent().attr(options.attr);
            that._addClasses();

            if (options.icon) {
                that.wrapper.prepend($("<span class='k-chip-icon k-icon k-i-" + options.icon + "'></span>").attr(options.iconAttr));
            }

            that.element.addClass("k-chip-content");
            if (options.text) {
                that.element.html('<span class="k-chip-label">' + options.text + '</span>');
            }

            if (options.removable) {
                that.wrapper.append($("<span class='k-chip-action k-chip-remove-action'><span class='k-icon k-i-" + options.removeIcon + "'></span></span>").attr(options.removableAttr));
            }
        }
    });

    $.extend(kendo.html, {
        renderChip: renderChip,
        HTMLChip: HTMLChip
    });

    kendo.cssProperties.registerPrefix("HTMLChip", "k-chip-");

})(window.kendo.jQuery);

return window.kendo;

}, typeof define == 'function' && define.amd ? define : function(a1, a2, a3) { (a3 || a2)(); });

