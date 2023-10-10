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
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.kendoloader = global.kendoloader || {}, global.kendoloader.js = factory()));
})(this, (function () {
    var __meta__ = {
        id: "loader",
        name: "Loader",
        category: "web",
        description: "The Loader is a visual indicator of loading data across different parts of the page.",
        depends: ["core"]
    };

    (function($, undefined$1) {
        var kendo = window.kendo,
            Widget = kendo.ui.Widget,
            ui = kendo.ui,

            HIDDEN = 'k-hidden',
            ROLE = 'role',
            ARIA_LABEL = 'aria-label',
            ARIA_HIDDEN = 'aria-hidden',
            ARIA_LIVE = 'aria-live';

        var loaderClasses = {
            loader: "k-loader",
            canvas: "k-loader-canvas",
            segment: "k-loader-segment"
        };

        var loaderTypes = {
            'pulsing': { className: 'pulsing-2', segments: 2 },
            'infinite-spinner': { className: 'spinner-3', segments: 3 },
            'converging-spinner': { className: 'spinner-4', segments: 4 }
        };

        var Loader = Widget.extend({
            init: function(element, options) {
                var that = this;

                Widget.fn.init.call(that, element, options);

                that._render();

                that._appearance();

                kendo.notify(that);
            },

            destroy: function() {
                var that = this;

                Widget.fn.destroy.call(that);
            },

            options: {
                name: 'Loader',
                themeColor: "primary",
                sizes: {
                    'small': 'sm',
                    'medium': 'md',
                    'large': 'lg'
                },
                size: 'medium',
                type: "pulsing",
                visible: true,
                messages: {
                    "loading": "Loading"
                },
                _classNames: []
            },

            _render: function() {
                var that = this,
                    wrapper = that.element,
                    type = that.options.type,
                    typeData = loaderTypes[type] === undefined$1 ? type : loaderTypes[type],
                    segments = [];

                wrapper
                    .empty()
                    .attr(ARIA_LABEL, that.options.messages.loading)
                    .attr(ROLE, "alert")
                    .attr(ARIA_LIVE, "polite");

                if (typeData.segments) {
                    for (var i = 0; i < typeData.segments; i += 1) {
                        segments.push($('<span/>').addClass(loaderClasses.segment));
                    }
                }

                $("<div>").addClass(loaderClasses.canvas)
                    .append(segments)
                    .appendTo(wrapper);
            },

            _appearance: function() {
                var that = this;

                that._themeColor = that.options.themeColor;
                that._sizes = that.options.sizes;
                that._size = that.options.size;
                that._type = that.options.type;
                that._visible = that.options.visible;

                that._updateClassNames();
            },

            _updateClassNames: function() {
                var that = this,
                    classNames = [loaderClasses.loader],
                    keepClassNames = that.options._classNames,
                    themeColor = that._themeColor,
                    sizes = that._sizes,
                    size = that._size,
                    type = that._type,
                    typeData = loaderTypes[type] === undefined$1 ? type : loaderTypes[type],
                    sizeAbbr = sizes[size] === undefined$1 ? size : sizes[size],
                    visible = that._visible;

                // Remove all class names
                that.element.removeClass(function(index, className) {
                    if (className.indexOf('k-') === 0 && keepClassNames.indexOf(className) === -1) {
                        that.element.removeClass(className);
                    }
                });

                // Color
                if (typeof themeColor === 'string' && themeColor !== '' && themeColor !== 'inherit') {
                    classNames.push('k-loader-' + themeColor);
                }

                // Size
                if (typeof size === 'string' && size !== '' && sizeAbbr !== '') {
                    classNames.push('k-loader-' + sizeAbbr);
                }

                // Type
                if (typeof type === 'string' && type !== '') {
                    classNames.push('k-loader-' + ($.isPlainObject(typeData) ? typeData.className : type));
                }

                // Visibility
                if (visible === false) {
                    classNames.push(HIDDEN);
                }

                that.element.attr(ARIA_HIDDEN, !visible);

                // Apply classnames
                that.element.addClass(classNames.join(' '));
            },

            setOptions: function(options) {
                var that = this;

                Widget.fn.setOptions.call(that, options);

                that._render();

                that._appearance();
            },

            themeColor: function(color) {
                var that = this;

                if (arguments.length === 0 || color === undefined$1) {
                    return that._themeColor;
                }

                that._themeColor = color;

                that._updateClassNames();
            },

            hide: function() {
                var that = this;

                that._visible = false;

                that._updateClassNames();
            },

            show: function() {
                var that = this;

                that._visible = true;

                that._updateClassNames();
            }
        });

        ui.plugin(Loader);

    })(window.kendo.jQuery);
    var kendo$1 = kendo;

    return kendo$1;

}));
