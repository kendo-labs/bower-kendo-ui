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
(function (factory) {
    typeof define === 'function' && define.amd ? define(['kendo.core'], factory) :
    factory();
})((function () {
    (function( window, undefined$1 ) {
        kendo.cultures["en-MP"] = {
            name: "en-MP",
            numberFormat: {
                pattern: ["-n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                percent: {
                    pattern: ["-n%","n%"],
                    decimals: 2,
                    ",": ",",
                    ".": ".",
                    groupSize: [3],
                    symbol: "%"
                },
                currency: {
                    name: "US Dollar",
                    abbr: "USD",
                    pattern: ["-$n","$n"],
                    decimals: 2,
                    ",": ",",
                    ".": ".",
                    groupSize: [3],
                    symbol: "$"
                }
            },
            calendars: {
                standard: {
                    days: {
                        names: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                        namesAbbr: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
                        namesShort: ["Su","Mo","Tu","We","Th","Fr","Sa"]
                    },
                    months: {
                        names: ["January","February","March","April","May","June","July","August","September","October","November","December"],
                        namesAbbr: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
                    },
                    AM: ["AM","am","AM"],
                    PM: ["PM","pm","PM"],
                    patterns: {
                        d: "M/d/yyyy",
                        D: "dddd, MMMM d, yyyy",
                        F: "dddd, MMMM d, yyyy h:mm:ss tt",
                        g: "M/d/yyyy h:mm tt",
                        G: "M/d/yyyy h:mm:ss tt",
                        m: "MMMM d",
                        M: "MMMM d",
                        s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                        t: "h:mm tt",
                        T: "h:mm:ss tt",
                        u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                        y: "MMMM yyyy",
                        Y: "MMMM yyyy"
                    },
                    "/": "/",
                    ":": ":",
                    firstDay: 1
                }
            }
        };
    })();

}));
