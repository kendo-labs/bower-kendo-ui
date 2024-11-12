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
import './kendo.html.icon.js';
import * as svgIcons from '@progress/kendo-svg-icons';

export const __meta__ = {
    id: "icons",
    name: "Icons",
    category: "web",
    description: "The Icons set provides both FontIcon and SvgIcon components along with the SVG icons collection from @progress/kendo-svg-icons",
    depends: ["core", "html.icon"]
};

(function($, undefined) {
    var kendo = window.kendo,
        html = kendo.html,
        ui = kendo.ui,
        Widget = ui.Widget,
        extend = $.extend;

    var FontIcon = Widget.extend({
        init: function(element, options) {
            var that = this;
            Widget.fn.init.call(that, element, options);

            delete options.name;
            that._icon = new html.HTMLFontIcon(element, $.extend({}, options));
            that.element = that.wrapper = that._icon.element;

            kendo.notify(that);
        },
        options: extend({}, html.HTMLFontIcon.fn.options, {
            name: 'FontIcon'
        }),
        setOptions: function(options) {
            var that = this;

            Widget.fn.setOptions.call(that, options);

            that._icon = new html.HTMLFontIcon(that.element, $.extend({}, that.options));
        }
    });

    var SvgIcon = Widget.extend({
        init: function(element, options) {
            var that = this;
            Widget.fn.init.call(that, element, options);

            delete options.name;
            that._icon = new html.HTMLSvgIcon(element, $.extend({}, options));
            that.element = that.wrapper = that._icon.element;

            kendo.notify(that);
        },
        options: extend({}, html.HTMLSvgIcon.fn.options, {
            name: 'SvgIcon'
        }),
        setOptions: function(options) {
            var that = this;

            Widget.fn.setOptions.call(that, options);

            if (options.icon) {
                this.element.html('');
            }

            that._icon = new html.HTMLSvgIcon(that.element, $.extend({}, that.options));
        }
    });

    kendo.ui.plugin(FontIcon);
    kendo.ui.plugin(SvgIcon);

    kendo.setDefaults('iconType', 'svg');
    kendo.ui.svgIcons = svgIcons;
    kendo.ui.icon = html.renderIcon;
})(window.kendo.jQuery);
export default kendo;