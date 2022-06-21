/**
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
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

(function(f){
    if (typeof define === 'function' && define.amd) {
        define(["kendo.core"], f);
    } else {
        f();
    }
}(function(){
(function( window, undefined ) {
    kendo.cultures["yo-BJ"] = {
        name: "yo-BJ",
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
                name: "West African CFA Franc",
                abbr: "XOF",
                pattern: ["-$n","$n"],
                decimals: 0,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "CFA"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Ɔjɔ́ Àìkú","Ɔjɔ́ Ajé","Ɔjɔ́ Ìsɛ́gun","Ɔjɔ́rú","Ɔjɔ́bɔ","Ɔjɔ́ Ɛtì","Ɔjɔ́ Àbámɛ́ta"],
                    namesAbbr: ["Àìkú","Ajé","Ìsɛ́gun","Ɔjɔ́rú","Ɔjɔ́bɔ","Ɛtì","Àbámɛ́ta"],
                    namesShort: ["Àìkú","Ajé","Ìsɛ́gun","Ɔjɔ́rú","Ɔjɔ́bɔ","Ɛtì","Àbámɛ́ta"]
                },
                months: {
                    names: ["Oshù Shɛ́rɛ́","Oshù Èrèlè","Oshù Ɛrɛ̀nà","Oshù Ìgbé","Oshù Ɛ̀bibi","Oshù Òkúdu","Oshù Agɛmɔ","Oshù Ògún","Oshù Owewe","Oshù Ɔ̀wàrà","Oshù Bélú","Oshù Ɔ̀pɛ̀"],
                    namesAbbr: ["Shɛ́rɛ́","Èrèlè","Ɛrɛ̀nà","Ìgbé","Ɛ̀bibi","Òkúdu","Agɛmɔ","Ògún","Owewe","Ɔ̀wàrà","Bélú","Ɔ̀pɛ̀"]
                },
                AM: ["Àárɔ̀","àárɔ̀","ÀÁRƆ̀"],
                PM: ["Ɔ̀sán","ɔ̀sán","Ɔ̀SÁN"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d MMMM yyyy",
                    F: "dddd, d MMMM yyyy HH:mm:ss",
                    g: "dd/MM/yyyy HH:mm",
                    G: "dd/MM/yyyy HH:mm:ss",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
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
})(this);
}));