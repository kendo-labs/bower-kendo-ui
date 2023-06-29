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
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.kendomobile = global.kendomobile || {}, global.kendomobile.navbar = global.kendomobile.navbar || {}, global.kendomobile.navbar.js = factory()));
})(this, (function () {
    var __meta__ = {
        id: "mobile.navbar",
        name: "NavBar",
        category: "mobile",
        description: "The Kendo mobile NavBar widget is used inside a mobile View or Layout Header element to display an application navigation bar.",
        depends: [ "core" ]
    };

    (function($, undefined$1) {
        var kendo = window.kendo,
            mobile = kendo.mobile,
            ui = mobile.ui,
            Widget = ui.Widget;

        function createContainer(align, element) {
            var items = element.find("[" + kendo.attr("align") + "=" + align + "]");

            if (items[0]) {
                return $('<div class="km-' + align + 'item" />').append(items).prependTo(element);
            }
        }

        function toggleTitle(centerElement) {
            var siblings = centerElement.siblings(),
                noTitle = !!centerElement.children("ul")[0],
                showTitle = (!!siblings[0] && kendo.trim(centerElement.text()) === ""),
                android = !!(kendo.mobile.application && kendo.mobile.application.element.is(".km-android"));

            centerElement.prevAll().toggleClass("km-absolute", noTitle);
            centerElement.toggleClass("km-show-title", showTitle);
            centerElement.toggleClass("km-fill-title", showTitle && !kendo.trim(centerElement.html()));
            centerElement.toggleClass("km-no-title", noTitle);
            centerElement.toggleClass("km-hide-title", android && !siblings.children().is(":visible"));
        }

        var NavBar = Widget.extend({
            init: function(element, options) {
                var that = this;

                Widget.fn.init.call(that, element, options);

                element = that.element;

                that.container().bind("show", this.refresh.bind(this));

                element.addClass("km-navbar").wrapInner($('<div class="km-view-title km-show-title" />'));
                that.leftElement = createContainer("left", element);
                that.rightElement = createContainer("right", element);
                that.centerElement = element.find(".km-view-title");
            },

            options: {
                name: "NavBar"
            },

            title: function(value) {
                this.element.find(kendo.roleSelector("view-title")).text(value);
                toggleTitle(this.centerElement);
            },

            refresh: function(e) {
                var view = e.view;
                this.title(view.options.title);
            },

            destroy: function() {
                Widget.fn.destroy.call(this);
                kendo.destroy(this.element);
            }
        });

        ui.plugin(NavBar);
    })(window.kendo.jQuery);
    var kendo$1 = kendo;

    return kendo$1;

}));
