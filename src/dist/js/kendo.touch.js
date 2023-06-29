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
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('kendo.core.js'), require('kendo.userevents.js')) :
    typeof define === 'function' && define.amd ? define(['kendo.core', 'kendo.userevents'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.kendotouch = global.kendotouch || {}, global.kendotouch.js = factory()));
})(this, (function () {
    var __meta__ = {
        id: "touch",
        name: "Touch",
        category: "mobile",
        description: "The kendo Touch widget provides a cross-platform compatible API for handling user-initiated touch events, multi-touch gestures and event sequences (drag, swipe, etc.). ",
        depends: [ "core", "userevents" ]
    };

    (function($, undefined$1) {
        var kendo = window.kendo,
            Widget = kendo.ui.Widget,
            abs = Math.abs,
            MAX_DOUBLE_TAP_DISTANCE = 20;

        var Touch = Widget.extend({
            init: function(element, options) {
                var that = this;

                Widget.fn.init.call(that, element, options);
                options = that.options;

                element = that.element;
                that.wrapper = element;

                function eventProxy(name) {
                    return function(e) {
                        that._triggerTouch(name, e);
                    };
                }

                function gestureEventProxy(name) {
                    return function(e) {
                        that.trigger(name, { touches: e.touches, distance: e.distance, center: e.center, event: e.event });
                    };
                }

                that.events = new kendo.UserEvents(element, {
                    filter: options.filter,
                    surface: options.surface,
                    minHold: options.minHold,
                    multiTouch: options.multiTouch,
                    allowSelection: true,
                    fastTap: options.fastTap,
                    press: eventProxy("touchstart"),
                    hold: eventProxy("hold"),
                    tap: that._tap.bind(that),
                    gesturestart: gestureEventProxy("gesturestart"),
                    gesturechange: gestureEventProxy("gesturechange"),
                    gestureend: gestureEventProxy("gestureend")
                });

                if (options.enableSwipe) {
                    that.events.bind("start", that._swipestart.bind(that));
                    that.events.bind("move", that._swipemove.bind(that));
                } else {
                    that.events.bind("start", that._dragstart.bind(that));
                    that.events.bind("move", eventProxy("drag"));
                    that.events.bind("end", eventProxy("dragend"));
                }

                kendo.notify(that);
            },

            events: [
                "touchstart",
                "dragstart",
                "drag",
                "dragend",
                "tap",
                "doubletap",
                "hold",
                "swipe",
                "gesturestart",
                "gesturechange",
                "gestureend"
            ],

            options: {
                name: "Touch",
                surface: null,
                global: false,
                fastTap: false,
                filter: null,
                multiTouch: false,
                enableSwipe: false,
                minXDelta: 30,
                maxYDelta: 20,
                maxDuration: 1000,
                minHold: 800,
                doubleTapTimeout: 800
            },

            cancel: function() {
                this.events.cancel();
            },

            destroy: function() {
                Widget.fn.destroy.call(this);

                this.events.destroy();
            },

            _triggerTouch: function(type, e) {
                if (this.trigger(type, { touch: e.touch, event: e.event })) {
                    e.preventDefault();
                }
            },

            _tap: function(e) {
                var that = this,
                    lastTap = that.lastTap,
                    touch = e.touch;

                if (lastTap &&
                    (touch.endTime - lastTap.endTime < that.options.doubleTapTimeout) &&
                    kendo.touchDelta(touch, lastTap).distance < MAX_DOUBLE_TAP_DISTANCE
                    ) {

                   that._triggerTouch("doubletap", e);
                   that.lastTap = null;
                } else {
                    that._triggerTouch("tap", e);
                    that.lastTap = touch;
                }
            },

            _dragstart: function(e) {
                this._triggerTouch("dragstart", e);
            },

            _swipestart: function(e) {
                if (abs(e.x.velocity) * 2 >= abs(e.y.velocity)) {
                    e.sender.capture();
                }
            },

            _swipemove: function(e) {
                var that = this,
                    options = that.options,
                    touch = e.touch,
                    duration = e.event.timeStamp - touch.startTime,
                    direction = touch.x.initialDelta > 0 ? "right" : "left";

                if (
                    abs(touch.x.initialDelta) >= options.minXDelta &&
                    abs(touch.y.initialDelta) < options.maxYDelta &&
                    duration < options.maxDuration
                    )
                {
                    that.trigger("swipe", {
                        direction: direction,
                        touch: e.touch
                    });

                    touch.cancel();
                }
            }
        });

        kendo.ui.plugin(Touch);
    })(window.kendo.jQuery);
    var kendo$1 = kendo;

    return kendo$1;

}));
