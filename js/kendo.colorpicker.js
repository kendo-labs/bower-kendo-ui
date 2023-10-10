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
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('kendo.core.js'), require('kendo.color.js'), require('kendo.popup.js'), require('kendo.slider.js'), require('kendo.userevents.js'), require('kendo.button.js'), require('kendo.binder.js'), require('kendo.textbox.js'), require('kendo.numerictextbox.js'), require('kendo.html.button.js'), require('kendo.icons.js')) :
    typeof define === 'function' && define.amd ? define(['kendo.core', 'kendo.color', 'kendo.popup', 'kendo.slider', 'kendo.userevents', 'kendo.button', 'kendo.binder', 'kendo.textbox', 'kendo.numerictextbox', 'kendo.html.button', 'kendo.icons'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.kendocolorpicker = global.kendocolorpicker || {}, global.kendocolorpicker.js = factory()));
})(this, (function () {
    (function($, undefined$1) {
        // WARNING: removing the following jshint declaration and turning
        // == into === to make JSHint happy will break functionality.

        var kendo = window.kendo,
            ui = kendo.ui,
            Widget = ui.Widget,
            parseColor = kendo.parseColor,
            TabKeyTrap = kendo.ui.Popup.TabKeyTrap,

            extend = $.extend,

            NS = ".kendoColorTools",
            KEYDOWN_NS = "keydown" + NS,
            DISABLED = "k-disabled";

        var ColorSelector = Widget.extend({
            init: function(element, options) {
                var that = this;

                Widget.fn.init.call(that, element, options);
                element = that.element;
                options = that.options;

                if (element.is("input")) {
                    that._initialValue();
                    that._preventDefaultLabelClick();
                } else {
                    that._value = parseColor(options.value);
                }

                that._tabIndex = element.attr("tabIndex") || 0;

                if (options._standalone) {
                    that._triggerSelect = that._triggerChange;
                }
            },
            options: {
                name: "ColorSelector",
                ARIATemplate: function (data) { return ("Current selected color is " + (data || "none")); },
                value: null,
                _standalone: true
            },
            events: [
                "change",
                "select",
                "forceSelect",
                "cancel"
            ],
            color: function(value) {
                if (value !== undefined$1) {
                    this._value = parseColor(value);

                    if (this.element.is("input")) {
                        this._updateInput(this._value);
                    }

                    this._updateUI(this._value);
                }

                return this._value;
            },
            value: function(color) {
                color = this.color(color);

                if (color) {
                    if (this.options.opacity) {
                        color = color.toCssRgba();
                    } else {
                        color = color.toCss();
                    }
                }

                return color || null;
            },
            enable: function(enable) {
                if (arguments.length === 0) {
                    enable = true;
                }

                if (this.element.is("input")) {
                    this.element.attr("disabled", !enable);
                }

                this.wrapper.toggleClass(DISABLED, !enable);

                this._onEnable(enable);
            },
            _attachFocusEvents: function () {
                this.wrapper.on(KEYDOWN_NS, this._navKeydown.bind(this))
                    .on("focusout" + NS, this._navFocusout.bind(this));
            },
            _initialValue: function() {
                var element = this.element,
                    options = this.options,
                    value = options.value || element.attr("value");

                if (value) {
                    this._value = parseColor(value, true);
                }

                this.element.val(value);
            },
            _innerTabindex: function(value) {
                var wrapper = this.wrapper;

                wrapper.find(".k-draghandle, .k-button, .k-input-inner").attr("tabindex", value);
            },
            _isInputTypeColor: function() {
                var el = this.element[0];
                return (/^input$/i).test(el.tagName) && (/^color$/i).test(el.type);
            },
            _navFocusout: function() {
                var that = this,
                    wrapper = that.wrapper[0];

                setTimeout(function() {
                    if (!wrapper.contains(document.activeElement)) {
                        that._releaseInnerFocus();
                    }
                });
            },
            _navKeydown: function(e) {
                var wrapper = this.wrapper;

                if (e.keyCode === kendo.keys.ENTER && wrapper.attr("tabindex")) {
                    e.preventDefault();

                    this._trapInnerFocus();
                } else if (e.keyCode === kendo.keys.ESC && wrapper.attr("tabindex") === undefined$1) {
                    this._releaseInnerFocus();
                    this.wrapper.trigger("focus");
                }
            },
            _releaseInnerFocus: function() {
                this._tabKeyTrap.removeTrap();
                this.wrapper.attr("tabindex", this._tabIndex);
                this._innerTabindex(-1);
            },
            _select: function(color, nohooks) {
                var prev = this._value;

                color = this.color(color);

                if (!nohooks) {
                    if ((color && (!prev || !color.equals(prev))) || (color === null && color !== prev)) {
                        if (color === null && this.element.val) {
                            this.element.val(color);
                        }

                        this.element.trigger("change");
                        this.trigger("change", { value: this.value() });
                    } else if (!this._standalone) {
                        this.trigger("cancel");
                    }
                }
            },
            _navigation: function() {
                var value = this.value();

                if (value && value.indexOf("rgba") > -1) {
                    value = value.replace("rgba", "RGBA");
                };

                if (this.options._otOfPicker) {
                    this._innerTabindex(-1);
                    this._attachFocusEvents();
                    this._tabKeyTrap = new TabKeyTrap(this.wrapper);

                    this._ariaTemplate = kendo.template(this.options.ARIATemplate);
                    this.wrapper.attr({
                        "aria-label": this._ariaTemplate(value || ""),
                        tabindex: this._tabIndex
                    });
                } else {
                    this.wrapper.removeAttr("tabindex");
                    this.wrapper.removeAttr("aria-label");
                    this.wrapper.removeAttr("role");
                    this.wrapper.removeAttr("aria-keyshortcuts");
                }
            },
            _trapInnerFocus: function() {
                this._innerTabindex(0);
                this.wrapper.removeAttr("tabindex");
                this.wrapper.find(".k-hsv-draghandle").trigger("focus");
                this._tabKeyTrap.trap();
            },
            _triggerSelect: function(color) {
                triggerEvent(this, "select", color);
            },
            _triggerChange: function(color) {
                triggerEvent(this, "change", color);
            },
            destroy: function() {
                if (this.element) {
                    this.element.off(NS);
                }

                if (this.wrapper) {
                    this.wrapper.off(KEYDOWN_NS);
                    this.wrapper.off(NS).find("*").off(NS);
                    this.wrapper = null;
                }

                Widget.fn.destroy.call(this);
            },
            _preventDefaultLabelClick: function() {
                // if there exists a <label> associated with this
                // input field, we must catch clicks on it to prevent
                // the built-in color picker from showing up.
                // https://github.com/telerik/kendo-ui-core/issues/292
                var element = this.element,
                    label = element.closest("label"),
                    id = element.attr("id");

                if (id) {
                    label = label.add('label[for="' + id + '"]');
                }
                label.on("click", function(ev) {
                    ev.preventDefault();
                });
            },
            _updateUI: $.noop,
            _updateInput: function(value) {
                var formattedValue = "",
                    valueForLabel;

                if (value) {
                    if (this._isInputTypeColor() || value.a == 1) {
                        // seems that input type="color" doesn't support opacity
                        // in colors; the only accepted format is hex #RRGGBB
                        formattedValue = value.toCss();
                    } else {
                        formattedValue = value.toCssRgba();
                    }

                    this.element.val(formattedValue);
                }

                if (this.options._otOfPicker) {
                    if (!this._ariaTemplate) {
                        this._ariaTemplate = kendo.template(this.options.ARIATemplate);
                    }

                    valueForLabel = this.value();

                    if (valueForLabel && valueForLabel.indexOf("rgba") > -1) {
                        valueForLabel = valueForLabel.replace("rgba", "RGBA");
                    };

                    this.wrapper.attr("aria-label", this._ariaTemplate(valueForLabel || ""));
                }
            },
            _selectOnHide: function() {
                return null;
            },
            _cancel: function() {
                this.trigger("cancel");
            }
        });

        function triggerEvent(self, type, color) {
            color = parseColor(color);

            if ((color && !color.equals(self.color())) || color !== self.color()) {
                if (type == "change") {
                    // UI is already updated.  setting _value directly
                    // rather than calling self.color(color) to avoid an
                    // endless loop.
                    self._value = color;
                    self._updateInput(self._value);
                }
                if (color && color.a != 1) {
                    color = color.toCssRgba();
                } else if (color) {
                    color = color.toCss();
                }

                self.trigger(type, { value: color });
            }
        }

        extend(ui, {
            colorpicker: {
                ColorSelector: ColorSelector
            }
        });


    })(window.kendo.jQuery);

    (function($, undefined$1){
        var colorpicker = kendo.ui.colorpicker,
            extend = $.extend,
            Color = kendo.Color,
            parseColor = kendo.parseColor,

            AA_CONTRAST = 4.5,
            AAA_CONTRAST = 7,
            STEP_COUNT = 16;

        // Color utils - calc contrast

        function getContrast(luminance1, luminance2) {
            var brightest = Math.max(luminance1, luminance2);
            var darkest = Math.min(luminance1, luminance2);
            return (brightest + 0.05) / (darkest + 0.05);
        }

        function getContrastFromTwoRGBAs(a, b) {
            return getContrast(
                getLuminance(getRGBFromRGBA(a, b)),
                getLuminance(getRGBFromRGBA(b, { r: 0, g: 0, b: 0, a: 1 })));
        }

        function getLuminance (rgb) {
            var a = [rgb.r, rgb.g, rgb.b].map(function (v) {
                v /= 255;
                return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
            });
            return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
        }

        function getRGBFromRGBA(foregroundColor, backgroundColor) {
            var r1 = fitIntoBounds(foregroundColor.r, 0, 255);
            var g1 = fitIntoBounds(foregroundColor.g, 0, 255);
            var b1 = fitIntoBounds(foregroundColor.b, 0, 255);
            var a1 = fitIntoBounds(foregroundColor.a, 0, 1);

            var r2 = fitIntoBounds(backgroundColor.r, 0, 255);
            var g2 = fitIntoBounds(backgroundColor.g, 0, 255);
            var b2 = fitIntoBounds(backgroundColor.b, 0, 255);

            return {
                r: Math.round(((1 - a1) * r2) + (a1 * r1)),
                g: Math.round(((1 - a1) * g2) + (a1 * g1)),
                b: Math.round(((1 - a1) * b2) + (a1 * b1))
            };
        }

        function fitIntoBounds(contender, min, max) {
            if (!isPresent(contender) || isNaN(contender)) {
                return min;
            }

            return contender <= min ? min : contender >= max ? max : contender;
        }

        function isPresent(value) { return value !== null && value !== undefined$1; }


        // Color utils - Contrast tool SVG path

        function renderSvgCurveLine(gradientRectMetrics, hsva, backgroundColor) {
            var findValue = function (contrast, saturation, low, high, comparer) {
                var mid = (low + high) / 2;
                var currentHsva = extend({}, hsva, { s: saturation / gradientRectMetrics.width, v: 1 - mid / gradientRectMetrics.height });
                var currentContrast = getContrastFromTwoRGBAs(parseColor(getColorFromHSV(currentHsva)).toBytes(), parseColor(backgroundColor).toBytes());

                if (low + 0.5 > high) {
                    if (currentContrast < contrast + 1 && currentContrast > contrast - 1) {
                        return mid;
                    } else {
                        return null;
                    }
                }

                if (comparer(currentContrast, contrast)) {
                    return findValue(contrast, saturation, low, high - (high - low) / 2, comparer);
                }
                return findValue(contrast, saturation, low + (high - low) / 2, high, comparer);
            };

            var comparer = function (a, b) {
                return a > b;
            };

            var reversedComparer = function (a, b) {
                return a < b;
            };

            var getPaths = function (contrast, stepCount, reversed) {
                var points = [];
                for (var i = 0; i <= gradientRectMetrics.width; i += gradientRectMetrics.width/stepCount) {
                   var value = findValue(contrast, i, 0, gradientRectMetrics.height, reversed ? reversedComparer : comparer);
                    if (value !== null){
                        points.push([i, value]);
                    }
                }
                return points;
            };

            var bezierCommandCalc = bezierCommand(controlPoint(line));
            var paths = svgPath(getPaths(AA_CONTRAST, STEP_COUNT, false), bezierCommandCalc) +
                    svgPath(getPaths(AA_CONTRAST, STEP_COUNT, true), bezierCommandCalc) +
                    svgPath(getPaths(AAA_CONTRAST, STEP_COUNT, false), bezierCommandCalc) +
                    svgPath(getPaths(AAA_CONTRAST, STEP_COUNT, true), bezierCommandCalc);

            return "<svg xmlns=\"http://www.w3.org/2000/svg\" " + (kendo.attr("style-position")) + "=\"absolute\" " + (kendo.attr("style-overflow")) + "=\"visible\" " + (kendo.attr("style-pointer-events")) + "=\"none\" " +
                    (kendo.attr("style-left")) + "=\"0px\" " + (kendo.attr("style-top")) + "=\"0px\" " + (kendo.attr("style-z-index")) + "=\"3\" >" +
                        paths  + '</svg>';
        }

        function svgPath(points, command) {
            if (points.length === 0){
                return '';
            }

            var reducer = function (acc, point, i, a) {
                return i === 0 ?
                    // if first point
                    kendo.format("M {0},{1}", point[0], point[1]) :
                    // else
                    kendo.format("{0} {1}", acc, command(point, i, a));
            };

            // build the d attributes by looping over the points
            var d = points.reduce(reducer, "");

            return kendo.format('<path d="{0}" fill="none" stroke="white" stroke-width="1"/>', d);
        }

        function bezierCommand(controlPointCalc) {
            return function(point, i, a) {
                // start control point
                var cps = controlPointCalc(a[i - 1], a[i - 2], point); // [cpsX, cpsY]

                // end control point
                var cpe = controlPointCalc(point, a[i - 1], a[i + 1], true); //  [cpeX, cpeY]

                return kendo.format("C {0},{1} {2},{3} {4},{5}", cps[0], cps[1], cpe[0], cpe[1], point[0], point[1]);
            };
        }

        function controlPoint(lineCalc) {
            return function (current, previous, next, reverse) {
                // when 'current' is the first or last point of the array
                // 'previous' and 'next' are undefined
                // replace with 'current'
                    var p = previous || current;
                    var n = next || current;
                    var smooth = 0.1;

                    // properties of the line between previous and next
                    var l = lineCalc(p, n);

                    // If is end-control-point, add PI to the angle to go backward
                    var angle = l.angle + (reverse ? Math.PI : 0);
                    var length = l.length * smooth;

                    // The control point position is relative to the current point
                    var x = current[0] + Math.cos(angle) * length;
                    var y = current[1] + Math.sin(angle) * length;

                    return [x, y];
            };
        }

        function line (pointA, pointB) {
            var lengthX = pointB[0] - pointA[0];
            var lengthY = pointB[1] - pointA[1];

            return {
                length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
                angle: Math.atan2(lengthY, lengthX)
            };
        }

        function getColorFromHSV (hsva) {
            var hue = fitIntoBounds(hsva.h, 0, 359.9);
            var saturation = fitIntoBounds(hsva.s, 0, 1);
            var value = fitIntoBounds(hsva.v, 0, 1);
            var alpha = fitIntoBounds(hsva.a, 0, 1);

            return Color.fromHSV(hue, saturation, value, alpha).toCssRgba();
        }

        extend(colorpicker, {
            contrastToolUtils: {
                getContrastFromTwoRGBAs: getContrastFromTwoRGBAs,
                renderSvgCurveLine: renderSvgCurveLine
            }
        });

    })(window.kendo.jQuery);

    var __meta__$1 = {
            id: "colorgradient",
            name: "ColorGradient",
            category: "web", // suite
            description: "ColorGradient allows selection of a color from an HSV canvas.",
            depends: ["core", "popup", "textbox", "icons"] // dependencies
        };
    (function($, undefined$1) {
        // WARNING: removing the following jshint declaration and turning
        // == into === to make JSHint happy will break functionality.

        var kendo = window.kendo,
            ui = kendo.ui,
            Observable = kendo.Observable,
            parseColor = kendo.parseColor,
            extend = $.extend,
            encode = kendo.htmlEncode,
            Color = kendo.Color,
            KEYS = kendo.keys,
            BACKGROUNDCOLOR = "background-color",
            WHITE = "#ffffff",
            BLACK = "#000000",
            NS = ".kendoColorTools",
            KEYDOWN_NS = "keydown" + NS,
            ColorSelector = ui.colorpicker.ColorSelector,

            contrastToolUtils = ui.colorpicker.contrastToolUtils;

        function preventDefault(ev) { ev.preventDefault(); }

        function bind(callback, obj) {
            return function() {
                return callback.apply(obj, arguments);
            };
        }

        var ColorInput = Observable.extend({
            init: function(element, options) {
                var that = this;

                that.element = element;
                that.options = options;

                that._viewModel = kendo.observable({
                    switchMode: that.switchMode.bind(that),
                    keydown: that.keydown.bind(that),
                    isHEXMode: function () { return this.get("format") === 'hex' },
                    isRGBMode: function () { return this.get("format") === 'rgb' },
                    format: options.format,
                    formats: options.formats,
                    rgb: null,
                    hex: function () {
                        return this.get("rgb") !== null && this.get("rgb").toCss({alpha: options.opacity});
                    }
                });

                that._changeHandler = that.change.bind(that);

                that._viewModel.bind("change", that._changeHandler);

                that._render();

                that.element.on(KEYDOWN_NS, that.keydown.bind(that));

                Observable.fn.init.call(that);
            },
            _template: kendo.template(function (ref) {
                var options = ref.options;
                var ns = ref.ns;

                var optionsSize = encode(options.size);
                var optionsTabIndex = encode(options.tabindex);

                var vStackElement = "";
                if (options.formats && options.formats.length > 1) {
                    var optionsMessagesToggleFormat = encode(options.messages.toggleFormat);

                    vStackElement =
                    '<div class="k-vstack">' +
                        "<button class=\"k-colorgradient-toggle-mode\" data-" + ns + "role=\"button\" data-" + ns + "icon=\"caret-alt-expand\" data data-" + ns + "bind=\"click: switchMode\" data-" + ns + "fill-mode=\"flat\" data-" + ns + "size=\"" + optionsSize + "\" title=\"" + optionsMessagesToggleFormat + "\">" +
                        '</button>' +
                    '</div>';
                }

                // HEX input
                var hexInputElement = "";
                if (options.formats && options.formats.indexOf("hex") >= 0) {
                    var optionsMessagesHex = encode(options.messages.hex);

                    hexInputElement =
                    "<div class=\"k-vstack\" data-" + ns + "bind=\"visible: isHEXMode\">" +
                        "<input type=\"text\" data-" + ns + "bind=\"value: hex\" data-" + ns + "role=\"textbox\" data-" + ns + "size=\"" + optionsSize + "\" tabindex=\"" + optionsTabIndex + "\"  aria-label=\"" + optionsMessagesHex + "\"/>" +
                        '<label class="k-colorgradient-input-label">HEX</label>' +
                    '</div>';
                }

                // RGBA input
                var rgbaInputElement = "";
                if (options.formats && options.formats.indexOf("rgb") >= 0) {
                    var optionsMessagesRed = encode(options.messages.red);
                    var optionsMessagesGreen = encode(options.messages.green);
                    var optionsMessagesBlue = encode(options.messages.blue);

                    rgbaInputElement =
                    "<div class=\"k-vstack\" data-" + ns + "bind=\"visible: isRGBMode\">" +
                        "<input tabindex=\"" + optionsTabIndex + "\" data-" + ns + "bind=\"value: rgb.r\" data-" + ns + "role=\"numerictextbox\" data-" + ns + "size=\"" + optionsSize + "\" data-" + ns + "max=\"255\" data-" + ns + "min=\"0\" data-" + ns + "decimals=\"0\" data-" + ns + "spinners=\"false\" data-" + ns + "format=\"n0\" aria-label=\"" + optionsMessagesRed + "\" />" +
                        '<label class="k-colorgradient-input-label">R</label>' +
                    '</div>' +
                    "<div class=\"k-vstack\" data-" + ns + "bind=\"visible: isRGBMode\">" +
                        "<input tabindex=\"" + optionsTabIndex + "\" data-" + ns + "bind=\"value: rgb.g\" data-" + ns + "role=\"numerictextbox\" data-" + ns + "size=\"" + optionsSize + "\" data-" + ns + "max=\"255\" data-" + ns + "min=\"0\" data-" + ns + "decimals=\"0\" data-" + ns + "spinners=\"false\" data-" + ns + "format=\"n0\" aria-label=\"" + optionsMessagesGreen + "\" />" +
                        '<label class="k-colorgradient-input-label">G</label>' +
                    '</div>' +
                    "<div class=\"k-vstack\" data-" + ns + "bind=\"visible: isRGBMode\">" +
                        "<input tabindex=\"" + optionsTabIndex + "\" data-" + ns + "bind=\"value: rgb.b\" data-" + ns + "role=\"numerictextbox\" data-" + ns + "size=\"" + optionsSize + "\" data-" + ns + "max=\"255\" data-" + ns + "min=\"0\" data-" + ns + "decimals=\"0\" data-" + ns + "spinners=\"false\" data-" + ns + "format=\"n0\" aria-label=\"" + optionsMessagesBlue + "\"/>" +
                        '<label class="k-colorgradient-input-label">B</label>' +
                    '</div>';

                    if(options.opacity) {
                        var optionsMessagesAlpha = options.messages.alpha;
                        rgbaInputElement +=
                        "<div class=\"k-vstack\" data-" + ns + "bind=\"visible: isRGBMode\">" +
                            "<input tabindex=\"" + optionsTabIndex + "\" data-" + ns + "bind=\"value: rgb.a\" data-" + ns + "role=\"numerictextbox\" data-" + ns + "size=\"" + optionsSize + "\" data-" + ns + "step=\"0.1\" data-" + ns + "max=\"1\" data-" + ns + "min=\"0\" data-" + ns + "decimals=\"1\" data-" + ns + "spinners=\"false\" data-" + ns + "format=\"n1\" aria-label=\"" + optionsMessagesAlpha + "\" />" +
                            '<label class="k-colorgradient-input-label">A</label>' +
                        '</div>';
                    }
                }

                return vStackElement + hexInputElement + rgbaInputElement;
            }),
            destroy: function(){
                var that = this;

                that._viewModel.unbind("change", that._changeHandler);
                kendo.unbind(that.element);
                kendo.destroy(that.element);
                that.element.off(KEYDOWN_NS);
                delete that._viewModel;
                delete that._changeHandler;
            },
            change: function (ev) {
                var that = this;

                if (ev.field.indexOf("rgb") >= 0) {
                    that._color = that._tryParseColor(that._viewModel.rgb.toCssRgba());
                    that._viewModel.set("hex", that._color.toCss({ alpha: that.options.opacity }));
                } else if (ev.field === "hex") {
                    that._color = that._tryParseColor(ev.sender[ev.field]);
                    that._viewModel.set("rgb", that._color);
                }

                if (!that._preventChangeEvent) {
                    that.trigger("change", {value: that._color});
                }
            },
            keydown: function (ev) {
                var that = this,
                    textbox = $(ev.target).data("kendoTextBox");

                if (ev.keyCode === KEYS.ENTER && $(ev.target).is("input")) {
                    if(textbox && textbox._change) {
                        textbox._change();
                    }

                    that.trigger("change", {value: that._color});
                    that.trigger("select", {value: that._color});
                }
            },
            reset: function () {
                var that = this;

                that._preventChangeEvent = true;
                that._viewModel.set("rgb", parseColor(BLACK));
                delete that._preventChangeEvent;
            },
            switchMode: function() {
                var that = this,
                    model = that._viewModel,
                    currentFormat = model.format,
                    index = model.formats.indexOf(currentFormat) + 1;

                index = index >= model.formats.length ? 0 : index;

                that._preventChangeEvent = true;
                that._viewModel.set("format", model.formats[index]);
                delete that._preventChangeEvent;
            },
            value: function (color) {
                var that = this;

                that._color = (color && color.toBytes()) || parseColor(BLACK);
                that._preventChangeEvent = true;
                that._viewModel.set("rgb", that._color);
                delete that._preventChangeEvent;
            },
            _render: function() {
                var that = this;

                that.element
                    .append(that._template({ ns: kendo.ns, guid: kendo.guid(), options: that.options }))
                    .parent();

                kendo.bind(that.element, that._viewModel);
                that.element.attr("data-" + kendo.ns + "stop", "stop");
            },
            _tryParseColor: function (color) {
                var that = this;

                try {
                    color = parseColor(color) || that._color;
                } catch (error) {
                    color = that._color;
                }

                return color;
            }
        });

        var ColorGradient = ColorSelector.extend({
            init: function (element, options) {
                var that = this,
                    value;

                ColorSelector.fn.init.call(that, element, options);

                options = that.options = kendo.deepExtend({}, that.options, options);

                if(options.messages.previewInput) {
                    options.messages.hex = options.messages.previewInput;
                }

                options.messages = options.messages ? $.extend(that.options.messages, options.messages) : that.options.messages;
                element = that.element;

                that._wrapper();
                that._sliders();
                that._hsvArea();

                value = that._value;

                that._gradientInputs();
                that._updateUI(value);
                that._navigation();
            },
            options: {
                name : "ColorGradient",
                opacity : false,
                hsvDragARIATemplate: function (data) { return ("Color well with two-dimensional slider for selecting saturation and value. Selected color is " + (data || "none")); },
                input : true,
                format: "hex",
                formats: ["rgb", "hex"],
                contrastTool: false,
                size: "medium",
                messages: {
                    contrastRatio: "Contrast ratio:",
                    fail: "Fail",
                    pass: "Pass",
                    hex: "HEX",
                    toggleFormat: "Toggle format",
                    red: "Red channel",
                    green: "Green channel",
                    blue: "Blue channel",
                    alpha: "Alpha channel"
                },
                _otOfPicker: true
            },
            _template: kendo.template(function (options) { return '<div class="k-colorgradient-canvas k-hstack">' +
                        '<div class="k-hsv-rectangle"><div class="k-hsv-gradient"><div role="slider" aria-orientation="undefined" class="k-hsv-draghandle k-draghandle"></div></div></div>' +
                        '<div class="k-hsv-controls k-hstack">' +
                            '<input class="k-hue-slider k-colorgradient-slider" />' +
                            (options.opacity ? '<input class="k-alpha-slider k-colorgradient-slider" />' : '') +
                        '</div>' +
                    '</div>' +
                    (options.input ? '<div class="k-colorgradient-inputs k-hstack"></div>' : '') +
                    (options.contrastTool ? '<div class="k-colorgradient-color-contrast k-vbox"></div>' : ''); }
            ),
            focus: function() {
                this._hsvHandle.focus();
            },
            setBackgroundColor: function(color) {
                var that = this;

                if (that.options.contrastTool) {
                    that.options.contrastTool = $.isPlainObject(that.options.contrastTool) ? extend({}, that.options.contrastTool, {
                        backgroundColor: color
                    }) : {
                        backgroundColor: color
                    };

                    that._updateColorContrast(that.color() || parseColor(WHITE));
                }
            },
            _getHSV: function(h, s, v, a) {
                var that = this,
                    rect = that._hsvRect,
                    width = rect.width(),
                    height = rect.height(),
                    handlePosition = this._hsvHandle.position();

                if(!width || !height) {
                    return that.color() ? that.color().toHSV() : parseColor(BLACK);
                }

                if (h == null) {
                    h = that._hueSlider.value();
                }
                if (s == null) {
                    s = handlePosition.left / width;
                }
                if (v == null) {
                    v = 1 - handlePosition.top / height;
                }
                if (a == null) {
                    a = that._opacitySlider ? that._opacitySlider.value() / 100 : 1;
                }
                return Color.fromHSV(h, s, v, a);
            },
            _gradientInputs: function() {
                var that = this,
                    options = that.options;

                if(that._colorgradientInputs.length) {
                    that._colorInput = new ColorInput(that._colorgradientInputs, extend({}, options, {
                        tabindex: 0
                    }));

                    that._colorInput.bind("change", function(ev){
                        that._updateUI(ev.value, true);
                    });

                    that._colorInput.bind("select", function(ev){
                        var color = parseColor(ev.value);
                        that._select(color);
                        that.trigger("forceSelect", { value: that.value() });
                    });
                }
            },
            _hsvArea: function() {
                var that = this,
                    wrapper = that.wrapper,
                    hsvRect = wrapper.find(".k-hsv-rectangle"),
                    hsvHandle = hsvRect.find(".k-draghandle").attr("tabIndex", 0).on(KEYDOWN_NS, bind(that._hsvKeydown, that)),
                    value = this.value();

                if (value && value.indexOf("rgba") > -1) {
                    value = value.replace("rgba", "RGBA");
                };

                if (!this._hsvDragAriaTemplate) {
                    this._hsvDragAriaTemplate = kendo.template(this.options.hsvDragARIATemplate);
                }

                hsvHandle.attr("aria-label", this._hsvDragAriaTemplate(value || ''));

                function update(x, y) {
                    var offset = this.offset,
                        dx = x - offset.left, dy = y - offset.top,
                        rw = this.width, rh = this.height,
                        resultX, resultY;

                    dx = dx < 0 ? 0 : dx > rw ? rw : dx;
                    dy = dy < 0 ? 0 : dy > rh ? rh : dy;
                    resultX = dx / rw;
                    resultY = 1 - dy / rh;

                    that._svChange(resultX, resultY);
                }

                that._hsvEvents = new kendo.UserEvents(hsvRect, {
                    global: true,
                    press: function(e) {
                        this.offset = kendo.getOffset(hsvRect);
                        this.width = hsvRect.width();
                        this.height = hsvRect.height();
                        hsvHandle.focus();
                        update.call(this, e.x.location, e.y.location);
                    },
                    start: function() {
                        hsvRect.addClass("k-dragging");
                        hsvHandle.focus();
                    },
                    move: function(e) {
                        e.preventDefault();
                        update.call(this, e.x.location, e.y.location);
                    },
                    end: function() {
                        hsvRect.removeClass("k-dragging");
                    }
                });

                that._hsvRect = hsvRect;
                that._hsvHandle = hsvHandle;
            },
            _hsvKeydown: function(ev) {
                var that = this;
                function move(prop, d) {
                    var c = that._getHSV();
                    c[prop] += d * (ev.shiftKey ? 0.01 : 0.05);
                    if (c[prop] < 0) { c[prop] = 0; }
                    if (c[prop] > 1) { c[prop] = 1; }
                    that._updateUI(c);
                    preventDefault(ev);
                }
                function hue(d) {
                    var c = that._getHSV();
                    c.h += d * (ev.shiftKey ? 1 : 5);
                    if (c.h < 0) { c.h = 0; }
                    if (c.h > 359) { c.h = 359; }
                    that._updateUI(c);
                    preventDefault(ev);
                }
                switch (ev.keyCode) {
                case KEYS.LEFT:
                    if (ev.ctrlKey) {
                        hue(-1);
                    } else {
                        move("s", -1);
                    }
                    break;
                case KEYS.RIGHT:
                    if (ev.ctrlKey) {
                        hue(1);
                    } else {
                        move("s", 1);
                    }
                    break;
                case KEYS.UP:
                    move(ev.ctrlKey && that._opacitySlider ? "a" : "v", 1);
                    break;
                case KEYS.DOWN:
                    move(ev.ctrlKey && that._opacitySlider ? "a" : "v", -1);
                    break;
                case KEYS.ENTER:
                    that._select(that._getHSV());
                    break;
                case KEYS.F2:
                    that._colorInput.element.find("input").trigger("focus").select();
                    break;
                case KEYS.ESC:
                    that._cancel();
                    break;
                }
            },
            _onEnable: function(enable) {
                var wrapper = this.wrapper;

                this._hueSlider.enable(enable);

                if (this._opacitySlider) {
                    this._opacitySlider.enable(enable);
                }

                wrapper.find("input").attr("disabled", !enable);

                if (this.options._standalone) {
                    if (enable) {
                        wrapper.removeAttr("aria-disabled");
                    } else {
                        wrapper.attr("aria-disabled", true);
                    }
                }
            },
            _reset: function () {
                var that = this;

                if (that._colorInput) {
                    that._colorInput.reset();
                }

                that._resetHsv();
                that._resetColorContrast();
            },
            _resetColorContrast: function () {
                var that = this,
                    contrastOptions = that.options.contrastTool;

                if(that._contrastTool.length) {
                    that._updateColorContrast(contrastOptions.backgroundColor ? parseColor(contrastOptions.backgroundColor) : parseColor(WHITE));
                }
            },
            _resetHsv: function () {
                var that = this,
                    color = parseColor(BLACK);

                that._updateHsv(color);
            },
            _sliders: function() {
                var that = this,
                    wrapper = that.wrapper,
                    hueSlider = wrapper.find(".k-hue-slider"),
                    opacitySlider = wrapper.find(".k-alpha-slider");

                function hueChange(e) {
                    that._updateUI(that._getHSV(e.value, null, null, null));
                }

                hueSlider.attr("aria-label", "hue");
                that._hueSlider = hueSlider.kendoSlider({
                    min: 0,
                    max: 360,
                    tickPlacement: "none",
                    showButtons: false,
                    orientation: "vertical",
                    slide: hueChange,
                    change: hueChange
                }).data("kendoSlider");

                function opacityChange(e) {
                    that._updateUI(that._getHSV(null, null, null, e.value / 100));
                }

                opacitySlider.attr("aria-label", "opacity");
                that._opacitySlider = opacitySlider.kendoSlider({
                    min: 0,
                    max: 100,
                    tickPlacement: "none",
                    showButtons: false,
                    orientation: "vertical",
                    slide: opacityChange,
                    change: opacityChange
                }).data("kendoSlider");
            },
            _svChange: function(s, v) {
                var color = this._getHSV(null, s, v, null);
                this._updateUI(color);
            },
            _updateColorContrast: function (color) {
                var that = this,
                    contrastOptions = that.options.contrastTool,
                    backgroundColor = contrastOptions.backgroundColor ? parseColor(contrastOptions.backgroundColor) : parseColor(WHITE),
                    contrastRatio = contrastToolUtils.getContrastFromTwoRGBAs(parseColor(color.toCssRgba()), backgroundColor),
                    contrastRatioTemplate = kendo.template(function (ref) {
                                                    var messages = ref.messages;
                                                    var ratio = ref.ratio;

                                                    return '<div class="k-contrast-ratio">' +
                                                    "<span class=\"k-contrast-ratio-text\">" + (encode(messages.contrastRatio)) + " " + (encode(kendo.toString(ratio, "n2"))) + "</span>" +
                                                    '<span class="k-contrast-validation k-text-success">' +
                                                        (ratio > 4.5 ?  kendo.ui.icon("check") : '') +
                                                        (ratio > 7 ?  kendo.ui.icon("check") : '') +
                                                '</span></div>';
                }),
                    labelTemplate = kendo.template(function (ref) {
                                                    var messages = ref.messages;
                                                    var ratio = ref.ratio;
                                                    var limit = ref.limit;
                                                    var level = ref.level;

                                                    return '<div>' +
                                                    "<span>" + (encode(level)) + ": " + (encode(limit)) + " </span>" +
                                                    (ratio > limit ?
                                                    ("<span class=\"k-contrast-validation k-text-success\">" + (encode(messages.pass)) + " " + (kendo.ui.icon("check")) + "</span>")
                                                    :
                                                    ("<span class=\"k-contrast-validation k-text-error\">" + (encode(messages.fail)) + " " + (kendo.ui.icon("x")) + "</span>")) +
                                                '</div>';
                }),
                    output = "";

                output += contrastRatioTemplate({
                    messages: that.options.messages,
                    ratio: contrastRatio,
                });

                output += labelTemplate({
                    messages: that.options.messages,
                    ratio: contrastRatio,
                    limit: 4.5,
                    level: "AA"
                });

                output += labelTemplate({
                    messages: that.options.messages,
                    ratio: contrastRatio,
                    limit: 7,
                    level: "AAA"
                });

                that._contrastTool.find(".k-contrast-ratio, div").remove();
                that._contrastTool.append(output);

                that._updateContrastSvg(backgroundColor);
            },
            _updateContrastSvg: function (backgroundColor) {
                var that = this,
                    hsvRect = that._hsvRect,
                    svgClassName = "k-color-contrast-svg",
                    metrics = { width: hsvRect.width(), height: hsvRect.height() },
                    newSvg;

                if(!metrics.width || !metrics.height) {
                    return;
                }

                newSvg = $(contrastToolUtils.renderSvgCurveLine(metrics, that._getHSV(), backgroundColor)).addClass(svgClassName);
                kendo.applyStylesFromKendoAttributes(newSvg, ["position", "overflow", "pointer-events", "left", "top", "z-index"]);

                hsvRect.find("." + svgClassName).remove();
                hsvRect.append(newSvg);
            },
            _updateHsv: function (color) {
                var that = this,
                    rect = that._hsvRect;

                color = color.toHSV();

                that._hsvHandle.css({
                    // saturation is 0 on the left side, full (1) on the right
                    left: color.s * rect.width() + "px",
                    // value is 0 on the bottom, full on the top.
                    top: (1 - color.v) * rect.height() + "px"
                });

                that._hueElements.css(BACKGROUNDCOLOR, Color.fromHSV(color.h, 1, 1, 1).toCss());
                that._hueSlider.value(color.h);

                if (that._opacitySlider) {
                    that._opacitySlider.wrapper.find(".k-slider-track").css("background", "linear-gradient(to top, transparent, " + Color.fromHSV(color.h, 1, 1, 1).toCss());
                    that._opacitySlider.value(100 * color.a);
                }

                that._updateHsvAria(color.s, color.v);
            },
            _updateHsvAria: function(x,y) {
                var value = this.value();

                if (value && value.indexOf("rgba") > -1) {
                    value = value.replace("rgba", "RGBA");
                }

                this._hsvHandle.attr({
                    "aria-label": this._hsvDragAriaTemplate(value || ''),
                    "aria-valuenow": Math.round(x * 100),
                    "aria-valuetext": "saturation: " + Math.round(x * 100) + "%, value: " + Math.round(y * 100) + "%"
                });
            },
            _updateUI: function(color, dontChangeInput) {
                var that = this;

                if (!color) {
                    that._reset();
                    return;
                }

                if (!dontChangeInput && that._colorInput) {
                    that._colorInput.value(color);
                }

                that._triggerSelect(color);
                that._updateHsv(color);

                if(that._contrastTool.length) {
                    that._updateColorContrast(color);
                }
            },
            _wrapper: function() {
                var options = this.options,
                    wrapper;

                if (this.element.is("input")) {
                    wrapper = this.element.addClass("k-hidden").wrap("<div>").parent();
                } else {
                    wrapper = this.element;
                }

                wrapper.addClass("k-colorgradient")
                    .attr({
                        "role": "textbox",
                        "aria-keyshortcuts": "Enter"
                    })
                    .append(this._template(options));

                this._hueElements = $(".k-hsv-rectangle, .k-alpha-slider .k-slider-track", wrapper);
                this._colorgradientInputs = $(".k-colorgradient-inputs", wrapper);
                this._contrastTool = $(".k-colorgradient-color-contrast", wrapper);

                this.wrapper = wrapper;
            },
            destroy: function (){
                this._hsvEvents.destroy();

                this._hueSlider.destroy();
                if (this._opacitySlider) {
                    this._opacitySlider.destroy();
                }

                if(this._colorInput) {
                    this._colorInput.destroy();
                }

                this._hueSlider = this._opacitySlider = this._hsvRect = this._hsvHandle =
                    this._hueElements = this._selectedColor = this._colorAsText =
                    this._contrastTool = null;

                ColorSelector.fn.destroy.call(this);
            }
        });

        ui.plugin(ColorGradient);

    })(window.kendo.jQuery);

    (function($, undefined$1){
        // WARNING: removing the following jshint declaration and turning
        // == into === to make JSHint happy will break functionality.

        var kendo = window.kendo,
            ui = kendo.ui,
            parseColor = kendo.parseColor,
            KEYS = kendo.keys,
            DOT = ".",
            BACKGROUNDCOLOR = "background-color",
            ITEMSELECTEDCLASS = "k-selected",
            ITEMSFOCUSEDCLASS = "k-focus",
            TILE_CLASS = "k-colorpalette-tile",
            SIMPLEPALETTE = "000000,7f7f7f,880015,ed1c24,ff7f27,fff200,22b14c,00a2e8,3f48cc,a349a4,ffffff,c3c3c3,b97a57,ffaec9,ffc90e,efe4b0,b5e61d,99d9ea,7092be,c8bfe7",
            WEBPALETTE = "FFFFFF,FFCCFF,FF99FF,FF66FF,FF33FF,FF00FF,CCFFFF,CCCCFF,CC99FF,CC66FF,CC33FF,CC00FF,99FFFF,99CCFF,9999FF,9966FF,9933FF,9900FF,FFFFCC,FFCCCC,FF99CC,FF66CC,FF33CC,FF00CC,CCFFCC,CCCCCC,CC99CC,CC66CC,CC33CC,CC00CC,99FFCC,99CCCC,9999CC,9966CC,9933CC,9900CC,FFFF99,FFCC99,FF9999,FF6699,FF3399,FF0099,CCFF99,CCCC99,CC9999,CC6699,CC3399,CC0099,99FF99,99CC99,999999,996699,993399,990099,FFFF66,FFCC66,FF9966,FF6666,FF3366,FF0066,CCFF66,CCCC66,CC9966,CC6666,CC3366,CC0066,99FF66,99CC66,999966,996666,993366,990066,FFFF33,FFCC33,FF9933,FF6633,FF3333,FF0033,CCFF33,CCCC33,CC9933,CC6633,CC3333,CC0033,99FF33,99CC33,999933,996633,993333,990033,FFFF00,FFCC00,FF9900,FF6600,FF3300,FF0000,CCFF00,CCCC00,CC9900,CC6600,CC3300,CC0000,99FF00,99CC00,999900,996600,993300,990000,66FFFF,66CCFF,6699FF,6666FF,6633FF,6600FF,33FFFF,33CCFF,3399FF,3366FF,3333FF,3300FF,00FFFF,00CCFF,0099FF,0066FF,0033FF,0000FF,66FFCC,66CCCC,6699CC,6666CC,6633CC,6600CC,33FFCC,33CCCC,3399CC,3366CC,3333CC,3300CC,00FFCC,00CCCC,0099CC,0066CC,0033CC,0000CC,66FF99,66CC99,669999,666699,663399,660099,33FF99,33CC99,339999,336699,333399,330099,00FF99,00CC99,009999,006699,003399,000099,66FF66,66CC66,669966,666666,663366,660066,33FF66,33CC66,339966,336666,333366,330066,00FF66,00CC66,009966,006666,003366,000066,66FF33,66CC33,669933,666633,663333,660033,33FF33,33CC33,339933,336633,333333,330033,00FF33,00CC33,009933,006633,003333,000033,66FF00,66CC00,669900,666600,663300,660000,33FF00,33CC00,339900,336600,333300,330000,00FF00,00CC00,009900,006600,003300,000000",
            NS = ".kendoColorTools",
            FOCUS_NS = "focus" + NS,
            CLICK_NS = "click" + NS,
            KEYDOWN_NS = "keydown" + NS,
            BLUR_NS = "blur" + NS,
            ColorSelector = ui.colorpicker.ColorSelector;

        function preventDefault(ev) { ev.preventDefault(); }

        function bind(callback, obj) {
            return function() {
                return callback.apply(obj, arguments);
            };
        }

        function relative(array, element, delta) {
            array = Array.prototype.slice.call(array);
            var n = array.length;
            var pos = array.indexOf(element);
            if (pos < 0) {
                return delta < 0 ? array[n - 1] : array[0];
            }
            pos += delta;
            if (pos < 0) {
                pos += n;
            } else {
                pos %= n;
            }
            return array[pos];
        }

        var ColorPalette = ColorSelector.extend({
            init: function(element, options) {
                var that = this;

                ColorSelector.fn.init.call(that, element, options);

                that._tabIndex = this.element.attr("tabindex") || 0;

                that._wrapper();

                options = that.options;

                that._selectedID = (options.ariaId || kendo.guid()) + "_selected";
                that._ariaTemplate = kendo.template(that.options.ARIATemplate);

                if (that._value) {
                    that._updateUI(that._value);
                    that.wrapper.find(DOT + ITEMSFOCUSEDCLASS).removeClass(ITEMSFOCUSEDCLASS);
                }

                that.wrapper.attr("aria-label", that._ariaTemplate(that.value() || ""));

                that._attachEvents();
            },
            focus: function(){
                if (this.wrapper && !this.wrapper.is("[unselectable='on']")) {
                    this.wrapper.trigger("focus");
                }
            },
            options: {
                name: "ColorPalette",
                columns: 10,
                tileSize: null,
                palette: "basic"
            },
            _attachEvents: function() {
                var that = this;

                that.wrapper.on(CLICK_NS, DOT + TILE_CLASS, function(ev){
                    that._select(ev.currentTarget);
                })
                .on(KEYDOWN_NS, bind(that._keydown, that))
                .on(BLUR_NS, function(){
                    that.wrapper.find(DOT + TILE_CLASS).removeClass(ITEMSFOCUSEDCLASS);
                })
                .on(FOCUS_NS, bind(that._focus, that));
            },
            _colors: function() {
                var options = this.options,
                    colors = options.palette || "basic";

                if (colors == "websafe") {
                    colors = WEBPALETTE;
                    options.columns = 18;
                } else if (colors == "basic") {
                    colors = SIMPLEPALETTE;
                }

                if (typeof colors == "string") {
                    colors = colors.split(",");
                }

                if (Array.isArray(colors)) {
                    colors = $.map(colors, function(x) { return parseColor(x); });
                }

                return colors;
            },
            _current: function(item) {
                this.wrapper.find(DOT + TILE_CLASS)
                    .removeClass(ITEMSFOCUSEDCLASS)
                    .removeAttr("id");

                $(item)
                    .addClass(ITEMSFOCUSEDCLASS)
                    .attr("id", this._selectedID);

                this.wrapper
                    .removeAttr("aria-activedescendant")
                    .attr("aria-activedescendant", this._selectedID);
            },
            _focus: function() {
                var wrapper = this.wrapper,
                    selected = wrapper.find("#" + this._selectedID);

                if (selected.length === 0) {
                    this._current(wrapper.find(DOT + TILE_CLASS).first());
                }
            },
            _keydown: function(e) {
                var newCurrent,
                    wrapper = this.wrapper,
                    items = wrapper.find(DOT + TILE_CLASS),
                    current = items.filter(DOT + ITEMSFOCUSEDCLASS).get(0) || items.filter(DOT + ITEMSELECTEDCLASS).get(0),
                    keyCode = e.keyCode,
                    index;

                if (current) {
                    index = Array.prototype.indexOf.call(current.parentNode.children, current);
                }

                if (keyCode == KEYS.LEFT) {
                    newCurrent = current ? current.previousSibling : items[items.length - 1];
                } else if (keyCode == KEYS.RIGHT) {
                    newCurrent = current ? current.nextSibling : items[0];
                } else if (keyCode == KEYS.DOWN) {
                    newCurrent = current ? (current.parentNode.nextSibling ? current.parentNode.nextSibling.children[index] : null) : items[0];
                } else if (keyCode == KEYS.UP) {
                    newCurrent = current ? (current.parentNode.previousSibling ? current.parentNode.previousSibling.children[index] : null) : items.get[items.length - 1];
                } else if (keyCode == KEYS.ENTER) {
                    preventDefault(e);
                    if (current) {
                        this._select(current);
                        this.trigger("forceSelect", { value: this.value() });
                        return;
                    }
                } else if (keyCode == KEYS.ESC) {
                    this._cancel();
                }

                if (newCurrent && newCurrent.nodeType !== 1) {
                    newCurrent = null;
                }

                if (newCurrent) {
                    preventDefault(e);

                    this._current(newCurrent);
                }
            },
            _onEnable: function(enable) {
                if (this.options._standalone) {
                    if (enable) {
                        this.wrapper.attr("tabindex", this._tabIndex);
                        this.wrapper.removeAttr("aria-disabled");
                    } else {
                        this.wrapper.removeAttr("tabindex");
                        this.wrapper.attr("aria-disabled", true);
                    }
                }
            },
            _select: function(item) {
                var that = this,
                    items = that.wrapper.find(DOT + TILE_CLASS);

                item = $(item);

                ColorSelector.fn._select.call(that, item.css(BACKGROUNDCOLOR));

                items.removeClass(ITEMSELECTEDCLASS).removeAttr("aria-selected");
                item.addClass(ITEMSELECTEDCLASS).attr("aria-selected", true);
            },
            _template: kendo.template(function (ref) {
                var colors = ref.colors;
                var columns = ref.columns;
                var tileSize = ref.tileSize;
                var value = ref.value;
                var id = ref.id;

                var startPart = '<table class="k-colorpalette-table" role="presentation"><tr role="row">';

                var cellElements = "";
                for (var i = 0; i < colors.length; ++i) {
                    var selected = colors[i].equals(value);
                    if (i && i % columns == 0) {
                        cellElements += '</tr><tr role="row">';
                    }

                    cellElements +=
                    "<td role=\"gridcell\" unselectable=\"on\" " + (kendo.attr("style-background-color")) + "=\"" + (colors[i].toCss()) + "\"" +
                        (selected ? " aria-selected=true" : "") + " " +
                        ((id && i === 0) ? 'id=\\"' + id + '\\" ' : '') + " " +

                        "class=\"k-colorpalette-tile" + (selected ? " " + ITEMSELECTEDCLASS : "") + "\" " +
                        "aria-label=\"" + (colors[i].toCss()) + "\"></td>";
                }

                var endPart = '</tr></table>';
                return startPart + cellElements + endPart;
            }),
            _tileSize: function() {
                var tileSize = this.options.tileSize,
                    width, height;

                if (tileSize) {
                    if (/number|string/.test(typeof tileSize)) {
                        width = height = parseFloat(tileSize);
                    } else if (typeof tileSize == "object") {
                        width = parseFloat(tileSize.width);
                        height = parseFloat(tileSize.height);
                    } else {
                        throw new Error("Unsupported value for the 'tileSize' argument");
                    }
                    this.wrapper.find(DOT + TILE_CLASS).css({ width: width, height: height });
                }
            },
            _updateUI: function(color) {
                var item = null,
                    items = this.wrapper.find(DOT + TILE_CLASS);

                this.wrapper.find(DOT + TILE_CLASS).each(function(){
                    var c = parseColor($(this).css(BACKGROUNDCOLOR));

                    if (c && c.equals(color)) {
                        item = this;

                        return false;
                    }
                });

                this._current(item);

                items.removeClass(ITEMSELECTEDCLASS);

                if (item) {
                    $(item).addClass(ITEMSELECTEDCLASS);
                    this.wrapper.attr("aria-label", this._ariaTemplate(this.value() || ""));
                }
            },
            _wrapper: function() {
                var options = this.options,
                    colors = this._colors(),
                    wrapper,
                    templateElement;

                if (this.element.is("input")) {
                    wrapper = this.element.addClass("k-hidden").wrap("<div>").parent();
                } else {
                    wrapper = this.element;
                }

                templateElement = $(this._template({
                    colors: colors,
                    columns: options.columns,
                    tileSize: options.tileSize,
                    value: this._value,
                    id: options.ariaId
                }));

                kendo.applyStylesFromKendoAttributes(templateElement, ["background-color"]);
                wrapper.addClass("k-colorpalette")
                    .attr("role", "grid")
                    .append(templateElement)
                    .attr("tabindex", this._tabIndex);

                this.wrapper = wrapper;
                this._tileSize();
            }
        });


        ui.plugin(ColorPalette);


    })(window.kendo.jQuery);

    (function($, undefined$1){
        // WARNING: removing the following jshint declaration and turning
        // == into === to make JSHint happy will break functionality.

        var kendo = window.kendo,
            ui = kendo.ui,
            html = kendo.html,
            Color = kendo.Color,
            extend = $.extend,
            encode = kendo.htmlEncode,
            BACKGROUNDCOLOR = "background-color",
            MESSAGES = {
                apply  : "Apply",
                cancel : "Cancel",
                noColor: "no color",
                clearColor: "Clear color",
                previewInput: null,
                contrastRatio: "Contrast ratio:",
                fail: "Fail",
                pass: "Pass",
                hex: "HEX",
                toggleFormat: "Toggle format",
                red: "Red",
                green: "Green",
                blue: "Blue",
                alpha: "Alpha",
                gradient: "Gradient view",
                palette: "Palette view"
            },
            NS = ".kendoColorTools",
            CLICK_NS = "click" + NS,
            KEYDOWN_NS = "keydown" + NS,
            ColorSelector = ui.colorpicker.ColorSelector,
            KEYS = kendo.keys,

            NO_COLOR = "k-no-color",
            SELECTED = "k-selected",
            PREVIEW_MASK = ".k-color-preview-mask",

            ARIA_PRESSED = "aria-pressed",
            ARIA_DISABLED = "aria-disabled",

            VIEWS = {
                "gradient": ui.ColorGradient,
                "palette": ui.ColorPalette
            };

        function bind(callback, obj) {
            return function() {
                return callback.apply(obj, arguments);
            };
        }

        var FlatColorPicker = ColorSelector.extend({
            init: function(element, options) {
                var that = this;

                if (options && options.autoupdate === false) {
                    options._standalone = false;
                }

                ColorSelector.fn.init.call(that, element, options);
                options = that.options = kendo.deepExtend({}, that.options, options);
                element = that.element;

                that._wrapper();

                var value = that.color();

                that._changeView(options.view);

                that._setViewSize();

                if (value) {
                    that._updateUI(value);
                    that._previousColor.children(PREVIEW_MASK).css(BACKGROUNDCOLOR, value.toDisplay());
                    that._selectedColor.children(PREVIEW_MASK).css(BACKGROUNDCOLOR, value.toDisplay());
                } else {
                    that._selectedColor.addClass(NO_COLOR);
                    that._previousColor.addClass(NO_COLOR);
                }

                that._attachEvents();
                that._navigation();
            },
            destroy: function() {
                var that = this;

                ColorSelector.fn.destroy.call(this);

                if (that._view) {
                    that._view.destroy();
                    that._viewsContainer.empty();
                }

                that.element.off(NS);

                that._selectedColor = that._previousColor = that._viewsContainer = that._view = null;
            },
            options: {
                name: "FlatColorPicker",
                opacity: false,
                buttons: false,
                input: true,
                preview: true,
                clearButton: false,
                format: "hex",
                formats: ["rgb", "hex"],
                view: "gradient",
                views: ["gradient", "palette"],
                palette: null,
                autoupdate : true,
                backgroundColor: null,
                columns: 10,
                tileSize: 24,
                messages   : MESSAGES,
                size: "medium", // Fake styling option to accomplish colorpicker's size for textbox and button
                _otOfPicker: true
            },
            setBackgroundColor: function (color) {
                var that = this;

                if(that._view && that._view.setBackgroundColor) {
                    that._view.setBackgroundColor(color);
                }
            },
            _attachEvents: function() {
                var that = this;

                that.wrapper
                    .on(KEYDOWN_NS, bind(that._keydown, that))
                    .on(CLICK_NS, ".k-coloreditor-reset", function () {
                        that._clearColor = true;
                        that._updateUI(null);
                        that._view.value(null);
                    })
                    .on(CLICK_NS, ".k-coloreditor-apply", function(){
                        if(that._clearColor) {
                            that._select(null);
                        } else {
                            that._select(that._view.color());
                        }
                    })
                    .on(CLICK_NS, ".k-coloreditor-cancel", function(){
                        delete that._clearColor;
                        that._updateUI(that.color());
                        that._cancel();
                    })
                    .on(CLICK_NS, ".k-button[data-view]", function(ev){
                        var viewButton =  $(ev.target).closest("[data-view]");

                        if(viewButton.is("." + SELECTED)) {
                            return;
                        }

                        that.wrapper.find(".k-button[data-view]").removeClass(SELECTED).attr(ARIA_PRESSED, false);
                        viewButton.addClass(SELECTED).attr(ARIA_PRESSED, true);
                        that._changeView(viewButton.data("view"));
                    });
            },
            _select: function(value) {
                var that = this;

                ColorSelector.fn._select.call(that, value);

                that._updatePreviousColor(value);
            },
            _updatePreviousColor: function (value) {
                var that = this;

                if (value) {
                    that._previousColor.removeClass(NO_COLOR);
                    that._previousColor.children(PREVIEW_MASK).css(BACKGROUNDCOLOR, value.toDisplay());
                } else {
                    that._previousColor.addClass(NO_COLOR);
                    that._previousColor.children(PREVIEW_MASK).css(BACKGROUNDCOLOR, "");
                }
            },
            _changeView: function (mode) {
                var that = this,
                    options = $.extend({}, that.options),
                    selector =  VIEWS[mode],
                    selectedColor, hsvColor;

                if(that._view && that._view._colorInput) {
                    that.options.format = that._view._colorInput._viewModel.format;
                }

                that.options.view = mode;

                delete options.name;
                delete options.change;
                delete options.select;
                delete options.cancel;
                delete options._standalone;

                if (that._view) {
                    selectedColor = that._view.color();
                    that._view.destroy();
                    that._viewsContainer.empty();
                }

                if (selectedColor) {
                    selectedColor = selectedColor.toHSV();
                    hsvColor = Color.fromHSV(that._cachedHue || 0, selectedColor.s, selectedColor.v, selectedColor.a);
                    that._cachedHue = selectedColor.toHSV().h;
                    selectedColor = selectedColor.equals(hsvColor) ? hsvColor : selectedColor;
                }

                options._otOfPicker = false;

                if (selector) {
                    that._view = new VIEWS[mode]($("<div></div>").appendTo(that._viewsContainer), options);
                    that._view.value(selectedColor);

                    that._view.bind("change", function (ev) {
                        delete that._clearColor;
                        that._updateUI(ev.sender.color(), true);
                    });

                    that._view.bind("forceSelect", function (ev) {
                        delete that._clearColor;
                        that._select(ev.sender.color());
                    });
                }
            },
            _onEnable: function(enable) {
                var that = this;

                if (that._view) {
                    that._view._onEnable(enable);
                }

                if (that.options._standalone) {
                    if (enable) {
                        that.wrapper.removeAttr(ARIA_DISABLED);
                    } else {
                        that.wrapper.attr(ARIA_DISABLED, true);
                    }
                }
            },
            focus: function() {
                var that = this;

                if (that._view) {
                    that._view.focus();
                }
            },
            _updateUI: function(color, dontChangeView) {
                var that = this;

                if (color && color.toDisplay) {
                    that._selectedColor.removeClass(NO_COLOR);
                    that._selectedColor.children(PREVIEW_MASK).css(BACKGROUNDCOLOR, color.toDisplay());
                } else {
                    that._selectedColor.addClass(NO_COLOR);
                    that._selectedColor.children(PREVIEW_MASK).css(BACKGROUNDCOLOR, "");
                }

                that._triggerSelect(color);

                if (that.options.autoupdate) {
                    that._updatePreviousColor(color);
                }

                if(!dontChangeView) {
                    that._view.value(color);
                }
            },
            _setViewSize: function() {
                var that = this,
                    wrapper = that.wrapper[0],
                    previewWidth = parseInt((that.options.tileSize.width || that.options.tileSize), 10),
                    previewHeight = parseInt((that.options.tileSize.width || that.options.tileSize), 10),
                    previewColumns = that.options.columns;

                wrapper.style.setProperty("--kendo-color-preview-columns", previewColumns);
                wrapper.style.setProperty("--kendo-color-preview-width", previewWidth + "px");
                wrapper.style.setProperty("--kendo-color-preview-height", previewHeight + "px");
            },
            _keydown: function(e) {
                if (e.keyCode == KEYS.ESC) {
                    this._cancel();
                }
            },
            _template: function () {
                var that = this,
                    options = that.options,
                    buttonOptions = extend({}, options, {
                        fillMode: "flat",
                        themeColor: "base",
                        rounded: "medium"
                    });

                return kendo.template(function (options, buttonOptions) { return '<div class="k-coloreditor-header k-hstack">' +
                            ((options.views && options.views.length > 1) ?
                            '<div class="k-coloreditor-header-actions k-hstack">' +
                                '<div role="group" class="k-button-group k-button-group-flat">' +
                                    html.renderButton(("<button aria-pressed=\"false\" data-view=\"gradient\" title=\"" + (encode(options.messages.gradient)) + "\"></button>"), extend({ icon: "droplet-slider" }, buttonOptions)) +
                                    html.renderButton(("<button aria-pressed=\"false\" data-view=\"palette\" title=\"" + (encode(options.messages.palette)) + "\"></button>"), extend({ icon: "palette" }, buttonOptions)) +
                                '</div>' +
                            '</div>'
                            : '') +
                            '<div class="k-spacer"></div>' +
                            '<div class="k-coloreditor-header-actions k-hstack">' +
                                (options.clearButton ?
                                html.renderButton(("<button class=\"k-coloreditor-reset\" title=\"" + (encode(options.messages.clearColor)) + "\"></button>"), extend({ icon: "droplet-slash" }, buttonOptions))
                                : '') +
                                (options.preview ?
                                '<div class="k-coloreditor-preview k-vstack">' +
                                    '<span class="k-coloreditor-preview-color k-color-preview">' +
                                        '<span class="k-color-preview-mask"></span>' +
                                    '</span>' +
                                    '<span class="k-coloreditor-current-color k-color-preview">' +
                                        '<span class="k-color-preview-mask"></span>' +
                                    '</span>' +
                                '</div>'
                                : '') +
                            '</div>' +
                        '</div>' +
                        '<div class="k-coloreditor-views k-vstack"></div>' +
                        (options.buttons ?
                        '<div class="k-coloreditor-footer k-actions k-actions-end k-actions-horizontal">' +
                            html.renderButton(("<button class=\"k-coloreditor-cancel\" title=\"" + (encode(options.messages.cancel)) + "\">" + (encode(options.messages.cancel)) + "</button>"), extend({}, buttonOptions, { fillMode: "solid" })) +
                            html.renderButton(("<button class=\"k-coloreditor-apply\" title=\"" + (encode(options.messages.apply)) + "\">" + (encode(options.messages.apply)) + "</button>"), extend({}, buttonOptions, { fillMode: "solid", themeColor: "primary" })) +
                        '</div>'
                        : ''); }
                    )(options, buttonOptions);
            },
            _wrapper: function() {
                var options = this.options,
                    wrapper;

                if (this.element.is("input")) {
                    wrapper = this.element.addClass("k-hidden").wrap("<div>").parent();
                } else {
                    wrapper = this.element;
                }

                wrapper.addClass("k-flatcolorpicker k-coloreditor")
                    .attr({
                        "role": "textbox",
                        "aria-keyshortcuts": "Enter"
                    })
                    .append(this._template());

                this._selectedColor = $(".k-coloreditor-preview-color", wrapper);
                this._previousColor = $(".k-coloreditor-current-color", wrapper);
                this._viewsContainer = $(".k-coloreditor-views", wrapper);

                wrapper.find(".k-button[data-view=" + options.view + "]").addClass(SELECTED).attr(ARIA_PRESSED, true);

                this.wrapper = wrapper;
            }
        });

        ui.plugin(FlatColorPicker);
    })(window.kendo.jQuery);

    var __meta__ = {
        id: "colorpicker",
        name: "Color tools",
        category: "web",
        description: "Color selection widgets",
        depends: [ "core", "color", "popup", "slider", "userevents", "button", "binder", "textbox", "numerictextbox", "html.button" ]
    };

    (function($, undefined$1) {
        // WARNING: removing the following jshint declaration and turning
        // == into === to make JSHint happy will break functionality.

        var kendo = window.kendo,
            ui = kendo.ui,
            Widget = ui.Widget,
            Color = kendo.Color,
            parseColor = kendo.parseColor,
            KEYS = kendo.keys,
            BACKGROUNDCOLOR = "background-color",
            MESSAGES = {
                apply: "Apply",
                cancel: "Cancel",
                noColor: "no color",
                clearColor: "Clear color",
                previewInput: null,
                contrastRatio: "Contrast ratio:",
                fail: "Fail",
                pass: "Pass",
                hex: "HEX",
                toggleFormat: "Toggle format",
                red: "Red",
                green: "Green",
                blue: "Blue",
                alpha: "Alpha",
                gradient: "Gradient view",
                palette: "Palette view"
            },
            NS = ".kendoColorTools",
            CLICK_NS = "click" + NS,
            KEYDOWN_NS = "keydown" + NS,
            ColorSelector = ui.colorpicker.ColorSelector,
            FlatColorPicker = ui.FlatColorPicker;

        /* -----[ The ColorPicker widget ]----- */

        var ColorPicker = Widget.extend({
            init: function(element, options) {
                var that = this;

                // Legacy support for the cases where only palette is defined
                if (options && options.palette && !options.view) {
                    options.view = "palette";
                }

                Widget.fn.init.call(that, element, options);
                options = that.options = kendo.deepExtend({}, that.options, options);
                element = that.element;

                var value = element.attr("value") || element.val();
                if (value) {
                    value = parseColor(value, true);
                } else {
                    value = parseColor(options.value, true);
                }
                that._value = options.value = value;

                var _buttonHtml = kendo.html.renderButton('<button class="k-input-button" unselectable="on" aria-label="select" tabindex="-1"></button>', $.extend({}, that.options, {
                    icon: "caret-alt-down"
                }));

                var content = that._inputWrapper = that.wrapper = $(that._template($.extend({}, that.options, {
                    _buttonHtml: _buttonHtml
                })));

                that._applyCssClasses();
                element.hide().after(content);

                if (element.is("input")) {
                    element.appendTo(content);
                    that._preventDefaultLabelClick();
                }

                that._tabIndex = element.attr("tabIndex") || 0;

                that.enable(!element.attr("disabled"));

                var accesskey = element.attr("accesskey");
                if (accesskey) {
                    element.attr("accesskey", null);
                    content.attr("accesskey", accesskey);
                }

                that.bind("activate", function(ev) {
                    if (!ev.isDefaultPrevented()) {
                        that.toggle();
                    }
                });

                that._updateUI(value);
            },
            destroy: function() {
                this.wrapper.off(NS).find("*").off(NS);
                if (this._popup) {
                    this._selector.destroy();
                    this._popup.destroy();
                }
                this._selector = this._popup = this.wrapper = null;
                Widget.fn.destroy.call(this);
            },
            enable: function(enable) {
                var that = this,
                    wrapper = that.wrapper,
                    arrow = wrapper.find(".k-input-button");

                if (arguments.length === 0) {
                    enable = true;
                }

                that.element.attr("disabled", !enable);
                wrapper.attr("aria-disabled", !enable);

                arrow.off(NS).on("mousedown" + NS, preventDefault);

                wrapper.addClass("k-disabled")
                    .removeAttr("tabIndex")
                    .add("*", wrapper).off(NS);

                if (enable) {
                    wrapper.removeClass("k-disabled")
                        .attr("tabIndex", that._tabIndex)
                        .on("mouseenter" + NS, function() { wrapper.addClass("k-hover"); })
                        .on("mouseleave" + NS, function() { wrapper.removeClass("k-hover"); })
                        .on("focus" + NS, function() { wrapper.addClass("k-focus"); })
                        .on("blur" + NS, function() { wrapper.removeClass("k-focus"); })
                        .on(KEYDOWN_NS, bind(that._keydown, that))
                        .on(CLICK_NS, ".k-input-button", bind(that.toggle, that))
                        .on(CLICK_NS, ".k-input-inner", function() {
                            that.trigger("activate");
                        });
                } else {
                    that.close();
                }
            },

            _template: kendo.template(function (ref) {
                   var toolIcon = ref.toolIcon;
                   var _buttonHtml = ref._buttonHtml;

                   return '<span role="combobox" aria-haspopup="dialog" aria-expanded="false" class="k-colorpicker k-picker k-icon-picker">' +
                    '<span class="k-input-inner">' +
                        "<span class=\"k-value-icon k-color-preview " + (toolIcon ? 'k-icon-color-preview' : '') + "\">" +
                            (toolIcon ? kendo.ui.icon({ icon: toolIcon, iconClass: "k-color-preview-icon" }) : '') +
                            '<span class="k-color-preview-mask"></span>' +
                        '</span>' +
                    '</span >' +
                    _buttonHtml +
                '</span>';
        }
            ),

            options: {
                name: "ColorPicker",
                closeOnSelect: false,
                contrastTool: false,
                palette: null,
                columns: 10,
                toolIcon: null,
                value: null,
                messages: MESSAGES,
                opacity: false,
                buttons: true,
                preview: true,
                clearButton: false,
                input: true,
                format: "hex",
                formats: ["rgb", "hex"],
                view: "gradient",
                views: ["gradient", "palette"],
                backgroundColor: null,
                ARIATemplate: function (data) { return ("Current selected color is " + (data || "none")); },
                size: "medium",
                rounded: "medium",
                fillMode: "solid"
            },

            events: [ "activate", "change", "select", "open", "close" ],

            open: function() {
                if (!this.element.prop("disabled")) {
                    this._getPopup().open();
                }
            },
            close: function() {
                var selOptions = (this._selector && this._selector.options) || {};
                selOptions._closing = true;
                this._getPopup().close();

                delete selOptions._closing;
            },
            toggle: function() {
                if (!this.element.prop("disabled")) {
                    this._getPopup().toggle();
                }
            },
            setBackgroundColor: function(color) {
                var that = this,
                    handler = function() { that._selector.setBackgroundColor(color); };

                that.options.contrastTool.backgroundColor = color;

                if (that._selector && (that._popup && that._popup.visible())) {
                    that._selector.setBackgroundColor(color);
                } else if (that._popup) {
                    that._popup.unbind("activate", handler);
                    that._popup.bind("activate", handler);
                }
            },
            _noColorIcon: function() {
                return this.wrapper.find(".k-color-preview");
            },
            color: ColorSelector.fn.color,
            value: ColorSelector.fn.value,
            _select: ColorSelector.fn._select,
            _triggerSelect: ColorSelector.fn._triggerSelect,
            _isInputTypeColor: ColorSelector.fn._isInputTypeColor,

            _preventDefaultLabelClick: function() {
                // if there exists a <label> associated with this
                // input field, we must catch clicks on it to prevent
                // the built-in color picker from showing up.
                // https://github.com/telerik/kendo-ui-core/issues/292
                var that = this,
                    element = that.element,
                    label = element.closest("label"),
                    id = element.attr("id");

                if (id) {
                    label = label.add('label[for="' + id + '"]');
                }
                label.on("click", function(ev) {
                    that.open();
                    ev.preventDefault();
                });
            },

            _updateUI: function(value, dontChangeSelector) {
                this._updateInput(value);
                this._triggerSelect(value);

                this.wrapper.find(".k-color-preview-mask").css(
                    BACKGROUNDCOLOR,
                    value ? value.toDisplay() : ""
                );

                this._noColorIcon().toggleClass("k-no-color", !value);

                if (this._selector && !dontChangeSelector) {
                    this._selector.value(value);
                }
            },
            _updateInput: function(value) {
                var formattedValue = "";

                if (value) {
                    if (this._isInputTypeColor() || value.a == 1) {
                        // seems that input type="color" doesn't support opacity
                        // in colors; the only accepted format is hex #RRGGBB
                        formattedValue = value.toCss();
                    } else {
                        formattedValue = value.toCssRgba();
                    }

                    this.element.val(formattedValue);
                }

                if (!this._ariaTemplate) {
                    this._ariaTemplate = kendo.template(this.options.ARIATemplate);
                }

                this.wrapper.attr("aria-label", this._ariaTemplate(formattedValue));
            },
            _keydown: function(ev) {
                var key = ev.keyCode;
                if (this._getPopup().visible()) {
                    if (key == KEYS.ESC) {
                        this._selector._cancel();
                    } else {
                        this._selector._keydown(ev);
                    }
                    preventDefault(ev);
                }
                else if (key == KEYS.ENTER || key == KEYS.DOWN) {
                    this.open();
                    preventDefault(ev);
                }
            },
            _getPopup: function() {
                var that = this, popup = that._popup;

                if (!popup) {
                    var options = that.options;
                    var selectorType;

                    selectorType = FlatColorPicker;

                    options.autoupdate = options.buttons !== true;
                    delete options.select;
                    delete options.change;
                    delete options.cancel;

                    options._otOfPicker = false;

                    var id = kendo.guid();

                    var selectorWrapper = $('<div id="' + id + '" class="k-colorpicker-popup"></div>').appendTo(document.body);
                    var selector = that._selector = new selectorType($('<div></div>').appendTo(selectorWrapper), options);

                    that.wrapper.attr("aria-controls", id);

                    that._popup = popup = selectorWrapper.kendoPopup({
                        anchor: that.wrapper,
                        adjustSize: { width: 5, height: 0 }
                    }).data("kendoPopup");

                    selector.bind({
                        select: function(ev) {
                            that._updateUI(parseColor(ev.value), true);
                        },
                        change: function(ev) {
                            if (that.options.buttons) {
                                that._select(selector.color());
                            } else {
                                that._updateUI(parseColor(ev.value), true);
                            }

                            if (that.options.buttons || (that._selector.options.view === "palette" && that.options.closeOnSelect)) {
                                that.close();
                            }
                        },
                        cancel: function() {
                            that.close();
                        }
                    });
                    popup.bind({
                        close: function(ev) {
                            if (that.trigger("close")) {
                                ev.preventDefault();
                                return;
                            }
                            that.wrapper.removeClass("k-focus");

                            var color = selector.color();

                            if (!that.options.buttons) {
                                that._select(color);
                            } else {
                                that._select(that.color());
                            }

                            color = that.color();

                            if (color && color.h) {
                                that._cachedHue = color.h;
                            }

                            var clickedOutside = event &&
                                event instanceof MouseEvent &&
                                $(event.target).parents(".k-colorpicker-popup").length === 0;

                            if (!clickedOutside) {
                                setTimeout(function() {
                                    if (that.wrapper && !that.wrapper.is("[unselectable='on']")) {
                                        that.wrapper.trigger("focus");
                                    }
                                }, 0);
                            }

                            that.wrapper.attr("aria-expanded", false);
                        },
                        open: function(ev) {
                            if (that.trigger("open")) {
                                ev.preventDefault();
                            } else {
                                that.wrapper.addClass("k-focus");
                                that.wrapper.attr("aria-expanded", true);
                            }
                        },
                        activate: function() {
                            var hsvColor,
                                selectedColor = that.color();

                            if (selectedColor) {
                                selectedColor = selectedColor.toHSV();
                                hsvColor = Color.fromHSV(that._cachedHue || 0, selectedColor.s, selectedColor.v, selectedColor.a);
                                selectedColor = selectedColor.equals(hsvColor) ? hsvColor : selectedColor;
                            }

                            selector.value(selectedColor);
                            selector.focus();
                            that.wrapper.addClass("k-focus");
                        }
                    });
                }
                return popup;
            }
        });

        function preventDefault(ev) { ev.preventDefault(); }

        function bind(callback, obj) {
            return function() {
                return callback.apply(obj, arguments);
            };
        }

        ui.plugin(ColorPicker);

        kendo.cssProperties.registerPrefix("ColorPicker", "k-picker-");

        kendo.cssProperties.registerValues("ColorPicker", [{
            prop: "rounded",
            values: kendo.cssProperties.roundedValues.concat([['full', 'full']])
        }]);

    })(window.kendo.jQuery);
    var kendo$1 = kendo;

    return kendo$1;

}));
