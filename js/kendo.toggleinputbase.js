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
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.kendotoggleinputbase = global.kendotoggleinputbase || {}, global.kendotoggleinputbase.js = factory()));
})(this, (function () {
    var __meta__ = {
        id: "toggleinputbase",
        name: "ToggleInputBase",
        category: "web",
        description: "The ToggleInputBase component.",
        depends: [ "core" ]
    };

    (function($, undefined$1) {
        var kendo = window.kendo,
            ui = kendo.ui,
            Widget = ui.Widget,
            CHANGE = "change",
            DISABLED = "disabled",
            CHECKED = "checked";

        var ToggleInputBase = Widget.extend({
            init: function(element, options) {
                var that = this;

                Widget.fn.init.call(that, element, options);

                that._wrapper();

                that._initSettings();

                that._attachEvents();

                kendo.notify(that, kendo.ui);
            },

            events: [
                CHANGE
            ],

            options: {
                name: "ToggleInputBase"
            },

            NS: ".kendoToggleInputBase",
            RENDER_INPUT: $.noop,

            check: function(checked) {
                var that = this,
                    element = that.element[0];

                if (checked === undefined$1) {
                    return element.checked;
                }

                if (element.checked !== checked) {
                    that.options.checked = element.checked = checked;
                }

                if (checked) {
                    that.element.attr(CHECKED, CHECKED);
                } else {
                    that.element.prop(CHECKED, false);
                }
            },

            destroy: function() {
                Widget.fn.destroy.call(this);
                this.wrapper.off(this.NS);
            },

            enable: function(enable) {
                var element = this.element;

                if (typeof enable == "undefined") {
                    enable = true;
                }

                this.options.enabled = enable;

                if (enable) {
                    element.prop(DISABLED, false);
                } else {
                    element.attr(DISABLED, DISABLED);
                }
            },

            toggle: function() {
                var that = this;

                that.check(!that.element[0].checked);
            },

            _attachEvents: function() {
                this.element.on(CHANGE + this.NS, this._change.bind(this));
            },

            _change: function() {
                var checked = this.element[0].checked;

                this.trigger(CHANGE, { checked: checked });
            },

            _initSettings: function() {
                var that = this,
                    element = that.element[0],
                    options = that.options;

                if (options.checked === null) {
                    options.checked = element.checked;
                }

                that.check(options.checked);

                options.enabled = options.enabled && !that.element.attr(DISABLED);
                that.enable(options.enabled);
            },

            _wrapper: function() {
                var that = this,
                    options = that.options,
                    inputMethod = that.RENDER_INPUT;


                inputMethod(that.element, $.extend({}, options));
                that.element.removeClass('input-validation-error');

                that.wrapper = that.element;
            }
        });

        ui.plugin(ToggleInputBase);
    })(window.kendo.jQuery);
    var kendo$1 = kendo;

    return kendo$1;

}));
