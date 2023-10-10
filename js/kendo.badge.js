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
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('kendo.core.js'), require('kendo.icons.js')) :
    typeof define === 'function' && define.amd ? define(['kendo.core', 'kendo.icons'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.kendobadge = global.kendobadge || {}, global.kendobadge.js = factory()));
})(this, (function () {
    var __meta__ = {
        id: "badge",
        name: "Badge",
        category: "web", // suite
        description: "The Badge decorates avatars, navigation menus, or other components in the application when visual notification is needed",
        depends: ["core", "icons"] // dependencies
    };

    (function($, undefined$1) {
        var kendo = window.kendo;
        var Widget = kendo.ui.Widget;
        var ui = kendo.ui;
        var HIDDEN = 'k-hidden';

        var iconTemplate = function (ref) {
            var icon = ref.icon;

            return kendo.ui.icon($("<span class='k-badge-icon'></span>"), { icon: icon });
        };
        var svgIconTemplate = function (ref) {
            var icon = ref.icon;

            return ("<span class='k-badge-icon k-svg-icon k-icon'>" + icon + "</span>");
        };

        var Badge = Widget.extend({
            init: function(element, options) {
                var that = this;

                Widget.fn.init.call(that, element, options);

                that._content();

                that._appearance();

                kendo.notify(that);
            },

            destroy: function() {
                var that = this;

                Widget.fn.destroy.call(that);
            },

            options: {
                name: 'Badge',
                cutoutBorder: false,
                data: {},
                fillMode: 'solid',
                icon: '',
                max: Infinity,
                position: 'inline',
                align: '',
                rounded: 'medium',
                roundings: {
                    'small': 'sm',
                    'medium': 'md',
                    'large': 'lg',
                    'full': 'full'
                },
                sizes: {
                    'small': 'sm',
                    'medium': 'md',
                    'large': 'lg'
                },
                size: 'medium',
                template: null,
                text: '',
                themeColor: 'secondary',
                visible: true,
                _classNames: []
            },

            _content: function() {
                var that = this;
                var text = that.options.text;
                var template = that.options.template;
                var data = that.options.data;
                var icon = that.options.icon;

                // Order of precedence
                // 1) template
                // 2) icon
                // 3) text
                // 4) content

                if (template !== null) {
                    that._text = text;
                    that._template = kendo.template(template).bind(that);
                    that.element.html( that._template(data) );

                    return;
                }

                if (icon !== '') {
                    that.icon(icon);

                    return;
                }

                if (text !== '') {
                    that.text(text);

                    return;
                }

                that.text(that.element.html());
            },

            _appearance: function() {
                var that = this;
                that._themeColor = that.options.themeColor;
                that._shape = that.options.shape;
                that._sizes = that.options.sizes;
                that._size = that.options.size;
                that._fillMode = that.options.fillMode;
                that._rounded = that.options.rounded;
                that._roundings = that.options.roundings;
                that._cutoutBorder = that.options.cutoutBorder;
                that._align = that.options.align;
                that._position = that.options.position;
                that._visible = that.options.visible;

                that._updateClassNames();
            },

            _updateClassNames: function() {
                var that = this;
                var classNames = ['k-badge'];
                var keepClassNames = that.options._classNames;
                var themeColor = that._themeColor;
                var shape = that._shape;
                var sizes = that._sizes;
                var size = that._size;
                var sizeAbbr = sizes[size] === undefined$1 ? size : sizes[size];
                var fillMode = that._fillMode;
                var rounded = that._rounded;
                var roundings = that._roundings;
                var roundedAbbr = roundings[rounded] === undefined$1 ? rounded : roundings[rounded];
                var cutoutBorder = that._cutoutBorder;
                var align = that._align;
                var position = that._position;
                var visible = that._visible;

                // Remove all class names
                that.element.removeClass(function(index, className) {
                    if (className.indexOf('k-') === 0 && keepClassNames.indexOf(className) === -1) {
                        that.element.removeClass(className);
                    }
                });

                // Fill
                if (typeof fillMode === 'string' && fillMode !== '') {
                    classNames.push('k-badge-' + fillMode);
                }

                // Color
                if (typeof themeColor === 'string' && themeColor !== '') {
                    classNames.push('k-badge-' + fillMode + '-' + themeColor);
                }

                // Size
                if (typeof size === 'string' && size !== '') {
                    classNames.push('k-badge-' + sizeAbbr);
                }

                // Rounded
                if (typeof rounded === 'string' && rounded !== '') {
                    classNames.push('k-rounded-' + roundedAbbr);
                }

                // Shape
                if (typeof shape === 'string' && shape !== '') {
                    classNames.push('k-badge-' + shape);
                }

                // Cutout border
                if (typeof cutoutBorder === 'boolean' && cutoutBorder === true) {
                    classNames.push('k-badge-border-cutout');
                }

                // Position
                if (typeof position === 'string' && position !== '') {
                    classNames.push('k-badge-' + position);
                }

                // Align
                if (typeof position === 'string' && position !== '' && position !== 'inline' && typeof align === 'string' && align.split(' ').length == 2) {
                    classNames.push('k-' + align.replace(' ', '-'));
                }

                // Visibility
                if (visible === false) {
                    classNames.push(HIDDEN);
                }

                // Apply classnames
                that.element.addClass(classNames.join(' '));
            },

            setOptions: function(options) {
                var that = this;

                that.element.removeClass(function(index, className) {
                    if (className.indexOf('k-') >= 0) {
                        that.element.removeClass(className);
                    }
                });

                Widget.fn.setOptions.call(that, options);

                that._content();

                that._appearance();
            },

            text: function(text) {
                var that = this;
                var max = that.options.max;

                // handle badge.text()
                if (arguments.length === 0 || text === undefined$1) {
                    return that._text;
                }

                that._text = text;

                // handle badge.text(true|false|null)
                if (text === true || text === false || text === null) {
                    that.element.html('');

                    return;
                }

                // handle badge.text('string')
                if (typeof text === 'string') {
                    that.element.html(text);

                    return;
                }

                // handle badge.text(1)
                if (typeof text === 'number') {
                    if (text > max) {
                        that.element.html(max + '+');
                    } else {
                        that.element.html(text);
                    }

                    return;
                }

                // handle other objects
                if (typeof text === 'object' && 'toString' in text) {
                    that.element.html(text.toString());

                    return;
                }

            },

            icon: function(icon) {
                var that = this;
                var iconTemplateFunction;

                // handle badge.icon()
                if (arguments.length === 0 || icon === undefined$1) {
                    return that._icon;
                }

                that._icon = icon;

                // Handle badge.icon(<SVG />)
                if (icon.indexOf('<svg') === 0) {
                    iconTemplateFunction = kendo.template(svgIconTemplate);
                    that.element.html(iconTemplateFunction({ icon: icon }));

                    return;
                }

                // Handle badge.icon(ICON_NAME)
                iconTemplateFunction = kendo.template(iconTemplate);
                that.element.html(iconTemplateFunction({ icon: icon }));
            },

            themeColor: function(color) {
                var that = this;

                // handle badge.color()
                if (arguments.length === 0 || color === undefined$1) {
                    return that._themeColor;
                }

                that._themeColor = color;
                that._updateClassNames();
            },

            rounded: function(rounded) {
                var that = this;

                // handle badge.shape()
                if (arguments.length === 0 || rounded === undefined$1) {
                    return that._rounded;
                }

                that._rounded = rounded;
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

        ui.plugin(Badge);

    })(window.kendo.jQuery);
    var kendo$1 = kendo;

    return kendo$1;

}));
