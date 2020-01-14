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
        var kendo = window.kendo, Widget = kendo.ui.Widget, ui = kendo.ui, PRIMARY = 'k-badge-primary', SECONDARY = 'k-badge-secondary', INFO = 'k-badge-info', SUCCESS = 'k-badge-success', WARNING = 'k-badge-warning', ERROR = 'k-badge-error', OUTLINE = 'k-badge-outline', PILL = 'k-badge-pill', FUNCTION = 'function', STRING = 'string';
        var Badge = Widget.extend({
            init: function (element, options) {
                var that = this, type;
                Widget.fn.init.call(that, element, options);
                options = $.extend(true, {}, options);
                type = options.type || 'primary';
                that.element = $(element).addClass('k-badge').addClass(that.classPerType[type]);
                if (options.look == 'outline') {
                    that.element.addClass(OUTLINE);
                }
                if (options.appearance != 'rectangle') {
                    that.element.addClass(PILL);
                }
                if (typeof options.visible !== 'undefined' && !options.visible) {
                    that.element.hide();
                }
                that._setInitialValue();
                kendo.notify(that);
            },
            options: {
                name: 'Badge',
                value: '',
                visible: true,
                appearance: 'rectangle',
                template: null,
                type: 'secondary',
                look: null
            },
            classPerType: {
                primary: PRIMARY,
                info: INFO,
                success: SUCCESS,
                warning: WARNING,
                error: ERROR,
                secondary: SECONDARY
            },
            value: function (newValue) {
                var that = this;
                if (!newValue) {
                    return that._value;
                }
                that.element.html(kendo.htmlEncode(that._createContent(newValue)));
                that._value = newValue;
            },
            _createContent: function (value) {
                var template = this.options.template, type = typeof template, html;
                if (type == FUNCTION) {
                    html = template(value);
                } else if (type === STRING) {
                    html = kendo.template(template)({ value: value });
                } else {
                    html = value;
                }
                return html;
            },
            _setInitialValue: function () {
                var that = this, value = that.options.value || that.element.html();
                if (!/\S/.test(value)) {
                    value = '';
                }
                that._value = value;
                that.element.html(kendo.htmlEncode(that._createContent(value)));
            },
            hide: function () {
                this.element.hide();
            },
            show: function () {
                this.element.show();
            },
            setOptions: function (newOptions) {
                var that = this;
                that.element.removeClass(function (index, className) {
                    if (className.indexOf('k-') >= 0) {
                        that.element.removeClass(className);
                    }
                });
                that.init(that.element, newOptions);
            }
        });
        ui.plugin(Badge);
    }(window.kendo.jQuery));
    return window.kendo;
}, typeof define == 'function' && define.amd ? define : function (a1, a2, a3) {
    (a3 || a2)();
}));