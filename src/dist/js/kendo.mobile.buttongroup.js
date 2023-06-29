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
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.kendomobile = global.kendomobile || {}, global.kendomobile.buttongroup = global.kendomobile.buttongroup || {}, global.kendomobile.buttongroup.js = factory()));
})(this, (function () {
    var __meta__ = {
        id: "mobile.buttongroup",
        name: "ButtonGroup",
        category: "mobile",
        description: "The Kendo mobile ButtonGroup widget is a linear set of grouped buttons.",
        depends: [ "core" ]
    };

    (function($, undefined$1) {
        var kendo = window.kendo,
            ui = kendo.mobile.ui,
            Widget = ui.Widget,
            ACTIVE = "state-active",
            DISABLE = "state-disabled",
            SELECT = "select",
            SELECTOR = "li:not(.km-" + ACTIVE + ")";

        function className(name) {
            return "k-" + name + " km-" + name;
        }

        function createBadge(value) {
            return $('<span class="' + className("badge") + '">' + value + '</span>');
        }

        var ButtonGroup = Widget.extend({
            init: function(element, options) {
                var that = this;

                Widget.fn.init.call(that, element, options);

                that.element.addClass("km-buttongroup k-widget k-button-group").find("li").each(that._button);

                that.element.on(that.options.selectOn, SELECTOR, "_select");

                that._enable = true;
                that.select(that.options.index);

                if (!that.options.enable) {
                    that._enable = false;
                    that.wrapper.addClass(className(DISABLE));
                }
            },

            events: [
                SELECT
            ],

            options: {
                name: "ButtonGroup",
                selectOn: "down",
                index: -1,
                enable: true
            },

            current: function() {
                return this.element.find(".km-" + ACTIVE);
            },

            select: function(li) {
                var that = this,
                    index = -1;

                if (li === undefined$1 || li === -1 || !that._enable || $(li).is(".km-" + DISABLE)) {
                    return;
                }

                that.current().removeClass(className(ACTIVE));

                if (typeof li === "number") {
                    index = li;
                    li = $(that.element[0].children[li]);
                } else if (li.nodeType) {
                    li = $(li);
                    index = li.index();
                }

                li.addClass(className(ACTIVE));
                that.selectedIndex = index;
            },

            badge: function(item, value) {
                var buttongroup = this.element, badge;

                if (!isNaN(item)) {
                    item = buttongroup.children().get(item);
                }

                item = buttongroup.find(item);
                badge = $(item.children(".km-badge")[0] || createBadge(value).appendTo(item));

                if (value || value === 0) {
                    badge.html(value);
                    return this;
                }

                if (value === false) {
                    badge.empty().remove();
                    return this;
                }

                return badge.html();
            },

            enable: function(enable) {
                if (typeof enable == "undefined") {
                    enable = true;
                }

                this.wrapper.toggleClass(className(DISABLE), !enable);

                this._enable = this.options.enable = enable;
            },

            _button: function() {
                var button = $(this).addClass(className("button")),
                    icon = kendo.attrValue(button, "icon"),
                    badge = kendo.attrValue(button, "badge"),
                    span = button.children("span"),
                    image = button.find("img").addClass(className("image"));

                if (!span[0]) {
                    span = button.wrapInner("<span/>").children("span");
                }

                span.addClass(className("text"));

                if (!image[0] && icon) {
                    button.prepend($('<span class="' + className("icon") + ' ' + className(icon) + '"/>'));
                }

                if (badge || badge === 0) {
                    createBadge(badge).appendTo(button);
                }
            },

            _select: function(e) {
                if (e.which > 1 || e.isDefaultPrevented() || !this._enable) {
                    return;
                }

                this.select(e.currentTarget);
                this.trigger(SELECT, { index: this.selectedIndex });
            }
        });

        ui.plugin(ButtonGroup);
    })(window.kendo.jQuery);
    var kendo$1 = kendo;

    return kendo$1;

}));
