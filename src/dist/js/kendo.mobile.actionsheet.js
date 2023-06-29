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
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('kendo.mobile.popover.js'), require('kendo.mobile.shim.js')) :
    typeof define === 'function' && define.amd ? define(['kendo.mobile.popover', 'kendo.mobile.shim'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.kendomobile = global.kendomobile || {}, global.kendomobile.actionsheet = global.kendomobile.actionsheet || {}, global.kendomobile.actionsheet.js = factory()));
})(this, (function () {
    var __meta__ = {
        id: "mobile.actionsheet",
        name: "ActionSheet",
        category: "mobile",
        description: "The mobile ActionSheet widget displays a set of choices related to a task the user initiates.",
        depends: [ "mobile.popover", "mobile.shim" ]
    };

    (function($, undefined$1) {
        var kendo = window.kendo,
            support = kendo.support,
            ui = kendo.mobile.ui,
            Shim = ui.Shim,
            Popup = ui.Popup,
            Widget = ui.Widget,
            OPEN = "open",
            CLOSE = "close",
            COMMAND = "command",
            BUTTONS = "li>a",
            CONTEXT_DATA = "actionsheetContext",
            WRAP = '<div class="km-actionsheet-wrapper"></div>',
            cancelTemplate = kendo.template(function (ref) {
                var cancel = ref.cancel;

                return ("<li class=\"km-actionsheet-cancel\"><a href=\"#\">" + (kendo.htmlEncode(cancel)) + "</a></li>");
        });

        var ActionSheet = Widget.extend({
            init: function(element, options) {
                var that = this,
                    ShimClass,
                    tablet,
                    type,
                    os = support.mobileOS;

                Widget.fn.init.call(that, element, options);

                options = that.options;
                type = options.type;
                element = that.element;

                if (type === "auto") {
                    tablet = os && os.tablet;
                } else {
                    tablet = type === "tablet";
                }

                ShimClass = tablet ? Popup : Shim;

                if (options.cancelTemplate) {
                    cancelTemplate = kendo.template(options.cancelTemplate);
                }

                element
                    .addClass("km-actionsheet")
                    .append(cancelTemplate({ cancel: that.options.cancel }))
                    .wrap(WRAP)
                    .on("up", BUTTONS, "_click")
                    .on("click", BUTTONS, kendo.preventDefault);

                that.view().bind("destroy", function() {
                    that.destroy();
                });

                that.wrapper = element.parent().addClass(type ? " km-actionsheet-" + type : "");

                that.shim = new ShimClass(that.wrapper, $.extend({ modal: os.ios && os.majorVersion < 7, className: "km-actionsheet-root" }, that.options.popup) );

                that._closeProxy = that._close.bind(that);
                that._shimHideProxy = that._shimHide.bind(that);
                that.shim.bind("hide", that._shimHideProxy);

                if (tablet) {
                    kendo.onResize(that._closeProxy);
                }

                kendo.notify(that, ui);
            },

            events: [
                OPEN,
                CLOSE,
                COMMAND
            ],

            options: {
                name: "ActionSheet",
                cancel: "Cancel",
                type: "auto",
                popup: { height: "auto" }
            },

            open: function(target, context) {
                var that = this;
                that.target = $(target);
                that.context = context;
                that.shim.show(target);
            },

            close: function() {
                this.context = this.target = null;
                this.shim.hide();
            },

            openFor: function(target) {
                var that = this,
                    context = target.data(CONTEXT_DATA);

                that.open(target, context);
                that.trigger(OPEN, { target: target, context: context });
            },

            destroy: function() {
                Widget.fn.destroy.call(this);
                kendo.unbindResize(this._closeProxy);
                this.shim.destroy();
            },

            _click: function(e) {
                if (e.isDefaultPrevented()) {
                    return;
                }

                var currentTarget = $(e.currentTarget);
                var action = currentTarget.data("action");

                if (action) {
                    var actionData = {
                        target: this.target,
                        context: this.context
                    },
                    $angular = this.options.$angular;

                    if ($angular) {
                        this.element.injector().get("$parse")(action)($angular[0])(actionData);
                    } else {
                        kendo.getter(action)(window)(actionData);
                    }
                }

                this.trigger(COMMAND, { target: this.target, context: this.context, currentTarget: currentTarget });

                e.preventDefault();
                this._close();
            },

            _shimHide: function(e) {
                if (!this.trigger(CLOSE)) {
                    this.context = this.target = null;
                } else {
                    e.preventDefault();
                }
            },

            _close: function(e) {
                if (!this.trigger(CLOSE)) {
                    this.close();
                } else {
                    e.preventDefault();
                }
            }
        });

        ui.plugin(ActionSheet);
    })(window.kendo.jQuery);
    var kendo$1 = kendo;

    return kendo$1;

}));
