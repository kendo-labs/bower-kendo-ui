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
let $ = kendo.jQuery;

export function addInputPrefixSuffixContainers({ widget, wrapper, options, prefixInsertBefore, suffixInsertAfter }) {
    var prefix = options.prefixOptions,
        suffix = options.suffixOptions,
        hasPrefixContent = prefix.template || prefix.icon,
        hasSuffixContent = suffix.template || suffix.icon,
        suffixInsertAfter = suffixInsertAfter || prefixInsertBefore,
        layoutFlow = options.layoutFlow,
        containerOrientation = layoutFlow ? (layoutFlow == "vertical" ? "horizontal" : "vertical") : "horizontal",
        separatorOrientation = layoutFlow == "vertical" ? "horizontal" : "vertical",
        INPUT_SEPARATOR = `<span class="k-input-separator k-input-separator-${separatorOrientation}"></span>`,
        prefixContainer,
        suffixContainer;

    if (prefix && hasPrefixContent) {
        prefixContainer = wrapper.children(".k-input-prefix");

        if (!prefixContainer[0]) {
            prefixContainer = $(`<span class="k-input-prefix k-input-prefix-${containerOrientation}" />`);
            if (prefixInsertBefore) {
                prefixContainer.insertBefore(prefixInsertBefore);
            } else {
                prefixContainer.prependTo(wrapper);
            }
        }

        if (prefix.icon) {
            prefixContainer.html(kendo.html.renderIcon({ icon: prefix.icon }));
        }

        if (prefix.template) {
            prefixContainer.html(kendo.template(prefix.template)({}));
        }

        if (prefix.separator) {
            $(INPUT_SEPARATOR).insertAfter(prefixContainer);
        }
    }

    if (suffix && hasSuffixContent) {
        suffixContainer = wrapper.children(".k-input-suffix");

        if (!suffixContainer[0]) {
            suffixContainer = $(`<span class="k-input-suffix k-input-suffix-${containerOrientation}" />`).appendTo(wrapper);
            if (suffixInsertAfter) {
                suffixContainer.insertAfter(suffixInsertAfter);
            } else {
                suffixContainer.appendTo(wrapper);
            }
        }

        if (suffix.icon) {
            suffixContainer.html(kendo.html.renderIcon({ icon: suffix.icon }));
        }

        if (suffix.template) {
            suffixContainer.html(kendo.template(suffix.template)({}));
        }

        if (suffix.separator) {
            $(INPUT_SEPARATOR).insertBefore(suffixContainer);
        }
    }

    widget._prefixContainer = prefixContainer;
    widget._suffixContainer = suffixContainer;
}