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
import "./kendo.core.js";
import "./kendo.button.js";

    var __meta__ = {
        id: "togglebutton",
        name: "ToggleButton",
        category: "web",
        description: "The ToggleButton widget displays styled buttons with selected state.",
        depends: ["core", "button"]
    };

    (function($, undefined) {
        var kendo = window.kendo,
            Button = kendo.ui.Button,
            CLICK = "click",
            TOGGLE = "toggle",
            NS = ".kendoToggleButton",
            ARIA_PRESSED = "aria-pressed",
            SELECTED = "k-selected",
            TOGGLE_BUTTON = "k-toggle-button",
            DATA_GROUP = "data-group",
            ID = "id";

        var ToggleButton = Button.extend({
            init: function(element, options) {
                var that = this;

                Button.fn.init.call(that, element, options);

                element = that.wrapper = that.element;
                options = that.options;

                element.addClass(TOGGLE_BUTTON);

                that._selected = options.selected === true ? true : false;
                that.toggle(that._selected);

                if (options.group) {
                    element.attr(DATA_GROUP, options.group);
                }

                kendo.notify(that);
            },

            destroy: function() {
                var that = this;

                that.wrapper.off(NS);
                Button.fn.destroy.call(that);
            },

            events: [
                CLICK,
                TOGGLE
            ],

            options: {
                name: "ToggleButton",
                group: undefined,
                selected: false
            },

            toggle: function(toggle) {
                if (toggle === undefined) {
                    toggle = !this._selected;
                }

                this._selected = toggle;

                if (toggle === true) {
                    this.element.attr(ARIA_PRESSED, true);
                    this.element.addClass(SELECTED);
                } else if (toggle === false) {
                    this.element.attr(ARIA_PRESSED, false);
                    this.element.removeClass(SELECTED);
                }
            },

            _click: function(e) {
                if (this.options.enable) {
                    if (this.trigger(CLICK, {
                        event: e,
                        id: this.element.attr(ID),
                        target: this.element
                    })) {
                        e.preventDefault();
                    } else {
                        this.toggle();

                        this.trigger(TOGGLE, {
                            event: e,
                            checked: this._selected,
                            group: this.options.group,
                            id: this.element.attr(ID),
                            target: this.element
                        });
                    }
                }
            }
        });

        kendo.cssProperties.registerPrefix("ToggleButton", "k-button-");

        kendo.cssProperties.registerValues("ToggleButton", [{
            prop: "fillMode",
            values: kendo.cssProperties.fillModeValues.concat(["link"])
        }, {
            prop: "rounded",
            values: kendo.cssProperties.roundedValues.concat([['full', 'full']])
        }]);

        kendo.ui.plugin(ToggleButton);

    })(window.kendo.jQuery);
export default kendo;