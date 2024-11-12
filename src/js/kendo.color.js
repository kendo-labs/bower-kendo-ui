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
 import {
    Color,
    namedColors,
    parseColor
} from "@progress/kendo-drawing";

export const __meta__ = {
    id: "color",
    name: "Color utils",
    category: "framework",
    advanced: true,
    description: "Color utilities used across components",
    depends: [ "core" ]
};

window.kendo = window.kendo || {};

kendo.deepExtend(kendo, {
    parseColor: parseColor,
    namedColors: namedColors,
    Color: Color
});

