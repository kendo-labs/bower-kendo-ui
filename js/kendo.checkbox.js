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
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('kendo.toggleinputbase.js'), require('kendo.html.input.js')) :
    typeof define === 'function' && define.amd ? define(['kendo.toggleinputbase', 'kendo.html.input'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.kendocheckbox = global.kendocheckbox || {}, global.kendocheckbox.js = factory()));
})(this, (function () {
    var __meta__ = {
        id: "checkbox",
        name: "CheckBox",
        category: "web",
        description: "The CheckBox widget is used to display boolean value input.",
        depends: [ "toggleinputbase", "html.input" ]
    };

    (function($, undefined$1) {
        var kendo = window.kendo,
            ui = kendo.ui,
            ToggleInputBase = ui.ToggleInputBase;

        var CheckBox = ToggleInputBase.extend({
            options: {
                name: "CheckBox",
                checked: null,
                enabled: true,
                encoded: true,
                label: null,
                rounded: "medium",
                size: "medium"
            },

            RENDER_INPUT: kendo.html.renderCheckBox,
            NS: ".kendoCheckBox",

            // alias for check, NG support
            value: function(value) {
                if (typeof value === "string") {
                    value = (value === "true");
                }

                return this.check.apply(this, [value]);
            }
        });

        kendo.cssProperties.registerPrefix("CheckBox", "k-checkbox-");

        kendo.cssProperties.registerValues("CheckBox", [{
            prop: "rounded",
            values: kendo.cssProperties.roundedValues.concat([['full', 'full']])
        }]);

        ui.plugin(CheckBox);
    })(window.kendo.jQuery);
    var kendo$1 = kendo;

    return kendo$1;

}));
