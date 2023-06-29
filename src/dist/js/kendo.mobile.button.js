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
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('kendo.userevents.js')) :
    typeof define === 'function' && define.amd ? define(['kendo.userevents'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.kendomobile = global.kendomobile || {}, global.kendomobile.button = global.kendomobile.button || {}, global.kendomobile.button.js = factory()));
})(this, (function () {
    var __meta__ = {
        id: "mobile.button",
        name: "Button",
        category: "mobile",
        description: "The Button widget navigates between mobile Application views when pressed.",
        depends: [ "userevents" ]
    };

    (function($, undefined$1) {
        var kendo = window.kendo,
            mobile = kendo.mobile,
            ui = mobile.ui,
            Widget = ui.Widget,
            support = kendo.support,
            os = support.mobileOS,
            ANDROID3UP = os.android && os.flatVersion >= 300,
            CLICK = "click",
            DISABLED = "disabled",
            DISABLEDSTATE = "km-state-disabled";

        function highlightButton(widget, event, highlight) {
            $(event.target).closest(".km-button,.km-detail").toggleClass("km-state-active", highlight);

            if (ANDROID3UP && widget.deactivateTimeoutID) {
                clearTimeout(widget.deactivateTimeoutID);
                widget.deactivateTimeoutID = 0;
            }
        }

        function createBadge(value) {
            return $('<span class="km-badge">' + value + '</span>');
        }

        var Button = Widget.extend({
            init: function(element, options) {
                var that = this;

                Widget.fn.init.call(that, element, options);
                var useTap = that.options.clickOn === "up";

                that._wrap();
                that._style();

                if (!useTap) {
                    that.element.attr("data-navigate-on-press", true);
                }

                that.options.enable = that.options.enable && !that.element.attr(DISABLED);
                that.enable(that.options.enable);

                that._userEvents = new kendo.UserEvents(that.element, {
                    allowSelection: !useTap,
                    fastTap: true,
                    press: function(e) {
                        that._activate(e);
                    },
                    release: function(e) {
                        highlightButton(that, e, false);
                        if (!useTap) { e.event.stopPropagation(); }
                    }
                });

                that._userEvents.bind(useTap ? "tap" : "press", function(e) {
                    that._release(e);
                });


                if (ANDROID3UP) {
                    that.element.on("move", function(e) { that._timeoutDeactivate(e); });
                }
            },

            destroy: function() {
                Widget.fn.destroy.call(this);
                this._userEvents.destroy();
            },

            events: [
                CLICK
            ],

            options: {
                name: "Button",
                icon: "",
                style: "",
                badge: "",
                clickOn: "up",
                enable: true
            },

            badge: function(value) {
                var badge = this.badgeElement = this.badgeElement || createBadge(value).appendTo(this.element);

                if (value || value === 0) {
                    badge.html(value);
                    return this;
                }

                if (value === false) {
                    badge.empty().remove();
                    this.badgeElement = false;
                    return this;
                }

                return badge.html();
            },

            enable: function(enable) {
                var element = this.element;

                if (typeof enable == "undefined") {
                    enable = true;
                }

                this.options.enable = enable;

                if (enable) {
                    element.prop(DISABLED, false);
                } else {
                    element.attr(DISABLED, DISABLED);
                }

                element.toggleClass(DISABLEDSTATE, !enable);
            },

            _timeoutDeactivate: function(e) {
                if (!this.deactivateTimeoutID) {
                    this.deactivateTimeoutID = setTimeout(highlightButton, 500, this, e, false);
                }
            },

            _activate: function(e) {
                var activeElement = document.activeElement,
                    nodeName = activeElement ? activeElement.nodeName : "";

                if (this.options.enable) {
                    highlightButton(this, e, true);

                    if (nodeName == "INPUT" || nodeName == "TEXTAREA") {
                        activeElement.blur(); // Hide device keyboard
                    }
                }
            },

            _release: function(e) {
                var that = this;

                if (e.which > 1) {
                    return;
                }

                if (!that.options.enable) {
                    e.preventDefault();
                    return;
                }

                if (that.trigger(CLICK, { target: $(e.target), button: that.element })) {
                    e.preventDefault();
                }
            },

            _style: function() {
                var style = this.options.style,
                    element = this.element,
                    styles;

                if (style) {
                    styles = style.split(" ");
                    $.each(styles, function() {
                        element.addClass("km-" + this);
                    });
                }
            },

            _wrap: function() {
                var that = this,
                    icon = that.options.icon,
                    badge = that.options.badge,
                    iconSpan = '<span class="km-icon km-' + icon,
                    element = that.element.addClass("km-button"),
                    span = element.children("span:not(.km-icon)").addClass("km-text"),
                    image = element.find("img").addClass("km-image");

                if (!span[0] && element.html()) {
                    span = element.wrapInner('<span class="km-text" />').children("span.km-text");
                }

                if (!image[0] && icon) {
                    if (!span[0]) {
                        iconSpan += " km-notext";
                    }
                    that.iconElement = element.prepend($(iconSpan + '" />'));
                }

                if (badge || badge === 0) {
                    that.badgeElement = createBadge(badge).appendTo(element);
                }
            }
        });

        var BackButton = Button.extend({
            options: {
                name: "BackButton",
                style: "back"
            },

            init: function(element, options) {
                var that = this;
                Button.fn.init.call(that, element, options);

                if (typeof that.element.attr("href") === "undefined") {
                    that.element.attr("href", "#:back");
                }
            }
        });

        var DetailButton = Button.extend({
            options: {
                name: "DetailButton",
                style: ""
            },

            init: function(element, options) {
                Button.fn.init.call(this, element, options);
            },

            _style: function() {
                var style = this.options.style + " detail",
                    element = this.element;

                if (style) {
                    var styles = style.split(" ");
                    $.each(styles, function() {
                        element.addClass("km-" + this);
                    });
                }
            },

            _wrap: function() {
                var that = this,
                    icon = that.options.icon,
                    iconSpan = '<span class="km-icon km-' + icon,
                    element = that.element,
                    span = element.children("span"),
                    image = element.find("img").addClass("km-image");

                if (!image[0] && icon) {
                    if (!span[0]) {
                        iconSpan += " km-notext";
                    }
                    element.prepend($(iconSpan + '" />'));
                }
            }

        });

        ui.plugin(Button);
        ui.plugin(BackButton);
        ui.plugin(DetailButton);
    })(window.kendo.jQuery);
    var kendo$1 = kendo;

    return kendo$1;

}));
