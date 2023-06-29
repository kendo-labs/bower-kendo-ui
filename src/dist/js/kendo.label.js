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
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('kendo.core.js'), require('kendo.floatinglabel.js')) :
    typeof define === 'function' && define.amd ? define(['kendo.core', 'kendo.floatinglabel'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.kendolabel = global.kendolabel || {}, global.kendolabel.js = factory()));
})(this, (function () {
    var __meta__ = {
        id: 'label',
        name: 'Label',
        category: 'framework',
        description: 'Abstraction of label rendering for inputs',
        depends: ['core', 'floatinglabel'],
        hidden: true
    };

    var kendo = window.kendo;
    var $ = kendo.jQuery;
    var ui = kendo.ui;
    var Widget = ui.Widget;
    var isFunction = kendo.isFunction;

    var LABELCLASSES = "k-label k-input-label";

    var Label = Widget.extend({
        options: {
            name: "Label",
            widget: null
        },

        init: function(element, options) {
            var that = this;

            element = element || $("<label></label>");

            Widget.fn.init.call(that, element, options);
            options = $.extend(true, {}, options);

            that.widget = options.widget;

            if (options.floating) {
                that._floatingLabel();
            }

            that._label();
        },

        destroy: function() {
            if (this.floatingLabel) {
                this.floatingLabel.destroy();
            }
            Widget.fn.destroy.call(this);
        },

        _unwrapFloating: function() {
            var that = this;

            if (that.floatingLabel) {
                that.floatingLabel.destroy();
                that.widget.wrapper.unwrap(that._floatingLabelContainer);
            }
        },

        setOptions: function(options) {
            var that = this;
            var removeFloating = false;

            if (typeof(options) === 'string' || ($.isPlainObject(options) && options.floating === false )) {
                removeFloating = true;
            }

            options = $.isPlainObject(options) ? options : { content: options };

            Widget.fn.setOptions.call(that, options);

            if (removeFloating && that.floatingLabel) {
                that._unwrapFloating();
                that.floatingLabel.destroy();
                delete that.floatingLabel;
            } else if (options.floating === true && !that.floatingLabel) {
                that.element.remove();
                that._floatingLabel();
            }

            that._label();

            if (that.floatingLabel) {
                that.floatingLabel.refresh();
            }
        },

        _label: function() {
            var that = this;
            var element = that.widget.element;
            var options = that.options;
            var id = element.attr("id");
            var labelText = options.content;

            if (isFunction(labelText)) {
                labelText = labelText.call(that);
            }

            if (!labelText) {
                labelText = "";
            }

            if (!id) {
                id = options.name + "_" + kendo.guid();
                element.attr("id", id);
            }

            that.element.addClass(LABELCLASSES)
                .attr("for", id)
                .text(labelText)
                .insertBefore(that.options.beforeElm || that.widget.wrapper);
        },

        _floatingLabel: function() {
            var that = this;
            var options = $.extend({}, that.options);
            var floating;

            delete options.name;

            floating = options.floating || false;

            if (floating) {
                that._floatingLabelContainer = that.widget.wrapper.wrap("<span></span>").parent();
                that.floatingLabel = new kendo.ui.FloatingLabel(that._floatingLabelContainer, $.extend({}, options));
            }
        }
    });

    kendo.ui.plugin(Label);

    return kendo;

}));
