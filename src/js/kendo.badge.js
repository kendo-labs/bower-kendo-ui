/** 
 * Copyright 2020 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
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
(function (f, define) {
    define('kendo.badge', ['kendo.core'], f);
}(function () {
    var __meta__ = {
        id: 'badge',
        name: 'Badge',
        category: 'web',
        description: 'The Badge decorates avatars, navigation menus, or other components in the application when visual notification is needed',
        depends: ['core']
    };
    (function ($, undefined) {
        var kendo = window.kendo;
        var Widget = kendo.ui.Widget;
        var ui = kendo.ui;
        var HIDDEN = 'k-hidden';
        var iconTemplate = '<span class=\'k-badge-icon k-icon k-i-#= icon #\'></span>';
        var svgIconTemplate = '<span class=\'k-badge-icon k-svg-icon\'>#= icon #</span>';
        var Badge = Widget.extend({
            init: function (element, options) {
                var that = this;
                Widget.fn.init.call(that, element, options);
                that._deprecated();
                that._content();
                that._appearance();
                kendo.notify(that);
            },
            destroy: function () {
                var that = this;
                Widget.fn.destroy.call(that);
            },
            options: {
                name: 'Badge',
                badgeStyle: 'solid',
                color: 'secondary',
                cutoutBorder: false,
                data: {},
                icon: '',
                max: Infinity,
                placement: 'edge',
                position: 'inline',
                sizes: {
                    'small': 'sm',
                    'medium': '',
                    'large': 'lg'
                },
                size: 'medium',
                shape: 'rounded',
                template: null,
                text: '',
                visible: true,
                _classNames: []
            },
            _deprecated: function () {
                var that = this;
                var options = that.options;
                if (options.text === '' && options.value !== '' && options.value !== undefined) {
                    options.text = options.value;
                }
                if (options.color === 'secondary' && typeof options.type === 'string' && options.type !== '') {
                    options.color = options.type;
                }
                if (options.shape === 'rounded' && typeof options.appearance === 'string' && options.appearance !== '') {
                    options.shape = options.appearance;
                }
                if (options.badgeStyle === 'solid' && typeof options.look === 'string' && options.look !== '') {
                    options.badgeStyle = options.look;
                }
                if (options.position === 'inline' && typeof options.overlay === 'boolean' && options.overlay === true) {
                    options.position = 'top end';
                }
            },
            _content: function () {
                var that = this;
                var text = that.options.text;
                var template = that.options.template;
                var data = that.options.data;
                var icon = that.options.icon;
                if (template !== null) {
                    that._text = text;
                    that._template = kendo.template(template).bind(that);
                    that.element.html(that._template(data));
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
            _appearance: function () {
                var that = this;
                that._color = that.options.color;
                that._shape = that.options.shape;
                that._sizes = that.options.sizes;
                that._size = that.options.size;
                that._badgeStyle = that.options.badgeStyle;
                that._cutoutBorder = that.options.cutoutBorder;
                that._placement = that.options.placement;
                that._position = that.options.position;
                that._visible = that.options.visible;
                that._updateClassNames();
            },
            _updateClassNames: function () {
                var that = this;
                var classNames = ['k-badge'];
                var keepClassNames = that.options._classNames;
                var color = that._color;
                var shape = that._shape;
                var sizes = that._sizes;
                var size = that._size;
                var sizeAbbr = sizes[size] === undefined ? size : sizes[size];
                var sizeSuffix = '';
                var badgeStyle = that._badgeStyle;
                var badgeStyleInfix = '';
                var cutoutBorder = this._cutoutBorder;
                var placement = that._placement;
                var placementInfix = '';
                var position = this._position.toLowerCase();
                var positions;
                var visible = that._visible;
                that.element.removeClass(function (index, className) {
                    if (className.indexOf('k-') === 0 && keepClassNames.indexOf(className) === -1) {
                        that.element.removeClass(className);
                    }
                });
                if (typeof badgeStyle === 'string' && badgeStyle !== '' && badgeStyle !== 'solid') {
                    classNames.push('k-badge-' + badgeStyle);
                    badgeStyleInfix = badgeStyle + '-';
                }
                if (typeof color === 'string' && color !== '' && color !== 'inherit') {
                    classNames.push('k-badge-' + badgeStyleInfix + color);
                }
                if (typeof size === 'string' && size !== '' && size !== 'medium' && sizeAbbr !== '') {
                    classNames.push('k-badge-' + sizeAbbr);
                    sizeSuffix = '-' + sizeAbbr;
                }
                if (typeof shape === 'string' && shape !== '' && shape !== 'rectangle') {
                    classNames.push('k-badge-' + shape);
                    if (sizeSuffix !== '') {
                        classNames.push('k-badge-' + shape + sizeSuffix);
                    }
                }
                if (typeof cutoutBorder === 'boolean' && cutoutBorder === true) {
                    classNames.push('k-badge-border-cutout');
                }
                if (typeof placement === 'string' && placement !== '' && placement !== 'edge') {
                    placementInfix = placement + '-';
                }
                if (typeof position === 'string' && position.split(' ').length == 2) {
                    positions = position.split(' ');
                    classNames.push('k-badge-' + placementInfix + positions[0] + '-' + positions[1]);
                }
                if (visible === false) {
                    classNames.push(HIDDEN);
                }
                that.element.addClass(classNames.join(' '));
            },
            setOptions: function (options) {
                var that = this;
                that.element.removeClass(function (index, className) {
                    if (className.indexOf('k-') >= 0) {
                        that.element.removeClass(className);
                    }
                });
                Widget.fn.setOptions.call(that, options);
                that._deprecated();
                that._content();
                that._appearance();
            },
            text: function (text) {
                var that = this;
                var max = that.options.max;
                if (arguments.length === 0 || text === undefined) {
                    return that._text;
                }
                that._text = text;
                if (text === true || text === false || text === null) {
                    that.element.html('');
                    return;
                }
                if (typeof text === 'string') {
                    that.element.html(text);
                    return;
                }
                if (typeof text === 'number') {
                    if (text > max) {
                        that.element.html(max + '+');
                    } else {
                        that.element.html(text);
                    }
                    return;
                }
                if (typeof text === 'object' && 'toString' in text) {
                    that.element.html(text.toString());
                    return;
                }
            },
            icon: function (icon) {
                var that = this;
                var iconTemplateFunction;
                if (arguments.length === 0 || icon === undefined) {
                    return that._icon;
                }
                that._icon = icon;
                if (icon.indexOf('<svg') === 0) {
                    iconTemplateFunction = kendo.template(svgIconTemplate);
                    that.element.html(iconTemplateFunction({ icon: icon }));
                    return;
                }
                iconTemplateFunction = kendo.template(iconTemplate);
                that.element.html(iconTemplateFunction({ icon: icon }));
            },
            color: function (color) {
                var that = this;
                if (arguments.length === 0 || color === undefined) {
                    return that._color;
                }
                that._color = color;
                that._updateClassNames();
            },
            shape: function (shape) {
                var that = this;
                if (arguments.length === 0 || shape === undefined) {
                    return that._shape;
                }
                that._shape = shape;
                that._updateClassNames();
            },
            hide: function () {
                var that = this;
                that._visible = false;
                that._updateClassNames();
            },
            show: function () {
                var that = this;
                that._visible = true;
                that._updateClassNames();
            }
        });
        Badge.fn.value = Badge.fn.text;
        ui.plugin(Badge);
    }(window.kendo.jQuery));
    return window.kendo;
}, typeof define == 'function' && define.amd ? define : function (a1, a2, a3) {
    (a3 || a2)();
}));