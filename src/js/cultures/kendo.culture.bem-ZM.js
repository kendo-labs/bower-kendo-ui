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
(function( window, undefined ) {
    kendo.cultures["bem-ZM"] = {
        name: "bem-ZM",
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
                name: "Zambian Kwacha",
                abbr: "ZMW",
                pattern: ["-$n","$n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "K"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Pa Mulungu","Palichimo","Palichibuli","Palichitatu","Palichine","Palichisano","Pachibelushi"],
                    namesAbbr: ["Pa Mulungu","Palichimo","Palichibuli","Palichitatu","Palichine","Palichisano","Pachibelushi"],
                    namesShort: ["Pa Mulungu","Palichimo","Palichibuli","Palichitatu","Palichine","Palichisano","Pachibelushi"]
                },
                months: {
                    names: ["Januari","Februari","Machi","Epreo","Mei","Juni","Julai","Ogasti","Septemba","Oktoba","Novemba","Disemba"],
                    namesAbbr: ["Jan","Feb","Mac","Epr","Mei","Jun","Jul","Oga","Sep","Okt","Nov","Dis"]
                },
                AM: ["uluchelo","uluchelo","ULUCHELO"],
                PM: ["akasuba","akasuba","AKASUBA"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d MMMM yyyy",
                    F: "dddd, d MMMM yyyy h:mm:ss tt",
                    g: "dd/MM/yyyy h:mm tt",
                    G: "dd/MM/yyyy h:mm:ss tt",
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
