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
        kendo.cultures["sv-SE"] = {
            name: "sv-SE",
            numberFormat: {
                pattern: ["-n"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                percent: {
                    pattern: ["-n %","n %"],
                    decimals: 2,
                    ",": " ",
                    ".": ",",
                    groupSize: [3],
                    symbol: "%"
                },
                currency: {
                    name: "Swedish Krona",
                    abbr: "SEK",
                    pattern: ["-n $","n $"],
                    decimals: 2,
                    ",": " ",
                    ".": ",",
                    groupSize: [3],
                    symbol: "kr"
                }
            },
            calendars: {
                standard: {
                    days: {
                        names: ["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],
                        namesAbbr: ["sön","mån","tis","ons","tor","fre","lör"],
                        namesShort: ["sö","må","ti","on","to","fr","lö"]
                    },
                    months: {
                        names: ["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],
                        namesAbbr: ["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"]
                    },
                    AM: [""],
                    PM: [""],
                    patterns: {
                        d: "yyyy-MM-dd",
                        D: "'den 'd MMMM yyyy",
                        F: "'den 'd MMMM yyyy HH:mm:ss",
                        g: "yyyy-MM-dd HH:mm",
                        G: "yyyy-MM-dd HH:mm:ss",
                        m: "'den 'd MMMM",
                        M: "'den 'd MMMM",
                        s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                        t: "HH:mm",
                        T: "HH:mm:ss",
                        u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                        y: "MMMM yyyy",
                        Y: "MMMM yyyy"
                    },
                    "/": "-",
                    ":": ":",
                    firstDay: 1
                }
            }
        };
    })();

}));
