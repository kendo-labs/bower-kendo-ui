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
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('kendo.html.icon.js')) :
    typeof define === 'function' && define.amd ? define(['kendo.html.icon'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.kendoicons = global.kendoicons || {}, global.kendoicons.js = factory()));
})(this, (function () {
    var caretTrIcon = {
        name: 'caret-tr',
        content: '<path d="M352 160v192L160 160h192z" />',
        viewBox: '0 0 512 512'
    };

    var caretBrIcon = {
        name: 'caret-br',
        content: '<path d="M352 352H160l192-192v192z" />',
        viewBox: '0 0 512 512'
    };

    var caretBlIcon = {
        name: 'caret-bl',
        content: '<path d="M160 352V160l192 192H160z" />',
        viewBox: '0 0 512 512'
    };

    var caretTlIcon = {
        name: 'caret-tl',
        content: '<path d="M160 160h192L160 352V160z" />',
        viewBox: '0 0 512 512'
    };

    var caretAltUpIcon = {
        name: 'caret-alt-up',
        content: '<path d="m256 160 128 192H128l128-192z" />',
        viewBox: '0 0 512 512'
    };

    var caretAltRightIcon = {
        name: 'caret-alt-right',
        content: '<path d="M352 256 160 384V128l192 128z" />',
        viewBox: '0 0 512 512'
    };

    var caretAltDownIcon = {
        name: 'caret-alt-down',
        content: '<path d="M256 352 128 160h256L256 352z" />',
        viewBox: '0 0 512 512'
    };

    var caretAltLeftIcon = {
        name: 'caret-alt-left',
        content: '<path d="m160 256 192-128v256L160 256z" />',
        viewBox: '0 0 512 512'
    };

    var caretAltToTopIcon = {
        name: 'caret-alt-to-top',
        content: '<path d="m128 352 128-192 128 192H128zm256-224H128v32h256v-32z" />',
        viewBox: '0 0 512 512'
    };

    var caretAltToRightIcon = {
        name: 'caret-alt-to-right',
        content: '<path d="m128 128 192 128-192 128V128zm224 256V128h-32v256h32z" />',
        viewBox: '0 0 512 512'
    };

    var caretAltToBottomIcon = {
        name: 'caret-alt-to-bottom',
        content: '<path d="M384 128 256 320 128 128h256zM128 352h256v-32H128v32z" />',
        viewBox: '0 0 512 512'
    };

    var caretAltToLeftIcon = {
        name: 'caret-alt-to-left',
        content: '<path d="M352 384 160 256l192-128v256zM128 128v256h32V128h-32z" />',
        viewBox: '0 0 512 512'
    };

    var caretDoubleAltUpIcon = {
        name: 'caret-double-alt-up',
        content: '<path d="m128 448 128-192 128 192H128zM256 64 128 256h256L256 64z" />',
        viewBox: '0 0 512 512'
    };

    var caretDoubleAltRightIcon = {
        name: 'caret-double-alt-right',
        content: '<path d="m64 128 192 128L64 384V128zm384 128L256 128v256l192-128z" />',
        viewBox: '0 0 512 512'
    };

    var caretDoubleAltDownIcon = {
        name: 'caret-double-alt-down',
        content: '<path d="M384 64 256 256 128 64h256zM256 448l128-192-128 1H128l128 191z" />',
        viewBox: '0 0 512 512'
    };

    var caretDoubleAltLeftIcon = {
        name: 'caret-double-alt-left',
        content: '<path d="M448 384 256 256.001l192-128V384zM64 256.001 256 384V128L64 256.001z" />',
        viewBox: '0 0 512 512'
    };

    var caretAltExpandIcon = {
        name: 'caret-alt-expand',
        content: '<path d="M128 288h256L256 480 128 288zM256 32 128 224h256.001L256 32z" />',
        viewBox: '0 0 512 512'
    };

    var arrowsNoChangeIcon = {
        name: 'arrows-no-change',
        content: '<path d="M256 160 128 352 0 160h256zm96 0L224 352h256.001L352 160z" />',
        viewBox: '0 0 512 512'
    };

    var arrowOverflowDownIcon = {
        name: 'arrow-overflow-down',
        content: '<path d="M384 160 256 352 128 160h256zM128 96v32h256V96H128z" />',
        viewBox: '0 0 512 512'
    };

    var chevronUpIcon = {
        name: 'chevron-up',
        content: '<path d="m129.941 353.941 126.06-126.06 126.061 126.06L416 320 256.001 160 96 320l33.941 33.941z" />',
        viewBox: '0 0 512 512'
    };

    var chevronRightIcon = {
        name: 'chevron-right',
        content: '<path d="m158.059 129.941 126.06 126.06-126.06 126.061L192 416l160-159.999L192 96l-33.941 33.941z" />',
        viewBox: '0 0 512 512'
    };

    var chevronDownIcon = {
        name: 'chevron-down',
        content: '<path d="m382.059 158.059-126.06 126.06-126.061-126.06L96 192l159.999 160L416 192l-33.941-33.941z" />',
        viewBox: '0 0 512 512'
    };

    var chevronLeftIcon = {
        name: 'chevron-left',
        content: '<path d="m353.941 382.059-126.06-126.06 126.06-126.061L320 96 160 255.999 320 416l33.941-33.941z" />',
        viewBox: '0 0 512 512'
    };

    var arrowUpIcon = {
        name: 'arrow-up',
        content: '<path d="M384 288h-96v128h-64l-.001-128H128L255.999 96 384 288z" />',
        viewBox: '0 0 512 512'
    };

    var arrowRightIcon = {
        name: 'arrow-right',
        content: '<path d="M224 384v-96H96v-64h128v-96l192 128-192 128z" />',
        viewBox: '0 0 512 512'
    };

    var arrowDownIcon = {
        name: 'arrow-down',
        content: '<path d="M128 224h96V96h64l.001 128H384L256.001 416 128 224z" />',
        viewBox: '0 0 512 512'
    };

    var arrowLeftIcon = {
        name: 'arrow-left',
        content: '<path d="M288 128v96h128v64l-128 .001V384L96 256.001 288 128z" />',
        viewBox: '0 0 512 512'
    };

    var levelDownIcon = {
        name: 'level-down',
        content: '<path d="M288 192v64h64l-80 128-80-128h64v-64H128v-32h288v32H288z" />',
        viewBox: '0 0 512 512'
    };

    var levelUpIcon = {
        name: 'level-up',
        content: '<path d="m128 288 80-128 80 128h-64v64h192v32H192v-96h-64z" />',
        viewBox: '0 0 512 512'
    };

    var levelToTopIcon = {
        name: 'level-to-top',
        content: '<path d="m128 288 80-128 80 128h-64v64h192v32H192v-96h-64zm288-160H96v32h320v-32z" />',
        viewBox: '0 0 512 512'
    };

    var colResizeIcon = {
        name: 'col-resize',
        content: '<path d="M128 255h64v33h-64v64.6L0 271.9l128-80.7V255zm96 225h64V32h-64v448zm288-207.9-128-80.7V256h-64v33h64v63.9l128-80.8z" />',
        viewBox: '0 0 512 512'
    };

    var arrowsAxesIcon = {
        name: 'arrows-axes',
        content: '<path d="M352 480v-64H128v64H96v-64H32v-32h64V160H32l80-128 80 128h-64v224h224v-64l128 80-128 80z" />',
        viewBox: '0 0 512 512'
    };

    var arrowsSwapIcon = {
        name: 'arrows-swap',
        content: '<path d="M256 160h-64v224h-32V160H96l80-128 80 128zm96 192V128h-32v224h-64l80 128 80-128h-64z" />',
        viewBox: '0 0 512 512'
    };

    var dragAndDropIcon = {
        name: 'drag-and-drop',
        content: '<path d="m32 128 192 112L32 352V128zm224 96v32h224v-32H256z" />',
        viewBox: '0 0 512 512'
    };

    var categorizeIcon = {
        name: 'categorize',
        content: '<path d="M32 32v192l160-96L32 32zm0 448V288l160 96-160 96zM192 64h288v32H192V64zm0 96h288v32H192v-32zm0 160h288v32H192v-32zm0 96h288v32H192v-32z" />',
        viewBox: '0 0 512 512'
    };

    var gridIcon = {
        name: 'grid',
        content: '<path d="M32 32h128v128H32V32zm160 448h128V352H192v128zm-160 0h128V352H32v128zm0-160h128V192H32v128zm160 0h128V192H192v128zM352 32v128h128V32H352zm0 288h128V192H352v128zM192 160h128V32H192v128zm160 320h128V352H352v128z" />',
        viewBox: '0 0 512 512'
    };

    var gridLayoutIcon = {
        name: 'grid-layout',
        content: '<path d="M32 32h96v96H32V32zm128 0v96h320V32H160zM32 288h96v-96H32v96zm128 0h320v-96H160v96zM32 448h96v-96H32v96zm128 0h320v-96H160v96z" />',
        viewBox: '0 0 512 512'
    };

    var groupIcon = {
        name: 'group',
        content: '<path d="M32 256h192v192H32V256zm0-32h192V32H32v192zm224 224h192V256H256v192zm0-416v192h192V32H256z" />',
        viewBox: '0 0 512 512'
    };

    var ungroupIcon = {
        name: 'ungroup',
        content: '<path d="M32 256h192v192H32V256zm32-64h128V64H64v128zm224 224h128V288H288v128zM256 32v192h192V32H256z" />',
        viewBox: '0 0 512 512'
    };

    var handleDragIcon = {
        name: 'handle-drag',
        content: '<path d="M160 64h64v384h-64V64zm96 0v384h64V64h-64z" />',
        viewBox: '0 0 512 512'
    };

    var layoutIcon = {
        name: 'layout',
        content: '<path d="M192 416h256v64H192v-64zm0-32h256v-64H192v64zM32 480h128V128H32v352zm160-288h256v-64H192v64zm0 96h256v-64H192v64zM32 0v96h416V0H32z" />',
        viewBox: '0 0 512 512'
    };

    var layout1By4Icon = {
        name: 'layout-1-by-4',
        content: '<path d="M32 0h192v480H32V0zm224 0v96h192V0H256zm0 224h192v-96H256v96zm0 128h192v-96H256v96zm0 128h192v-96H256v96z" />',
        viewBox: '0 0 512 512'
    };

    var layout2By2Icon = {
        name: 'layout-2-by-2',
        content: '<path d="M32 224h192V0H32v224zm224 0h192V0H256v224zM32 480h192V256H32v224zm224 0h192V256H256v224z" />',
        viewBox: '0 0 512 512'
    };

    var layoutSideBySideIcon = {
        name: 'layout-side-by-side',
        content: '<path d="M32 384h416v96H32v-96zm0-32h416v-96H32v96zm0-128h416v-96H32v96zM32 0v96h416V0H32z" />',
        viewBox: '0 0 512 512'
    };

    var layoutStackedIcon = {
        name: 'layout-stacked',
        content: '<path d="M32 256h192v96H32v-96zm0 224h192v-96H32v96zm224-128h192v-96H256v96zM32 0v224h416V0H32zm224 480h192v-96H256v96z" />',
        viewBox: '0 0 512 512'
    };

    var columnsIcon = {
        name: 'columns',
        content: '<path d="M64 32h96v448H64V32zm128 448h96V32h-96v448zM320 32v448h96V32h-96z" />',
        viewBox: '0 0 512 512'
    };

    var rowsIcon = {
        name: 'rows',
        content: '<path d="M480 64v96H32V64h448zM32 192v96h448v-96H32zm448 128H32v96h448v-96z" />',
        viewBox: '0 0 512 512'
    };

    var reorderIcon = {
        name: 'reorder',
        content: '<path d="M480 128v64H32v-64h448zM32 224v64h448v-64H32zm448 96H32v64h448v-64z" />',
        viewBox: '0 0 512 512'
    };

    var menuIcon = {
        name: 'menu',
        content: '<path d="M480 32v96H32V32h448zM32 192v96h448v-96H32zm448 160H32v96h448v-96z" />',
        viewBox: '0 0 512 512'
    };

    var moreVerticalIcon = {
        name: 'more-vertical',
        content: '<path d="M240 128c26.4 0 48-21.6 48-48s-21.6-48-48-48-48 21.6-48 48 21.6 48 48 48zm0 64c-26.4 0-48 21.6-48 48s21.6 48 48 48 48-21.6 48-48-21.6-48-48-48zm0 160c-26.4 0-48 21.6-48 48s21.6 48 48 48 48-21.6 48-48-21.6-48-48-48z" />',
        viewBox: '0 0 512 512'
    };

    var moreHorizontalIcon = {
        name: 'more-horizontal',
        content: '<path d="M128 240c0-26.4-21.6-48-48-48s-48 21.6-48 48 21.6 48 48 48 48-21.6 48-48zm64 0c0 26.4 21.6 48 48 48s48-21.6 48-48-21.6-48-48-48-48 21.6-48 48zm160 0c0 26.4 21.6 48 48 48s48-21.6 48-48-21.6-48-48-48-48 21.6-48 48z" />',
        viewBox: '0 0 512 512'
    };

    var overlapIcon = {
        name: 'overlap',
        content: '<path d="M320 320V64H64v256h256zM192 448h256V192h-96v160H192v96z" />',
        viewBox: '0 0 512 512'
    };

    var homeIcon = {
        name: 'home',
        content: '<path d="M480 256c0 17.7-14.3 32-32 32-9.1 0-17.4-3.8-23.2-10l-8.8-8.7V416c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-96h-64v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V268.6l-8.3 8.9C81.8 284 73.4 288 64 288c-17.7 0-32-14.3-32-32 0-8.5 3.3-16.1 8.6-21.9l.2-.2 1-1 191-191.3 1-1c5.8-5.5 13.6-8.9 22.2-8.9 9.1 0 17.3 3.8 23.1 9.9L470.3 233l.7.7.3.3c5.4 5.8 8.7 13.5 8.7 22z" />',
        viewBox: '0 0 512 512'
    };

    var arrowsLeftRightIcon = {
        name: 'arrows-left-right',
        content: '<path d="m512 240-128-80v64H128v-64L0 240l128 80v-64h256v64z" />',
        viewBox: '0 0 512 512'
    };

    var arrowsTopBottomIcon = {
        name: 'arrows-top-bottom',
        content: '<path d="m240 512 80-128h-64V128h64L240 0l-80 128h64v256h-64z" />',
        viewBox: '0 0 512 512'
    };

    var borderRadiusBottomLeftIcon = {
        name: 'border-radius-bottom-left',
        content: '<path d="M384 368c0 8.8-7.2 16-16 16h-64c-97 0-176-79-176-176v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 79.4 64.6 144 144 144h64c8.8 0 16 7.2 16 16z" />',
        viewBox: '0 0 512 512'
    };

    var borderRadiusBottomRightIcon = {
        name: 'border-radius-bottom-right',
        content: '<path d="M368 128c8.8 0 16 7.2 16 16v64c0 97-79 176-176 176h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64c79.4 0 144-64.6 144-144v-64c0-8.8 7.2-16 16-16z" />',
        viewBox: '0 0 512 512'
    };

    var borderRadiusTopLeftIcon = {
        name: 'border-radius-top-left',
        content: '<path d="M144 384c-8.8 0-16-7.2-16-16v-64c0-97 79-176 176-176h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-79.4 0-144 64.6-144 144v64c0 8.8-7.2 16-16 16z" />',
        viewBox: '0 0 512 512'
    };

    var borderRadiusTopRightIcon = {
        name: 'border-radius-top-right',
        content: '<path d="M128 144c0-8.8 7.2-16 16-16h64c97 0 176 79 176 176v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-79.4-64.6-144-144-144h-64c-8.8 0-16-7.2-16-16z" />',
        viewBox: '0 0 512 512'
    };

    var borderRadiusIcon = {
        name: 'border-radius',
        content: '<path d="M64 32h96v32H64v96H32V32h32zm384 416h-96v32h128V352h-32v96zM352 32v32h96v96h32V32H352zM64 352H32v128h128v-32H64v-96z" />',
        viewBox: '0 0 512 512'
    };

    var borderStyleBottomIcon = {
        name: 'border-style-bottom',
        content: '<path d="M96 480v-64h320v64H96zm1-416h320V32H97v32zM64 416V96H32v320h32zm416 0V96h-32v320h32z" />',
        viewBox: '0 0 512 512'
    };

    var borderStyleLeftIcon = {
        name: 'border-style-left',
        content: '<path d="M32 96h64v320H32V96zm416 1v320h32V97h-32zM96 64h320V32H96v32zm0 416h320v-32H96v32z" />',
        viewBox: '0 0 512 512'
    };

    var borderStyleRightIcon = {
        name: 'border-style-right',
        content: '<path d="M480 416h-64V96h64v320zm-416-1V95H32v320h32zm352 33H96v32h320v-32zm0-416H96v32h320V32z" />',
        viewBox: '0 0 512 512'
    };

    var borderStyleTopIcon = {
        name: 'border-style-top',
        content: '<path d="M416 32v64H96V32h320zm-1 416H95v32h320v-32zm33-352v320h32V96h-32zM32 96v320h32V96H32z" />',
        viewBox: '0 0 512 512'
    };

    var borderStyleIcon = {
        name: 'border-style',
        content: '<path d="M32 96h32v320H32zm416 1h32v320h-32zM96 32h320v32H96zm0 416h320v32H96z" />',
        viewBox: '0 0 512 512'
    };

    var boxSizingIcon = {
        name: 'box-sizing',
        content: '<path d="M32 0H0v480h480V0H32zm416 448H32V32h416v416zm-96-320h-32V96h32v32zM96 192H64v-32h32v32zm0-64H64V96h32v32zm64 0h-32V96h32v32zm64 0h-32V96h32v32zm64 0h-32V96h32v32zM96 256H64v-32h32v32zm320-128h-32V96h32v32zm0 128h-32v-32h32v32zm0-64h-32v-32h32v32zM96 384H64v-32h32v32zm256 0h-32v-32h32v32zm-192 0h-32v-32h32v32zm64 0h-32v-32h32v32zm64 0h-32v-32h32v32zm128 0h-32v-32h32v32zM96 320H64v-32h32v32zm320 0h-32v-32h32v32z" />',
        viewBox: '0 0 512 512'
    };

    var chevronDoubleDownIcon = {
        name: 'chevron-double-down',
        content: '<path d="M382.1 224 256 350.1 129.9 224 96 257.9l160 160 160-160-33.9-33.9zm0-128L256 222.1 129.9 96 96 129.9l160 160 160-160L382.1 96z" />',
        viewBox: '0 0 512 512'
    };

    var chevronDoubleLeftIcon = {
        name: 'chevron-double-left',
        content: '<path d="M289 383 162.9 257 289 130.9 255 97 95 257l160 160 34-34zm128 0L290.9 257 417 130.9 383 97 223 257l160 160 34-34z" />',
        viewBox: '0 0 512 512'
    };

    var chevronDoubleRightIcon = {
        name: 'chevron-double-right',
        content: '<path d="M223 130.9 349.1 257 223 383l34 34 160-160L257 97l-34 33.9zm-128 0L221.1 257 95 383l34 34 160-160L129 97l-34 33.9z" />',
        viewBox: '0 0 512 512'
    };

    var chevronDoubleUpIcon = {
        name: 'chevron-double-up',
        content: '<path d="m129.9 289.9 126.1-126L382.1 290l33.9-34L256 96 96 256l33.9 33.9zm0 128 126.1-126L382.1 418l33.9-34-160-160L96 384l33.9 33.9z" />',
        viewBox: '0 0 512 512'
    };

    var dataOdsIcon = {
        name: 'data-ods',
        content: '<path d="M415.94 93.61v.33c-.53 33.88-86.26 61.29-191.93 61.29S32.6 127.82 32.07 93.94v-.33C32.06 59.59 118 32 224 32s191.94 27.59 191.94 61.61Zm-.06 46.39v.32c-.53 33.88-86.26 61.29-191.93 61.29S32.54 174.2 32 140.32V140l.12 86.81v.32c.53 33.88 86.26 61.29 191.93 61.29S415.46 261 416 227.13v-.32Zm.12 180-.07-52v.32c-.34 21.73-35.73 40.8-88.93 51.68Zm-256 6.11C85.73 317.69 32.43 295 32 268.32V268l.12 86.81v.32C32.55 381.8 85.8 404.47 160 412.9Zm73.5 123.55q-22.26 0-36.28-14.49t-14-37.76q0-24.57 14.24-39.74t37.72-15.18q22.18 0 35.88 14.53t13.69 38.3q0 24.42-14.2 39.38t-37.05 14.96Zm1-87.08q-12.28 0-19.51 9.22t-7.23 24.39q0 15.39 7.23 24.35a23.15 23.15 0 0 0 18.93 9q12.07 0 19.15-8.71t7.08-24.17q0-16.11-6.86-25.08t-18.78-9Zm68.9 85.28V344.23h36.71q55.22 0 55.21 50.51 0 24.21-15.06 38.66t-40.15 14.46Zm23.34-84.63v65.69h11.57q15.17 0 23.81-9.1t8.64-24.82q0-14.82-8.56-23.31t-24-8.49Zm82.49 80.65v-23.12a44.75 44.75 0 0 0 13.66 7.91 43.91 43.91 0 0 0 14.89 2.64 33.06 33.06 0 0 0 7.7-.8 18 18 0 0 0 5.49-2.2 9.67 9.67 0 0 0 3.29-3.33 8.29 8.29 0 0 0 1.08-4.15 9 9 0 0 0-1.73-5.42 18.77 18.77 0 0 0-4.74-4.41 49 49 0 0 0-7.12-3.9q-4.11-1.87-8.89-3.83-12.14-5.06-18.1-12.36a27 27 0 0 1-6-17.63 28.05 28.05 0 0 1 3.25-13.91 27.71 27.71 0 0 1 8.85-9.58 39.85 39.85 0 0 1 13-5.53 66.6 66.6 0 0 1 15.61-1.77 93.91 93.91 0 0 1 14.34 1 56.36 56.36 0 0 1 11.53 3v21.6a35.76 35.76 0 0 0-5.68-3.18 44.84 44.84 0 0 0-6.32-2.27 48.64 48.64 0 0 0-6.47-1.34 45.54 45.54 0 0 0-6.1-.43 31.65 31.65 0 0 0-7.23.76 18.18 18.18 0 0 0-5.49 2.13 10.47 10.47 0 0 0-3.47 3.29 7.77 7.77 0 0 0-1.23 4.3 8.27 8.27 0 0 0 1.37 4.66 15.88 15.88 0 0 0 3.91 3.9 40.85 40.85 0 0 0 6.14 3.61q3.61 1.77 8.16 3.65a91.56 91.56 0 0 1 11.17 5.53 39.85 39.85 0 0 1 8.49 6.61 25.82 25.82 0 0 1 5.42 8.42 29.82 29.82 0 0 1 1.88 11q0 8.67-3.29 14.56a26.68 26.68 0 0 1-8.92 9.54 38.57 38.57 0 0 1-13.12 5.24 75.82 75.82 0 0 1-15.79 1.59 88.11 88.11 0 0 1-16.22-1.44 49.18 49.18 0 0 1-13.31-4.34Z" />',
        viewBox: '0 0 512 512'
    };

    var nonRecurrenceIcon = {
        name: 'non-recurrence',
        content: '<path d="m321 434.2 47.5 47.5C335.5 501 297 512 256 512 132.3 512 32 411.7 32 288c0-41 11-79.5 30.3-112.6l47.5 47.5c-8.9 19.9-13.8 41.9-13.8 65 0 88.2 71.8 160 160 160 23.1.1 45.2-4.8 65-13.7Zm118.3-17.5c12.9-18.3 23.1-38.7 30.1-60.4 6.9-21.5 10.6-44.5 10.6-68.3 0-40.8-10.9-79.1-30-112l-55.5 32c13.6 23.5 21.5 50.9 21.5 80 0 4.8-.2 9.5-.6 14.2-2.2 24.8-10.1 47.9-22.3 68.2L173.6 150.9c20.3-12.2 43.4-20.1 68.2-22.3 4.7-.4 9.4-.6 14.2-.6v64l160-96L256 0v64c-23.8 0-46.7 3.7-68.3 10.6-21.8 7-42.1 17.2-60.4 30.1L22.6 0 0 22.6 489.4 512l22.6-22.6-72.7-72.7Z" />',
        viewBox: '0 0 512 512'
    };

    var displayBlockIcon = {
        name: 'display-block',
        content: '<path d="M32 32h448v32H32zm0 416h448v32H32zm0-64h448V128H32v256zm64-192h320v128H96V192z" />',
        viewBox: '0 0 512 512'
    };

    var displayFlexIcon = {
        name: 'display-flex',
        content: '<path d="M32 32v448h448V32H32zm416 416H64V64h384v384zM128 128h96v256h-96zm160 0h96v256h-96z" />',
        viewBox: '0 0 512 512'
    };

    var displayInlineFlexIcon = {
        name: 'display-inline-flex',
        content: '<path d="M96 416h320V96H96v320zm32-288h256v256H128V128zm32 32h64v192h-64zm128 0h64v192h-64zM32 32h32v448H32zm416 0h32v448h-32z" />',
        viewBox: '0 0 512 512'
    };

    var dropletSliderIcon = {
        name: 'droplet-slider',
        content: '<path d="M192 384v32c-53 0-96-43-96-96h32c0 35.3 28.7 64 64 64zm160-72c0 92.8-71.6 168-160 168S32 404.8 32 312C32 181.3 192 32 192 32s160 149.3 160 280zm-32 0c0-46.3-25.3-104.7-73-169-20-27-40.3-49.8-55-65.4-14.7 15.6-34.9 38.5-55 65.4-47.8 64.3-73 122.8-73 169 0 75 57.4 136 128 136s128-61 128-136zm128-88h-32v256h32V224zm0-192h-32v64h32V32zm-64 96v64h96v-64h-96z" />',
        viewBox: '0 0 512 512'
    };

    var fileReportIcon = {
        name: 'file-report',
        content: '<path d="M416 32H96a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32Zm0 416H96V64h320Zm-96-96-160 .14V384l160-.14Zm32-64-192 .17V320l192-.17ZM223.15 127.9a64 64 0 1 0 64 64h-64Zm32-32v64h64a64 64 0 0 0-63.99-64Z" />',
        viewBox: '0 0 512 512'
    };

    var gapColumnIcon = {
        name: 'gap-column',
        content: '<path d="M32 32v448h448V32H32zm416 416H64V64h384v384zM96 96h96v320H96zm224 0h96v320h-96z" />',
        viewBox: '0 0 512 512'
    };

    var gapRowIcon = {
        name: 'gap-row',
        content: '<path d="M480 32H32v448h448V32zM64 448V64h384v384H64zM96 96h320v96H96zm0 224h320v96H96z" />',
        viewBox: '0 0 512 512'
    };

    var handleResizeAltIcon = {
        name: 'handle-resize-alt',
        content: '<path d="M480 224v256H224v-64h192V224h64z" />',
        viewBox: '0 0 512 512'
    };

    var handleResizeIcon = {
        name: 'handle-resize',
        content: '<path d="m379.5 475.5-22.6-22.6 96-96 22.6 22.6-96 96zm79.7-208.2-22.6-22.6-191.9 191.9 22.6 22.6 191.9-191.9z" />',
        viewBox: '0 0 512 512'
    };

    var imagesIcon = {
        name: 'images',
        content: '<path d="M256 288c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm96-64v192c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32zm-31.8 0c-.1-.1-.1-.1 0 0l-256.1-.1-.1.1v149.9l74.6-70 85.3 80 53.3-50 42.7 40 .3-149.9zm63.8-96H128c-17.7 0-32 14.3-32 32h288v224c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32zm64-64H192c-17.7 0-32 14.3-32 32h288v224c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z" />',
        viewBox: '0 0 512 512'
    };

    var letterSpaceIcon = {
        name: 'letter-space',
        content: '<path d="m310 336 26 80h48L280 96h-48L128 416h48l26-80h108zm-54-166.2L294.4 288h-76.8L256 169.8zM448 32h32v448h-32zM32 32h32v448H32z" />',
        viewBox: '0 0 512 512'
    };

    var lineHeightIcon = {
        name: 'line-height',
        content: '<path d="m310 336 26 80h48L280 96h-48L128 416h48l26-80h108zm-54-166.2L294.4 288h-76.8L256 169.8zM32 32h448v32H32zm0 416h448v32H32z" />',
        viewBox: '0 0 512 512'
    };

    var listLatinBigIcon = {
        name: 'list-latin-big',
        content: '<path d="M115.1 136H72.6l-7.4 24H32.1L79.3 31.5h29.1L155.9 160h-33.3l-7.5-24zm-35-23.9h27.6L93.8 67.5l-13.7 44.6zM42.1 320V191.5h46.2c16.5 0 29.1 3 37.7 9.1 8.6 6.1 12.9 14.9 12.9 26.4 0 6.6-1.5 12.3-4.6 17-3.1 4.7-7.6 8.2-13.5 10.4 6.7 1.8 11.9 5.1 15.4 9.9 3.6 4.8 5.4 10.7 5.4 17.7 0 12.6-4 22.1-12 28.4-8 6.3-19.8 9.5-35.4 9.7H42.1zm31-74.9h16.2c6.8-.1 11.6-1.3 14.5-3.7 2.9-2.4 4.3-6 4.3-10.7 0-5.4-1.6-9.3-4.7-11.7-3.1-2.4-8.2-3.6-15.1-3.6H73.1v29.7zm0 20.3v30.8h20.3c5.6 0 9.9-1.3 12.9-3.8 3-2.6 4.5-6.2 4.5-10.8 0-10.7-5.3-16.1-16-16.2H73.1zm73 171.1c-.4 8.9-2.8 16.8-7.2 23.7-4.4 6.9-10.6 12.2-18.6 15.9-8 3.8-17.1 5.6-27.3 5.6-16.9 0-30.2-5.5-39.9-16.5s-14.6-26.5-14.6-46.6v-6.4c0-12.6 2.2-23.6 6.6-33.1 4.4-9.4 10.7-16.7 18.9-21.9 8.2-5.1 17.8-7.7 28.6-7.7 15.6 0 28.1 4.1 37.6 12.3 9.5 8.2 14.9 19.5 16.2 33.9h-30.9c-.2-7.8-2.2-13.4-5.9-16.9-3.7-3.4-9.4-5.1-16.9-5.1-7.7 0-13.4 2.9-16.9 8.6-3.6 5.8-5.5 15-5.6 27.6v9.1c0 13.7 1.7 23.5 5.2 29.4 3.4 5.9 9.4 8.8 17.8 8.8 7.1 0 12.6-1.7 16.3-5 3.8-3.4 5.8-8.7 6-16h30.6zM192 96h288v32H192V96zm0 160h288v32H192v-32zm0 160h288v32H192v-32z" />',
        viewBox: '0 0 512 512'
    };

    var listLatinSmallIcon = {
        name: 'list-latin-small',
        content: '<path d="M94.5 152c-1.1-1.9-2-4.8-2.8-8.6-5.5 6.9-13.1 10.3-22.9 10.3-9 0-16.7-2.7-22.9-8.2-6.3-5.4-9.4-12.3-9.4-20.5 0-10.4 3.8-18.2 11.5-23.5 7.6-5.3 18.8-7.9 33.4-7.9h9.2v-5.1c0-8.8-3.8-13.2-11.4-13.2-7.1 0-10.6 3.5-10.6 10.5H38.7c0-9.2 3.9-16.7 11.8-22.5s17.9-8.6 30.1-8.6 21.8 3 28.9 8.9c7.1 5.9 10.7 14.1 10.9 24.4v42.3c.1 8.8 1.5 15.5 4.1 20.1v1.5l-30 .1zm-18.6-19.4c3.7 0 6.8-.8 9.2-2.4 2.4-1.6 4.2-3.4 5.3-5.4v-15.3h-8.6c-10.4 0-15.5 4.6-15.5 13.9 0 2.7.9 4.9 2.7 6.6 1.8 1.7 4.1 2.6 6.9 2.6zM129.4 280c0 15.7-3.2 27.7-9.7 36.1s-15.6 12.6-27.4 12.6c-9.7 0-17.5-3.9-23.5-11.6l-1.2 9.8H41V191.4h29.7v47.7c5.5-6.3 12.7-9.4 21.4-9.4 11.9 0 21.1 4.3 27.5 12.8 6.5 8.5 9.7 20.5 9.7 36l.1 1.5zm-29.8-1.9c0-9.2-1.2-15.7-3.7-19.6-2.4-3.9-6.2-5.9-11.3-5.9-6.7 0-11.4 2.6-13.9 7.7v37.9c2.5 5.1 7.2 7.6 14.1 7.6 7 0 11.4-3.4 13.3-10.2 1-3.4 1.5-9.2 1.5-17.5zM81.1 452.8c4.2 0 7.4-1.1 9.7-3.4s3.4-5.4 3.4-9.5h27.9c0 10.5-3.8 19.1-11.3 25.8-7.5 6.7-17.2 10.1-29 10.1-13.9 0-24.8-4.4-32.8-13.1s-12-20.8-12-36.2v-1.2c0-9.6 1.8-18.2 5.3-25.6 3.6-7.4 8.7-13.1 15.4-17 6.7-4 14.7-6 23.8-6 12.4 0 22.3 3.4 29.6 10.3 7.3 6.9 10.9 16.2 10.9 28H94.2c0-4.9-1.2-8.7-3.6-11.4-2.4-2.6-5.6-4-9.7-4-7.7 0-12.2 4.9-13.5 14.7-.4 3.1-.6 7.4-.6 12.9 0 9.6 1.1 16.2 3.4 19.9s5.9 5.7 10.9 5.7zM192 96h288v32H192V96zm0 160h288v32H192v-32zm0 160h288v32H192v-32z" />',
        viewBox: '0 0 512 512'
    };

    var listRomanBigIcon = {
        name: 'list-roman-big',
        content: '<path d="M32 32h32v128H32V32zm0 288h32V192H32v128zm64 0h32V192H96v128zM32 480h32V352H32v128zm64 0h32V352H96v128zm64 0h32V352h-32v128zM128 96h352v32H128V96zm64 160h288v32H192v-32zm64 160h224v32H256v-32zM96 152c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm64 160c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm64 160c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z" />',
        viewBox: '0 0 512 512'
    };

    var listRomanSmallIcon = {
        name: 'list-roman-small',
        content: '<path d="M32 64h16v96H32V64zm0 256h16v-96H32v96zm32 0h16v-96H64v96zM32 480h16v-96H32v96zm32 0h16v-96H64v96zm32 0h16v-96H96v96zM48 40c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm32 112c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm32 160c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM48 200c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm32 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM48 360c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm32 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm32 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm32 112c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM128 96h352v32H128V96zm32 160h320v32H160v-32zm32 160h288v32H192v-32z" />',
        viewBox: '0 0 512 512'
    };

    var listUnorderedOutlineIcon = {
        name: 'list-unordered-outline',
        content: '<path d="M192 80h288v32H192V80zm0 160h288v32H192v-32zm0 160h288v32H192v-32zM80 80c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16m0-32c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 192c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16m0-32c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 192c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16m0-32c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" />',
        viewBox: '0 0 512 512'
    };

    var listUnorderedSquareIcon = {
        name: 'list-unordered-square',
        content: '<path d="M128 160H32V64h96v96zm0 64H32v96h96v-96zm0 160H32v96h96v-96zm64-256h288V96H192v32zm0 160h288v-32H192v32zm0 160h288v-32H192v32z" />',
        viewBox: '0 0 512 512'
    };

    var maxHeightIcon = {
        name: 'max-height',
        content: '<path d="M384 0H96v32h288zm0 479H240.6L320 352h-64V160h64L240 32l-80 128h64v192h-64l79.4 127H96v32h288z" />',
        viewBox: '0 0 512 512'
    };

    var maxWidthIcon = {
        name: 'max-width',
        content: '<path d="M0 96v288h32V96zm479 0v143.4L352 160v64H160v-64L32 240l128 80v-64h192v64l127-79.4V384h32V96z" />',
        viewBox: '0 0 512 512'
    };

    var minHeightIcon = {
        name: 'min-height',
        content: '<path d="M240 192H96v32h288v-32zm144 96H96v32h288zM160 448h160l-80-128zm64 0h32v64h-32zm32-384V0h-32v64h-64l80 128 80-128z" />',
        viewBox: '0 0 512 512'
    };

    var minWidthIcon = {
        name: 'min-width',
        content: '<path d="M192 240v144h32V96h-32zm96-144v288h32V96zm160 224V160l-128 80zm0-96h64v32h-64zm-384 0H0v32h64v64l128-80-128-80z" />',
        viewBox: '0 0 512 512'
    };

    var outlineOffsetIcon = {
        name: 'outline-offset',
        content: '<path d="M448 32H32v448h448V32h-32zm0 416H64V64h384v384zM160 320v32h192V160H160v160zm32-128h128v128H192V192z" />',
        viewBox: '0 0 512 512'
    };

    var outlineWidthIcon = {
        name: 'outline-width',
        content: '<path d="M416 32H32v448h448V32h-64zm0 384H96V96h320v320zm-256-32h224V128H128v256h32zm0-224h192v192H160V160z" />',
        viewBox: '0 0 512 512'
    };

    var paddingBottomIcon = {
        name: 'padding-bottom',
        content: '<path d="M288.2 352H256v64h64v64H160v-64h64v-64h-32v-64h96.2v64zM160 32h64v96h-32.2v32H288v-32h-32V32h64V0H160v32zm192 192v-32.2h-32V288h32v-32h96v64h32V160h-32v64h-96zm-224 32v32.2h32V192h-32v32H32v-64H0v160h32v-64h96z" />',
        viewBox: '0 0 512 512'
    };

    var paddingLeftIcon = {
        name: 'padding-left',
        content: '<path d="M128 288.2V256H64v64H0V160h64v64h64v-32h64v96.2h-64zM448 160v64h-96v-32.2h-32V288h32v-32h96v64h32V160h-32zM256 352h32.2v-32H192v32h32v96h-64v32h160v-32h-64v-96zm-32-224h-32.2v32H288v-32h-32V32h64V0H160v32h64v96z" />',
        viewBox: '0 0 512 512'
    };

    var paddingRightIcon = {
        name: 'padding-right',
        content: '<path d="M352 191.8V224h64v-64h64v160h-64v-64h-64v32h-64v-96.2h64zM32 320v-64h96v32.2h32V192h-32v32H32v-64H0v160h32zm192-192h-32.2v32H288v-32h-32V32h64V0H160v32h64v96zm32 224h32.2v-32H192v32h32v96h-64v32h160v-32h-64v-96z" />',
        viewBox: '0 0 512 512'
    };

    var paddingTopIcon = {
        name: 'padding-top',
        content: '<path d="M191.8 128H224V64h-64V0h160v64h-64v64h32v64h-96.2v-64zM320 448h-64v-96h32.2v-32H192v32h32v96h-64v32h160v-32zM128 256v32.2h32V192h-32v32H32v-64H0v160h32v-64h96zm224-32v-32.2h-32V288h32v-32h96v64h32V160h-32v64h-96z" />',
        viewBox: '0 0 512 512'
    };

    var paddingIcon = {
        name: 'padding',
        content: '<path d="M128 288.2V256H32v64H0V160h32v64h96v-32h32v96.2h-32zM448 160v64h-96v-32.2h-32V288h32v-32h96v64h32V160h-32zM256 352h32.2v-32H192v32h32v96h-64v32h160v-32h-64v-96zm-32-224h-32.2v32H288v-32h-32V32h64V0H160v32h64v96z" />',
        viewBox: '0 0 512 512'
    };

    var positionBottomIcon = {
        name: 'position-bottom',
        content: '<path d="M32 64v416h448V32H32v32zm416 0v384H64V64h384zM96 320h320v96H96z" />',
        viewBox: '0 0 512 512'
    };

    var positionLeftIcon = {
        name: 'position-left',
        content: '<path d="M448 32H32v448h448V32h-32zm0 416H64V64h384v384zM96 96h96v320H96z" />',
        viewBox: '0 0 512 512'
    };

    var positionRightIcon = {
        name: 'position-right',
        content: '<path d="M64 480h416V32H32v448h32zm0-416h384v384H64V64zm256 32h96v320h-96z" />',
        viewBox: '0 0 512 512'
    };

    var positionTopIcon = {
        name: 'position-top',
        content: '<path d="M480 448V32H32v448h448v-32zm-416 0V64h384v384H64zM96 96h320v96H96z" />',
        viewBox: '0 0 512 512'
    };

    var regularExpressionIcon = {
        name: 'regular-expression',
        content: '<path d="M442.6 299.7 352 247.4V352h-64V247.4l-90.6 52.3-32-55.4L256 192l-90.6-52.3 32-55.4 90.6 52.3V32h64v104.6l90.6-52.3 32 55.4L384 192l90.6 52.3-32 55.4zM80 384c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" />',
        viewBox: '0 0 512 512'
    };

    var replaceAllIcon = {
        name: 'replace-all',
        content: '<path d="M288 288h192v192H288V288zm64-64H224V32h128v192zM320 64h-64v128h64V64zM160 352H96V160h96V96H96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h64v64l96-96-96-96v64zM448 32v192h32V32h-32zm-32 0h-32v192h32V32z" />',
        viewBox: '0 0 512 512'
    };

    var replaceSingleIcon = {
        name: 'replace-single',
        content: '<path d="M288 288h192v192H288V288zM32 160v192c0 35.3 28.7 64 64 64h64v64l96-96-96-96v64H96V160h160V96H96c-35.3 0-64 28.7-64 64zM480 32v192H288V32h192zm-32 32H320v128h128V64z" />',
        viewBox: '0 0 512 512'
    };

    var reportElementIcon = {
        name: 'report-element',
        content: '<path d="M480 320V192H160v48H96v-80h256V32H32v128h32v320h32v-48h64v48h256V352H160v48H96V272h64v48ZM64 64h256v64H64Zm128 320h192v64H192v-64Z" />',
        viewBox: '0 0 512 512'
    };

    var rightDoubleQuotesIcon = {
        name: 'right-double-quotes',
        content: '<path d="M136 100.2c-57.4 0-104 46.6-104 104s46.6 104 104 104c20.1 0 38.9-5.7 54.8-15.6-14.2 30.5-37.4 55.2-69.2 73.7-44 25.6-89.1 29.6-89.6 29.6l1.3 15.9 1.3 15.9c2.1-.2 51.8-4.4 102-33.2 47.1-27 103.3-81.3 103.3-186.1.1-1.4.1-2.8.1-4.3 0-57.3-46.6-103.9-104-103.9zm344 104c0-57.4-46.6-104-104-104s-104 46.6-104 104 46.6 104 104 104c20.1 0 38.9-5.7 54.8-15.6-14.2 30.5-37.4 55.2-69.2 73.7-44 25.6-89.1 29.6-89.6 29.6l2.6 31.9c2.1-.2 51.8-4.4 102-33.2 47.1-27 103.3-81.3 103.3-186.1.1-1.4.1-2.8.1-4.3z" />',
        viewBox: '0 0 512 512'
    };

    var wholeWordIcon = {
        name: 'whole-word',
        content: '<path d="M379 243.6c-2.7-9.3-6.5-17.2-11.7-23.8-5-6.4-11.4-11.4-18.6-15-7.4-3.5-15.9-5.2-25.3-5.2-16.3 0-30 6.9-41.4 20.5V160h-26v192h26v-14.8c10.8 9.8 24.1 14.8 39.7 14.8 8.7 0 16.9-1.8 24.3-5.4 7.5-3.8 14-8.9 19.5-15.5 5.5-6.8 9.7-14.9 12.9-24.4 3-9.6 4.6-20.3 4.6-32.1 0-11.5-1.3-21.8-4-31zm-31.8 73.7c-6.6 9.5-15.6 14.2-26.8 14.2-14.5 0-27.3-5.9-38.4-17.8v-69.1c11.9-16.6 25-24.9 39.4-24.9 11.4 0 20 4.6 26.2 13.9 6.1 9.2 9.3 22.9 9.3 41 0 18.9-3.3 33.3-9.7 42.7zm-139-107.8c-10.6-7.5-25.2-11.1-44.1-11.1-40.5 0-61.7 15-63.6 44.6h26.1c.7-16.2 12.8-24.4 36-24.4 11 0 19.2 1.6 24.4 4.8 2.6 1.6 4.6 3.4 6.2 5.1 1.5 1.8 2.5 4 3.2 6.6s1.1 5.6 1.4 9.4c.1 3.6.1 8.3.1 13.5h-12.8c-59.3.1-89.1 17.3-89.1 51.5 0 6.4 1.3 12 3.8 17.2 2.4 5.3 5.9 9.6 10.4 13.4 4.4 3.8 9.8 6.7 16 8.7 6.1 2.2 12.7 3.2 20 3.2 20.9 0 51.8-18.6 51.8-18.6V351h26v-97.5c0-22-5.4-36.6-15.8-44zm-10.2 100c-2.3 3.4-5.1 6.3-8.4 9-3.2 2.6-6.8 4.9-10.7 6.8-3.9 1.8-8 3.3-12.2 4.3s-8.6 1.4-12.8 1.4c-9.6 0-17-2-22.5-5.9-5.5-4.1-8.3-9.8-8.3-17.2 0-20.6 18.9-30.9 56.9-30.9h18v32.5zM448 96h-32v320h32V96zm0-32H64V32h384v32zm0 415.6H64v-32h384v32z" />',
        viewBox: '0 0 512 512'
    };

    var dataSdsIcon = {
        name: 'data-sds',
        content: '<path d="M224 152.54c105.6 0 191.4-27.4 191.9-61.3v-.3c0-34-85.9-61.6-191.9-61.6S32.1 56.94 32.1 90.94v.3c.5 33.9 86.3 61.3 191.9 61.3Zm-191.9 71.9c.5 33.9 86.3 61.3 191.9 61.3s191.4-27.4 192-61.3v-.3l-.1-86.5c-.5 33.9-86.3 61.3-191.9 61.3s-191.49-27.4-192-61.29l.1 86.49v.3Zm-.1 41.21.1 86.49v.3c.4 26.7 53.7 49.3 127.9 57.8v-86.8c-74.29-8.4-127.59-31.1-128-57.79Zm320 37.69 105 70-105 70v-52.5H189v-35h163v-52.5Z" />',
        viewBox: '0 0 512 512'
    };

    var downloadLightIcon = {
        name: 'download-light',
        content: '<path d="M368 256 256 384 144 256h96V32h32v224h96Zm112 192H32v32h448v-32Z" />',
        viewBox: '0 0 512 512'
    };

    var eyeSlashIcon = {
        name: 'eye-slash',
        content: '<path d="m245.43 358.68 24.92 24.92c-4.75.26-9.54.4-14.34.4-94.7 0-179.7-51.5-224-128 13.19-22.83 30.01-43.43 49.65-61.1l23.01 23.01C91.46 229.29 79.51 242.07 69.8 256c26.33 33.77 54.15 53.86 72.6 65.1 39.18 23.88 77.54 33.37 103.03 37.58m131.42-4.44L480 457.39 457.39 480 345.51 368.12s-.07.03-.1.04L232.2 254.94l.11-.03-39.21-39.21-.03.11-26.8-26.8s.04-.05.06-.08l-7.01-7.01s-.06.03-.09.04l-24.17-24.17s.06-.03.09-.05L32 54.61 54.61 32l111.87 111.87A260.193 260.193 0 0 1 256 128c94.8 0 179.8 51.5 224 128-24 41.53-60.05 75.69-103.15 98.24Zm-7.25-33.14c27.8-16.4 54.1-38.7 72.6-65.1-18.4-26.4-44.8-48.7-72.6-65.1-12.2-7.2-25.1-13.2-38.4-17.9 22.6 20.5 36.8 50.1 36.8 83 0 25.15-8.31 48.37-22.32 67.08l7.01 7.01c5.76-2.76 11.41-5.74 16.91-8.99Z" />',
        viewBox: '0 0 512 512'
    };

    var displayInlineBlockIcon = {
        name: 'display-inline-block',
        content: '<path d="M448 32h32v448h-32zM32 32h32v448H32zm64 352h320V128H96v256zm64-192h192v128H160V192z" />',
        viewBox: '0 0 512 512'
    };

    var undoIcon = {
        name: 'undo',
        content: '<path d="M479.9 416c-57.7-56.6-136.7-96-223.9-96v128L32 256 256 64v128c122.2 0 221.5 102.4 223.9 224z" />',
        viewBox: '0 0 512 512'
    };

    var redoIcon = {
        name: 'redo',
        content: '<path d="M256 192V64l224 192-224 192V320c-87.2 0-166.2 39.4-223.9 96C34.5 294.4 133.9 192 256 192z" />',
        viewBox: '0 0 512 512'
    };

    var arrowRotateCcwIcon = {
        name: 'arrow-rotate-ccw',
        content: '<path d="m62 176 55.5 32C103.8 231.6 96 258.9 96 288c0 88.2 71.8 160 160 160s160-71.8 160-160-71.8-160-160-160v64L96 96 256 0v64c123.7 0 224 100.3 224 224S379.7 512 256 512 32 411.7 32 288c0-40.8 10.9-79.1 30-112z" />',
        viewBox: '0 0 512 512'
    };

    var arrowRotateCwIcon = {
        name: 'arrow-rotate-cw',
        content: '<path d="M480 288c0 123.7-100.3 224-224 224S32 411.7 32 288 132.3 64 256 64V0l160 96-160 96v-64c-88.2 0-160 71.8-160 160s71.8 160 160 160 160-71.8 160-160c0-29.1-7.8-56.4-21.5-80l55.5-32c19.1 32.9 30 71.2 30 112z" />',
        viewBox: '0 0 512 512'
    };

    var arrowsNoRepeatIcon = {
        name: 'arrows-no-repeat',
        content: '<path d="m321 434.2 47.5 47.5C335.5 501 297 512 256 512 132.3 512 32 411.7 32 288c0-41 11-79.5 30.3-112.6l47.5 47.5c-8.9 19.9-13.8 41.9-13.8 65 0 88.2 71.8 160 160 160 23.1.1 45.2-4.8 65-13.7zm118.3-17.5c12.9-18.3 23.1-38.7 30.1-60.4 6.9-21.5 10.6-44.5 10.6-68.3 0-40.8-10.9-79.1-30-112l-55.5 32c13.6 23.5 21.5 50.9 21.5 80 0 4.8-.2 9.5-.6 14.2-2.2 24.8-10.1 47.9-22.3 68.2L173.6 150.9c20.3-12.2 43.4-20.1 68.2-22.3 4.7-.4 9.4-.6 14.2-.6v64l160-96L256 0v64c-23.8 0-46.7 3.7-68.3 10.6-21.8 7-42.1 17.2-60.4 30.1L22.6 0 0 22.6 489.4 512l22.6-22.6-72.7-72.7z" />',
        viewBox: '0 0 512 512'
    };

    var arrowRotateCcwSmallIcon = {
        name: 'arrow-rotate-ccw-small',
        content: '<path d="m101.4 238.6 46.4 12.4c-2.5 9.3-3.8 19-3.8 29 0 61.8 50.2 112 112 112s112-50.2 112-112-50.2-112-112-112v56l-128-80 128-80v56c88.4 0 160 71.6 160 160s-71.6 160-160 160S96 368.4 96 280c0-14.3 1.9-28.2 5.4-41.4z" />',
        viewBox: '0 0 512 512'
    };

    var arrowRotateCwSmallIcon = {
        name: 'arrow-rotate-cw-small',
        content: '<path d="M416 280c0 88.4-71.6 160-160 160S96 368.4 96 280s71.6-160 160-160V64l128 80-128 80v-56c-61.8 0-112 50.2-112 112s50.2 112 112 112 112-50.2 112-112c0-10-1.3-19.7-3.8-29l46.4-12.4c3.5 13.2 5.4 27.1 5.4 41.4z" />',
        viewBox: '0 0 512 512'
    };

    var clockIcon = {
        name: 'clock',
        content: '<path d="M256 128h-32v160h160v-32H256V128zm0-96C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm0 416c-105.9 0-192-86.1-192-192S150.1 64 256 64s192 86.1 192 192-86.1 192-192 192z" />',
        viewBox: '0 0 512 512'
    };

    var calendarIcon = {
        name: 'calendar',
        content: '<path d="M416 416H288V288h128v128zm64-352v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h64V0h64v32h128V0h64v32h64c17.6 0 32 14.4 32 32zm-32 128H64v255.9l.1.1 383.9-.1V192zm0-127.9c-.1-.1-.1-.1 0 0l-64-.1v32h-64V64H192v32h-64V64H64.1l-.1.1V160h384V64.1z" />',
        viewBox: '0 0 512 512'
    };

    var saveIcon = {
        name: 'save',
        content: '<path d="M384 32H64c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32V128l-96-96zm-64 32v128h-64V64h64zm128 384-383.9.1-.1-.1V64.1l.1-.1H96v160h256V64h18.7l77.3 77.3V448z" />',
        viewBox: '0 0 512 512'
    };

    var printIcon = {
        name: 'print',
        content: '<path d="M448 160h-32V96l-64-64H128c-17.7 0-32 14.3-32 32v96H64c-17.6 0-32 14.4-32 32v160c0 17.6 14.4 32 32 32h32v64c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32v-64h32c17.6 0 32-14.4 32-32V192c0-17.6-14.4-32-32-32zM128 64h192v64h64v64H128V64zm320 256h-64v127.9l-.1.1H128.1l-.1-.1V320H64v-32h384v32zm-288 0h192v32H160v-32zm0 64h160v32H160v-32z" />',
        viewBox: '0 0 512 512'
    };

    var pencilIcon = {
        name: 'pencil',
        content: '<path d="m334.9 86.6 45.3-45.3c12.4-12.4 32.8-12.4 45.3 0l45.3 45.3c12.4 12.4 12.4 32.8 0 45.3l-45.3 45.3-90.6-90.6zm-22.6 22.6L32 389.5V480h90.5l280.3-280.3-90.5-90.5zM99.9 412.1l-22.6-22.6 235-235 22.6 22.6-235 235z" />',
        viewBox: '0 0 512 512'
    };

    var trashIcon = {
        name: 'trash',
        content: '<path d="M416 96h-96V64c0-17.6-14.4-32-32-32h-96c-17.6 0-32 14.4-32 32v32H64v64h32v288c0 17.6 14.4 32 32 32h224c17.6 0 32-14.4 32-32V160h32V96zM192 64h95.9l.1.1V96h-96c.1-.1.1-32.1 0-32zm160 384H128.1l-.1-.1V160h32v256h32V160h32v256h32V160h32v256h32V160h32v288z" />',
        viewBox: '0 0 512 512'
    };

    var paperclipIcon = {
        name: 'paperclip',
        content: '<path d="M384 128v256h-32V128c0-52.9-43.1-96-96-96s-96 43.1-96 96v288c0 35.3 28.7 64 64 64s64-28.7 64-64V128c0-17.6-14.4-32-32-32s-32 14.4-32 32v256h-32V128c0-35.3 28.7-64 64-64s64 28.7 64 64v288c0 52.9-43.1 96-96 96s-96-43.1-96-96V128C128 57.4 185.4 0 256 0s128 57.4 128 128z" />',
        viewBox: '0 0 512 512'
    };

    var paperclipAltIcon = {
        name: 'paperclip-alt',
        content: '<path d="M407 452.1c-18.6 18.6-43 27.9-67.5 27.9s-48.9-9.3-67.6-27.9L69.3 249.4c-49.7-49.7-49.7-130.5 0-180.2s130.5-49.7 180.2 0l180.2 180.2-22.7 22.5L226.9 91.8c-37.2-37.2-97.9-37.2-135.1 0-37.2 37.2-37.2 97.9 0 135.1l202.7 202.7c24.8 24.8 65.2 24.8 90.1 0 24.8-24.8 24.8-65.2 0-90.1L181.9 136.8c-12.4-12.4-32.7-12.4-45 0s-12.4 32.7 0 45L317 362l-22.5 22.5-180.2-180.1c-24.8-24.8-24.8-65.2 0-90.1s65.2-24.8 90.1 0L407 317c37.3 37.2 37.3 97.9 0 135.1z" />',
        viewBox: '0 0 512 512'
    };

    var linkIcon = {
        name: 'link',
        content: '<path d="M384 384c-47.4 0-88.7-25.8-110.8-64H384c35.4 0 64-28.6 64-64s-28.7-64-64-64H273.2c22.1-38.2 63.5-64 110.8-64 70.7 0 128 57.3 128 128s-57.3 128-128 128zM96 256c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32zm-32 0c0 35.4 28.6 64 64 64h110.8c-22.1 38.2-63.5 64-110.8 64C57.3 384 0 326.7 0 256s57.3-128 128-128c47.4 0 88.7 25.8 110.8 64H128c-35.4 0-64 28.6-64 64z" />',
        viewBox: '0 0 512 512'
    };

    var unlinkIcon = {
        name: 'unlink',
        content: '<path d="M384 384c-47.4 0-88.7-25.8-110.8-64H384c35.4 0 64-28.6 64-64s-28.7-64-64-64H273.2c22.1-38.2 63.5-64 110.8-64 70.7 0 128 57.3 128 128s-57.3 128-128 128zM64 256c0 35.4 28.6 64 64 64h110.8c-22.1 38.2-63.5 64-110.8 64C57.3 384 0 326.7 0 256s57.3-128 128-128c47.4 0 88.7 25.8 110.8 64H128c-35.3 0-64 28.6-64 64zM272 97.6V0h-32v97.6c5.2-1 10.5-1.6 16-1.6s10.8.6 16 1.6zm-60.1 11.7-69-69-22.6 22.6 69 69c5.9-9 13.6-16.7 22.6-22.6zm110.8 22.6 69-69-22.6-22.6-69 69c9 5.9 16.7 13.6 22.6 22.6zM256 416c-5.5 0-10.8-.6-16-1.6V512h32v-97.6c-5.2 1-10.5 1.6-16 1.6zm-66.7-35.9-69 69 22.6 22.6 69-69c-9-5.9-16.7-13.6-22.6-22.6zm110.8 22.6 69 69 22.6-22.6-69-69c-5.9 9-13.6 16.7-22.6 22.6z" />',
        viewBox: '0 0 512 512'
    };

    var linkVerticalIcon = {
        name: 'link-vertical',
        content: '<path d="M128 384c0-47.4 25.8-88.7 64-110.8V384c0 35.4 28.6 64 64 64s64-28.7 64-64V273.2c38.2 22.1 64 63.5 64 110.8 0 70.7-57.3 128-128 128s-128-57.3-128-128zM256 96c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zm0-32c-35.4 0-64 28.6-64 64v110.8c-38.2-22.1-64-63.5-64-110.8C128 57.3 185.3 0 256 0s128 57.3 128 128c0 47.4-25.8 88.7-64 110.8V128c0-35.4-28.6-64-64-64z" />',
        viewBox: '0 0 512 512'
    };

    var unlinkVerticalIcon = {
        name: 'unlink-vertical',
        content: '<path d="M414.4 272H512v-32h-97.6c1 5.2 1.6 10.5 1.6 16s-.5 10.8-1.6 16zm-11.6-60.1 69-69-22.6-22.6-69 69c8.9 5.9 16.6 13.6 22.6 22.6zm-22.7 110.8 69 69 22.6-22.6-69-69c-5.9 9-13.6 16.7-22.6 22.6zM96 256c0-5.5.6-10.8 1.6-16H0v32h97.6c-1-5.2-1.6-10.5-1.6-16zm35.9-66.8-69-69-22.6 22.6 69 69c5.9-8.9 13.6-16.6 22.6-22.6zm-22.6 110.9-69 69 22.6 22.6 69-69c-9-5.9-16.7-13.6-22.6-22.6zM128 384c0-47.4 25.8-88.7 64-110.8V384c0 35.4 28.6 64 64 64s64-28.7 64-64V273.2c38.2 22.1 64 63.5 64 110.8 0 70.7-57.3 128-128 128s-128-57.3-128-128zM256 64c-35.4 0-64 28.6-64 64v110.8c-38.2-22.1-64-63.5-64-110.8C128 57.3 185.3 0 256 0s128 57.3 128 128c0 47.4-25.8 88.7-64 110.8V128c0-35.4-28.6-64-64-64z" />',
        viewBox: '0 0 512 512'
    };

    var lockIcon = {
        name: 'lock',
        content: '<path d="M384 224h-32v-96c0-53-43-96-96-96s-96 43-96 96v96h-32c-17.6 0-32 14.4-32 32v192c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32V256c0-17.6-14.4-32-32-32zm-192-96c0-35.3 28.7-64 64-64s64 28.7 64 64v96H192v-96zm64 256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />',
        viewBox: '0 0 512 512'
    };

    var unlockIcon = {
        name: 'unlock',
        content: '<path d="M416 224H224v-96c0-53-43-96-96-96s-96 43-96 96v128h32V128c0-35.3 28.7-64 64-64s64 28.7 64 64v96h-32c-17.6 0-32 14.4-32 32v192c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32V256c0-17.6-14.4-32-32-32zM288 384c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />',
        viewBox: '0 0 512 512'
    };

    var cancelIcon = {
        name: 'cancel',
        content: '<path d="M256 32c-50.3 0-96.8 16.6-134.1 44.6-17.2 12.8-32.4 28.1-45.3 45.3C48.6 159.2 32 205.7 32 256c0 123.7 100.3 224 224 224 50.3 0 96.8-16.6 134.1-44.6 17.2-12.8 32.4-28.1 45.3-45.3 28-37.4 44.6-83.8 44.6-134.1 0-123.7-100.3-224-224-224zm0 384c-88.2 0-160-71.8-160-160 0-32.6 9.8-62.9 26.6-88.2l221.6 221.6C318.9 406.2 288.6 416 256 416zm133.4-71.8L167.8 122.6C193.1 105.8 223.4 96 256 96c88.2 0 160 71.8 160 160 0 32.6-9.8 62.9-26.6 88.2z" />',
        viewBox: '0 0 512 512'
    };

    var cancelOutlineIcon = {
        name: 'cancel-outline',
        content: '<path d="M256 32c-56.1 0-107.4 20.6-146.7 54.7-8.1 7-15.6 14.6-22.6 22.6C52.6 148.6 32 199.9 32 256c0 123.7 100.3 224 224 224 56.1 0 107.4-20.6 146.7-54.7 8.1-7 15.6-14.6 22.6-22.6C459.4 363.4 480 312.1 480 256c0-123.7-100.3-224-224-224zm0 416c-106 0-192-86-192-192 0-47.2 17.1-90.5 45.4-124L380 402.6c-33.5 28.3-76.8 45.4-124 45.4zm146.6-68L132 109.4C165.5 81.1 208.8 64 256 64c106 0 192 86 192 192 0 47.2-17.1 90.5-45.4 124z" />',
        viewBox: '0 0 512 512'
    };

    var cancelCircleIcon = {
        name: 'cancel-circle',
        content: '<path d="m169.4 214.6 128 128c-12.5 6-26.6 9.4-41.4 9.4-52.9 0-96-43.1-96-96 0-14.8 3.4-28.8 9.4-41.4zM256 160c-14.8 0-28.8 3.4-41.4 9.4l128 128c6-12.5 9.4-26.6 9.4-41.4 0-52.9-43.1-96-96-96zm224 96c0 123.7-100.3 224-224 224S32 379.7 32 256 132.3 32 256 32s224 100.3 224 224zm-64 0c0-88.2-71.8-160-160-160-32.6 0-62.9 9.8-88.2 26.6-17.9 11.9-33.4 27.3-45.3 45.3C105.8 193.1 96 223.4 96 256c0 88.2 71.8 160 160 160 32.6 0 62.9-9.8 88.2-26.6 17.9-11.9 33.4-27.3 45.3-45.3 16.7-25.2 26.5-55.5 26.5-88.1z" />',
        viewBox: '0 0 512 512'
    };

    var checkIcon = {
        name: 'check',
        content: '<path d="M434.7 82.7 480 128 192 416 32 256l45.3-45.3L192 325.5 434.7 82.7z" />',
        viewBox: '0 0 512 512'
    };

    var checkOutlineIcon = {
        name: 'check-outline',
        content: '<path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm0 416c-106 0-192-86-192-192S150 64 256 64s192 86 192 192-86 192-192 192zm-32-154-83-83-45 45 128 128 176-176-45-45-131 131z" />',
        viewBox: '0 0 512 512'
    };

    var checkCircleIcon = {
        name: 'check-circle',
        content: '<path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm-32 352L96 256l45-45 83 83 147-147 45 45-192 192z" />',
        viewBox: '0 0 512 512'
    };

    var xIcon = {
        name: 'x',
        content: '<path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96l45.3 45.3z" />',
        viewBox: '0 0 512 512'
    };

    var xOutlineIcon = {
        name: 'x-outline',
        content: '<path d="M384 338.7 338.7 384 256 301.3 173.3 384 128 338.7l82.7-82.7-82.7-82.7 45.3-45.3 82.7 82.7 82.7-82.7 45.3 45.3-82.7 82.7 82.7 82.7zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm0 416c-106 0-192-86-192-192S150 64 256 64s192 86 192 192-86 192-192 192z" />',
        viewBox: '0 0 512 512'
    };

    var xCircleIcon = {
        name: 'x-circle',
        content: '<path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm128 306.7L338.7 384 256 301.3 173.3 384 128 338.7l82.7-82.7-82.7-82.7 45.3-45.3 82.7 82.7 82.7-82.7 45.3 45.3-82.7 82.7 82.7 82.7z" />',
        viewBox: '0 0 512 512'
    };

    var plusIcon = {
        name: 'plus',
        content: '<path d="M288 224V96h-64v128H96v64h128v128h64V288h128v-64H288z" />',
        viewBox: '0 0 512 512'
    };

    var plusOutlineIcon = {
        name: 'plus-outline',
        content: '<path d="M288 288v96h-64v-96h-96v-64h96v-96h64v96h96v64h-96zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm0 416c-106 0-192-86-192-192S150 64 256 64s192 86 192 192-86 192-192 192z" />',
        viewBox: '0 0 512 512'
    };

    var plusCircleIcon = {
        name: 'plus-circle',
        content: '<path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm32 256v96h-64v-96h-96v-64h96v-96h64v96h96v64h-96z" />',
        viewBox: '0 0 512 512'
    };

    var minusIcon = {
        name: 'minus',
        content: '<path d="M96 224v64h320v-64H96z" />',
        viewBox: '0 0 512 512'
    };

    var minusOutlineIcon = {
        name: 'minus-outline',
        content: '<path d="M128 224h256v64H128v-64zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm0 416c-106 0-192-86-192-192S150 64 256 64s192 86 192 192-86 192-192 192z" />',
        viewBox: '0 0 512 512'
    };

    var minusCircleIcon = {
        name: 'minus-circle',
        content: '<path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zM128 288v-64h256v64H128z" />',
        viewBox: '0 0 512 512'
    };

    var sortAscIcon = {
        name: 'sort-asc',
        content: '<path d="M96 352h320v64H96v-64zm0-128h224v64H96v-64zm0-128h128v64H96V96z" />',
        viewBox: '0 0 512 512'
    };

    var sortDescIcon = {
        name: 'sort-desc',
        content: '<path d="M96 96h320v64H96V96zm0 128h224v64H96v-64zm0 128h128v64H96v-64z" />',
        viewBox: '0 0 512 512'
    };

    var sortClearIcon = {
        name: 'sort-clear',
        content: '<path d="m110.9 224 64 64H96v-64h14.9zM96 416h128v-64H96v64zm214.6-128h9.4v-64h-73.4l-64-64H416V96H118.6l-64-64L32 54.6 457.4 480l22.6-22.6L310.6 288z" />',
        viewBox: '0 0 512 512'
    };

    var sortAscSmallIcon = {
        name: 'sort-asc-small',
        content: '<path d="M256 192v224h-32V192h-96L240 64l112 128h-96z" />',
        viewBox: '0 0 512 512'
    };

    var sortDescSmallIcon = {
        name: 'sort-desc-small',
        content: '<path d="M352 288 240 416 128 288h96V64h32v224h96z" />',
        viewBox: '0 0 512 512'
    };

    var filterIcon = {
        name: 'filter',
        content: '<path d="M64 64v32l160 160v224l64-64V256L448 96V64H64z" />',
        viewBox: '0 0 512 512'
    };

    var filterClearIcon = {
        name: 'filter-clear',
        content: '<path d="m143.5 64 168.2 168.2L288 256v160l-64 64V256L64 96V64h79.5zm236.1 100.4L448 96V64H279.3l-64-64L192 22l298 298 22-23.3-132.4-132.3z" />',
        viewBox: '0 0 512 512'
    };

    var filterSmallIcon = {
        name: 'filter-small',
        content: '<path d="M128 128h256v32l-96 96v96l-64 64V256l-96-96v-32z" />',
        viewBox: '0 0 512 512'
    };

    var filterSortAscSmallIcon = {
        name: 'filter-sort-asc-small',
        content: '<path d="M448 128v32l-96 96v64l-32 64V256l-96-96v-32h224zM64 224h64v160h32V224h64l-80-96-80 96z" />',
        viewBox: '0 0 512 512'
    };

    var filterSortDescSmallIcon = {
        name: 'filter-sort-desc-small',
        content: '<path d="M448 128v32l-96 96v64l-32 64V256l-96-96v-32h224zM144 384l80-96h-64V128h-32v160H64l80 96z" />',
        viewBox: '0 0 512 512'
    };

    var filterAddExpressionIcon = {
        name: 'filter-add-expression',
        content: '<path d="M480 64v32H32V64h448zm-192 96h192v-32H288v32zm0 128h192v-64H288v64zm0 96h192v-32H288v32zm0 64h192v-32H288v32zM96 352h64v-64h64v-64h-64v-64H96v64H32v64h64v64z" />',
        viewBox: '0 0 512 512'
    };

    var filterAddGroupIcon = {
        name: 'filter-add-group',
        content: '<path d="M352 352v32h-32v64h32v32h-64V352h64zm64 0v32h32v64h-32v32h64V352h-64zM160 160H96v64H32v64h64v64h64v-64h64v-64h-64v-64zm128 0h192v-32H288v32zM32 64v32h448V64H32zm256 224h192v-64H288v64z" />',
        viewBox: '0 0 512 512'
    };

    var loginIcon = {
        name: 'login',
        content: '<path d="M384 480h96V32h-96v448zM32 224v64h128v96l160-128-160-128v96H32z" />',
        viewBox: '0 0 512 512'
    };

    var logoutIcon = {
        name: 'logout',
        content: '<path d="M128 32H32v448h96V32zm64 192v64h128v96l160-128-160-128v96H192z" />',
        viewBox: '0 0 512 512'
    };

    var downloadIcon = {
        name: 'download',
        content: '<path d="M32 384v96h448v-96H32zM288 32h-64v128h-96l128 160 128-160h-96V32z" />',
        viewBox: '0 0 512 512'
    };

    var uploadIcon = {
        name: 'upload',
        content: '<path d="M32 384v96h448v-96H32zm192-64h64V192h96L256 32 128 192h96v128z" />',
        viewBox: '0 0 512 512'
    };

    var hyperlinkOpenIcon = {
        name: 'hyperlink-open',
        content: '<path d="M32 480h448V256h-32v192H64V64h192V32H32v448zM320 32l56.9 56.9.5.5L224 242.7l45.3 45.3 153.3-153.4L480 192V32H320z" />',
        viewBox: '0 0 512 512'
    };

    var hyperlinkOpenSmIcon = {
        name: 'hyperlink-open-sm',
        content: '<path d="M96 416h320v-96h-32v64H128V128h64V96H96v320zM256 96h160v160l-57.4-57.4L237.3 320 192 274.7l121.4-121.4-.5-.5L256 96z" />',
        viewBox: '0 0 512 512'
    };

    var launchIcon = {
        name: 'launch',
        content: '<path d="M96 96v320h96v-32h-64V128h256v64h32V96H96zm320 160v160H256l57.4-57.4L192 237.3l45.3-45.3 121.4 121.4.5-.5L416 256z" />',
        viewBox: '0 0 512 512'
    };

    var windowIcon = {
        name: 'window',
        content: '<path d="M96 96v320h320V96H96zm288 288H128V192h256v192z" />',
        viewBox: '0 0 512 512'
    };

    var windowRestoreIcon = {
        name: 'window-restore',
        content: '<path d="M448 32v288h-32V128H160V32h288zM64 192h288v288H64V192zm32 256h224V288H96v160z" />',
        viewBox: '0 0 512 512'
    };

    var windowMinimizeIcon = {
        name: 'window-minimize',
        content: '<path d="M416 288v64H96v-64h320z" />',
        viewBox: '0 0 512 512'
    };

    var gearIcon = {
        name: 'gear',
        content: '<path d="m462.7 317.9-41.5-31.4c1.8-9.9 2.8-20.1 2.8-30.5 0-10.4-1-20.6-2.8-30.5l41.5-31.4c6.4-4.9 8.2-13.8 4.2-20.8L433 114.6c-4-7-12.6-9.9-20.1-6.7l-48 20.2c-15.4-13.2-33.3-23.6-52.8-30.5L305.8 46c-1-8-7.8-14-15.9-14h-67.8c-8.1 0-14.9 6-15.9 14l-6.5 51.6c-19.5 6.9-37.4 17.3-52.8 30.5l-48-20.2c-7.4-3.1-16-.2-20.1 6.7l-33.9 58.7c-4 7-2.2 15.9 4.2 20.8l41.5 31.4C89 235.4 88 245.6 88 256c0 10.4 1 20.6 2.8 30.5l-41.5 31.4c-6.4 4.9-8.2 13.8-4.2 20.8L79 397.4c4 7 12.6 9.9 20.1 6.7l48-20.2c15.4 13.2 33.3 23.6 52.8 30.5l6.5 51.6c1 8 7.8 14 15.9 14h67.8c8.1 0 14.9-6 15.9-14l6.5-51.6c19.5-6.9 37.4-17.3 52.8-30.5l48 20.2c7.4 3.1 16 .2 20.1-6.7l33.9-58.7c3.7-7 1.9-15.9-4.6-20.8zM256 340c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z" />',
        viewBox: '0 0 512 512'
    };

    var gearsIcon = {
        name: 'gears',
        content: '<path d="m331.9 364.2-29.6-22.4c1.3-7.1 2-14.3 2-21.8 0-7.4-.7-14.7-2-21.8l29.6-22.4c4.6-3.5 5.9-9.8 3-14.8l-24.2-42c-2.9-5-9-7.1-14.3-4.8L262 228.7c-11-9.4-23.8-16.9-37.7-21.8l-4.6-36.9c-.7-5.7-5.6-10-11.3-10H160c-5.8 0-10.6 4.3-11.3 10l-4.6 36.9c-13.9 4.9-26.7 12.4-37.7 21.8l-34.3-14.5c-5.3-2.2-11.5-.2-14.3 4.8l-24.3 42c-2.9 5-1.6 11.3 3 14.8l29.6 22.4c-1.3 7.1-2 14.3-2 21.8 0 7.4.7 14.7 2 21.8l-29.6 22.4c-4.6 3.5-5.9 9.8-3 14.8l24.2 42c2.9 5 9 7.1 14.3 4.8l34.3-14.5c11 9.4 23.8 16.9 37.7 21.8l4.6 36.9c.7 5.7 5.6 10 11.3 10h48.4c5.8 0 10.6-4.3 11.3-10l4.6-36.9c13.9-4.9 26.7-12.4 37.7-21.8l34.3 14.5c5.3 2.2 11.5.2 14.3-4.8l24.2-41.9c3-5 1.8-11.4-2.8-14.9zM184.2 380c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60zm293.1-225.5L459.4 141c.8-4.2 1.2-8.6 1.2-13 0-4.5-.4-8.8-1.2-13l17.8-13.4c2.7-2.1 3.5-5.9 1.8-8.9l-14.5-25.2c-1.8-3-5.4-4.2-8.6-2.8l-20.6 8.7c-6.7-5.7-14.3-10.1-22.7-13.1L409.9 38c-.4-3.4-3.3-6-6.8-6h-29c-3.4 0-6.4 2.5-6.8 6l-2.7 22.2c-8.3 2.9-16 7.5-22.7 13.1l-20.6-8.7c-3.2-1.4-6.9-.1-8.6 2.8l-14.5 25.2c-1.8 3-1 6.9 1.8 8.9l17.8 13.4c-.8 4.2-1.2 8.6-1.2 13 0 4.5.4 8.8 1.2 13L300 154.5c-2.7 2.1-3.5 5.9-1.8 8.9l14.5 25.2c1.8 3 5.4 4.2 8.6 2.8l20.6-8.7c6.7 5.7 14.3 10.1 22.7 13.1l2.7 22.2c.4 3.4 3.3 6 6.8 6h29c3.4 0 6.4-2.5 6.8-6l2.7-22.2c8.3-2.9 16-7.5 22.7-13.1l20.6 8.7c3.2 1.4 6.9.1 8.6-2.8l14.5-25.2c1.8-3 1-6.9-1.7-8.9zm-88.7 9.5c-19.9 0-36.1-16.2-36.1-36.1s16.2-36.1 36.1-36.1c19.9 0 36.1 16.2 36.1 36.1-.1 19.9-16.1 36.1-36.1 36.1z" />',
        viewBox: '0 0 512 512'
    };

    var wrenchIcon = {
        name: 'wrench',
        content: '<path d="M470.7 402.7 306 238.1c9-18.8 14-39.8 14-62.1 0-79.5-64.5-144-144-144-22.2 0-43.3 5-62.1 14l76.4 76.4c12.4 12.4 12.4 32.8 0 45.3l-22.6 22.6c-12.4 12.4-32.8 12.4-45.3 0L46 113.9c-9 18.8-14 39.9-14 62.1 0 79.5 64.5 144 144 144 22.3 0 43.4-5.1 62.2-14.1l164.7 164.7c12.3 12.5 32.7 12.5 45.1.1l22.7-22.7c12.4-12.4 12.4-32.8 0-45.3zM448 425.5 425.4 448 265.8 288.5c8.3-6.7 15.9-14.3 22.6-22.6L448 425.5z" />',
        viewBox: '0 0 512 512'
    };

    var eyeIcon = {
        name: 'eye',
        content: '<path d="M256 128c-94.8 0-179.8 51.5-224 128 44.3 76.5 129.3 128 224 128s179.8-51.5 224-128c-44.2-76.5-129.2-128-224-128zm-32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM69.8 256c18.4-26.4 44.8-48.7 72.6-65.1 12.2-7.2 25.1-13.2 38.4-17.9-22.6 20.5-36.8 50.1-36.8 83s14.2 62.5 36.8 83c-13.3-4.7-26.2-10.7-38.4-17.9-27.8-16.4-54.2-38.7-72.6-65.1zm299.8 65.1c-12.2 7.2-25.1 13.2-38.4 17.9 22.6-20.5 36.8-50.1 36.8-83s-14.2-62.5-36.8-83c13.3 4.7 26.2 10.7 38.4 17.9 27.8 16.4 54.2 38.7 72.6 65.1-18.5 26.4-44.8 48.7-72.6 65.1z" />',
        viewBox: '0 0 512 512'
    };

    var searchIcon = {
        name: 'search',
        content: '<path d="M365.3 320h-22.7l-26.7-26.7C338.5 265.7 352 230.4 352 192c0-88.4-71.6-160-160-160S32 103.6 32 192s71.6 160 160 160c38.4 0 73.7-13.5 101.3-36.1l26.7 26.7v22.7L434.7 480l45.3-45.3L365.3 320zM64 192c0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128S64 262.7 64 192z" />',
        viewBox: '0 0 512 512'
    };

    var zoomInIcon = {
        name: 'zoom-in',
        content: '<path d="M288 224h-64v64h-64v-64H96v-64h64V96h64v64h64v64zm192 210.7L434.7 480 320 365.3v-22.7l-26.7-26.7C265.7 338.5 230.4 352 192 352c-88.4 0-160-71.6-160-160S103.6 32 192 32s160 71.6 160 160c0 38.4-13.5 73.7-36.1 101.3l26.7 26.7h22.7L480 434.7zM192 320c70.7 0 128-57.3 128-128S262.7 64 192 64 64 121.3 64 192s57.3 128 128 128z" />',
        viewBox: '0 0 512 512'
    };

    var zoomOutIcon = {
        name: 'zoom-out',
        content: '<path d="M288 224H96v-64h192v64zm192 210.7L434.7 480 320 365.3v-22.7l-26.7-26.7C265.7 338.5 230.4 352 192 352c-88.4 0-160-71.6-160-160S103.6 32 192 32s160 71.6 160 160c0 38.4-13.5 73.7-36.1 101.3l26.7 26.7h22.7L480 434.7zM192 320c70.7 0 128-57.3 128-128S262.7 64 192 64 64 121.3 64 192s57.3 128 128 128z" />',
        viewBox: '0 0 512 512'
    };

    var arrowsMoveIcon = {
        name: 'arrows-move',
        content: '<path d="M384 320v-32h-96v96h32l-64 96-64-96h32v-96h-96v32l-96-64 96-64v32h96v-96h-32l64-96 64 96h-32v96h96v-32l96 64-96 64z" />',
        viewBox: '0 0 512 512'
    };

    var calculatorIcon = {
        name: 'calculator',
        content: '<path d="M64 64v384h384V64H64zm96 352H96v-64h64v64zm0-96H96v-64h64v64zm96 96h-64v-64h64v64zm0-96h-64v-64h64v64zm160 96h-96V256h96v160zm0-224H96V96h320v96z" />',
        viewBox: '0 0 512 512'
    };

    var cartIcon = {
        name: 'cart',
        content: '<path d="M192 368c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm144-48c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM128 96V64H32v32h64v192h288v-32H128V96zm32 128h256v-32H160v32zm0-96v32h288v-32H160z" />',
        viewBox: '0 0 512 512'
    };

    var connectorIcon = {
        name: 'connector',
        content: '<path d="M416 112c0 26.51-21.49 48-48 48-20.898 0-38.667-13.359-45.258-32H256v288h-98.742c-6.591 18.641-24.36 32-45.258 32-26.51 0-48-21.49-48-48s21.49-48 48-48c20.898 0 38.667 13.359 45.258 32H224V96h98.742c6.591-18.641 24.36-32 45.258-32 26.51 0 48 21.49 48 48z" />',
        viewBox: '0 0 512 512'
    };

    var plusSmIcon = {
        name: 'plus-sm',
        content: '<path d="M352 224v64h-64v64h-64v-64h-64v-64h64v-64h64v64h64z" />',
        viewBox: '0 0 512 512'
    };

    var minusSmIcon = {
        name: 'minus-sm',
        content: '<path d="M352 224v64H160v-64h192z" />',
        viewBox: '0 0 512 512'
    };

    var kpiStatusDenyIcon = {
        name: 'kpi-status-deny',
        content: '<path d="M480 256 256 480 32 256 256 32l224 224z" />',
        viewBox: '0 0 512 512'
    };

    var kpiStatusHoldIcon = {
        name: 'kpi-status-hold',
        content: '<path d="M256 64 32 448h448L256 64z" />',
        viewBox: '0 0 512 512'
    };

    var kpiStatusOpenIcon = {
        name: 'kpi-status-open',
        content: '<path d="M480 256c0 123.7-100.3 224-224 224S32 379.7 32 256 132.3 32 256 32s224 100.3 224 224z" />',
        viewBox: '0 0 512 512'
    };

    var equalIcon = {
        name: 'equal',
        content: '<path d="M96 288h320v64H96v-64zm0-128v64h320v-64H96z" />',
        viewBox: '0 0 512 512'
    };

    var notEqualIcon = {
        name: 'not-equal',
        content: '<path d="m290.7 224-37.3 64H416v64H216l-56 96h-48l56-96H96v-64h109.3l37.3-64H96v-64h184l56-96h48l-56 96h88v64H290.7z" />',
        viewBox: '0 0 512 512'
    };

    var lessOrEqualIcon = {
        name: 'less-or-equal',
        content: '<path d="m318.1 352-160-160 160-160L352 65.9 225.9 192 352 318.1 318.1 352zM128 416v32h256v-32H128z" />',
        viewBox: '0 0 512 512'
    };

    var greaterOrEqualIcon = {
        name: 'greater-or-equal',
        content: '<path d="M160 318.1 286.1 192 160 65.9 193.9 32l160 160-160 160-33.9-33.9zM128 416v32h256v-32H128z" />',
        viewBox: '0 0 512 512'
    };

    var divideIcon = {
        name: 'divide',
        content: '<path d="M416 64 192 448h-64L352 64h64z" />',
        viewBox: '0 0 512 512'
    };

    var accessibilityIcon = {
        name: 'accessibility',
        content: '<path d="M208 48c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm240 112v-32H64v32l128 16v80l-32 224h48l32-160h32l32 160h48l-32-224v-80l128-16z" />',
        viewBox: '0 0 512 512'
    };

    var barcodeOutlineIcon = {
        name: 'barcode-outline',
        content: '<path d="M96 384H64V128h32v256zm96-256h-64v224h64V128zm64 0h-32v224h32V128zm64 0h-32v224h32V128zm64 0h-32v224h32V128zm64 0h-32v256h32V128zm64-32v320c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32zm-32 0H32v320h448V96z" />',
        viewBox: '0 0 512 512'
    };

    var barcodeIcon = {
        name: 'barcode',
        content: '<path d="M480 64H32C14.3 64 0 78.3 0 96v320c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM96 384H64V128h32v256zm96-32h-64V128h64v224zm64 0h-32V128h32v224zm64 0h-32V128h32v224zm64 0h-32V128h32v224zm64 32h-32V128h32v256z" />',
        viewBox: '0 0 512 512'
    };

    var barcodeScannerIcon = {
        name: 'barcode-scanner',
        content: '<path d="M32 96H0V0h96v32H32v64zm0 288H0v96h96v-32H32v-64zM416 0v32h64v64h32V0h-96zm64 448h-64v32h96v-96h-32v64zm-192-32h32V288h-32v128zm32-352h-32v128h32V64zm-64 0h-32v128h32V64zM128 416h64V288h-64v128zm-64 0h32V288H64v128zM192 64h-64v128h64V64zm32 352h32V288h-32v128zM64 64v128h32V64H64zm384 0h-32v128h32V64zm0 352V288h-32v128h32zm-96 0h32V288h-32v128zm32-352h-32v128h32V64zm96 160H32v32h448v-32z" />',
        viewBox: '0 0 512 512'
    };

    var qrCodeOutlineIcon = {
        name: 'qr-code-outline',
        content: '<path d="M192 224v32h-32v-32h32zm-64 64h32v-32h-32v32zm-32-64v32h32v-32H96zm-32 64h32v-32H64v32zm128 0h32v-32h-32v32zm64-64h-32v32h32v-32zm32-32h-32v32h32v-32zm-64-32v32h32v-32h-32zm64-32h-32v32h32v-32zm-64-32v32h32V96h-32zm64-32h-32v32h32V64zm32 192v-32h-32v32h32zm-96 32v32h32v-32h-32zm64-32h-32v32h32v-32zm0 64h-32v32h32v-32zm-64 32v32h32v-32h-32zm32 32v32h32v-32h-32zm-32 64h32v-32h-32v32zm64-96v32h32v-32h-32zm32-32v-32h-32v32h32zm32-32v-32h-32v32h32zm32-64h-32v32h32v-32zm32 64v-32h-32v32h32zm32-64h-32v32h32v-32zm-64 96v-32h-32v32h32zm-32 32v-32h-32v32h32zm0 32h32v-32h-32v32zm32-32h32v-32h-32v32zm64-32v-32h-32v32h32zm-128 64v32h32v-32h-32zm-32 64h32v-32h-32v32zm64 0h32v-32h-32v32zm32-32h32v-32h-32v32zm64-32v-32h-32v32h32zm0 64v-32h-32v32h32zM512 0v512H0V0h512zm-32 32H32v448h448V32zm-32 160H320V64h128v128zm-32-32-.5-64H352v64h64zm-224 32H64V64h128v128zm-32-32-.5-64H96v64h64zm32 288H64V320h128v128zm-32-32-.5-64H96v64h64z" />',
        viewBox: '0 0 512 512'
    };

    var qrCodeIcon = {
        name: 'qr-code',
        content: '<path d="M320 0v192h192V0H320zm160 160H352V32h128v128zm-32-32h-64V64h64v64zM0 0v192h192V0H0zm160 160H32V32h128v128zm-32-32H64V64h64v64zM0 320v192h192V320H0zm160 160H32V352h128v128zm-32-32H64v-64h64v64zm32-224h32v32h-32v-32zm0 64h-32v-32h32v32zm-64-64h32v32H96v-32zm-32 32H32v-32h32v32zm32 32H64v-32h32v32zm128 0h-32v-32h32v32zm32-32h-32v-32h32v32zm0-64h32v32h-32v-32zm0 0h-32v-32h32v32zm0-64h32v32h-32v-32zm0 0h-32V96h32v32zm0-64h32v32h-32V64zm0 0h-32V32h32v32zm64 192h-32v-32h32v32zm-96 32h32v32h-32v-32zm64 0h-32v-32h32v32zm0 64h-32v-32h32v32zm-32 32h-32v-32h32v32zm0 0h32v32h-32v-32zm0 64h-32v-32h32v32zm64-64h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h32v32h-32v-32zm64 0h-32v-32h32v32zm32 32h-32v-32h32v32zm32-32h-32v-32h32v32zm-96 32h32v32h-32v-32zm0 64h-32v-32h32v32zm0 0h32v32h-32v-32zm32-32h32v32h-32v-32zm32-32h32v32h-32v-32zm-96 96h32v32h-32v-32zm0 64h-32v-32h32v32zm-32 32h-32v-32h32v32zm192-192h-32v-32h32v32zM352 416h32v32h-32v-32zm0 64h-32v-32h32v32zm64-64h-32v-32h32v32zm32-96h32v32h-32v-32zm0 64h-32v-32h32v32zm-32 32h32v32h-32v-32zm0 64h-32v-32h32v32zm64-64h-32v-32h32v32zm0 64h-32v-32h32v32zm32-32h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h-32v-32h32v32zM256 512h-32v-32h32v32zm64 0h-32v-32h32v32zm32-32h32v32h-32v-32zm64 0h32v32h-32v-32zm96 32h-32v-32h32v32z" />',
        viewBox: '0 0 512 512'
    };

    var qrCodeScannerIcon = {
        name: 'qr-code-scanner',
        content: '<path d="M512 0v96h-32V32h-64V0h96zm-32 448h-64v32h96v-96h-32v64zM64 64h128v128H64V64zm32 96h64V96H96v64zM32 32h64V0H0v96h32V32zm0 224h448v-32H32v32zm0 128H0v96h96v-32H32v-64zM288 96h-32v32h32V96zm-64-32v32h32V64h-32zm224 128H320V64h128v128zm-32-96h-64v64h64V96zm-128 96v-32h-32v32h32zm-32-64h-32v32h32v-32zM64 288h128v128H64V288zm32 96h64v-64H96v64zm192-64h-32v32h32v-32zm-64-32v32h32v-32h-32zm32 128h32v-32h-32v32zm-32-64v32h32v-32h-32zm96-64h-32v32h32v-32zm-32 64v32h32v-32h-32zm64 0v-32h-32v32h32zm-32 64h32v-32h-32v32zm64-128h-32v32h32v-32zm-32 64v32h32v-32h-32zm64 0v-32h-32v32h32zm0 64v-32h-32v32h32zm32-128h-32v32h32v-32zm0 96v-32h-32v32h32z" />',
        viewBox: '0 0 512 512'
    };

    var barcodeQrCodeScannerIcon = {
        name: 'barcode-qr-code-scanner',
        content: '<path d="M256 288h32v128h-32V288zm64 128h64V288h-64v128zm128 0V288h-32v128h32zM32 32h64V0H0v96h32V32zm0 352H0v96h96v-32H32v-64zM416 0v32h64v64h32V0h-96zm64 448h-64v32h96v-96h-32v64zm0-224H32v32h448v-32zM288 64h-32v128h32V64zm96 0h-64v128h64V64zm64 0h-32v128h32V64zM64 64h96v96H64V64zm32 64h32V96H96v32zm128 32h-32v32h32v-32zm0-96h-32v64h32V64zM64 320h96v96H64v-96zm32 64h32v-32H96v32zm96 0v32h32v-64h-32v32zm0-64h32v-32h-32v32z" />',
        viewBox: '0 0 512 512'
    };

    var signatureIcon = {
        name: 'signature',
        content: '<path d="M32 448h448v32H32v-32zM448 32H288v64h160V32zm-96 340.9L256 224l32-96h160l32 96-96 148.9V416h-32v-43.1zm0-59.1V256h32v57.8l60.8-94.3-19.9-59.5H311.1l-19.9 59.6 60.8 94.2zM78.8 377.3c8.7-10.3 23.9-25.6 37.2-17.3 14.9 9.3 25.1 42.1 56.9 43.8 27.2-.6 18.9-34.6 36.7-33.2 16.6 0 19.5 47.8 46.5 47.9 25.7.1 37.4-14.5 37.3-28 .1-29-62.5-87.7-85.4-98-21.4-9.6-34-2.3-39.7 6-5.3 7.9 9.3 34.5-13.7 41.2-17.3 1.5-29.2-33.2-62.1-33.2S77 354.1 32 352c13.1 6 32.8 42 46.8 25.3z" />',
        viewBox: '0 0 512 512'
    };

    var handIcon = {
        name: 'hand',
        content: '<path d="M442.5 130.7c-15.5-6.7-33.7-.2-41.4 15.1-8.2 21.3-23.3 79.9-25.8 87.6-2.1 6.5-5 12-11.3 9.7-4.7-1.7-3.5-7.2-2.4-12.6l2.7-17 18.1-112.4c2.8-17.4-9-33.8-26.5-36.6-17.4-2.8-33.8 9-36.6 26.5L304 197.9s-2.1 14.1-3 18.7c-1 5.2-1.4 12.3-7.7 11.9-5-.3-5.3-3.8-5.3-7.3V64c0-17.6-14.2-31.9-31.8-32h.1-.3c-17.7 0-32 14.3-32 32v.4c0 1.1.9 140.6.6 149.7-.2 5.4-.7 9.5-6.8 10.3-7.8 1.1-8.6-8-8.6-8l-3.1-20.9v.7L190 90.8v.1c-2.6-17.5-18.9-29.5-36.2-26.9-17.5 2.6-29.5 18.9-26.9 36.2 0 .1 0 .2.1.3l24.8 165.3 2.4 15.9c.5 3.2-.7 6.6-3.3 8.6l-.1.1c-4.1 3.1-10 2.5-13.5-1.4l-12.2-13.2-37.3-41-.1-.1c-11.9-13-32.1-14-45.3-2.1-13 11.9-14 32.1-2.1 45.2l55.7 61s34.1 49 62.5 88.4c28.3 39.3 72.3 52.4 129.5 52.4s113.9-21.8 126.9-95.4c13.7-78.5 6.5-107.9 23.7-150.4 11.6-28.9 15.1-45.8 21.1-63.2 5.4-15.6-1.9-33.3-17.2-39.9z" />',
        viewBox: '0 0 512 512'
    };

    var pointerIcon = {
        name: 'pointer',
        content: '<path d="m285.5 326.1 43.9 124.4-83.5 29.5-43.8-124.2L128 416V32l256 288-98.5 6.1z" />',
        viewBox: '0 0 512 512'
    };

    var stickIcon = {
        name: 'stick',
        content: '<path d="M192 96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v32h128V96zm128 160c0 35.3-28.7 64-64 64s-64-28.7-64-64v-96H64v96c0 106 86 192 192 192s192-86 192-192v-96H320v96zm96-192h-64c-17.7 0-32 14.3-32 32v32h128V96c0-17.7-14.3-32-32-32z" />',
        viewBox: '0 0 512 512'
    };

    var unstickIcon = {
        name: 'unstick',
        content: '<path d="M290.6 131.4c12.4-12.4 12.4-32.6 0-45l-45-45c-12.4-12.4-32.6-12.4-45 0L178 63.8l90.1 90 22.5-22.4zM268.1 334c-24.9 24.9-65.2 24.9-90.1 0s-24.9-65.2 0-90.1l67.5-67.5-90-90.1L88 153.9C13.4 228.5 13.4 349.4 88 424s195.5 74.6 270.1 0l67.5-67.5-90-90.1-67.5 67.6zm202.6-67.5-45-45c-12.4-12.4-32.6-12.4-45 0L358.2 244l90 90 22.5-22.5c12.4-12.4 12.4-32.6 0-45z" />',
        viewBox: '0 0 512 512'
    };

    var setColumnPositionIcon = {
        name: 'set-column-position',
        content: '<path d="M448 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM192 416H96V96h96v320zm224 0H224v-32h192v32zm0-64H224v-64h192v64zm0-96H224v-64h192v64zm0-96H224V96h192v64z" />',
        viewBox: '0 0 512 512'
    };

    var clockArrowRotateIcon = {
        name: 'clock-arrow-rotate',
        content: '<path d="M256 32C132.3 32 32 132.3 32 256h32c0-105.9 86.1-192 192-192s192 86.1 192 192-86.1 192-192 192c-57 0-108.3-25-143.5-64.5L176 320H32v144l57.8-57.8C130.8 451.5 190 480 256 480c123.7 0 224-100.3 224-224S379.7 32 256 32Zm-32 96v160h160v-32H256V128h-32Z" />',
        viewBox: '0 0 512 512'
    };

    var playIcon = {
        name: 'play',
        content: '<path d="M0 512V0l512 256L0 512z" />',
        viewBox: '0 0 512 512'
    };

    var pauseIcon = {
        name: 'pause',
        content: '<path d="M320 0h160v512H320V0zM32 512h160V0H32v512z" />',
        viewBox: '0 0 512 512'
    };

    var stopIcon = {
        name: 'stop',
        content: '<path d="M512 512H0V0h512v512z" />',
        viewBox: '0 0 512 512'
    };

    var rewindIcon = {
        name: 'rewind',
        content: '<path d="M256 256 512 96v320L256 256zm0 160V96L0 256l256 160z" />',
        viewBox: '0 0 512 512'
    };

    var forwardIcon = {
        name: 'forward',
        content: '<path d="M0 416V96l256 160L0 416zm512-160L256 96v320l256-160z" />',
        viewBox: '0 0 512 512'
    };

    var volumeDownIcon = {
        name: 'volume-down',
        content: '<path d="M0 352h96l128 128V32L96 160H0v192zm288 28V132c55.2 14.2 96 64.3 96 124s-40.8 109.8-96 124z" />',
        viewBox: '0 0 512 512'
    };

    var volumeUpIcon = {
        name: 'volume-up',
        content: '<path d="M0 352h96l128 128V32L96 160H0v192zm288 28V132c55.2 14.2 96 64.3 96 124s-40.8 109.8-96 124zm0-380v44.8c45.2 0 88.3 20.8 121.2 58.4C444.6 143.6 464 197.8 464 256s-19.4 112.4-54.8 152.8c-33 37.7-76 58.4-121.2 58.4V512c123.7 0 224-114.6 224-256S411.7 0 288 0z" />',
        viewBox: '0 0 512 512'
    };

    var volumeMuteIcon = {
        name: 'volume-mute',
        content: '<path d="M96 160 224 32v448L96 352H0V160h96zm416 29.3L466.7 144 400 210.7 333.2 144 288 189.3l66.7 66.7-66.7 66.7 45.3 45.3 66.7-66.7 66.7 66.7 45.3-45.3-66.8-66.7 66.8-66.7z" />',
        viewBox: '0 0 512 512'
    };

    var hdIcon = {
        name: 'hd',
        content: '<path d="M480 64H32C14.4 64 0 78.4 0 96v320c0 17.6 14.4 32 32 32h448c17.6 0 32-14.4 32-32V96c0-17.6-14.4-32-32-32zM256 384h-64v-96h-64v96H64V128h64v96h64v-96h64v256zm210.3-68.9c-5.1 16.2-11.8 29.4-19.8 39.1-8.2 9.8-18.2 17.4-29.8 22.4-11.5 4.9-26.3 7.4-43.9 7.4H288V128h82.6c20.3 0 35.4 2.2 46.1 6.8 10.7 4.6 20.6 12.2 29.5 22.8 8.7 10.5 15.7 24.1 20.6 40.6 4.8 16.2 7.3 36.5 7.3 60.3-.1 21.5-2.7 40.6-7.8 56.6zm-54.2-94.2c2.6 8.5 3.9 20.5 3.9 35.6 0 14.5-1.3 26.3-3.9 35.1-2.5 8.4-5.5 14.4-8.9 18-3.3 3.5-7.5 6-12.8 7.7-3.8 1.2-11.8 2.7-28.3 2.7H336V192h12.9c21.4 0 30.6.9 34.5 1.7 6.9 1.4 12.6 4.1 17.5 8.4 4.9 4.5 8.7 10.8 11.2 18.8z" />',
        viewBox: '0 0 512 512'
    };

    var closedCaptionsIcon = {
        name: 'closed-captions',
        content: '<path d="M480 64H32S0 64 0 96v320c0 32 32 32 32 32h448c32 0 32-32 32-32V96s0-32-32-32zM240 205c-6.1-4.5-13.5-7.8-21.9-10.1-8.5-2.3-17.1-3.5-25.8-3.5-18 0-32.2 5.8-42.6 17.4-10.4 11.6-15.6 27.4-15.6 47.3 0 19.8 5.2 35.4 15.6 46.9 10.4 11.5 24.3 17.2 41.7 17.2 16.1 0 32.3-4.6 47.6-13.8V373c-17.2 7.4-38.2 11-62.1 11-23.4 0-43.6-5-60.6-15.1s-29.9-24.4-38.9-43-13.4-40-13.4-64.3c0-26.1 5-49.4 15-69.7 10-20.4 24.2-36.1 42.5-47.2s39.4-16.7 63.2-16.7c19 0 37.4 2.6 55.3 7.8V205zm208 0c-6.1-4.5-13.5-7.8-21.9-10.1-8.5-2.3-17.1-3.5-25.8-3.5-18 0-32.2 5.8-42.6 17.4-10.4 11.6-15.6 27.4-15.6 47.3 0 19.8 5.2 35.4 15.6 46.9s24.3 17.2 41.7 17.2c16.1 0 32.3-4.6 47.6-13.8V373c-17.2 7.4-38.2 11-62.1 11-23.4 0-43.6-5-60.6-15.1s-29.9-24.4-38.9-43-13.4-40-13.4-64.3c0-26.1 5-49.4 15-69.7 10-20.4 24.2-36.1 42.5-47.2s39.4-16.7 63.2-16.7c19 0 37.4 2.6 55.3 7.8V205z" />',
        viewBox: '0 0 512 512'
    };

    var playlistIcon = {
        name: 'playlist',
        content: '<path d="M0 256h320v64H0v-64zM512 64H0V0h512v64zm-128 64.8V397c-13.4-8-30-12.8-48-12.8-44.2 0-80 28.7-80 64s35.8 64 80 64 80-28.7 80-64V193h96v-65l-128 .8zM0 128v64h320v-64H0z" />',
        viewBox: '0 0 512 512'
    };

    var musicNotesIcon = {
        name: 'music-notes',
        content: '<path d="M160 170v-64m0-.2v259c-13.4-8-30-12.8-48-12.8-44.2 0-80 28.7-80 64s35.8 64 80 64 80-28.7 80-64V162.5l256-59.1v165.4c-13.4-8-30-12.8-48-12.8-44.2 0-80 28.7-80 64s35.8 64 80 64 80-28.7 80-64V32l-320 73.8z" />',
        viewBox: '0 0 512 512'
    };

    var playSmIcon = {
        name: 'play-sm',
        content: '<path d="M96 416V96l320 160L96 416z" />',
        viewBox: '0 0 512 512'
    };

    var pauseSmIcon = {
        name: 'pause-sm',
        content: '<path d="M288 96h96v320h-96V96zM96 416h96V96H96v320z" />',
        viewBox: '0 0 512 512'
    };

    var stopSmIcon = {
        name: 'stop-sm',
        content: '<path d="M416 416H96V96h320v320z" />',
        viewBox: '0 0 512 512'
    };

    var heartOutlineIcon = {
        name: 'heart-outline',
        content: '<path d="M447.2 96.8c-43.7-43.7-114.7-43.7-158.4 0L256 129.6l-32.8-32.8c-43.7-43.7-114.7-43.7-158.4 0s-43.7 116.3 0 160l32.8 32.8L256 448l158.4-158.4 32.8-32.8c43.7-43.7 43.7-116.3 0-160zm-22.6 137.4L256 402.7 87.4 234.2C72.3 219.1 64 198.7 64 176.8s8.3-42.3 23.4-57.4C102.5 104.3 122.6 96 144 96s41.5 8.3 56.6 23.4l55.4 55.4 55.4-55.4C326.5 104.3 346.6 96 368 96s41.5 8.3 56.6 23.4c15.1 15.1 23.4 35.5 23.4 57.4s-8.3 42.3-23.4 57.4z" />',
        viewBox: '0 0 512 512'
    };

    var heartIcon = {
        name: 'heart',
        content: '<path d="m447.2 256.8-32.8 32.8L256 448 97.6 289.6l-32.8-32.8c-43.7-43.7-43.7-116.3 0-160s114.7-43.7 158.4 0l32.8 32.8 32.8-32.8c43.7-43.7 114.7-43.7 158.4 0s43.7 116.3 0 160z" />',
        viewBox: '0 0 512 512'
    };

    var starOutlineIcon = {
        name: 'star-outline',
        content: '<path d="M480 202.4 319.1 188 256 32l-63.1 156L32 202.4l122 111.7L117.2 480 256 391.5 394.8 480 358 314.1l122-111.7zM256 353.6l-90.8 57.9 24-108.5-82.1-75.2 108.1-9.7L256 117.3l40.8 100.8 108.1 9.7-82.1 75.2 24.1 108.5-90.9-57.9z" />',
        viewBox: '0 0 512 512'
    };

    var starIcon = {
        name: 'star',
        content: '<path d="M256 391.5 117.2 480 154 314.1 32 202.4 192.9 188 256 32l63.1 156L480 202.4 358 314.1 394.8 480 256 391.5z" />',
        viewBox: '0 0 512 512'
    };

    var checkboxIcon = {
        name: 'checkbox',
        content: '<path d="M64 64v384h384V64H64zm352 352H96V96h320v320z" />',
        viewBox: '0 0 512 512'
    };

    var checkboxCheckedIcon = {
        name: 'checkbox-checked',
        content: '<path d="M64 64v384h384V64H64zm352 352H96V96h320v320zm-77.3-269.3L384 192 224 352l-96-96 45.3-45.3 50.7 50.7 114.7-114.7z" />',
        viewBox: '0 0 512 512'
    };

    var checkboxIndeterminateIcon = {
        name: 'checkbox-indeterminate',
        content: '<path d="M128 128h256v256H128V128zM64 64v384h384V64H64zm352 352H96V96h320v320z" />',
        viewBox: '0 0 512 512'
    };

    var checkboxNullIcon = {
        name: 'checkbox-null',
        content: '<path d="M192 64h128v32H192V64zm224 0h-64v32h64v64h32V64h-32zm0 256h32V192h-32v128zm0 96h-64v32h96v-96h-32v64zm-224 32h128v-32H192v32zm-96-96H64v96h96v-32H96v-64zm0-160H64v128h32V192zM64 64v96h32V96h64V64H64z" />',
        viewBox: '0 0 512 512'
    };

    var circleIcon = {
        name: 'circle',
        content: '<path d="M384 256c0 70.7-57.3 128-128 128s-128-57.3-128-128 57.3-128 128-128 128 57.3 128 128z" />',
        viewBox: '0 0 512 512'
    };

    var radiobuttonIcon = {
        name: 'radiobutton',
        content: '<path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64zm0 352c-88.4 0-160-71.6-160-160S167.6 96 256 96s160 71.6 160 160-71.6 160-160 160z" />',
        viewBox: '0 0 512 512'
    };

    var radiobuttonCheckedIcon = {
        name: 'radiobutton-checked',
        content: '<path d="M351.6 255.3c0 53.2-43.1 96.4-96.4 96.4s-96.4-43.1-96.4-96.4 43.1-96.4 96.4-96.4 96.4 43.2 96.4 96.4zM256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64zm0 352c-88.4 0-160-71.6-160-160S167.6 96 256 96s160 71.6 160 160-71.6 160-160 160z" />',
        viewBox: '0 0 512 512'
    };

    var bellIcon = {
        name: 'bell',
        content: '<path d="M192 416h128c0 35.3-28.7 64-64 64s-64-28.7-64-64zm160-256c0-42-26.9-77.6-64.4-90.7.3-1.7.4-3.5.4-5.3 0-17.7-14.3-32-32-32s-32 14.3-32 32c0 1.8.2 3.6.4 5.3C186.9 82.4 160 118 160 160c0 88.4-43 160-96 160v64h384v-64c-53 0-96-71.6-96-160z" />',
        viewBox: '0 0 512 512'
    };

    var infoCircleIcon = {
        name: 'info-circle',
        content: '<path d="M288 352h32v32H192v-32h32v-96h-32v-32h96v128zm0-224h-64v64h64v-64zm192 128c0 123.7-100.3 224-224 224S32 379.7 32 256 132.3 32 256 32s224 100.3 224 224zm-32 0c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" />',
        viewBox: '0 0 512 512'
    };

    var questionCircleIcon = {
        name: 'question-circle',
        content: '<path d="M352 192c0 45.2-23.4 65.9-40.6 81-15.1 13.3-23.4 20.7-23.4 47h-64c0-55.2 27.1-79.2 45.1-95 13.8-12.1 18.9-16.7 18.9-33 0-17.6-14.4-32-32-32s-32 14.4-32 32h-64c0-53 43-96 96-96s96 43 96 96zM224 416h64v-64h-64v64zm256-160c0 123.7-100.3 224-224 224S32 379.7 32 256 132.3 32 256 32s224 100.3 224 224zm-32 0c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" />',
        viewBox: '0 0 512 512'
    };

    var exclamationCircleIcon = {
        name: 'exclamation-circle',
        content: '<path d="M224 128h64v160h-64V128zm0 256h64v-64h-64v64zm256-128c0 123.7-100.3 224-224 224S32 379.7 32 256 132.3 32 256 32s224 100.3 224 224zm-32 0c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" />',
        viewBox: '0 0 512 512'
    };

    var cameraIcon = {
        name: 'camera',
        content: '<path d="M448 128h-64l-64-64H192l-64 64H64c-17.6 0-32 14.4-32 32v288c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32V160c0-17.6-14.4-32-32-32zM256 416c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112zm64-112c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64z" />',
        viewBox: '0 0 512 512'
    };

    var imageIcon = {
        name: 'image',
        content: '<path d="M304 160c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm144-96H64c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32V96c0-17.6-14.4-32-32-32zm-.1 272-64-64-80 80L176 224 64 336V96.1l.1-.1h383.8l.1.1-.1 239.9z" />',
        viewBox: '0 0 512 512'
    };

    var imageExportIcon = {
        name: 'image-export',
        content: '<path d="M384 384v-79.9l-32-32-80 80-128-128-112 112v-240l.1-.1h383.8l.1.1-.1 223.9H448V96c0-17.6-14.4-32-32-32H32C14.4 64 0 78.4 0 96v320c0 17.6 14.4 32 32 32h256v-64h96zM272 160c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm48 288h96v64l96-80-96-80v64h-96v32z" />',
        viewBox: '0 0 512 512'
    };

    var zoomActualSizeIcon = {
        name: 'zoom-actual-size',
        content: '<path d="M0 32v128L128 32H0zm384 0 128 128V32H384zm-260.6 96c-15.1 0-27.4 12.3-27.4 27.4v201.2c0 15.1 12.3 27.4 27.4 27.4h265.2c15.1 0 27.4-12.3 27.4-27.4V155.4c0-15.1-12.3-27.4-27.4-27.4H123.4zM384 160v160l-48-64-48 64-80-96-80 96V160h256zm-96 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM0 352v128h128L0 352zm512 0L384 480h128V352z" />',
        viewBox: '0 0 512 512'
    };

    var zoomBestFitIcon = {
        name: 'zoom-best-fit',
        content: '<path d="M388.6 128H123.4c-15.1 0-27.4 12.3-27.4 27.4v201.2c0 15.1 12.3 27.4 27.4 27.4h265.2c15.1 0 27.4-12.3 27.4-27.4V155.4c0-15.1-12.3-27.4-27.4-27.4zM384 320l-48-64-48 64-80-96-80 96V160h256v160zM0 160l96 96-96 96V160zm160 320 96-96 96 96H160zM352 32l-96 96-96-96h192zm160 128v192l-96-96 96-96zm-256 64c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z" />',
        viewBox: '0 0 512 512'
    };

    var imageResizeIcon = {
        name: 'image-resize',
        content: '<path d="M427.3 404.7 352 329.4V32H32v320h297.4l75.3 75.3L352 480h128V352l-52.7 52.7zM64 320V64h256v233.4L203.3 180.7 256 128H128v128l52.7-52.7L297.4 320H64z" />',
        viewBox: '0 0 512 512'
    };

    var cropIcon = {
        name: 'crop',
        content: '<path d="M0 96h64v64H0V96zm448 256v64h64v-64h-64zm-32-224c0-17.6-14.4-32-32-32H192v64h160v320h64V128zM96 384c0 17.6 14.4 32 32 32h192v-64H160V32H96v352z" />',
        viewBox: '0 0 512 512'
    };

    var mirrorIcon = {
        name: 'mirror',
        content: '<path d="M192 64H32v384h160V64zm-31 352s0 .1 0 0l-96.9.1-.1-.1V96.1l.1-.1H160v320h1zm95 64h-32V32h32v448zm32-416h160v384H288V64z" />',
        viewBox: '0 0 512 512'
    };

    var flipHorizontalIcon = {
        name: 'flip-horizontal',
        content: '<path d="M448 448H288V64l160 384zm-384 0L224 64v384H64zm128-224-80 192h80V224z" />',
        viewBox: '0 0 512 512'
    };

    var flipVerticalIcon = {
        name: 'flip-vertical',
        content: '<path d="M64 288h384L64 448V288zm0-224v160h384L64 64zm32 128v-80l192 80H96z" />',
        viewBox: '0 0 512 512'
    };

    var rotateIcon = {
        name: 'rotate',
        content: '<path d="M256 448c8.2 0 16.2-.6 24-1.8v32.3c-7.9 1-15.9 1.5-24 1.5s-16.1-.5-24-1.5v-32.3c7.8 1.2 15.8 1.8 24 1.8zm-116-7c12.7 9.7 26.6 17.8 41.5 24l16.2-28c-15.1-5.9-29.1-14.1-41.5-24.1L140 441zm-61-78.5c6.3 14.9 14.4 28.8 24 41.5l28-16.2c-10-12.5-18.1-26.4-24.1-41.5L79 362.5zM256 128v64l128-80-128-80v64c-8.1 0-16.1.5-24 1.5-17.7 2.2-34.6 6.8-50.5 13.5-14.9 6.3-28.8 14.4-41.5 24-14 10.6-26.4 23-37 37-9.7 12.7-17.8 26.6-24 41.5-6.7 15.9-11.3 32.8-13.5 50.5-1 7.9-1.5 15.9-1.5 24s.5 16.1 1.5 24h32.3c-1.2-7.8-1.8-15.8-1.8-24s.6-16.2 1.8-24c1.8-11.9 4.9-23.4 9.2-34.3 5.9-15.1 14.1-29.1 24.1-41.5 7.4-9.3 15.8-17.7 25.1-25.1 12.5-10 26.4-18.1 41.5-24.1 10.9-4.3 22.4-7.4 34.3-9.2 7.8-1.2 15.8-1.8 24-1.8zm190.5 136h-32.3c1.2 7.8 1.8 15.8 1.8 24s-.6 16.2-1.8 24h32.3c1-7.9 1.5-15.9 1.5-24s-.5-16.1-1.5-24zm-65.6 123.8 28 16.2c9.7-12.7 17.8-26.6 24-41.5l-28-16.2c-5.8 15.1-14 29.1-24 41.5zM314.3 437l16.2 28c14.9-6.3 28.8-14.4 41.5-24l-16.2-28c-12.4 9.9-26.4 18.1-41.5 24z" />',
        viewBox: '0 0 512 512'
    };

    var rotateRightIcon = {
        name: 'rotate-right',
        content: '<path d="M320 448V64l160 384H320zm-32 0H32l256-160v160zm-32-102.3L143.6 416H256v-70.3zM64 160v128h32v-96h96v64l96-80-96-80v64H64z" />',
        viewBox: '0 0 512 512'
    };

    var rotateLeftIcon = {
        name: 'rotate-left',
        content: '<path d="M32 448 192 64v384H32zm192-160 256 160H224V288zm32 128h112.4L256 345.7V416zm64-256V96l-96 80 96 80v-64h96v96h32V160H320z" />',
        viewBox: '0 0 512 512'
    };

    var brushIcon = {
        name: 'brush',
        content: '<path d="M32 480s46.4-5.6 96-16c22.3-4.7 46.9-14 70.7-37.7 56.9-56.9.2-112.9.2-112.9s-56.7-56.9-113.3-.2c-23.4 23.4-20.1 57.1-19.7 89.8.8 59.7-33.9 77-33.9 77zM470.7 64 448 41.3c-12.4-12.4-32.8-12.4-45.3 0L204.3 239.8c11.5 5.8 20.8 12.2 27.7 17.6 5.3 4.2 9.2 7.7 11.3 9.8l.8.8.8.8c2.1 2.1 5.6 5.9 9.7 11.1 5.4 6.8 11.8 16.2 17.6 27.6l23.5-23.5 174.9-174.9c12.5-12.3 12.5-32.7.1-45.1zM448 86.6 277.4 257.3c-4.8-5.8-8.6-9.9-10.6-11.9-2.3-2.3-6.3-6.1-12-10.7L425.4 64h.1L448 86.6z" />',
        viewBox: '0 0 512 512'
    };

    var paletteIcon = {
        name: 'palette',
        content: '<path d="m206 256.6 160-160c-2.2-5.7-4.8-11.1-7.9-16.3-24.2-40.8-60.1-66-107.8-75.9-2.3-.5-4.7-1-7.1-1.4C192-5.8 143.1 4.8 96.5 34.6 49.3 64.7 19.2 107.2 6.1 162c-13 54.8-5.2 106.4 23.4 154.6 14.2 23.8 31.3 43.2 51.4 58.4 3.8-25.2 13.4-52 36.4-75 31.3-31.4 64-41.3 88.7-43.4zM288 64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-96-32c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM64 256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm0-128c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm438.7 12.9L480 118.3c-12.4-12.4-32.8-12.4-45.3 0L281.1 271.9c11.5 5.8 20.8 12.2 27.7 17.6 5.3 4.2 9.2 7.7 11.3 9.8l11.3 12.7c5.4 6.8 11.8 16.2 17.6 27.6l153.5-153.5c12.6-12.4 12.6-32.8.2-45.2zM354.3 289.3c-4.8-5.8-8.6-9.9-10.6-11.9-2.3-2.3-6.3-6.1-12-10.7L457.4 141h.1l22.5 22.5-125.7 125.8zm-78.7 169c-23.8 23.7-48.4 33-70.7 37.7-49.6 10.4-96 16-96 16s34.7-17.3 33.9-77c-.4-32.7-3.7-66.4 19.7-89.8 56.6-56.7 113.3.2 113.3.2s56.7 56-.2 112.9z" />',
        viewBox: '0 0 512 512'
    };

    var dropletIcon = {
        name: 'droplet',
        content: '<path d="M256 384v32c-53 0-96-43-96-96h32c0 35.3 28.7 64 64 64zm160-72c0 92.8-71.6 168-160 168S96 404.8 96 312C96 181.3 256 32 256 32s160 149.3 160 280zm-32 0c0-46.3-25.3-104.7-73-169-20-27-40.3-49.8-55-65.4-14.7 15.6-34.9 38.5-55 65.4-47.8 64.3-73 122.8-73 169 0 75 57.4 136 128 136s128-61 128-136z" />',
        viewBox: '0 0 512 512'
    };

    var shapeLineIcon = {
        name: 'shape-line',
        content: '<path d="M480 54.6 54.6 480 32 457.4 457.4 32 480 54.6z" />',
        viewBox: '0 0 512 512'
    };

    var brightnessContrastIcon = {
        name: 'brightness-contrast',
        content: '<path d="M165.5 346.5c12.4 12.5 12.4 32.9 0 45.3l-22.6 22.6c-12.5 12.4-32.8 12.4-45.3 0-12.4-12.5-12.4-32.9 0-45.3l22.6-22.6c12.5-12.4 32.9-12.4 45.3 0zM256 128c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32s-32 14.4-32 32v32c0 17.6 14.4 32 32 32zm135.8 37.5 22.6-22.6c12.4-12.4 12.4-32.8 0-45.3-12.4-12.4-32.8-12.4-45.3 0l-22.6 22.6c-12.4 12.4-12.4 32.8 0 45.3 12.5 12.4 32.8 12.4 45.3 0zm-271.6 0c12.4 12.4 32.8 12.4 45.3 0 12.4-12.4 12.4-32.8 0-45.3l-22.6-22.6c-12.4-12.4-32.8-12.4-45.3 0-12.4 12.5-12.4 32.8 0 45.3l22.6 22.6zM128 256c0-17.6-14.4-32-32-32H64c-17.6 0-32 14.4-32 32s14.4 32 32 32h32c17.6 0 32-14.4 32-32zm263.8 90.5c-12.4-12.4-32.8-12.4-45.3 0-12.4 12.5-12.4 32.8 0 45.3l22.6 22.6c12.4 12.4 32.8 12.4 45.3 0 12.4-12.4 12.4-32.8 0-45.3l-22.6-22.6zM448 224h-32c-17.6 0-32 14.4-32 32s14.4 32 32 32h32c17.6 0 32-14.4 32-32s-14.4-32-32-32zm-96 32c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zm-32 0c0-35.3-28.7-64-64-64v128c35.3 0 64-28.7 64-64zm-64 128c-17.6 0-32 14.4-32 32v32c0 17.6 14.4 32 32 32s32-14.4 32-32v-32c0-17.6-14.4-32-32-32z" />',
        viewBox: '0 0 512 512'
    };

    var slidersIcon = {
        name: 'sliders',
        content: '<path d="M480 96v32H285.3c-6.6 18.6-24.4 32-45.3 32s-38.7-13.4-45.3-32H32V96h162.7c6.6-18.6 24.4-32 45.3-32s38.7 13.4 45.3 32H480zm-112 96c-20.9 0-38.7 13.4-45.3 32H32v32h290.7c6.6 18.6 24.4 32 45.3 32s38.7-13.4 45.3-32H480v-32h-66.7c-6.6-18.6-24.4-32-45.3-32zM176 320c-20.9 0-38.7 13.4-45.3 32H32v32h98.7c6.6 18.6 24.4 32 45.3 32s38.7-13.4 45.3-32H480v-32H221.3c-6.6-18.6-24.4-32-45.3-32z" />',
        viewBox: '0 0 512 512'
    };

    var invertColorsIcon = {
        name: 'invert-colors',
        content: '<path d="m320 32-64 48 64 48V96h64v64h-32l48 64 48-64h-32V64h-96V32zM32 64v192h192V64H32zm192 192v192h192V256H224zM64 96h128v128H64V96z" />',
        viewBox: '0 0 512 512'
    };

    var transparencyIcon = {
        name: 'transparency',
        content: '<path d="M64 64v352h352V64H64zm32 32h96v96h96V96h96v96h-96v96h96v96h-96v-96h-96v96H96v-96h96v-96H96V96z" />',
        viewBox: '0 0 512 512'
    };

    var grayscaleIcon = {
        name: 'grayscale',
        content: '<path d="M32 64C14.3 64 0 78.3 0 96v320c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H32zm0 32h416v320H32V96zm48 32c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16zm64 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16zm64 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16zm64 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16zm64 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16zm64 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16zm0 4c6.6 0 12 5.4 12 12v224c0 6.6-5.4 12-12 12s-12-5.4-12-12V144c0-6.6 5.4-12 12-12zm-64 1c6.1 0 11 4.9 11 11v224c0 6.1-4.9 11-11 11s-11-4.9-11-11V144c0-6.1 4.9-11 11-11zm-64 2c5 0 9 4 9 9v224c0 5-4 9-9 9s-9-4-9-9V144c0-5 4-9 9-9zm-64 1c4.4 0 8 3.6 8 8v224c0 4.4-3.6 8-8 8s-8-3.6-8-8V144c0-4.4 3.6-8 8-8zm-64 4c2.2 0 4 1.8 4 4v224c0 2.2-1.8 4-4 4s-4-1.8-4-4V144c0-2.2 1.8-4 4-4z" />',
        viewBox: '0 0 512 512'
    };

    var blurIcon = {
        name: 'blur',
        content: '<path d="M384 320c0 64-32 128-128 128-64 0-128-48-128-128 0-96 128-128 128-256 0 0 128 129.1 128 256z" />',
        viewBox: '0 0 512 512'
    };

    var sharpenIcon = {
        name: 'sharpen',
        content: '<path d="M256 32 128 480h256L256 32zm0 116.5L341.6 448H170.4L256 148.5z" />',
        viewBox: '0 0 512 512'
    };

    var shapesIcon = {
        name: 'shapes',
        content: '<path d="M480 32H160v131.204C86.969 178.029 32 242.594 32 320c0 88.365 71.635 160 160 160 77.406 0 141.972-54.969 156.797-128H480V32zM192 448c-70.692 0-128-57.308-128-128 0-59.643 40.793-109.758 96-123.967 1.173-.302 2.354-.583 3.539-.852.357-.081.717-.156 1.076-.234a125.086 125.086 0 0 1 3.764-.762 126.34 126.34 0 0 1 2.557-.448c.369-.061.736-.125 1.105-.184 2.423-.379 4.869-.69 7.335-.932.379-.037.759-.067 1.139-.101a132.167 132.167 0 0 1 3.913-.29c.872-.051 1.747-.091 2.623-.125.392-.015.782-.033 1.174-.045 1.254-.036 2.512-.06 3.775-.06 70.692 0 128 57.308 128 128 0 1.264-.023 2.521-.06 3.775-.012.393-.03.782-.045 1.174a126.511 126.511 0 0 1-.207 3.922c-.06.874-.13 1.744-.207 2.613-.034.38-.064.761-.102 1.14a127.326 127.326 0 0 1-.933 7.339c-.057.365-.121.728-.181 1.092a128.132 128.132 0 0 1-.683 3.785c-.17.86-.349 1.718-.535 2.571-.075.346-.147.692-.226 1.037a135.047 135.047 0 0 1-.855 3.552c-14.208 55.207-64.323 96-123.966 96zm256-128h-96c0-88.365-71.635-160-160-160V64h256v256z" />',
        viewBox: '0 0 512 512'
    };

    var roundCornersIcon = {
        name: 'round-corners',
        content: '<path d="M448 320c0 70.692-57.308 128-128 128H192c-70.692 0-128-57.308-128-128V192c0-70.692 57.308-128 128-128h128c70.692 0 128 57.308 128 128v128z" />',
        viewBox: '0 0 512 512'
    };

    var bringToFrontIcon = {
        name: 'bring-to-front',
        content: '<path d="M96 128V96h96V64H64v128h32v-64zm224 256h64V128H128v256h192zm96-64v96h-96v32h128V320h-32z" />',
        viewBox: '0 0 512 512'
    };

    var bringToBackIcon = {
        name: 'bring-to-back',
        content: '<path d="M128 192h64V64H64v128h64zM96 96h64v64H96V96zm192 192h96V128H224v96h-96v160h160v-96zm128 32h-96v128h128V320h-32zm0 96h-64v-64h64v64z" />',
        viewBox: '0 0 512 512'
    };

    var bringForwardIcon = {
        name: 'bring-forward',
        content: '<path d="M448 192v256H192V320H64V64h256v128h128zm-32 32h-96v96h-96v96h192V224z" />',
        viewBox: '0 0 512 512'
    };

    var bringBackwardIcon = {
        name: 'bring-backward',
        content: '<path d="M192 192v256h256V192H192zm224 224H224V224h192v192zM320 64H64v256h96V160h160V64z" />',
        viewBox: '0 0 512 512'
    };

    var alignSelfStartIcon = {
        name: 'align-self-start',
        content: '<path d="M31 32h32v448H31V32zm288 64H95v128h224V96zm128 192v128H95V288h352zm-32 32H127v64h288v-64z" />',
        viewBox: '0 0 512 512'
    };

    var alignSelfCenterIcon = {
        name: 'align-self-center',
        content: '<path d="M255 288v-64h96V96h-96V32h-32v64h-96v128h96v64H63v128h160v64h32v-64h160V288H255zm128 96H95v-64h288v64z" />',
        viewBox: '0 0 512 512'
    };

    var alignSelfEndIcon = {
        name: 'align-self-end',
        content: '<path d="M64 416h352V288H64v128zm32-96h288v64H96v-64zm96-224h224v128H192V96zm288-64v448h-32V32h32z" />',
        viewBox: '0 0 512 512'
    };

    var alignSelfStartAltIcon = {
        name: 'align-self-start-alt',
        content: '<path d="M95 96h128v224H95V96zm192 0h128v352H287V96zm32 320h64V128h-64v288zM31 32v32h448V32H31z" />',
        viewBox: '0 0 512 512'
    };

    var alignSelfCenterAltIcon = {
        name: 'align-self-center-alt',
        content: '<path d="M415 224V64H287v160h-64v-96H95v96H31v32h64v96h128v-96h64v160h128V256h64v-32h-64zm-32 0v160h-64V96h64v128z" />',
        viewBox: '0 0 512 512'
    };

    var alignSelfEndAltIcon = {
        name: 'align-self-end-alt',
        content: '<path d="M479 449v32H31v-32h448zM223 193H95v224h128V193zm192 224H287V65h128v352zM383 97h-64v288h64V97z" />',
        viewBox: '0 0 512 512'
    };

    var thumbnailsUpIcon = {
        name: 'thumbnails-up',
        content: '<path d="M352 32h96v96h-96V32zm-160 0h96v96h-96V32zM32 32h96v96H32V32zm0 160h416v256H32V192z" />',
        viewBox: '0 0 512 512'
    };

    var thumbnailsRightIcon = {
        name: 'thumbnails-right',
        content: '<path d="M352 352h96v96h-96v-96zm0-160h96v96h-96v-96zm0-160h96v96h-96V32zM32 32h256v416H32V32z" />',
        viewBox: '0 0 512 512'
    };

    var thumbnailsDownIcon = {
        name: 'thumbnails-down',
        content: '<path d="M352 352h96v96h-96v-96zm-160 0h96v96h-96v-96zm-160 0h96v96H32v-96zm0-320h416v256H32V32z" />',
        viewBox: '0 0 512 512'
    };

    var thumbnailsLeftIcon = {
        name: 'thumbnails-left',
        content: '<path d="M32 32v96h96V32H32zm160 0v416h256V32H192zM32 192v96h96v-96H32zm0 160v96h96v-96H32z" />',
        viewBox: '0 0 512 512'
    };

    var fullscreenIcon = {
        name: 'fullscreen',
        content: '<path d="M0 32h160v64H64v96H0V32zm64 288H0v160h160v-64H64v-96zM352 32v64h96v96h64V32H352zm96 384h-96v64h160V320h-64v96z" />',
        viewBox: '0 0 512 512'
    };

    var fullscreenExitIcon = {
        name: 'fullscreen-exit',
        content: '<path d="M160 32H96v96H0v64h160V32zM96 480h64V320H0v64h96v96zm416-288v-64h-96V32h-64v160h160zm-96 192h96v-64H352v160h64v-96z" />',
        viewBox: '0 0 512 512'
    };

    var dropletSlashIcon = {
        name: 'droplet-slash',
        content: '<path d="m317.9 431 23.2 23.2C316.5 470.6 287.3 480 256 480c-88.4 0-160-75.2-160-168 0-27.8 7.2-56.4 18.6-84.2l24.8 24.8C131.9 274 128 293.9 128 312c0 75 57.4 136 128 136 22.4 0 43.5-6.2 61.9-17zM256 416v-32c-35.3 0-64-28.7-64-64h-32c0 53 43 96 96 96zm224 41.4L457.4 480 32 54.6 54.6 32l108.7 108.7C207 77.7 256 32 256 32s160 149.3 160 280c0 24.1-4.9 47.1-13.6 67.8l77.6 77.6zM384 312c0-46.3-25.3-104.7-73-169-20-27-40.3-49.8-55-65.4-14.7 15.6-34.9 38.5-55 65.4-1.4 1.9-2.7 3.7-4.1 5.6-.8 1.1-1.5 2.1-2.3 3.2l-1.5 2.1-3 4.2c-.2.3-.4.5-.6.8-1 1.5-2.1 3-3.1 4.5-.1.1-.1.2-.2.3l191.2 191.2c.5-1.6 1-3.3 1.4-4.9 0-.2.1-.4.1-.5.4-1.5.8-2.9 1.1-4.4.1-.3.1-.6.2-.9.3-1.4.6-2.7.9-4.1.1-.4.2-.8.2-1.2.2-1.3.5-2.6.7-3.9.1-.5.2-1 .2-1.5.2-1.2.3-2.5.5-3.7.1-.5.1-1.1.2-1.6l.3-3.6c0-.6.1-1.1.1-1.7.1-1.3.2-2.5.2-3.8 0-.5.1-1 .1-1.6.4-1.9.4-3.7.4-5.5z" />',
        viewBox: '0 0 512 512'
    };

    var photosIcon = {
        name: 'photos',
        content: '<path d="M256 288c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm96-64v192c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32zm-31.8 0c-.1-.1-.1-.1 0 0l-256.1-.1-.1.1v149.9l74.6-70 85.3 80 53.3-50 42.7 40 .3-149.9zm63.8-96H128c-17.7 0-32 14.3-32 32h288v224c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32zm64-64H192c-17.7 0-32 14.3-32 32h288v224c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z" />',
        viewBox: '0 0 512 512'
    };

    var alignToGridIcon = {
        name: 'align-to-grid',
        content: '<path d="M320 320H128V128h192v192zM96 0H64v512h32V0zm352 0h-32v512h32V0zm64 64H0v32h512V64zm0 352H0v32h512v-32z" />',
        viewBox: '0 0 512 512'
    };

    var sizeToGridIcon = {
        name: 'size-to-grid',
        content: '<path d="M384 384H128V128h256v256zM96 0H64v512h32V0zm352 0h-32v512h32V0zm64 64H0v32h512V64zm0 352H0v32h512v-32z" />',
        viewBox: '0 0 512 512'
    };

    var makeSameSizeIcon = {
        name: 'make-same-size',
        content: '<path d="M288 192v96h-96v-96h96zM240.1 0l-48.4 64H224v64h33V64h31.6L240.1 0zM256 416v-64h-32v64h-32l48 64 48-64h-32zm224-175.9-64-48.4V224h-64v33h64v31.6l64-48.5zM64 224v-32L0 240l64 48v-32h64v-32H64zM128 0H0v128h32V32h96V0zm320 0h-96v32h96v96h32V0h-32zM32 448v-96H0v128h128v-32H32zm416-96v96h-96v32h128V352h-32z" />',
        viewBox: '0 0 512 512'
    };

    var makeSameWidthIcon = {
        name: 'make-same-width',
        content: '<path d="M480 128H0V32h480v96zm-192 96h-96v96h96v-96zm192 48.1-64-48.4V256h-64v33h64v31.6l64-48.5zM64 256v-32L0 272l64 48v-32h64v-32H64zm384 96v96h-96v32h128V352h-32zM32 448v-96H0v128h128v-32H32z" />',
        viewBox: '0 0 512 512'
    };

    var makeSameHeightIcon = {
        name: 'make-same-height',
        content: '<path d="M128 0v480H32V0h96zm96 192v96h96v-96h-96zM272.1 0l-48.4 64H256v64h33V64h31.6L272.1 0zM288 416v-64h-32v64h-32l48 64 48-64h-32zM448 0h-96v32h96v96h32V0h-32zm0 352v96h-96v32h128V352h-32z" />',
        viewBox: '0 0 512 512'
    };

    var makeHorizontalSpacingEqualIcon = {
        name: 'make-horizontal-spacing-equal',
        content: '<path d="M480 160v160h-96v-64h-96v160h-96V256H96v96H32V128h64v96h96V64h96v160h96v-64h96z" />',
        viewBox: '0 0 512 512'
    };

    var increaseHorizontalSpacingIcon = {
        name: 'increase-horizontal-spacing',
        content: '<path d="M480 96v160h-96v-64h-96v160h-96V192H96v96H32V64h64v96h96V0h96v160h96V96h96zM335.7 352l-22.6 22.6 57.4 57.4-57.4 57.4 22.6 22.6 80-80-80-80zM64 432l80 80 22.6-22.6-57.3-57.4 57.4-57.4L144 352l-80 80z" />',
        viewBox: '0 0 512 512'
    };

    var decreaseHorizontalSpacingIcon = {
        name: 'decrease-horizontal-spacing',
        content: '<path d="M480 96v160h-96v-64h-96v160h-96V192H96v96H32V64h64v96h96V0h96v160h96V96h96zM111.6 352 89 374.6l57.4 57.4L89 489.4l22.6 22.6 80-80-80-80zM288 432l80 80 22.6-22.6-57.3-57.4 57.4-57.4L368 352l-80 80z" />',
        viewBox: '0 0 512 512'
    };

    var removeHorizontalSpacingIcon = {
        name: 'remove-horizontal-spacing',
        content: '<path d="M480 96v160h-96v-64h-96v160h-96V192H96v96H32V64h64v96h96V0h96v160h96V96h96zm-32.5 278.2-22.6-22.6-57.4 57.4-57.4-57.4-22.6 22.6 57.4 57.4-57.4 57.4 22.6 22.6 57.4-57.4 57.4 57.4 22.6-22.6-57.4-57.4 57.4-57.4zm-256 0-22.6-22.6-57.4 57.4-57.4-57.4-22.6 22.6 57.4 57.4L31.5 489l22.6 22.6 57.4-57.4 57.4 57.4 22.6-22.6-57.4-57.4 57.4-57.4z" />',
        viewBox: '0 0 512 512'
    };

    var makeVerticalSpacingEqualIcon = {
        name: 'make-vertical-spacing-equal',
        content: '<path d="M256 320v96h96v64H128v-64h96v-96H64v-96h160v-96h-64V32h160v96h-64v96h160v96H256z" />',
        viewBox: '0 0 512 512'
    };

    var increaseVerticalSpacingIcon = {
        name: 'increase-vertical-spacing',
        content: '<path d="M192 320v96h96v64H64v-64h96v-96H0v-96h160v-96H96V32h160v96h-64v96h160v96H192zm320 48.1-22.6-22.6-57.4 57.3-57.4-57.4-22.6 22.7 80 80 80-80zM432 96l-80 80 22.6 22.6 57.4-57.4 57.4 57.4L512 176l-80-80z" />',
        viewBox: '0 0 512 512'
    };

    var decreaseVerticalSpacingIcon = {
        name: 'decrease-vertical-spacing',
        content: '<path d="M191 320v96h96v64H63v-64h96v-96H-1v-96h160v-96H95V32h160v96h-64v96h160v96H191zm160 105.4 22.6 22.6 57.4-57.4 57.4 57.4 22.6-22.6-80-80-80 80zm80-226.8 80-80L488.4 96 431 153.4 373.6 96 351 118.6l80 80z" />',
        viewBox: '0 0 512 512'
    };

    var removeVerticalSpacingIcon = {
        name: 'remove-vertical-spacing',
        content: '<path d="M192 320v96h96v64H64v-64h96v-96H0v-96h160v-96H96V32h160v96h-64v96h160v96H192zm320 22.6L489.4 320 432 377.4 374.6 320 352 342.6l57.4 57.4-57.4 57.4 22.6 22.6 57.4-57.4 57.4 57.4 22.6-22.6-57.4-57.4 57.4-57.4zm0-288L489.4 32 432 89.4 374.6 32 352 54.6l57.4 57.4-57.4 57.4 22.6 22.6 57.4-57.4 57.4 57.4 22.6-22.6-57.4-57.4L512 54.6z" />',
        viewBox: '0 0 512 512'
    };

    var eyedropperIcon = {
        name: 'eyedropper',
        content: '<path d="m461.1 56.9-6.2-6.2c-25-25-65.5-25-90.5 0l-60.8 60.8-4.3-4.3c-6.2-6.2-16.4-6.2-22.6 0l-9.4 9.4c-6.2 6.2-6.2 16.4 0 22.6l4.3 4.3L70.8 344.4c-8.2 8.2-14 18.5-16.8 29.7l-21.5 85.7c-2.2 8.6 3.1 17.4 11.7 19.5 2.6.6 5.2.6 7.8 0l85.7-21.4c11.3-2.8 21.5-8.6 29.7-16.8l200.8-200.8 4.4 4.4c6.2 6.2 16.4 6.2 22.6 0l9.4-9.4c6.2-6.2 6.2-16.4 0-22.6l-4.4-4.4 60.8-60.8c25-25 24.9-65.5.1-90.6zM224 320h-64l144-144 32 32-112 112z" />',
        viewBox: '0 0 512 512'
    };

    var snapGridIcon = {
        name: 'snap-grid',
        content: '<path d="M480 128V96h-96V0h-32v96h-96V0h-32v96h-96V0H96v96H0v32h96v96H0v32h96v96H0v32h96v96h32v-96h96v96h32v-96h96v96h32v-96h96v-32h-96v-96h96v-32h-96v-96h96zm-352 0h96v96h-96v-96zm0 224v-96h96v96h-96zm224 0h-96v-96h96v96zm0-128h-96v-96h96v96z" />',
        viewBox: '0 0 512 512'
    };

    var snapToGridlinesIcon = {
        name: 'snap-to-gridlines',
        content: '<path d="M160 32H0v416h288V32H160zm-32 384H32v-96h96v96zm0-128H32v-96h96v96zm0-128H32V64h96v96zm128 256h-96v-96h96v96zm0-128h-96v-96h96v96zm0-128h-96V64h96v96zm256 80c0 44.2-35.8 80-80 80h-32v-32h32c26.5 0 48-21.5 48-48s-21.5-48-48-48h-32v-32h32c44.2 0 80 35.8 80 80zm-160-48h32v-32h-32v32zm0 128h32v-32h-32v32z" />',
        viewBox: '0 0 512 512'
    };

    var snapToSnaplinesIcon = {
        name: 'snap-to-snaplines',
        content: '<path d="M224 128h96V96h-96V32h-32v64h-64V32H96v64H32v32h64v256H32v32h64v64h32v-64h64v64h32v-64h256v-32H224V128zm-32 256h-64V128h64v256zm208-64h-32v-32h32c26.5 0 48-21.5 48-48s-21.5-48-48-48h-32v-32h32c44.2 0 80 35.8 80 80s-35.8 80-80 80zm-48-160h-32v32h32v-32zm-32 160h32v-32h-32v32z" />',
        viewBox: '0 0 512 512'
    };

    var dimensionsIcon = {
        name: 'dimensions',
        content: '<path d="M320 0H0v512h128V128h384V0H320zM32 32h64v64H32V32zm64 352H64v32h32v64H32V320h64v64zm0-192H64v32h32v64H32V128h64v64zm128-96V64h-32v32h-64V32h160v64h-64zm256 0h-64V64h-32v32h-64V32h160v64z" />',
        viewBox: '0 0 512 512'
    };

    var alignSelfStretchIcon = {
        name: 'align-self-stretch',
        content: '<path d="M95 96h320v128H95V96zM31 480h32V32H31v448zm64-192h320v128H95V288zm32 96h256v-64H127v64zM447 32v448h32V32h-32z" />',
        viewBox: '0 0 512 512'
    };

    var alignSelfStretchAltIcon = {
        name: 'align-self-stretch-alt',
        content: '<path d="M223 96v320H95V96h128zM31 480h448v-32H31v32zM415 96v320H287V96h128zm-32 32h-64v256h64V128zM31 32v32h448V32H31z" />',
        viewBox: '0 0 512 512'
    };

    var alignItemsStartIcon = {
        name: 'align-items-start',
        content: '<path d="M319 224H95V96h224v128zM31 480h32V32H31v448zm64-192v128h352V288H95z" />',
        viewBox: '0 0 512 512'
    };

    var alignItemsCenterIcon = {
        name: 'align-items-center',
        content: '<path d="M415 416H255v64h-32v-64H63V288h160v-64h-96V96h96V32h32v64h96v128h-96v64h160v128z" />',
        viewBox: '0 0 512 512'
    };

    var alignItemsEndIcon = {
        name: 'align-items-end',
        content: '<path d="M192 96h224v128H192V96zm256-64v448h32V32h-32zM64 416h352V288H64v128z" />',
        viewBox: '0 0 512 512'
    };

    var alignItemsStretchIcon = {
        name: 'align-items-stretch',
        content: '<path d="M415 224H95V96h320v128zM31 480h32V32H31v448zM447 32v448h32V32h-32zM96 416h320V288H96v128z" />',
        viewBox: '0 0 512 512'
    };

    var alignItemsBaselineIcon = {
        name: 'align-items-baseline',
        content: '<path d="M415 224V64H287v160h-64v-96H95v96H31v32h64v96h128v-96h64v160h128V256h64v-32h-64zm-224 96h-64v-64h64v64zm192 64h-64V256h64v128z" />',
        viewBox: '0 0 512 512'
    };

    var alignItemsStartAltIcon = {
        name: 'align-items-start-alt',
        content: '<path d="M96 96h128v224H96V96zM32 32v32h448V32H32zm256 416h128V96H288v352z" />',
        viewBox: '0 0 512 512'
    };

    var alignItemsCenterAltIcon = {
        name: 'align-items-center-alt',
        content: '<path d="M479 256h-64v160H287V256h-64v96H95v-96H31v-32h64v-96h128v96h64V64h128v160h64v32z" />',
        viewBox: '0 0 512 512'
    };

    var alignItemsEndAltIcon = {
        name: 'align-items-end-alt',
        content: '<path d="M223 417H95V193h128v224zM31 449v32h448v-32H31zM415 65H287v352h128V65z" />',
        viewBox: '0 0 512 512'
    };

    var alignItemsStretchAltIcon = {
        name: 'align-items-stretch-alt',
        content: '<path d="M223 96v320H95V96h128zM31 480h448v-32H31v32zm0-448v32h448V32H31zm256 63v320h128V95H287z" />',
        viewBox: '0 0 512 512'
    };

    var alignItemsBaselineAltIcon = {
        name: 'align-items-baseline-alt',
        content: '<path d="M255 288v-64h96V96h-96V32h-32v64h-96v128h96v64H63v128h160v64h32v-64h160V288H255zm-32 96H95v-64h128v64zm0-192h-64v-64h64v64z" />',
        viewBox: '0 0 512 512'
    };

    var justifyContentStartIcon = {
        name: 'justify-content-start',
        content: '<path d="M95 96h128v320H95V96zM31 480h32V32H31v448zM255 95v320h128V95H255z" />',
        viewBox: '0 0 512 512'
    };

    var justifyContentCenterIcon = {
        name: 'justify-content-center',
        content: '<path d="M63 96h128v320H63V96zm160 384h32V32h-32v448zm64-385v320h128V95H287z" />',
        viewBox: '0 0 512 512'
    };

    var justifyContentEndIcon = {
        name: 'justify-content-end',
        content: '<path d="M128 96h128v320H128V96zm320-64v448h32V32h-32zM288 415h128V95H288v320z" />',
        viewBox: '0 0 512 512'
    };

    var justifyContentBetweenIcon = {
        name: 'justify-content-between',
        content: '<path d="M63 96h128v320H63V96zm416-64v448h32V32h-32zM319 415h128V95H319v320zM-1 480h32V32H-1v448z" />',
        viewBox: '0 0 512 512'
    };

    var justifyContentAroundIcon = {
        name: 'justify-content-around',
        content: '<path d="M95 96h128v320H95V96zm384-64v448h32V32h-32zM287 415h128V95H287v320zM-1 480h32V32H-1v448z" />',
        viewBox: '0 0 512 512'
    };

    var justifyContentStartAltIcon = {
        name: 'justify-content-start-alt',
        content: '<path d="M415 224H95V96h320v128zM31 32v32h448V32H31zm65 352h320V256H96v128z" />',
        viewBox: '0 0 512 512'
    };

    var justifyContentCenterAltIcon = {
        name: 'justify-content-center-alt',
        content: '<path d="M415 192H95V64h320v128zM31 224v32h448v-32H31zm65 192h320V288H96v128z" />',
        viewBox: '0 0 512 512'
    };

    var justifyContentEndAltIcon = {
        name: 'justify-content-end-alt',
        content: '<path d="M415 257H95V129h320v128zM31 449v32h448v-32H31zm65-32h320V289H96v128z" />',
        viewBox: '0 0 512 512'
    };

    var justifyContentBetweenAltIcon = {
        name: 'justify-content-between-alt',
        content: '<path d="M95 64h320v128H95V64zM31 512h448v-32H31v32zm65-64h320V320H96v128zM31 0v32h448V0H31z" />',
        viewBox: '0 0 512 512'
    };

    var justifyContentAroundAltIcon = {
        name: 'justify-content-around-alt',
        content: '<path d="M95 96h320v128H95V96zM31 512h448v-32H31v32zm65-96h320V288H96v128zM31 0v32h448V0H31z" />',
        viewBox: '0 0 512 512'
    };

    var fileWrenchIcon = {
        name: 'file-wrench',
        content: '<path d="M470.7 480 448 502.7c-12.4 12.4-32.8 12.4-45.1-.1l-93.1-93.1c-11.8 4.2-24.5 6.5-37.8 6.5-61.9 0-112-50.1-112-112 0-13.2 2.3-25.9 6.5-37.6l48.9 48.9c12.4 12.4 32.8 12.4 45.3 0l22.6-22.6c12.4-12.4 12.4-32.8 0-45.3l-48.9-48.9c11.8-4.2 24.4-6.5 37.6-6.5 61.9 0 112 50.1 112 112 0 13.2-2.3 25.9-6.5 37.6l93.2 93.1c12.4 12.5 12.4 32.9 0 45.3zm-22.8-23-86.3-86.3c-6.4 8.6-14 16.2-22.6 22.6l86.4 86.3 22.6-22.5v-.1h-.1zM96 64h224v96h96v128h32V128l-96-96H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h160v-32H96V64z" />',
        viewBox: '0 0 512 512'
    };

    var boldIcon = {
        name: 'bold',
        content: '<path d="M128 96h115.8c25.3 0 44.2 1.1 56.6 3.2 12.4 2.1 23.6 6.5 33.4 13.2 9.8 6.7 18 15.6 24.6 26.7 6.6 11.1 9.8 23.6 9.8 37.4 0 15-4.1 28.7-12.1 41.2-8.1 12.5-19.1 21.9-32.9 28.2 19.5 5.7 34.5 15.4 45 29s15.7 29.8 15.7 48.2c0 14.6-3.4 28.7-10.2 42.4-6.7 13.8-16 24.8-27.7 33s-26.1 13.3-43.3 15.2c-10.8 1.2-36.7 1.9-78 2.2H128V96zm64 53v74h30.9c25.2 0 40.8-.4 46.9-1.1 11.1-1.3 19.7-5.2 26.1-11.5 6.3-6.3 9.5-14.7 9.5-25 0-9.9-2.7-18-8.2-24.1-5.5-6.2-13.6-10-24.4-11.2-6.4-.7-24.8-1.1-55.2-1.1H192zm0 127.1V362h48.6c23.4 0 38.1-.7 44.5-2 9.6-1.8 17.5-6 23.6-12.8 6.1-6.8 9-15.9 9-27.3 0-9.6-2.3-17.9-7-24.6-4.7-6.7-11.4-11.6-20.3-14.7-8.8-3.1-28-4.6-57.5-4.6l-40.9.1z" />',
        viewBox: '0 0 512 512'
    };

    var italicIcon = {
        name: 'italic',
        content: '<path d="m377.2 128 6.8-32H198.8l-6.8 32h59.2l-54.4 256h-62l-6.8 32h185.2l6.8-32h-59.2l54.4-256h62z" />',
        viewBox: '0 0 512 512'
    };

    var underlineIcon = {
        name: 'underline',
        content: '<path d="M128 416h256v32H128v-32zM320 64v224c0 11.6-3.5 16-10.3 20.3-11.8 7.4-31.3 11.7-53.7 11.7s-41.9-4.3-53.7-11.7c-6.8-4.3-10.3-8.7-10.3-20.3V64h-64v224c0 70.4 64.3 96 128 96s128-25.6 128-96V64h-64z" />',
        viewBox: '0 0 512 512'
    };

    var fontFamilyIcon = {
        name: 'font-family',
        content: '<path d="M224 416V160h-95l-.8-64H384v64h-96v256h-64z" />',
        viewBox: '0 0 512 512'
    };

    var foregroundColorIcon = {
        name: 'foreground-color',
        content: '<path d="M299.5 96h-87.1L96 416h64l23.3-64h145.4l23.3 64h64L299.5 96zm-92.9 192L256 152.2 305.4 288h-98.8z" />',
        viewBox: '0 0 512 512'
    };

    var convertLowercaseIcon = {
        name: 'convert-lowercase',
        content: '<path d="M480.1 416H436v-36h-.7c-13.8 24-34.1 36-60.8 36-19.7 0-35.1-5.3-46.3-16-11.1-10.7-16.7-24.9-16.7-42.5 0-37.8 21.7-59.9 65.3-66.2l59.4-8.4c0-28.6-13.5-42.8-40.7-42.8-23.8 0-45.4 8.2-64.5 24.7V225c21.1-12.5 45.5-18.8 73.1-18.8 50.6 0 75.9 25 75.9 74.8v135h.1zM436 313.1l-42 5.9c-13 1.7-22.8 4.9-29.4 9.5s-9.9 12.7-9.9 24.3c0 8.5 3 15.4 9.1 20.8s14.2 8.1 24.3 8.1c13.8 0 25.2-4.8 34.3-14.5 9-9.7 13.6-21.9 13.6-36.6v-17.5zM240 416h48L184 96h-48L32 416h48l26-80h108l26 80zM121.6 288 160 169.8 198.4 288h-76.8z" />',
        viewBox: '0 0 512 512'
    };

    var convertUppercaseIcon = {
        name: 'convert-uppercase',
        content: '<path d="M200.1 416H156v-36h-.7c-13.8 24-34.1 36-60.8 36-19.7 0-35.1-5.3-46.3-16-11.1-10.7-16.7-24.9-16.7-42.5 0-37.8 21.7-59.9 65.3-66.2l59.4-8.4c0-28.6-13.5-42.8-40.7-42.8-23.8 0-45.4 8.2-64.5 24.7V225c21.1-12.5 45.5-18.8 73.1-18.8 50.6 0 75.9 25 75.9 74.8v135h.1zM157 313.1l-42 5.9c-13 1.7-22.8 4.9-29.4 9.5s-9.9 12.7-9.9 24.3c0 8.5 3 15.4 9.1 20.8s14.2 8.1 24.3 8.1c13.8 0 25.2-4.8 34.3-14.5 9-9.7 13.6-21.9 13.6-36.6v-17.5zM432 416h48L376 96h-48L224 416h48l26-80h108l26 80zM313.6 288 352 169.8 390.4 288h-76.8z" />',
        viewBox: '0 0 512 512'
    };

    var strikethroughIcon = {
        name: 'strikethrough',
        content: '<path d="M393.9 320c.1-23.9 4.5-41.4 13.5-52.5 9.1-11.1 20.8-16.7 35.3-16.7 9.6 0 17.7 3.1 24.5 9.3 6.8 6.2 11.4 15.4 14.1 27.7l27.9-4.7c-3.3-18.4-10.8-32.7-22.5-42.7s-26.8-15-45.2-15c-14.5 0-28.1 3.6-40.4 11.1-12.4 7.4-21.6 18.5-27.7 33.2-5.9 14.4-8.9 31.2-9.1 50.4h-25.5v-2.2c0-13.2-1.7-25.6-5.1-37.1-3.4-11.5-8.1-21.4-14.2-29.6-6-8.1-13.7-14.5-23-19s-19.2-6.8-29.6-6.8c-18.9 0-34.3 8.2-46.4 24.6v-90H192v160h-45v-25.8c0-13.7-.5-23.3-1.4-28.5-1.7-8.5-4.7-15.5-9-21.1-4.3-5.5-10.9-10.2-19.9-13.8-9-3.6-20.8-5.5-35.3-5.5-14.6 0-27.4 2.1-38.5 6.4-11.1 4.3-19.5 10.4-25.4 18.4-5.8 8-10 18.4-12.6 31.4l28.1 4.1c3.1-13 7.8-22 14.3-27.1s16.4-7.7 29.9-7.7c14.5 0 25.4 3.5 32.7 10.5 5.4 5.1 8.1 14 8.1 26.6 0 1.1 0 3.8-.2 8.1-11 4.1-28 7.7-51.2 10.7-11.4 1.5-19.9 3-25.5 4.7-6.7 2-12.9 4.9-18.5 8.6H0v32h1.2c-.8 3.8-1.2 7.7-1.2 11.8 0 15.2 5 27.8 15 37.6S39.3 416 57.9 416c11.3 0 21.8-1.9 31.6-6s20.1-10.9 30.7-20.6h.1c.8 8.6 2.7 20.3 5.7 26.7h30c-3.6-7-6-18.4-7.3-26.1-1-6-1.6-18.7-1.8-37.9h45v64h26.6V389c11.4 18 27.1 27 47.1 27 20.1 0 37.3-8.5 51.7-25.6 8.6-10.2 14.6-23 18-38.3h31.8c3.3 16 9.4 29.2 18.3 39.5 14.1 16.3 32.7 24.5 55.9 24.5 18.5 0 34.1-6 46.8-17.8 12.1-11.3 19.8-26.7 23.2-46.2h.5v-32H393.9zm-280.7 42.6c-4.1 9-10.4 16.1-19 21.4-8.6 5.2-18.4 7.8-29.5 7.8-11.2 0-19.6-2.8-25.4-8.2-5.8-5.6-8.7-12.4-8.7-20.7 0-3.9.7-7.5 2.1-10.9h83.6c-.7 4.1-1.8 7.7-3.1 10.6zm105.1-43.3c0-22.2 4.6-39.2 13.7-50.9 9.1-11.8 20-17.6 32.5-17.6s23.1 5.6 31.8 17c8.8 11.3 13.1 28.7 13.2 52.3h-91.3c.1-.3.1-.6.1-.8zm77.6 53.6c-9.1 11.8-20 17.7-32.5 17.7-15.5 0-27.7-8-36.7-23.9-2.2-3.9-4-8.8-5.3-14.7H306c-2.4 8.3-5.7 15.3-10.1 20.9zm173.5 6.6c-7.5 7.5-16.9 11.2-28.2 11.2-14 0-25.4-5.6-34.1-16.7-4.4-5.6-7.7-12.9-9.9-21.9h85.5c-2.6 11.9-7 21.1-13.3 27.4z" />',
        viewBox: '0 0 512 512'
    };

    var subscriptIcon = {
        name: 'subscript',
        content: '<path d="m198.6 304 89.4 89.4-22.6 22.6-89.4-89.4L86.6 416 64 393.4l89.4-89.4L64 214.6 86.6 192l89.4 89.4 89.4-89.4 22.6 22.6-89.4 89.4zm167.7 144h81.4v32H320v-11.9c0-8 1.7-15.3 5-21.7 3.3-6.4 7.5-12.1 12.5-17.2s10.5-9.6 16.4-13.5c5.9-3.9 11.6-7.4 16.9-10.6 5.6-3.3 10.6-6.4 14.8-9.4 4.2-3 7.8-6 10.7-8.9 2.9-3 5.1-6 6.5-9 1.4-3 2.1-6.3 2.1-9.7 0-6.7-2.3-11.8-7-15.3-4.6-3.4-11.7-5.2-21.3-5.2-16.5 0-32.3 5.4-47.4 16.1v-30.5c16.7-8.9 35.5-13.3 56.5-13.3 9.7 0 18.5 1 26.2 3.1 7.7 2.1 14.3 5.1 19.6 8.9 5.4 3.9 9.4 8.6 12.3 14.1 2.8 5.5 4.2 11.7 4.2 18.5 0 7.2-1.4 13.7-4.1 19.3-2.7 5.6-6.3 10.8-10.8 15.4-4.5 4.6-9.7 8.8-15.6 12.7-5.9 3.8-12 7.6-18.3 11.1-4.3 2.5-8.4 5-12.4 7.4-4 2.5-7.5 4.9-10.5 7.2-3.1 2.6-7.1 6.6-10 10.4z" />',
        viewBox: '0 0 512 512'
    };

    var supscriptIcon = {
        name: 'supscript',
        content: '<path d="m198.6 304 89.4 89.4-22.6 22.6-89.4-89.4L86.6 416 64 393.4l89.4-89.4L64 214.6 86.6 192l89.4 89.4 89.4-89.4 22.6 22.6-89.4 89.4zm167.7-112h81.4v32H320v-11.9c0-8 1.7-15.3 5-21.7s7.5-12.1 12.5-17.2 10.5-9.6 16.4-13.5 11.6-7.4 16.9-10.6c5.6-3.3 10.6-6.4 14.8-9.4 4.2-3 7.8-6 10.7-8.9 2.9-3 5.1-6 6.5-9s2.1-6.3 2.1-9.7c0-6.7-2.3-11.8-7-15.3-4.6-3.4-11.7-5.2-21.3-5.2-16.5 0-32.3 5.4-47.4 16.1V77.3c16.7-8.9 35.5-13.3 56.5-13.3 9.7 0 18.5 1 26.2 3.1s14.3 5.1 19.6 8.9c5.4 3.9 9.4 8.6 12.3 14.1 2.8 5.5 4.2 11.7 4.2 18.5 0 7.2-1.4 13.7-4.1 19.3-2.7 5.6-6.3 10.8-10.8 15.4-4.5 4.6-9.7 8.8-15.6 12.7-5.9 3.8-12 7.6-18.3 11.1-4.3 2.5-8.4 5-12.4 7.4-4 2.5-7.5 4.9-10.5 7.2-3.1 2.5-7.1 6.5-10 10.3z" />',
        viewBox: '0 0 512 512'
    };

    var divIcon = {
        name: 'div',
        content: '<path d="M0 416v-6h7.1c7.9 0 13.6-3 16.9-9.1 2-3.6 3-11.8 3-24.5V231.6c0-14-1.3-22.8-3.9-26.3-3.6-4.9-9-7.3-16.1-7.3H0v-6h77.6c28.5 0 50.2 3.8 65 11.4 14.9 7.6 26.8 20.3 35.8 38 9 17.7 13.6 38.2 13.6 61.5 0 31.2-8.1 57.2-24.2 78.1-18.1 23.3-45.6 35-82.6 35H0zm54-16.2c11.9 3.1 21.9 4.6 29.9 4.6 21.7 0 39.8-9 54.1-26.9 14.3-17.9 21.5-42.3 21.5-73 0-30.9-7.2-55.3-21.5-73.2-14.3-17.8-32.8-26.8-55.2-26.8-8.4 0-18 1.6-28.8 4.8v190.5zM298 410v6h-83v-6h6.7c7.8 0 13.5-2.7 17-8.1 2.2-3.5 3.3-12 3.3-25.5V231.6c0-11.4-.6-18.9-1.8-22.5-.9-2.8-2.8-5.1-5.7-7.1-4.1-2.6-8.4-4-12.8-4H215v-6h83v6h-7c-7.9 0-13.7 2.7-17.4 8.1-2.4 3.5-3.6 12-3.6 25.5v144.9c0 11.4.6 18.9 1.9 22.5 1 2.8 3 5.1 6 7.1 4.1 2.6 8.5 4 13.1 4h7zm214-218v6c-6.4 1.4-11.3 3.9-14.6 7.4-4.7 5.3-8.9 13.4-12.6 24.2L421.6 416h-4.9l-67.9-188.8c-3.5-9.7-5.9-15.6-7.4-17.8-2.2-3.3-5-5.9-8.2-7.8-3.3-1.9-7.6-3.1-13.2-3.6v-6h74v6c-8.4 1-13.8 2.7-16.3 5.2s-3.7 5.7-3.7 9.5c0 5.4 2 13.8 6.1 25.2l46.1 128.4L469 239.5c4.2-12.5 6.3-21.2 6.3-26 0-3.1-1.3-6.1-3.9-9-2.6-2.9-6.9-4.9-13.1-6.1-.4-.1-1.2-.3-2.3-.5v-6h56zm0-96H0v32h512V96z" />',
        viewBox: '0 0 512 512'
    };

    var allIcon = {
        name: 'all',
        content: '<path d="M120.1 343H52l-12 34.4c-2.9 8.5-4.4 14.8-4.4 19 0 3.3 1.3 6.2 3.8 8.8s8.1 4.2 16.5 4.9v5.9H0v-6c7.4-1.6 12.2-3.7 14.4-6.3 4.4-5.2 9.4-15.7 14.8-31.5L91.4 192H96l61.6 182.2c5 14.6 9.5 24.1 13.5 28.5 4 4.4 9.7 6.8 16.9 7.3v6h-70v-5.9c7-.4 11.7-1.9 14.2-4.3 2.5-2.5 3.7-5.5 3.7-9 0-4.7-1.7-12.2-5.2-22.3L120.1 343zm-3.5-12-30-88.5L55.8 331h60.8zm227.7 23.1 4.3 1.2-15.1 60.7H197v-6h6.5c7.4 0 12.6-3.1 15.8-9.3 1.8-3.5 2.7-11.7 2.7-24.5V222.7c0-14-1.2-13.9-3.6-17.5-3.3-4.9-8.3-7.3-14.9-7.3H196v-6h80v6.1s-15.4 1-19.2 3.3c-3.8 2.3-6.4 5.2-7.8 8.8-1.4 3.5-2.1 3.1-2 16.5v149.6c-.1 9.1.6 15.4 2 18.8 1 2.3 2.7 4 4.8 5.1 2.2 1.1 9 1.7 20.4 1.9h12.9c13.6-.2 23.1-1.5 28.6-4s10.5-7 15-13.5 9.1-16.6 13.6-30.4zm163.4 0 4.3 1.2-15.1 60.7H360v-6h6.5c7.4 0 12.6-3.1 15.8-9.3 1.8-3.5 2.7-11.7 2.7-24.5V222.7c0-14-1.2-13.9-3.6-17.5-3.3-4.9-8.3-7.3-14.9-7.3H360v-6h80v6.1s-16.1 1-19.9 3.3-6.4 5.2-7.8 8.8c-1.4 3.5-2.1 3.1-2.4 16.5v149.6c.3 9.1 1 15.4 2.4 18.8 1 2.3 2.7 4 4.8 5.1s9 1.7 20.4 1.9h12.9c13.6-.2 23.1-1.5 28.6-4s10.5-7 15-13.5 9.2-16.6 13.7-30.4zM512 96H0v32h512V96z" />',
        viewBox: '0 0 512 512'
    };

    var h1Icon = {
        name: 'h1',
        content: '<path d="M128 288h96v-57c0-11.2-.7-18.6-2.1-22.2-1.1-2.7-3.3-5-6.8-7-4.6-2.6-10.1-3.9-15.3-3.9H192v-6h96v6h-7.7c-5.1 0-10 1.2-14.5 3.7-3.4 1.7-5.7 4.3-7 7.8-1.2 3.5-1.8 10.7-1.8 28.3V384c0 4.3.7 11.6 2.1 15.2 1.1 2.7 3.2 5 6.6 7 4.7 2.6 9.6 3.9 14.7 3.9h7.7v6h-96v-6h7.7c9 0 16.2-2.6 20.3-7.9 2.7-3.5 4.1-11.8 4.1-24.9V304h-96v73.1c0 11.1.7 18.4 2.1 22 1.1 2.7 3.4 5 6.8 7 4.7 2.6 9.6 3.9 14.8 3.9h8.3v6H64v-6h7.8c9.1 0 16.2-2.6 20.3-7.9 2.6-3.5 3.9-11.8 3.9-18.1V237.9c0-18.1-.7-25.5-2.1-29-1.1-2.7-3.3-5-6.6-7-4.8-2.6-10.3-3.9-15.5-3.9H64v-6h96v6h-8c-5.3 0-10.2 1.2-14.9 3.7-3.4 1.7-5.7 4.3-7.1 7.8-1.3 3.5-2 10.7-2 21.4V288zm192-69.9 63-26.1h1v185.3c0 12.3.5 20 1.5 23s3.2 5.3 6.4 7 14.1 2.5 24.1 2.8v6h-96v-6c10.4-.2 20.9-1.1 23.9-2.7s5.1-3.7 6.3-6.3c1.2-2.6 1.8-10.5 1.8-23.7V258.8c0-16-.5-26.2-1.6-30.8-.8-3.5-2.1-6-4.1-7.6-2-1.6-4.4-2.4-7.2-2.4-4 0-9.5 1.7-16.7 5l-2.4-4.9zM512 96H0v32h512V96z" />',
        viewBox: '0 0 512 512'
    };

    var h2Icon = {
        name: 'h2',
        content: '<path d="M128 288h96v-57c0-11.2-.7-18.6-2.1-22.2-1.1-2.7-3.3-5-6.8-7-4.6-2.6-10.1-3.9-15.3-3.9H192v-6h96v6h-7.7c-5.1 0-10 1.2-14.5 3.7-3.4 1.7-5.7 4.3-7 7.8-1.2 3.5-1.8 10.7-1.8 28.3V384c0 4.3.7 11.6 2.1 15.2 1.1 2.7 3.2 5 6.6 7 4.7 2.6 9.6 3.9 14.7 3.9h7.7v6h-96v-6h7.7c9 0 16.2-2.6 20.3-7.9 2.7-3.5 4.1-11.8 4.1-24.9V304h-96v73.1c0 11.1.7 18.4 2.1 22 1.1 2.7 3.4 5 6.8 7 4.7 2.6 9.6 3.9 14.8 3.9h8.3v6H64v-6h7.8c9.1 0 16.2-2.6 20.3-7.9 2.6-3.5 3.9-11.8 3.9-18.1V237.9c0-18.1-.7-25.5-2.1-29-1.1-2.7-3.3-5-6.6-7-4.8-2.6-10.3-3.9-15.5-3.9H64v-6h96v6h-8c-5.3 0-10.2 1.2-14.9 3.7-3.4 1.7-5.7 4.3-7.1 7.8-1.3 3.5-2 10.7-2 21.4V288zm336 86-15.3 42H320v-5.5c38.2-34.9 65.1-63.3 80.7-85.4 15.6-22.1 23.4-42.3 23.4-60.6 0-14-4.3-25.4-12.8-34.4-8.6-9-18.8-13.5-30.7-13.5-10.8 0-20.5 3.2-29.1 9.5-8.6 6.3-15 15.6-19.1 27.8h-6c2.7-20 9.7-35.4 20.9-46.1 11.2-10.7 25.2-16.1 42-16.1 17.9 0 32.8 5.7 44.7 17.2 12 11.5 17.9 25 17.9 40.6 0 11.1-2.6 22.3-7.8 33.4-8 17.5-21 36.1-39 55.7-27 29.4-43.8 47.2-50.5 53.3h56.9c11.8 0 20-.4 24.8-1.3 4.7-.9 9-2.6 12.8-5.3 3.8-2.7 7.1-6.5 10-11.4l4.9.1zm48-278H0v32h512V96z" />',
        viewBox: '0 0 512 512'
    };

    var h3Icon = {
        name: 'h3',
        content: '<path d="M128 288h96v-57c0-11.2-.7-18.6-2.1-22.2-1.1-2.7-3.3-5-6.8-7-4.6-2.6-10.1-3.9-15.3-3.9H192v-6h96v6h-7.7c-5.1 0-10 1.2-14.5 3.7-3.4 1.7-5.7 4.3-7 7.8-1.2 3.5-1.8 10.7-1.8 28.3V384c0 4.3.7 11.6 2.1 15.2 1.1 2.7 3.2 5 6.6 7 4.7 2.6 9.6 3.9 14.7 3.9h7.7v6h-96v-6h7.7c9 0 16.2-2.6 20.3-7.9 2.7-3.5 4.1-11.8 4.1-24.9V304h-96v73.1c0 11.1.7 18.4 2.1 22 1.1 2.7 3.4 5 6.8 7 4.7 2.6 9.6 3.9 14.8 3.9h8.3v6H64v-6h7.8c9.1 0 16.2-2.6 20.3-7.9 2.6-3.5 3.9-11.8 3.9-18.1V237.9c0-18.1-.7-25.5-2.1-29-1.1-2.7-3.3-5-6.6-7-4.8-2.6-10.3-3.9-15.5-3.9H64v-6h96v6h-8c-5.3 0-10.2 1.2-14.9 3.7-3.4 1.7-5.7 4.3-7.1 7.8-1.3 3.5-2 10.7-2 21.4V288zm195.6-50.6c6.4-14.5 14.5-25.7 24.3-33.6 9.8-7.9 22-11.9 36.6-11.9 18 0 31.9 5.6 41.5 16.9 7.3 8.4 11 17.3 11 26.9 0 15.7-10.3 31.9-30.9 48.7 13.8 5.2 24.3 12.6 31.4 22.3 7.1 9.7 10.6 21 10.6 34 0 18.7-6.2 34.8-18.6 48.5-16.2 17.8-39.6 26.7-70.2 26.7-15.2 0-25.5-1.8-31-5.4s-8.2-7.5-8.2-11.6c0-3.1 1.3-5.8 3.9-8.1 2.6-2.3 5.7-3.5 9.4-3.5 2.8 0 5.6.4 8.5 1.3 1.9.5 6.1 2.5 12.8 5.8 6.6 3.3 11.2 5.3 13.8 6 4.1 1.2 8.5 1.8 13.1 1.8 11.3 0 21.1-4.2 29.5-12.6s12.5-18.3 12.5-29.8c0-8.4-1.9-16.5-5.8-24.5-2.9-5.9-6-10.4-9.5-13.5-4.8-4.2-11.3-8.1-19.6-11.5s-16.8-5.2-25.4-5.2H358v-4.8c8.7-1.1 17.5-4.1 26.3-9.1s15.2-11 19.2-18 6-14.7 6-23.1c0-10.9-3.6-19.8-10.7-26.5s-16-10.1-26.6-10.1c-17.2 0-31.5 8.8-43 26.4l-5.6-2.5zM512 96H0v32h512V96z" />',
        viewBox: '0 0 512 512'
    };

    var h4Icon = {
        name: 'h4',
        content: '<path d="M128 288h96v-57c0-11.2-.7-18.6-2.1-22.2-1.1-2.7-3.3-5-6.8-7-4.6-2.6-10.1-3.9-15.3-3.9H192v-6h96v6h-7.7c-5.1 0-10 1.2-14.5 3.7-3.4 1.7-5.7 4.3-7 7.8-1.2 3.5-1.8 10.7-1.8 28.3V384c0 4.3.7 11.6 2.1 15.2 1.1 2.7 3.2 5 6.6 7 4.7 2.6 9.6 3.9 14.7 3.9h7.7v6h-96v-6h7.7c9 0 16.2-2.6 20.3-7.9 2.7-3.5 4.1-11.8 4.1-24.9V304h-96v73.1c0 11.1.7 18.4 2.1 22 1.1 2.7 3.4 5 6.8 7 4.7 2.6 9.6 3.9 14.8 3.9h8.3v6H64v-6h7.8c9.1 0 16.2-2.6 20.3-7.9 2.6-3.5 3.9-11.8 3.9-18.1V237.9c0-18.1-.7-25.5-2.1-29-1.1-2.7-3.3-5-6.6-7-4.8-2.6-10.3-3.9-15.5-3.9H64v-6h96v6h-8c-5.3 0-10.2 1.2-14.9 3.7-3.4 1.7-5.7 4.3-7.1 7.8-1.3 3.5-2 10.7-2 21.4V288zm341 47v23h-29v58h-27v-58h-93v-20.7L422.1 192H440v143h29zm-56 0V226.1L336 335h77zm99-239H0v32h512V96z" />',
        viewBox: '0 0 512 512'
    };

    var h5Icon = {
        name: 'h5',
        content: '<path d="M128 288h96v-57c0-11.2-.7-18.6-2.1-22.2-1.1-2.7-3.3-5-6.8-7-4.6-2.6-10.1-3.9-15.3-3.9H192v-6h96v6h-7.7c-5.1 0-10 1.2-14.5 3.7-3.4 1.7-5.7 4.3-7 7.8-1.2 3.5-1.8 10.7-1.8 28.3V384c0 4.3.7 11.6 2.1 15.2 1.1 2.7 3.2 5 6.6 7 4.7 2.6 9.6 3.9 14.7 3.9h7.7v6h-96v-6h7.7c9 0 16.2-2.6 20.3-7.9 2.7-3.5 4.1-11.8 4.1-24.9V304h-96v73.1c0 11.1.7 18.4 2.1 22 1.1 2.7 3.4 5 6.8 7 4.7 2.6 9.6 3.9 14.8 3.9h8.3v6H64v-6h7.8c9.1 0 16.2-2.6 20.3-7.9 2.6-3.5 3.9-11.8 3.9-18.1V237.9c0-18.1-.7-25.5-2.1-29-1.1-2.7-3.3-5-6.6-7-4.8-2.6-10.3-3.9-15.5-3.9H64v-6h96v6h-8c-5.3 0-10.2 1.2-14.9 3.7-3.4 1.7-5.7 4.3-7.1 7.8-1.3 3.5-2 10.7-2 21.4V288zm320-96-12.6 28h-66L355 249.1c28.6 4.2 51.2 14.9 68 32 14.3 14.7 21.5 32 21.5 51.9 0 11.6-2.3 22.3-7 32.1s-10.6 18.2-17.7 25.2c-7.1 6.9-15 12.5-23.8 16.7-12.4 6-25.1 8.9-38.2 8.9-13.2 0-22.7-2.2-28.7-6.7s-9-9.4-9-14.9c0-3 1.2-5.7 3.7-8s5.6-3.5 9.4-3.5c2.8 0 5.3.4 7.4 1.3 2.1.9 5.7 3.1 10.8 6.7 8.1 5.6 16.3 8.4 24.6 8.4 12.6 0 23.7-4.8 33.3-14.4s14.3-21.2 14.3-35c0-13.3-4.3-25.7-12.8-37.3-8.5-11.5-20.3-20.4-35.3-26.7-11.8-4.9-27.8-7.7-48.1-8.4l42.1-85.5H448zm64-96H0v32h512V96z" />',
        viewBox: '0 0 512 512'
    };

    var h6Icon = {
        name: 'h6',
        content: '<path d="M128 288h96v-57c0-11.2-.7-18.6-2.1-22.2-1.1-2.7-3.3-5-6.8-7-4.6-2.6-10.1-3.9-15.3-3.9H192v-6h96v6h-7.7c-5.1 0-10 1.2-14.5 3.7-3.4 1.7-5.7 4.3-7 7.8-1.2 3.5-1.8 10.7-1.8 28.3V384c0 4.3.7 11.6 2.1 15.2 1.1 2.7 3.2 5 6.6 7 4.7 2.6 9.6 3.9 14.7 3.9h7.7v6h-96v-6h7.7c9 0 16.2-2.6 20.3-7.9 2.7-3.5 4.1-11.8 4.1-24.9V304h-96v73.1c0 11.1.7 18.4 2.1 22 1.1 2.7 3.4 5 6.8 7 4.7 2.6 9.6 3.9 14.8 3.9h8.3v6H64v-6h7.8c9.1 0 16.2-2.6 20.3-7.9 2.6-3.5 3.9-11.8 3.9-18.1V237.9c0-18.1-.7-25.5-2.1-29-1.1-2.7-3.3-5-6.6-7-4.8-2.6-10.3-3.9-15.5-3.9H64v-6h96v6h-8c-5.3 0-10.2 1.2-14.9 3.7-3.4 1.7-5.7 4.3-7.1 7.8-1.3 3.5-2 10.7-2 21.4V288zm316-96v5.9c-13.1 1.4-23.9 4.2-32.2 8.4s-16.5 10.6-24.6 19.2c-8.1 8.6-14.8 18.2-20.2 28.7-5.3 10.6-9.8 23.1-13.4 37.6 14.3-10.5 28.7-15.8 43.2-15.8 13.8 0 25.8 5.9 36 17.8S448 321 448 339.6c0 18-5.1 34.5-15.4 49.3-12.3 18-28.7 27-49 27-13.8 0-25.6-4.9-35.2-14.6-18.9-19-28.4-43.6-28.4-73.8 0-19.3 3.6-37.7 10.9-55s17.6-32.8 31.1-46.3 26.4-22.5 38.8-27.2 23.8-7 34.5-7h8.7zm-92.9 111.4c-1.8 14.3-2.7 25.9-2.7 34.7 0 10.2 1.8 21.2 5.3 33.2 3.5 11.9 8.8 21.4 15.8 28.4 5.1 5 11.3 7.5 18.5 7.5 8.7 0 16.4-4.3 23.2-13 6.8-8.7 10.2-21.1 10.2-37.2 0-18.1-3.4-33.8-10.2-47.1S394.8 290 382.4 290c-3.8 0-7.8.8-12.2 2.5-4.3 1.6-10.7 5.2-19.1 10.9zM512 96H0v32h512V96z" />',
        viewBox: '0 0 512 512'
    };

    var listOrderedIcon = {
        name: 'list-ordered',
        content: '<path d="M192 64h288v32H192V64zm0 160h288v32H192v-32zm0 160h288v32H192v-32zM96 32v128H64V64c-1.5 1.3-14.9 7.8-22.1 10V50.8c7.2-2.1 13.9-4.8 20.3-8 6.3-3.3 12.1-6.8 17.2-10.7L96 32zM66.7 297h61.1v23H32v-9.5c0-6.4 1.2-12.2 3.7-17.3 2.5-5.1 5.6-9.7 9.3-13.8 3.7-4.1 7.8-7.7 12.3-10.8 4.5-3.1 8.7-6 12.7-8.5 4.2-2.6 7.9-5.1 11.1-7.6 3.2-2.4 5.9-4.8 8-7.2 2.2-2.4 3.8-4.8 4.9-7.2s1.6-5 1.6-7.8c0-5.4-1.7-9.5-5.2-12.2-3.5-2.8-8.8-4.1-16-4.1-12.4 0-24.2 4.3-35.5 12.9v-24.4c12.5-7.1 26.6-10.6 42.4-10.6 7.3 0 13.8.8 19.6 2.5 5.8 1.7 10.7 4.1 14.7 7.2 4 3.1 7.1 6.9 9.2 11.3 2.1 4.4 3.2 9.3 3.2 14.8 0 5.8-1 10.9-3.1 15.5-2 4.5-4.8 8.6-8.1 12.3-3.4 3.7-7.3 7.1-11.7 10.1-4.4 3.1-9 6-13.8 8.9-3.2 2-6.3 4-9.3 5.9-3 2-5.6 3.9-7.9 5.8s-4.1 3.8-5.4 5.6c-1.3 1.8-2 3.6-2 5.2zM32 473.8V450c10.1 6 21.8 9.1 35.3 9.1 8.5 0 15.1-1.5 19.8-4.5 4.7-3 7.1-7.2 7.1-12.5 0-5.5-2.9-9.8-8.8-12.8-5.8-3-13.9-4.5-24.1-4.5h-14V404h12.9c19.6 0 29.4-5.4 29.4-16.1 0-10.1-7.5-15.1-22.6-15.1-10.1 0-19.9 2.7-29.4 8v-22.3c10.6-4.4 22.9-6.6 37-6.6 15.4 0 27.4 2.8 36 8.5s12.9 13.1 12.9 22.2c0 16.2-10 26.3-29.9 30.4v.4c10.6 1.1 19 4.3 25.2 9.5 6.2 5.3 9.2 11.7 9.2 19.4 0 11.6-5.1 20.7-15.4 27.4S88.1 480 69.9 480c-15.5 0-28.2-2.1-37.9-6.2z" />',
        viewBox: '0 0 512 512'
    };

    var listUnorderedIcon = {
        name: 'list-unordered',
        content: '<path d="M192 64h288v32H192V64zm0 160h288v32H192v-32zm0 160h288v32H192v-32zM80 32c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 160c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 160c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" />',
        viewBox: '0 0 512 512'
    };

    var indentIcon = {
        name: 'indent',
        content: '<path d="M480 64H32V32h448v32zm0 32H224v32h256V96zm0 64H224v32h256v-32zm0 64H224v32h256v-32zm0 64H224v32h256v-32zm0 64H224v32h256v-32zm0 64H32v32h448v-32zM160 240 32 128v224l128-112z" />',
        viewBox: '0 0 512 512'
    };

    var outdentIcon = {
        name: 'outdent',
        content: '<path d="M480 64H32V32h448v32zm0 32H224v32h256V96zm0 64H224v32h256v-32zm0 64H224v32h256v-32zm0 64H224v32h256v-32zm0 64H224v32h256v-32zm0 64H32v32h448v-32zm-320-64V128L32 240l128 112z" />',
        viewBox: '0 0 512 512'
    };

    var insertTopIcon = {
        name: 'insert-top',
        content: '<path d="M192 320h192v32H192v-32zm0-128h288v-32H192v32zm192 64H192v32h192v-32zM32 64v224l96-112L32 64z" />',
        viewBox: '0 0 512 512'
    };

    var insertMiddleIcon = {
        name: 'insert-middle',
        content: '<path d="M192 128h192v32H192v-32zm0 128h288v-32H192v32zm192 64H192v32h192v-32zM32 128v224l96-112-96-112z" />',
        viewBox: '0 0 512 512'
    };

    var insertBottomIcon = {
        name: 'insert-bottom',
        content: '<path d="M192 224h192v32H192v-32zm0 128h288v-32H192v32zm192-192H192v32h192v-32zM32 224v224l96-112-96-112z" />',
        viewBox: '0 0 512 512'
    };

    var alignTopIcon = {
        name: 'align-top',
        content: '<path d="M480 64H32V32h448v32zm-64 32H96v32h320V96zm64 64H32v32h448v-32z" />',
        viewBox: '0 0 512 512'
    };

    var alignMiddleIcon = {
        name: 'align-middle',
        content: '<path d="M480 192H32v-32h448v32zm-64 32H96v32h320v-32zm64 64H32v32h448v-32z" />',
        viewBox: '0 0 512 512'
    };

    var alignBottomIcon = {
        name: 'align-bottom',
        content: '<path d="M480 352H32v-32h448v32zm-64 32H96v32h320v-32zm64 64H32v32h448v-32z" />',
        viewBox: '0 0 512 512'
    };

    var alignLeftIcon = {
        name: 'align-left',
        content: '<path d="M448 96H64V64h384v32zm-96 32H64v32h288v-32zm96 64H64v32h384v-32zm-96 64H64v32h288v-32zm96 64H64v32h384v-32zm-96 64H64v32h288v-32z" />',
        viewBox: '0 0 512 512'
    };

    var alignCenterIcon = {
        name: 'align-center',
        content: '<path d="M448 96H64V64h384v32zm-64 64H128v-32h256v32zm64 64H64v-32h384v32zm-64 64H128v-32h256v32zm64 64H64v-32h384v32zm-64 64H128v-32h256v32z" />',
        viewBox: '0 0 512 512'
    };

    var alignRightIcon = {
        name: 'align-right',
        content: '<path d="M64 192h384v32H64v-32zm384-96V64H64v32h384zm-288 64h288v-32H160v32zM64 320v32h384v-32H64zm96-32h288v-32H160v32zm0 96v32h288v-32H160z" />',
        viewBox: '0 0 512 512'
    };

    var alignJustifyIcon = {
        name: 'align-justify',
        content: '<path d="M448 160H64v-32h384v32zm0-96H64v32h384V64zM64 352h384v-32H64v32zm0-64h384v-32H64v32zm0-64h384v-32H64v32zm0 192h384v-32H64v32z" />',
        viewBox: '0 0 512 512'
    };

    var alignRemoveIcon = {
        name: 'align-remove',
        content: '<path d="m78.9 192 32 32H64v-32h14.9zM64 288h110.9l-32-32H64v32zm0 64h174.9l-32-32H64v32zm0 32v32h238.9l-32-32H64zm393.4 96 22.6-22.6-41.4-41.4h9.4v-32h-41.4l-32-32H448v-32H342.6l-32-32H448v-32H278.6l-32-32H448v-32H214.6l-32-32H448v-32H150.6l-32-32H448V64H86.6l-32-32L32 54.6" />',
        viewBox: '0 0 512 512'
    };

    var textWrapIcon = {
        name: 'text-wrap',
        content: '<path d="M480 96v32H96V96h384zM352 256v224H32V256h320zm-32 32H64v160h256V288zm-32 32H96v32h192v-32zm0 96v-32H96v32h192zM64 64h288V32H32v160h320v-32H64V64z" />',
        viewBox: '0 0 512 512'
    };

    var horizontalRuleIcon = {
        name: 'horizontal-rule',
        content: '<path d="M320 96H32V64h288v32zm96 32H32v32h384v-32zm64 96H32v64h448v-64zM320 352H32v32h288v-32zm96 64H32v32h384v-32z" />',
        viewBox: '0 0 512 512'
    };

    var tableAlignTopLeftIcon = {
        name: 'table-align-top-left',
        content: '<path d="M32 480V0h448v480H32zM64 32v416h384V32H64zm32 64h192V64H96v32zm0 64h320v-32H96v32zm0 64h192v-32H96v32z" />',
        viewBox: '0 0 512 512'
    };

    var tableAlignTopCenterIcon = {
        name: 'table-align-top-center',
        content: '<path d="M32 480V0h448v480H32zM64 32v416h384V32H64zm288 32H160v32h192V64zm64 64H96v32h320v-32zm-64 64H160v32h192v-32z" />',
        viewBox: '0 0 512 512'
    };

    var tableAlignTopRightIcon = {
        name: 'table-align-top-right',
        content: '<path d="M32 480V0h448v480H32zM64 32v416h384V32H64zm352 32H224v32h192V64zm0 64H96v32h320v-32zm0 64H224v32h192v-32z" />',
        viewBox: '0 0 512 512'
    };

    var tableAlignMiddleLeftIcon = {
        name: 'table-align-middle-left',
        content: '<path d="M32 480V0h448v480H32zM64 32v416h384V32H64zm32 160h192v-32H96v32zm0 64h320v-32H96v32zm0 64h192v-32H96v32z" />',
        viewBox: '0 0 512 512'
    };

    var tableAlignMiddleCenterIcon = {
        name: 'table-align-middle-center',
        content: '<path d="M32 480V0h448v480H32zM64 32v416h384V32H64zm288 128H160v32h192v-32zm64 64H96v32h320v-32zm-64 64H160v32h192v-32z" />',
        viewBox: '0 0 512 512'
    };

    var tableAlignMiddleRightIcon = {
        name: 'table-align-middle-right',
        content: '<path d="M32 480V0h448v480H32zM64 32v416h384V32H64zm352 128H224v32h192v-32zm0 64H96v32h320v-32zm0 64H224v32h192v-32z" />',
        viewBox: '0 0 512 512'
    };

    var tableAlignBottomLeftIcon = {
        name: 'table-align-bottom-left',
        content: '<path d="M32 480V0h448v480H32zM64 32v416h384V32H64zm32 256h192v-32H96v32zm0 64h320v-32H96v32zm0 64h192v-32H96v32z" />',
        viewBox: '0 0 512 512'
    };

    var tableAlignBottomCenterIcon = {
        name: 'table-align-bottom-center',
        content: '<path d="M32 480V0h448v480H32zM64 32v416h384V32H64zm288 224H160v32h192v-32zm64 64H96v32h320v-32zm-64 64H160v32h192v-32z" />',
        viewBox: '0 0 512 512'
    };

    var tableAlignBottomRightIcon = {
        name: 'table-align-bottom-right',
        content: '<path d="M32 480V0h448v480H32zM64 32v416h384V32H64zm352 224H224v32h192v-32zm0 64H96v32h320v-32zm0 64H224v32h192v-32z" />',
        viewBox: '0 0 512 512'
    };

    var tableAlignRemoveIcon = {
        name: 'table-align-remove',
        content: '<path d="M32 0v480h448V0H32zm416 448H64V32h384v416zM131.6 224l29.9 32H128v-32h3.6zm-3.6 64h63.4l29.9 32H128v-32zm123.1 64 29.9 32H128v-32h123.1zM96 92l22.6-22.6L143.5 96H384v32H173.4l29.9 32H384v32H233.1l29.9 32h121v32h-91.2l29.9 32H384v32h-31.4l63.4 68-22.6 22.6L96 92z" />',
        viewBox: '0 0 512 512'
    };

    var bordersAllIcon = {
        name: 'borders-all',
        content: '<path d="M32 32v416h416V32H32zm32 32h160v160H64V64zm0 352V256h160v160H64zm352 0H256V256h160v160zm0-192H256V64h160v160z" />',
        viewBox: '0 0 512 512'
    };

    var bordersOutsideIcon = {
        name: 'borders-outside',
        content: '<path d="M128 256H96v-32h32v32zm64-32h-32v32h32v-32zm64 0h-32v32h32v-32zm0-64h-32v32h32v-32zm0-64h-32v32h32V96zm0 256h-32v32h32v-32zm0-64h-32v32h32v-32zm64-64h-32v32h32v-32zm64 0h-32v32h32v-32zm64-192v416H32V32h416zm-32 32H64v352h352V64z" />',
        viewBox: '0 0 512 512'
    };

    var bordersInsideIcon = {
        name: 'borders-inside',
        content: '<path d="M64 64H32V32h32v32zm0 32H32v32h32V96zm0 64H32v32h32v-32zm0 128H32v32h32v-32zm0 64H32v32h32v-32zM448 96h-32v32h32V96zm0 64h-32v32h32v-32zm0 128h-32v32h32v-32zm0 64h-32v32h32v-32zM128 32H96v32h32V32zm64 0h-32v32h32V32zM64 416H32v32h32v-32zm64 0H96v32h32v-32zm64 0h-32v32h32v-32zm128 0h-32v32h32v-32zm64 0h-32v32h32v-32zm64 0h-32v32h32v-32zM320 32h-32v32h32V32zm64 0h-32v32h32V32zm64 0h-32v32h32V32zm0 192H256V32h-32v192H32v32h192v192h32V256h192v-32z" />',
        viewBox: '0 0 512 512'
    };

    var bordersInsideHorizontalIcon = {
        name: 'borders-inside-horizontal',
        content: '<path d="M448 224v32H32v-32h416zM64 32H32v32h32V32zm0 96H32V96h32v32zm0 64H32v-32h32v32zm0 128H32v-32h32v32zm0 64H32v-32h32v32zm384-256h-32V96h32v32zm0 64h-32v-32h32v32zm0 128h-32v-32h32v32zm0 64h-32v-32h32v32zM128 64H96V32h32v32zm64 0h-32V32h32v32zm64 0h-32V32h32v32zm0 64h-32V96h32v32zm0 64h-32v-32h32v32zm0 128h-32v-32h32v32zm0 64h-32v-32h32v32zm0 64h-32v-32h32v32zM64 416H32v32h32v-32zm64 32H96v-32h32v32zm64 0h-32v-32h32v32zm128-32h-32v32h32v-32zm64 32h-32v-32h32v32zm64 0h-32v-32h32v32zM320 32h-32v32h32V32zm64 32h-32V32h32v32zm64 0h-32V32h32v32z" />',
        viewBox: '0 0 512 512'
    };

    var bordersInsideVerticalIcon = {
        name: 'borders-inside-vertical',
        content: '<path d="M256 448h-32V32h32v416zM448 64V32h-32v32h32zm-96 0V32h32v32h-32zm-64 0V32h32v32h-32zm-128 0V32h32v32h-32zm-64 0V32h32v32H96zm256 384v-32h32v32h-32zm-64 0v-32h32v32h-32zm-128 0v-32h32v32h-32zm-64 0v-32h32v32H96zm320-320V96h32v32h-32zm0 64v-32h32v32h-32zm0 64v-32h32v32h-32zm-64 0v-32h32v32h-32zm-64 0v-32h32v32h-32zm-128 0v-32h32v32h-32zm-64 0v-32h32v32H96zm-64 0v-32h32v32H32zM64 64V32H32v32h32zm-32 64V96h32v32H32zm0 64v-32h32v32H32zm32 128v-32H32v32h32zm-32 64v-32h32v32H32zm0 64v-32h32v32H32zm416-128v-32h-32v32h32zm-32 64v-32h32v32h-32zm0 64v-32h32v32h-32z" />',
        viewBox: '0 0 512 512'
    };

    var borderTopIcon = {
        name: 'border-top',
        content: '<path d="M448 32v32H32V32h416zM64 96H32v32h32V96zm0 96H32v-32h32v32zm0 64H32v-32h32v32zm0 64H32v-32h32v32zm0 64H32v-32h32v32zm384-192h-32v-32h32v32zm0 64h-32v-32h32v32zm0 64h-32v-32h32v32zm0 64h-32v-32h32v32zM128 256H96v-32h32v32zm64 0h-32v-32h32v32zm64-128h-32V96h32v32zm0 64h-32v-32h32v32zm0 64h-32v-32h32v32zm0 64h-32v-32h32v32zm0 64h-32v-32h32v32zm0 64h-32v-32h32v32zM64 416H32v32h32v-32zm64 32H96v-32h32v32zm64 0h-32v-32h32v32zm128-32h-32v32h32v-32zm64 32h-32v-32h32v32zm64 0h-32v-32h32v32zM320 224h-32v32h32v-32zm64 32h-32v-32h32v32zm64-128h-32V96h32v32z" />',
        viewBox: '0 0 512 512'
    };

    var borderBottomIcon = {
        name: 'border-bottom',
        content: '<path d="M32 448v-32h416v32H32zm32-96H32v32h32v-32zm0-32H32v-32h32v32zm0-64H32v-32h32v32zm0-64H32v-32h32v32zm0-64H32V96h32v32zm384 192h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h-32V96h32v32zM128 256H96v-32h32v32zm64 0h-32v-32h32v32zm64 128h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h-32V96h32v32zm0-64h-32V32h32v32zM64 32H32v32h32V32zm64 32H96V32h32v32zm64 0h-32V32h32v32zm128-32h-32v32h32V32zm64 32h-32V32h32v32zm64 0h-32V32h32v32zM320 224h-32v32h32v-32zm64 32h-32v-32h32v32zm64 128h-32v-32h32v32z" />',
        viewBox: '0 0 512 512'
    };

    var borderLeftIcon = {
        name: 'border-left',
        content: '<path d="M32 32h32v416H32V32zm96 32V32H96v32h32zm32 0V32h32v32h-32zm64 0V32h32v32h-32zm64 0V32h32v32h-32zm64 0V32h32v32h-32zM160 448v-32h32v32h-32zm64 0v-32h32v32h-32zm64 0v-32h32v32h-32zm64 0v-32h32v32h-32zM224 128V96h32v32h-32zm0 64v-32h32v32h-32zM96 256v-32h32v32H96zm64 0v-32h32v32h-32zm64 0v-32h32v32h-32zm64 0v-32h32v32h-32zm64 0v-32h32v32h-32zm64 0v-32h32v32h-32zm32-192V32h-32v32h32zm-32 64V96h32v32h-32zm0 64v-32h32v32h-32zm32 128v-32h-32v32h32zm-32 64v-32h32v32h-32zm0 64v-32h32v32h-32zM256 320v-32h-32v32h32zm-32 64v-32h32v32h-32zM96 448v-32h32v32H96z" />',
        viewBox: '0 0 512 512'
    };

    var borderRightIcon = {
        name: 'border-right',
        content: '<path d="M448 448h-32V32h32v416zM384 64V32h-32v32h32zm-96 0V32h32v32h-32zm-64 0V32h32v32h-32zm-64 0V32h32v32h-32zm-64 0V32h32v32H96zm192 384v-32h32v32h-32zm-64 0v-32h32v32h-32zm-64 0v-32h32v32h-32zm-64 0v-32h32v32H96zm128-320V96h32v32h-32zm0 64v-32h32v32h-32zm128 64v-32h32v32h-32zm-64 0v-32h32v32h-32zm-64 0v-32h32v32h-32zm-64 0v-32h32v32h-32zm-64 0v-32h32v32H96zm-64 0v-32h32v32H32zM64 64V32H32v32h32zm-32 64V96h32v32H32zm0 64v-32h32v32H32zm32 128v-32H32v32h32zm-32 64v-32h32v32H32zm0 64v-32h32v32H32zm224-128v-32h-32v32h32zm-32 64v-32h32v32h-32zm128 64v-32h32v32h-32z" />',
        viewBox: '0 0 512 512'
    };

    var bordersNoneIcon = {
        name: 'borders-none',
        content: '<path d="M384 64V32h-32v32h32zm-96 0V32h32v32h-32zm-64 0V32h32v32h-32zm-64 0V32h32v32h-32zm-64 0V32h32v32H96zm192 384v-32h32v32h-32zm-64 0v-32h32v32h-32zm-64 0v-32h32v32h-32zm-64 0v-32h32v32H96zm128-320V96h32v32h-32zm0 64v-32h32v32h-32zm128 64v-32h32v32h-32zm-64 0v-32h32v32h-32zm-64 0v-32h32v32h-32zm-64 0v-32h32v32h-32zm-64 0v-32h32v32H96zm-64 0v-32h32v32H32zM64 64V32H32v32h32zm-32 64V96h32v32H32zm0 64v-32h32v32H32zm32 128v-32H32v32h32zm-32 64v-32h32v32H32zm0 64v-32h32v32H32zm384-192v-32h32v32h-32zm32-192V32h-32v32h32zm-32 64V96h32v32h-32zm0 64v-32h32v32h-32zm32 128v-32h-32v32h32zm-32 64v-32h32v32h-32zm0 64v-32h32v32h-32zM256 320v-32h-32v32h32zm-32 64v-32h32v32h-32zm128 64v-32h32v32h-32z" />',
        viewBox: '0 0 512 512'
    };

    var bordersShowHideIcon = {
        name: 'borders-show-hide',
        content: '<path d="M64 448h128v32H32V32h448v128h-32V64H64v384zm384 0h-64v32h96v-96h-32v64zM160 288v-64H96v64h64zm64 0h64v-64h-64v64zm160-32v-32h-32v32h32zM288 96h-64v64h64V96zm0 384L160 352l45-45 83 83 147-147 45 45-192 192z" />',
        viewBox: '0 0 512 512'
    };

    var formIcon = {
        name: 'form',
        content: '<path d="M416 32V0h-32v32h-32V0h-32v32h-32V0h-32v32h-32V0h-32v32h-32V0h-32v32H96V0H64v32H32v32H0v32h32v32H0v32h32v32H0v32h32v32H0v32h32v32H0v32h32v32H0v32h32v32h32v32h32v-32h32v32h32v-32h32v32h32v-32h32v32h32v-32h32v32h32v-32h32v32h32v-32h32v-32h32v-32h-32v-32h32v-32h-32v-32h32v-32h-32v-32h32v-32h-32v-32h32v-32h-32V96h32V64h-32V32h-32zm0 384H64V64h352v352zm32 64v-32h32v32h-32zm32-448h-32V0h32v32zM0 448h32v32H0v-32zM32 0v32H0V0h32z" />',
        viewBox: '0 0 512 512'
    };

    var formElementIcon = {
        name: 'form-element',
        content: '<path d="M416 32V0h-32v32h-32V0h-32v32h-32V0h-32v32h-32V0h-32v32h-32V0h-32v32H96V0H64v32H32v32H0v32h32v32H0v32h32v32H0v32h32v32H0v32h32v32H0v32h32v32H0v32h32v32h32v32h32v-32h32v32h32v-32h32v32h32v-32h32v32h32v-32h32v32h32v-32h32v32h32v-32h32v-32h32v-32h-32v-32h32v-32h-32v-32h32v-32h-32v-32h32v-32h-32v-32h32v-32h-32V96h32V64h-32V32h-32zm0 384H64V64h352v352zm32 64v-32h32v32h-32zm32-448h-32V0h32v32zM0 448h32v32H0v-32zM32 0v32H0V0h32zm160 128H96v32h96v-32zm192 0H224v32h160v-32zm0 64H224v32h160v-32zm0 64H224v32h160v-32zm0 64H224v32h160v-32zm-192 0H96v32h96v-32zm0-64H96v32h96v-32zm0-64H96v32h96v-32z" />',
        viewBox: '0 0 512 512'
    };

    var codeSnippetIcon = {
        name: 'code-snippet',
        content: '<path d="M416 32V0h-32v32h-32V0h-32v32h-32V0h-32v32h-32V0h-32v32h-32V0h-32v32H96V0H64v32H32v32H0v32h32v32H0v32h32v32H0v32h32v32H0v32h32v32H0v32h32v32H0v32h32v32h32v32h32v-32h32v32h32v-32h32v32h32v-32h32v32h32v-32h32v32h32v-32h32v32h32v-32h32v-32h32v-32h-32v-32h32v-32h-32v-32h32v-32h-32v-32h32v-32h-32v-32h32v-32h-32V96h32V64h-32V32h-32zm0 256v128H64V64h352v224zM32 0v32H0V0h32zM0 448h32v32H0v-32zm198.6-265.4L141.3 240l57.4 57.4L176 320l-80-80 80-80 22.6 22.6zM304 160l80 80-80 80-22.6-22.6 57.4-57.4-57.4-57.4L304 160zM480 32h-32V0h32v32zm-32 448v-32h32v32h-32z" />',
        viewBox: '0 0 512 512'
    };

    var selectAllIcon = {
        name: 'select-all',
        content: '<path d="M448 448h32v32h-32v-32zm0-448h32v32h-32V0zM0 448h32v32H0v-32zM0 0h32v32H0V0zm448 384h32v32h-32v-32zm0-64h32v32h-32v-32zm0-64h32v32h-32v-32zm0-64h32v32h-32v-32zm0-64h32v32h-32v-32zm0-64h32v32h-32V64zM0 384h32v32H0v-32zm0-64h32v32H0v-32zm0-64h32v32H0v-32zm0-64h32v32H0v-32zm0-64h32v32H0v-32zm0-64h32v32H0V64zm128 384h32v32h-32v-32zm-64 0h32v32H64v-32zm128 0h32v32h-32v-32zm64 0h32v32h-32v-32zm64 0h32v32h-32v-32zm64 0h32v32h-32v-32zM64 0h32v32H64V0zm64 0h32v32h-32V0zm64 0h32v32h-32V0zm64 0h32v32h-32V0zm64 0h32v32h-32V0zm64 0h32v32h-32V0zm-96 64 53.4 53.4L240 218.9 138.6 117.4 192 64H64v128l53.5-53.5L218.9 240 117.5 341.5 64 288v128h128l-53.4-53.4L240 261.1l101.4 101.5L288 416h128V288l-53.5 53.5L261.1 240l101.4-101.5L416 192V64H288z" />',
        viewBox: '0 0 512 512'
    };

    var buttonIcon = {
        name: 'button',
        content: '<path d="m130.1 130.1 36.1 93.9H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v128c0 17.6-14.4 32-32 32h-73.8l-244.1-93.9zM480 299 185.8 185.8 299 480l22.6-113.1L434.7 480l45.3-45.3-113.1-113.1L480 299z" />',
        viewBox: '0 0 512 512'
    };

    var selectBoxIcon = {
        name: 'select-box',
        content: '<path d="M384 352H128v-32h256v32zm0 32H128v32h256v-32zm0-128H128v32h256v-32zm96-192v128c0 17.6-14.4 32-32 32v224c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V224c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32zM352 96l32 64 32-64h-64zm64 128H96v224h320V224z" />',
        viewBox: '0 0 512 512'
    };

    var calendarDateIcon = {
        name: 'calendar-date',
        content: '<path d="M448 32h-64V0h-64v32H192V0h-64v32H64c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32zm0 416-383.9.1-.1-.1V192h384v256zm0-288H64V64.1l.1-.1H128v32h64V64h128v32h64V64h63.9l.1.1V160zM192 270.6S171.9 288 142 288v-32c29.9 0 58-32 58-32h24v192h-32V270.6zM384 416H256v-14.2c0-9.7 1.6-18.4 4.8-26 3.3-7.7 7.3-14.6 12.2-20.7 4.8-6.1 10.2-11.5 15.9-16.2 5.7-4.7 11.3-8.9 16.4-12.7 5.5-3.9 10.3-7.7 14.4-11.3 4.2-3.6 7.6-7.2 10.4-10.7 2.8-3.5 4.9-7.1 6.3-10.8 1.4-3.6 2.1-7.5 2.1-11.7 0-8.1-2.3-14.1-6.8-18.4-4.5-4.1-11.5-6.2-20.7-6.2-16 0-31.5 6.4-46.1 19.4v-37.1c16.5-10.6 35-16.1 55.5-16.1 9.6 0 18.2 1.3 25.7 3.8 7.6 2.5 14.1 6.1 19.3 10.7s9.3 10.3 12.1 17c2.7 6.6 4.1 14.1 4.1 22.3 0 8.7-1.4 16.6-4 23.3-2.7 6.8-6.3 12.9-10.6 18.5-4.5 5.6-9.5 10.6-15.3 15.2-5.8 4.6-11.8 9.1-18 13.4-4.2 3-8.3 5.9-12.2 8.9-3.9 2.9-7.4 5.8-10.4 8.7-3 2.9-5.3 5.7-7.1 8.4-1.9 2.7-2.7 7.8-2.7 10.3H384V416z" />',
        viewBox: '0 0 512 512'
    };

    var groupBoxIcon = {
        name: 'group-box',
        content: '<path d="M144 81.6c-10.6-7.5-25.2-11.1-44.1-11.1-40.5 0-61.7 15-63.6 45.2h26.1c.7-16.8 12.8-25 36-25 11 0 19.2 1.6 24.4 4.8 2.6 1.6 4.6 3.3 6.2 5.1 1.5 1.9 2.5 4 3.2 6.6.7 2.6 1.2 5.6 1.4 9.4.1 3.6.1 8.2.1 13.6h-12.8c-59.4 0-89.1 17.2-89.1 51.4 0 6.4 1.3 12 3.8 17.2 2.5 5.3 6 9.7 10.4 13.4 4.4 3.8 9.7 6.6 16 8.7 6.1 2.2 12.8 3.2 20 3.2 20.9 0 38.2-6.2 51.7-18.6v17.9H160v-97.8c0-22.1-5.4-36.7-16-44zm-10.1 100.2c-2.3 3.3-5.1 6.2-8.4 9-3.2 2.6-6.8 4.9-10.7 6.8-3.9 1.9-8 3.3-12.2 4.3-4.2 1-8.6 1.4-12.8 1.4-9.6 0-17-2-22.5-5.9-5.5-4-8.3-9.8-8.3-17.2 0-20.7 18.9-30.9 56.9-30.9h18v32.5zM316 115.7c-2.7-9.3-6.6-17.2-11.8-23.8-5-6.4-11.4-11.5-18.7-15-7.5-3.4-16-5.2-25.5-5.2-16.4 0-30.2 6.9-41.7 20.5V32H192v192h26.2v-14.8c10.9 9.7 24.3 14.8 40 14.8 8.8 0 17-1.9 24.5-5.4 7.6-3.7 14.1-8.9 19.7-15.5 5.5-6.7 9.8-14.9 13-24.4 3-9.6 4.6-20.4 4.6-32.1 0-11.5-1.3-21.8-4-30.9zm-32.6 73.6c-6.6 9.5-15.6 14.2-26.8 14.2-14.5 0-27.4-5.9-38.4-17.8v-69.1c11.9-16.6 25-24.9 39.4-24.9 11.4 0 20 4.6 26.2 13.9 6.2 9.2 9.3 22.9 9.3 41 .1 18.9-3.2 33.3-9.7 42.7zM450 110c1.8 3.2 2.7 6.9 3 11.2h27c-.9-7.3-3.1-13.8-6.4-19.6-3.3-5.8-7.6-10.5-12.7-14.2-5.2-3.9-11.2-6.8-18-8.8-6.9-2-14.2-3-22.2-3-10.3 0-19.5 1.6-28 4.9-8.5 3.3-15.7 8.1-21.8 14.4-6 6.3-10.7 14.1-14 23.3-3.3 9.2-4.9 19.7-4.9 31.5 0 11.9 1.6 22.5 4.9 31.7 3.1 9.2 7.8 17 13.9 23.2 6 6.3 13.3 11.1 21.8 14.4 8.3 3.3 17.9 5 28.2 5 8 0 15.3-1 22.2-3 6.8-2 12.8-4.9 18-8.8 5.1-3.9 9.4-8.8 12.7-14.4 3.3-5.6 5.5-12.1 6.4-19.6h-27c-.3 4.2-1.2 7.9-3 11.2-1.8 3.2-4.2 5.9-7 8.1-3 2.2-6.3 3.9-10.1 4.9-3.9 1.2-7.9 1.7-12.2 1.7-6.3 0-11.9-1.2-17-3.5-5.2-2.3-9.7-5.8-13.4-10.4-3.7-4.5-6.6-10.2-8.5-17-2.1-6.8-3.1-14.7-3.1-23.6 0-9.1 1-17.1 3.1-23.9 2.1-6.9 5.1-12.5 8.8-17.1 3.7-4.5 8-7.8 13.3-10.1 5.1-2.3 10.7-3.5 16.8-3.5 4.3 0 8.3.6 12.2 1.7 3.9 1.2 7.2 2.7 10.1 4.9 2.8 2.4 5.2 5.1 6.9 8.4zM128 256h256v32H128v-32zm0 64h256v32H128v-32zm0 64h256v32H128v-32zm256 32H128v-32h256v32zm0-128H128v-32h256v32zm0 64H128v-32h256v32zm32-96h32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V256h32v192h320V256z" />',
        viewBox: '0 0 512 512'
    };

    var textareaIcon = {
        name: 'textarea',
        content: '<path d="M448 448h-32V256h32v192zM194 334c1.8 3.2 2.7 6.9 3 11.2h27c-.9-7.3-3.1-13.8-6.4-19.6-3.3-5.8-7.6-10.5-12.7-14.2-5.2-3.9-11.2-6.8-18-8.8-6.9-2-14.2-3-22.2-3-10.3 0-19.5 1.6-28 4.9-8.5 3.3-15.7 8.1-21.8 14.4-6 6.3-10.7 14.1-14 23.3-3.3 9.2-4.9 19.7-4.9 31.5 0 11.9 1.6 22.5 4.9 31.7 3.1 9.2 7.8 17 13.9 23.2 6 6.3 13.3 11.1 21.8 14.4 8.3 3.3 17.9 5 28.2 5 8 0 15.3-1 22.2-3 6.8-2 12.8-4.9 18-8.8 5.1-3.9 9.4-8.8 12.7-14.4 3.3-5.6 5.5-12.1 6.4-19.6h-27c-.3 4.2-1.2 7.9-3 11.2-1.8 3.2-4.2 5.9-7 8.1-3 2.2-6.3 3.9-10.1 4.9-3.9 1.2-7.9 1.7-12.2 1.7-6.3 0-11.9-1.2-17-3.5-5.2-2.3-9.7-5.8-13.4-10.4-3.7-4.5-6.6-10.2-8.5-17-2.1-6.8-3.1-14.7-3.1-23.6 0-9.1 1-17.1 3.1-23.9 2.1-6.9 5.1-12.5 8.8-17.1 3.7-4.5 8-7.8 13.3-10.1 5.1-2.3 10.7-3.5 16.8-3.5 4.3 0 8.3.6 12.2 1.7 3.9 1.2 7.2 2.7 10.1 4.9 2.8 2.4 5.2 5.1 6.9 8.4zm14-252.4c-10.6-7.5-25.2-11.1-44.1-11.1-40.5 0-61.7 15-63.6 45.2h26.1c.7-16.8 12.8-25 36-25 11 0 19.2 1.6 24.4 4.8 2.6 1.6 4.6 3.3 6.2 5.1 1.5 1.9 2.5 4 3.2 6.6.7 2.6 1.2 5.6 1.4 9.4.1 3.6.1 8.2.1 13.6h-12.8c-59.4 0-89.1 17.2-89.1 51.4 0 6.4 1.3 12 3.8 17.2 2.5 5.3 6 9.7 10.4 13.4 4.4 3.8 9.7 6.6 16 8.7 6.1 2.2 12.8 3.2 20 3.2 20.9 0 38.2-6.2 51.7-18.6v17.9H224v-97.8c0-22.1-5.4-36.7-16-44zm-10.1 100.2c-2.3 3.3-5.1 6.2-8.4 9-3.2 2.6-6.8 4.9-10.7 6.8-3.9 1.9-8 3.3-12.2 4.3-4.2 1-8.6 1.4-12.8 1.4-9.6 0-17-2-22.5-5.9-5.5-4-8.3-9.8-8.3-17.2 0-20.7 18.9-30.9 56.9-30.9h18v32.5zM380 115.7c-2.7-9.3-6.6-17.2-11.8-23.8-5-6.4-11.4-11.5-18.7-15-7.5-3.4-16-5.2-25.5-5.2-16.4 0-30.2 6.9-41.7 20.5V32H256v192h26.2v-14.8c10.9 9.7 24.3 14.8 40 14.8 8.8 0 17-1.9 24.5-5.4 7.6-3.7 14.1-8.9 19.7-15.5 5.5-6.7 9.8-14.9 13-24.4 3-9.6 4.6-20.4 4.6-32.1 0-11.5-1.3-21.8-4-30.9zm-32.6 73.6c-6.6 9.5-15.6 14.2-26.8 14.2-14.5 0-27.4-5.9-38.4-17.8v-69.1c11.9-16.6 25-24.9 39.4-24.9 11.4 0 20 4.6 26.2 13.9 6.2 9.2 9.3 22.9 9.3 41 .1 18.9-3.2 33.3-9.7 42.7zM256 370.6c0 11.8 1.6 22.5 4.6 32.1 3.2 9.5 7.5 17.6 13 24.4 5.6 6.6 12.1 11.8 19.7 15.5 7.5 3.6 15.7 5.4 24.5 5.4 15.7 0 29.1-5 40-14.8V448H384V256h-26.2v60.1c-11.5-13.6-25.3-20.5-41.7-20.5-9.5 0-18 1.7-25.5 5.2-7.3 3.6-13.7 8.6-18.7 15-5.2 6.6-9.1 14.5-11.8 23.8-2.8 9.2-4.1 19.5-4.1 31zm26.8 0c0-18.1 3.2-31.8 9.3-41 6.2-9.3 14.8-13.9 26.2-13.9 14.4 0 27.5 8.3 39.4 24.9v69.1c-11.1 11.9-23.9 17.8-38.4 17.8-11.2 0-20.2-4.7-26.8-14.2-6.4-9.4-9.7-23.8-9.7-42.7z" />',
        viewBox: '0 0 512 512'
    };

    var textboxIcon = {
        name: 'textbox',
        content: '<path d="M208 209.6c-10.6-7.5-25.2-11.1-44.1-11.1-40.5 0-61.7 15-63.6 45.2h26.1c.7-16.8 12.8-25 36-25 11 0 19.2 1.6 24.4 4.8 2.6 1.6 4.6 3.3 6.2 5.1 1.5 1.9 2.5 4 3.2 6.6.7 2.6 1.2 5.6 1.4 9.4.1 3.6.1 8.2.1 13.6h-12.8c-59.4 0-89.1 17.2-89.1 51.4 0 6.4 1.3 12 3.8 17.2 2.5 5.3 6 9.7 10.4 13.4 4.4 3.8 9.7 6.6 16 8.7 6.1 2.2 12.8 3.2 20 3.2 20.9 0 38.2-6.2 51.7-18.6v17.9H224v-97.8c0-22.1-5.4-36.7-16-44zm-10.1 100.2c-2.3 3.3-5.1 6.2-8.4 9-3.2 2.6-6.8 4.9-10.7 6.8-3.9 1.9-8 3.3-12.2 4.3-4.2 1-8.6 1.4-12.8 1.4-9.6 0-17-2-22.5-5.9-5.5-4-8.3-9.8-8.3-17.2 0-20.7 18.9-30.9 56.9-30.9h18v32.5zm170.3-89.9c-5-6.4-11.4-11.5-18.7-15-7.5-3.4-16-5.2-25.5-5.2-16.4 0-30.2 6.9-41.7 20.5V160H256v192h26.2v-14.8c10.9 9.7 24.3 14.8 40 14.8 8.8 0 17-1.9 24.5-5.4 7.6-3.7 14.1-8.9 19.7-15.5 5.5-6.7 9.8-14.9 13-24.4 3-9.6 4.6-20.4 4.6-32.1 0-11.5-1.3-21.8-4-31-2.8-9.3-6.7-17.1-11.8-23.7zm-20.8 97.4c-6.6 9.5-15.6 14.2-26.8 14.2-14.5 0-27.4-5.9-38.4-17.8v-69.1c11.9-16.6 25-24.9 39.4-24.9 11.4 0 20 4.6 26.2 13.9 6.2 9.2 9.3 22.9 9.3 41 .1 18.9-3.2 33.3-9.7 42.7zM448 64v384h-32V64h32z" />',
        viewBox: '0 0 512 512'
    };

    var textboxHiddenIcon = {
        name: 'textbox-hidden',
        content: '<path d="M0 160h32v64H0v-64zm0-32h32V64H0v64zm0 288h32v-64H0v64zm160 96h64v-32h-64v32zm-96 0h64v-32H64v32zM352 0h-64v32h64V0zm-96 0h-64v32h64V0zM0 512h32v-64H0v64zM448 0h-64v32h64V0zM160 0H96v32h64V0zM64 0H0v32h64V0zM0 320h32v-64H0v64zm480 128h32v-64h-32v64zm0-96h32v-64h-32v64zm0-96h32v-64h-32v64zm0-96h32V96h-32v64zm0-160v64h32V0h-32zm-32 512h64v-32h-64v32zm-192 0h64v-32h-64v32zm96 0h64v-32h-64v32zm-6-165.4c-7.4 3.6-15.6 5.4-24.3 5.4-15.6 0-28.9-5-39.7-14.8V352h-26V160h26v60.1c11.4-13.6 25.1-20.5 41.4-20.5 9.4 0 17.9 1.7 25.3 5.2 7.2 3.6 13.6 8.6 18.6 15 5.2 6.6 9 14.5 11.7 23.8 2.7 9.2 4 19.5 4 31 0 11.8-1.6 22.5-4.6 32.1-3.2 9.5-7.4 17.6-12.9 24.4-5.5 6.6-12 11.7-19.5 15.5zm10.9-72c0-18.1-3.2-31.8-9.3-41-6.2-9.3-14.8-13.9-26.2-13.9-14.4 0-27.5 8.3-39.4 24.9v69.1c11.1 11.9 23.9 17.8 38.4 17.8 11.2 0 20.2-4.7 26.8-14.2 6.4-9.4 9.7-23.8 9.7-42.7zM224 253.5V351h-26v-17.6S167.1 352 146.2 352c-7.3 0-13.9-1-20-3.2-6.2-2-11.6-4.9-16-8.7-4.5-3.8-8-8.1-10.4-13.4-2.5-5.2-3.8-10.8-3.8-17.2 0-34.2 29.8-51.4 89.1-51.5h12.8c0-5.2 0-9.9-.1-13.5-.3-3.8-.7-6.8-1.4-9.4-.7-2.6-1.7-4.8-3.2-6.6-1.6-1.7-3.6-3.5-6.2-5.1-5.2-3.2-13.4-4.8-24.4-4.8-23.2 0-35.3 8.2-36 24.4h-26.1c1.9-29.6 23.1-44.6 63.6-44.6 18.9 0 33.5 3.6 44.1 11.1 10.4 7.4 15.8 22 15.8 44zM198 277h-18c-38 0-56.9 10.3-56.9 30.9 0 7.4 2.8 13.1 8.3 17.2 5.5 3.9 12.9 5.9 22.5 5.9 4.2 0 8.6-.4 12.8-1.4s8.3-2.5 12.2-4.3c3.9-1.9 7.5-4.2 10.7-6.8 3.3-2.7 6.1-5.6 8.4-9V277zM448 64h-32v384h32V64z" />',
        viewBox: '0 0 512 512'
    };

    var passwordIcon = {
        name: 'password',
        content: '<path d="M480 64v384h-32V64h32zM174.2 221.1l-11.3-11.3-34.9 34.9V192H96v52.7l-34.9-34.9-11.3 11.3L84.7 256H32v32h52.7l-34.9 34.9 11.3 11.3L96 299.3V352h32v-52.7l34.9 34.9 11.3-11.3-34.9-34.9H192v-32h-52.7l34.9-34.9zm224 0-11.3-11.3-34.9 34.9V192h-32v52.7l-34.9-34.9-11.3 11.3 34.9 34.9H256v32h52.7l-34.9 34.9 11.3 11.3 34.9-34.9V352h32v-52.7l34.9 34.9 11.3-11.3-34.9-34.9H416v-32h-52.7l34.9-34.9z" />',
        viewBox: '0 0 512 512'
    };

    var paragraphAddIcon = {
        name: 'paragraph-add',
        content: '<path d="M320 96h-64v352h-32V96h-64v352h-32V256c-53 0-96-43-96-96s43-96 96-96h192v32zm96 256v-64h-32v64h-64v32h64v64h32v-64h64v-32h-64z" />',
        viewBox: '0 0 512 512'
    };

    var editToolsIcon = {
        name: 'edit-tools',
        content: '<path d="m260.6 288 11.5 31.5 56.2-56.6L244.2 32H139.8L0 416h76.8l28-76.8 18.6-51.2h137.2zm-17.5-48H140.9L192 99.5 243.1 240zM224 413.3V480h66.7l169.7-168.5-67.9-67.9L224 413.3zm55.3 34-22.6-22.6 135.8-135.8 22.6 22.6-135.8 135.8zm223.4-178-22.6 22.6-67.9-67.9 22.5-22.7c12.5-12.4 32.9-12.4 45.3 0l22.7 22.7c12.4 12.4 12.4 32.8 0 45.3z" />',
        viewBox: '0 0 512 512'
    };

    var templateManagerIcon = {
        name: 'template-manager',
        content: '<path d="M377.2 292.1c-5.5 5.3-7.2 6.4-7.4 6.6-.2.1-.4.2-.9.2-.1-.2-.3-.7-.5-1.7s-.5-4.2-.5-15.1v-31.7c0-9.9-.7-16.2-2.3-19.7-2.4-5.4-6.1-9.4-11.2-12-6.2-3.1-14-4.7-23.3-4.7-12.3 0-22.1 2.8-29 8.4-7.2 5.7-10.9 12.3-10.9 19.4 0 4.1 1.2 7.5 3.6 10 2.5 2.7 5.7 4 9.6 4 3.9 0 7.2-1.3 9.6-3.8 2.4-2.4 3.6-5.9 3.6-10.2l-.2-5.8c0-1.9.9-3.5 2.7-5.1 1.8-1.6 4.4-2.4 7.9-2.4 4.7 0 8.1 1.3 10.4 3.9 1.7 1.9 3.6 6.3 3.6 16.8v.9c-15.6 5.6-26.5 10.2-33.4 14.1-7.8 4.4-13.1 9.1-16.3 14.3-2.5 3.9-3.7 8.5-3.7 13.8 0 8.2 2.5 14.9 7.5 20 5 5.2 11.6 7.8 19.4 7.8 4.9 0 9.5-1 13.8-2.9 2.2-1 6.6-3.9 13.5-8.9.7 2.9 1.9 5.2 3.5 6.9 2.8 3.1 6.6 4.7 11.2 4.7 8.5 0 17.1-5.6 25.7-16.8l.8-1v-16.3l-6.8 6.3zm-35.2-.2c-8.9 6.7-14.1 8.1-16.9 8.1h-.1c-2.8 0-5.1-1.1-7.4-3.6-2.3-2.4-3.5-5.6-3.5-9.5 0-3 .9-5.8 2.8-8.4 2.1-2.8 5.7-5.6 10.6-8.2 2.4-1.3 7.2-3.4 14.4-6.2l.1 27.8zm-97.9 12.2c-1.3-1.4-4-5.6-7.9-17.9L195.6 160h-7.7l-41 124.9c-4.1 12.7-7 17.9-8.8 20.1-.3.4-1.8 1.8-7.4 3.1l-2.8.6V320h43v-11.7l-3.2-.3c-6.6-.6-8.3-2-8.6-2.3-.9-.9-1.3-1.9-1.3-3 0-1.6.5-4.8 2.6-11.5l5.3-16.2h42.1l4.6 14c2.6 8.1 3.1 12 3.1 13.8 0 1.3-.4 2.2-1.3 3.2-.3.4-1.9 1.6-7 1.9l-3.3.2V320h52v-11.8l-3.2-.3c-3.8-.3-6.6-1.5-8.6-3.8zM172.5 254l14.7-44.6 14.4 44.6h-29.1zM352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288zm-224-32h-64v-64h64v64zm96 0h-64v-64h64v64zm96 0h-64v-64h64v64z" />',
        viewBox: '0 0 512 512'
    };

    var changeManuallyIcon = {
        name: 'change-manually',
        content: '<path d="m416 353 32-32v159H32V32h416v64h-32V64H64v384h352v-95zm-192-3.7V416h66.7l169.7-168.5-67.9-67.9L224 349.3zm55.3 34-22.6-22.6 135.8-135.8 22.6 22.6-135.8 135.8zM502.7 160 480 137.3c-12.4-12.4-32.8-12.4-45.3 0L412.2 160l67.9 67.9 22.6-22.6c12.4-12.5 12.4-32.9 0-45.3zM191.9 416H167v-22h-.6c-7.9 14.6-19.4 22-34.6 22-11.2 0-20-3.3-26.3-9.8S96 391 96 380.3c0-23.1 12.4-36.5 37.2-40.4l33.9-5.1c0-17.4-7.7-26.1-23.2-26.1-13.6 0-25.8 5-36.8 15v-24.2c12-7.6 25.9-11.5 41.7-11.5 28.8 0 43.3 15.2 43.3 45.6V416h-.2zM167 353.1l-23.9 3.6c-7.4 1-13 3-16.8 5.8s-5.6 7.8-5.6 14.9c0 5.2 1.7 9.4 5.2 12.7 3.5 3.3 8.1 5 13.9 5 7.9 0 14.4-3 19.5-8.9 5.2-5.9 7.7-13.4 7.7-22.4v-10.7z" />',
        viewBox: '0 0 512 512'
    };

    var trackChangesIcon = {
        name: 'track-changes',
        content: '<path d="m412.2 256 22.6-22.6c12.4-12.4 32.8-12.4 45.3 0l22.6 22.6c12.4 12.4 12.4 32.8 0 45.3L480 323.8 412.2 256zm-19.7 19.6L250.9 417.2 224 445.3V512h66.7l28.1-26.9 141.6-141.6-67.9-67.9zM279.3 479.3 268 468l-11.3-11.3 135.8-135.8 22.6 22.6-135.8 135.8zM288 160H160v32h128v-32zm64 64H160v32h192v-32zm-64 64H160v32h128v-32zm-64 64h-64v32h64v-32zm188.2-96 22.6-22.6c12.4-12.4 32.8-12.4 45.3 0l22.6 22.6c12.4 12.4 12.4 32.8 0 45.3L480 323.8 412.2 256zm-19.7 19.6L250.9 417.2 224 445.3V512h66.7l28.1-26.9 141.6-141.6-67.9-67.9zM279.3 479.3 268 468l-11.3-11.3 135.8-135.8 22.6 22.6-135.8 135.8zM96 416V64h224v96h96v32h32v-64l-96-96H96c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h96v-32H96zM0 512h192v-32H0v32z" />',
        viewBox: '0 0 512 512'
    };

    var trackChangesEnableIcon = {
        name: 'track-changes-enable',
        content: '<path d="M502.7 173.3 480 195.8 412.2 128l22.6-22.6c12.4-12.4 32.8-12.4 45.3 0l22.6 22.6c12.4 12.4 12.4 32.8 0 45.3zm-110.2-25.7 67.9 67.9-141.6 141.6-28.1 26.9H224v-66.7l26.9-28.1 141.6-141.6zm22.6 67.9-22.6-22.6-135.8 135.8L268 340l11.3 11.3 135.8-135.8zM160 320h32v-32h-32v32zm0-64h96v-32h-96v32zm128-96H160v32h128v-32zM160 384h32v-32h-32v32zm256 64H96V64h224v96l80.11-79.89L352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V273.155l-32 32V448z" />',
        viewBox: '0 0 512 512'
    };

    var trackChangesAcceptIcon = {
        name: 'track-changes-accept',
        content: '<path d="M128 128H96V64c0-17.7 14.3-32 32-32h224l64 64h-96V64H128v64zm122.9 193.2L224 349.3V416h66.7l28.1-26.9 141.6-141.6-67.9-67.9-141.6 141.6zm28.4 62.1L268 372l-11.3-11.3 135.8-135.8 22.6 22.6-135.8 135.8zM416 337.155l32-32V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-96h32v96h288V337.155zM502.7 205.3 480 227.8 412.2 160l22.6-22.6c12.4-12.4 32.8-12.4 45.3 0l22.6 22.6c12.4 12.4 12.4 32.8 0 45.3zM288 144 112 320 0 208l45-45 67 67L243 99l45 45zm-96 272h-32v-32h32v32z" />',
        viewBox: '0 0 512 512'
    };

    var trackChangesAcceptAllIcon = {
        name: 'track-changes-accept-all',
        content: '<path d="M128 160H96V96c0-17.7 14.3-32 32-32h224l64 64h-96V96H128v64zm264.5 51.6 67.9 67.9-141.6 141.6-28.1 26.9H224v-66.7l26.9-28.1 141.6-141.6zm22.6 67.9-22.6-22.6-135.8 135.8L268 404l11.3 11.3 135.8-135.8zM416 480H128v-96H96v96c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V337.155l-32 32V480zm86.7-288-22.6-22.6c-12.5-12.4-32.9-12.4-45.3 0L412.2 192l67.8 67.8 22.7-22.5c12.4-12.5 12.4-32.9 0-45.3zM160 448h32v-32h-32v32zM64 32h256L288 0H64C46.3 0 32 14.3 32 32v128h32V32zm0 352H32v32c0 17.7 14.3 32 32 32v-64zm179-253L112 262l-67-67-45 45 112 112 176-176-45-45z" />',
        viewBox: '0 0 512 512'
    };

    var trackChangesRejectIcon = {
        name: 'track-changes-reject',
        content: '<path d="M102.627 272 160 329.373 137.373 352 80 294.627 22.627 352 0 329.373 57.373 272 0 214.627 22.627 192 80 249.373 137.373 192 160 214.627 102.627 272zM192 384v-32h-32v32h32zm310.7-256-22.6-22.6c-12.5-12.4-32.9-12.4-45.3 0L412.2 128l67.8 67.8 22.7-22.5c12.4-12.5 12.4-32.9 0-45.3zM96 64h224v96l80.11-79.89L352 32H96c-17.7 0-32 14.3-32 32v96h32V64zm296.5 83.6 67.9 67.9-141.6 141.6-28.1 26.9H224v-66.7l26.9-28.1 141.6-141.6zm22.6 67.9-22.6-22.6-135.8 135.8L268 340l11.3 11.3 135.8-135.8zM416 448H96v-64H64v64c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V273.155l-32 32V448z" />',
        viewBox: '0 0 512 512'
    };

    var trackChangesRejectAllIcon = {
        name: 'track-changes-reject-all',
        content: '<path d="M102.627 272 160 329.373 137.373 352 80 294.627 22.627 352 0 329.373 57.373 272 0 214.627 22.627 192 80 249.373 137.373 192 160 214.627 102.627 272zM128 96h192v32h96l-64-64H128c-17.7 0-32 14.3-32 32v64h32V96zm264.5 115.6 67.9 67.9-141.6 141.6-28.1 26.9H224v-66.7l26.9-28.1 141.6-141.6zm22.6 67.9-22.6-22.6-135.8 135.8L268 404l11.3 11.3 135.8-135.8zM416 480H128v-96H96v96c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V337.155l-32 32V480zm86.7-288-22.6-22.6c-12.5-12.4-32.9-12.4-45.3 0L412.2 192l67.8 67.8 22.7-22.5c12.4-12.5 12.4-32.9 0-45.3zM160 448h32v-32h-32v32zM64 32h256L288 0H64C46.3 0 32 14.3 32 32v128h32V32zm0 352H32v32c0 17.7 14.3 32 32 32v-64z" />',
        viewBox: '0 0 512 512'
    };

    var documentManagerIcon = {
        name: 'document-manager',
        content: '<path d="M64 416h224v32H64v-32zm224-64H64v32h224v-32zM400 0C288 0 288 96 288 96v160s0 64 80 64 80-64 80-64V96s0-32-48-32-48 32-48 32v128h32V116c0-11 .6-20 16-20s16 9 16 20v140s0 32-48 32-48-32-48-32V96s0-64 80-64 80 64 80 64v128h32V96s0-96-112-96zM106.7 288 96 320H64l64-192h32l64 192h-32l-10.7-32h-74.6zm10.6-32h53.3L144 176l-26.7 80zM320 480H32V96h224V64H32C14.3 64 0 78.3 0 96v384c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V352h-32v128z" />',
        viewBox: '0 0 512 512'
    };

    var customIconIcon = {
        name: 'custom-icon',
        content: '<path d="M352 249H196.6c.6 23.8 7.2 42.2 19.8 55.2s30 18.8 52 19.4c4.9.1-1.1 28.8-12.4 28.8-30.9 0-51.6-9.7-69.3-29.1-17.8-19.4-26.7-46.8-26.7-82 0-33.3 9.7-60.4 29.1-81.4s43.5-31.4 72.4-31.4c28.8 0 51.1 9.1 66.9 27.2S352 199 352 231.1V249zm-36-29.9c-.1-19.8-5.1-35.2-14.7-46.2-9.7-11-23.1-16.5-40.3-16.5-16.6 0-30.7 5.8-42.4 17.3-11.6 11.6-18.8 26.7-21.5 45.3l118.9.1zM448 384V64c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h256l96-96zm-32-32h-96v96H96V64h320v288z" />',
        viewBox: '0 0 512 512'
    };

    var bookIcon = {
        name: 'book',
        content: '<path d="M448 480V96h-32v352H128c-17.6 0-32-14.4-32-32s14.4-32 32-32h256V32H128c-35.2 0-64 28.8-64 64v320c0 23.6 12.9 44.2 32 55.3 9.4 5.5 20.4 8.7 32 8.7h320zM128 64h224v288H128V64zm192 64H160V96h160v32zm0 128H160v-32h160v32zm-32-64H160v-32h128v32z" />',
        viewBox: '0 0 512 512'
    };

    var imageAddIcon = {
        name: 'image-add',
        content: '<path d="M272 160c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm80 112-16 16-64 64-128-128L32 336V96.1l.1-.1h383.8l.1.1-.1 191.9H448V96c0-17.6-14.4-32-32-32H32C14.4 64 0 78.4 0 96v320c0 17.6 14.4 32 32 32h256v-64h64V272zm128 144h-32v-64h-32v64h-64v32h64v64h32v-64h64v-32h-32z" />',
        viewBox: '0 0 512 512'
    };

    var imageEditIcon = {
        name: 'image-edit',
        content: '<path d="M304 160c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm-32.6 159.4L176 224 64 336V96.1l.1-.1h383.8l.1.1V160h32V96c0-17.6-14.4-32-32-32H64c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h128v-47.5l79.4-81.1zm189-7.9L290.7 480H224v-66.7l168.5-169.7 67.9 67.9zm-45.3 0-22.6-22.6-135.8 135.8 22.6 22.6 135.8-135.8zm64.9 25.6zM447.9 448c17.7 0 32.1-14.4 32.1-32v-78.9L369.1 448h78.8zm54.8-224L480 201.3c-12.4-12.4-32.8-12.4-45.3 0L412.2 224l67.9 67.9 22.6-22.6c12.4-12.5 12.4-32.9 0-45.3z" />',
        viewBox: '0 0 512 512'
    };

    var imageMapEditorIcon = {
        name: 'image-map-editor',
        content: '<path d="M448 64H64c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32V96c0-17.6-14.4-32-32-32zM96 384H64v-32h32v32zm96 0h-64v-32h64v32zm96 0h-64v-32h64v32zm96 0h-64v-32h64v32zm64 0h-32v-32h32v32zm-.1-48-64-64-80 80L176 224 64 336V192h32v-32H64V96.1l.1-.1H128v32h32V96h287.9l.1.1-.1 239.9zM352 208c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-224-48h32v32h-32v-32z" />',
        viewBox: '0 0 512 512'
    };

    var commentIcon = {
        name: 'comment',
        content: '<path d="M448 32H64c-17.6 0-32 14.4-32 32v416l96-96h320c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32zm0 319.942a.53.53 0 0 1-.058.058H114.745L64 402.745V64.057a.511.511 0 0 1 .057-.057h383.885c.02.017.041.038.058.057v287.885z" />',
        viewBox: '0 0 512 512'
    };

    var commentRemoveIcon = {
        name: 'comment-remove',
        content: '<path d="M114.745 352 64 402.745V64.057a.511.511 0 0 1 .057-.057h383.885c.02.017.041.038.058.057V256h32V64c0-17.6-14.4-32-32-32H64c-17.6 0-32 14.4-32 32v416l96-96h128v-32H114.745zM480 342.627 457.373 320 400 377.373 342.627 320 320 342.627 377.373 400 320 457.373 342.627 480 400 422.627 457.373 480 480 457.373 422.627 400 480 342.627z" />',
        viewBox: '0 0 512 512'
    };

    var commentsRemoveIcon = {
        name: 'comments-remove',
        content: '<path d="M480 64c0-17.6-14.4-32-32-32H160c-17.6 0-32 14.4-32 32v32h32V64.1l.1-.1H448l.1.1V256l-.1.1h32V64zM377.4 400l22.6 22.6-57.4 57.4-22.6-22.6 57.4-57.4zm0 0L320 342.6l22.6-22.6 57.4 57.4-22.6 22.6zm45.2 0 57.4 57.4-22.6 22.6-57.4-57.4-22.6-22.6 22.6-22.6 57.4-57.4 22.6 22.6-57.4 57.4zm-304.3-16L64 420.2V160.1l.1-.1H352l.1.1V256h32v-96c0-17.6-14.4-32-32-32H64c-17.6 0-32 14.4-32 32v320l96-64h128v-32H118.3z" />',
        viewBox: '0 0 512 512'
    };

    var silverlightIcon = {
        name: 'silverlight',
        content: '<path d="M256 0 0 256l256 256 256-256L256 0zm-75.9 324c-21.6 0-40.5-6.3-52.1-13.7v-33.2c14.5 10.8 32.9 17.9 51.4 17.9 16.3 0 28.6-5 28.6-17.6 0-10.6-6.8-14.5-18.9-18.9l-23.6-7.9c-23.9-7.9-39.7-20.3-39.7-47 0-29.9 25.7-46.2 57.3-46.2 19.7 0 35.8 4.7 48.8 12.6v32.9c-13.9-10.2-29.1-16.8-47.8-16.8-14.5 0-25.5 4.9-25.5 16 0 9.9 6.5 13.9 17.9 17.6l25.2 8.6c27.1 9.2 39.4 23.9 39.4 47.8.2 31.9-26.8 47.9-61 47.9zm95.9-4V160h32v128h76v32H276z" />',
        viewBox: '0 0 512 512'
    };

    var mediaManagerIcon = {
        name: 'media-manager',
        content: '<path d="M192 384V128l192 128-192 128zm32-319.3V0C108.2 14.4 14.4 108.2 0 224h64.7c13.5-80.3 79-145.8 159.3-159.3zm64 382.6V512c115.8-14.4 209.6-108.2 224-224h-64.7c-13.5 80.3-79 145.8-159.3 159.3zM64.7 288H0c14.4 115.8 108.2 209.6 224 224v-64.7c-80.3-13.5-145.8-79-159.3-159.3zm382.6-64H512C497.6 108.2 403.8 14.4 288 0v64.7c80.3 13.5 145.8 79 159.3 159.3z" />',
        viewBox: '0 0 512 512'
    };

    var videoExternalIcon = {
        name: 'video-external',
        content: '<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-64 384V128l192 128-192 128z" />',
        viewBox: '0 0 512 512'
    };

    var flashManagerIcon = {
        name: 'flash-manager',
        content: '<path d="M255.9 0C114.6 0 0 114.6 0 256.1 0 397.4 114.6 512 255.9 512 397.4 512 512 397.4 512 256.1 512 114.6 397.4 0 255.9 0zM384 160c-30.1.3-48.4-4.6-81.2 64H352v64h-64s-53.5 129.4-160 128c-.8-14.2 0-43.9 0-64 70.5-10.7 93.6-88.3 109.9-126.9C286.3 74.5 384 95.1 384 95.1V160z" />',
        viewBox: '0 0 512 512'
    };

    var binocularsIcon = {
        name: 'binoculars',
        content: '<path d="M480 288v96c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-64H192v64c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32v-64c0-17.7 14.3-32 32-32v-32c0-17.7 14.3-32 32-32h64s32 0 32 32v128h64V128c0-32 32-32 32-32h64c17.7 0 32 14.3 32 32v32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32zM208 64h16V32h-96v32h80zm160 0h16V32h-96v32h80zM48 448H32v32h160v-32H48zm272 32h160v-32H320v32z" />',
        viewBox: '0 0 512 512'
    };

    var copyIcon = {
        name: 'copy',
        content: '<path d="M384 96H192c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V192l-96-96zm64 352H192V128h160v96h96v224zM64 384h64v32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h192l32 32H64v320z" />',
        viewBox: '0 0 512 512'
    };

    var cutIcon = {
        name: 'cut',
        content: '<path d="M480 32h-45.3L256 210.7 210.7 256l-69.5 69.5c-9.1-3.6-18.9-5.5-29.2-5.5-44.2 0-80 35.8-80 80 0 10.3 2 20.2 5.5 29.2 8.1 20.7 24.6 37.1 45.3 45.3 9.1 3.6 18.9 5.5 29.2 5.5 44.2 0 80-35.8 80-80 0-10.3-2-20.2-5.5-29.2l69.5-69.5 69.5 69.5c-3.6 9.1-5.5 18.9-5.5 29.2 0 44.2 35.8 80 80 80 10.3 0 20.2-2 29.2-5.5 20.7-8.1 37.1-24.6 45.3-45.3 3.6-9.1 5.5-18.9 5.5-29.2 0-44.2-35.8-80-80-80-10.3 0-20.2 2-29.2 5.5L301.3 256 480 77.3V32zM160 400c0 26.5-21.5 48-48 48-.9 0-1.8 0-2.7-.1-24.4-1.3-43.9-20.9-45.3-45.3 0-.9-.1-1.8-.1-2.7 0-26.5 21.5-48 48-48 .9 0 1.8 0 2.7.1 24.4 1.3 43.9 20.9 45.3 45.3.1.9.1 1.8.1 2.7zm237.3-47.9c.9 0 1.8-.1 2.7-.1 26.5 0 48 21.5 48 48 0 .9 0 1.8-.1 2.7-1.3 24.4-20.9 43.9-45.3 45.3-.9 0-1.8.1-2.7.1-26.5 0-48-21.5-48-48 0-.9 0-1.8.1-2.7 1.4-24.5 20.9-44 45.3-45.3zM240 256c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm-74.5-45.3L32 77.3V32h45.3l133.5 133.5-45.3 45.2z" />',
        viewBox: '0 0 512 512'
    };

    var clipboardIcon = {
        name: 'clipboard',
        content: '<path d="M416 32H311.4C300.3 12.9 279.7 0 256 0s-44.3 12.9-55.4 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-160 0c17.7 0 32 14.3 32 32h-64c0-17.7 14.3-32 32-32zm160 416H96V64h64v64h192V64h64v384z" />',
        viewBox: '0 0 512 512'
    };

    var clipboardCodeIcon = {
        name: 'clipboard-code',
        content: '<path d="M214.6 361.4 192 384l-80-80 80-80 22.6 22.6-57.3 57.4 57.3 57.4zM448 64v384c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h104.6C211.7 12.9 232.3 0 256 0s44.3 12.9 55.4 32H416c17.7 0 32 14.3 32 32zm-224 0h64c0-17.7-14.3-32-32-32s-32 14.3-32 32zm192 0h-64v64H160V64H96v384h320V64zM297.4 246.6l57.4 57.4-57.4 57.4L320 384l80-80-80-80-22.6 22.6z" />',
        viewBox: '0 0 512 512'
    };

    var clipboardWordIcon = {
        name: 'clipboard-word',
        content: '<path d="m128 160 48.5 192h46.7L256 238.4 285.3 352h43.1L384 160h-73v35h19.3l-22.2 86-28.8-121h-45.4l-33.1 119.3-25-119.3H128zM416 32H311.4C300.3 12.9 279.7 0 256 0s-44.3 12.9-55.4 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-160 0c17.7 0 32 14.3 32 32h-64c0-17.7 14.3-32 32-32zm160 416H96V64h64v64h192V64h64v384zm-32-32H128v-32h256v32z" />',
        viewBox: '0 0 512 512'
    };

    var clipboardWordAltIcon = {
        name: 'clipboard-word-alt',
        content: '<path d="m128 160 48.5 192h46.7L256 238.4 285.3 352h43.1L384 160h-73v35h19.3l-22.2 86-28.8-121h-45.4l-33.1 119.3-25-119.3H128zM416 32H311.4C300.3 12.9 279.7 0 256 0s-44.3 12.9-55.4 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-160 0c17.7 0 32 14.3 32 32h-64c0-17.7 14.3-32 32-32zm160 416H96V64h64v64h192V64h64v384z" />',
        viewBox: '0 0 512 512'
    };

    var clipboardHtmlIcon = {
        name: 'clipboard-html',
        content: '<path d="M214.6 361.4 192 384l-80-80 80-80 22.6 22.6-57.3 57.4 57.3 57.4zM448 64v384c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h104.6C211.7 12.9 232.3 0 256 0s44.3 12.9 55.4 32H416c17.7 0 32 14.3 32 32zm-224 0h64c0-17.7-14.3-32-32-32s-32 14.3-32 32zm192 0h-64v64H160V64H96v384h320V64zM271.2 183.9 209.8 416l30.9 8.3L302.2 192l-31-8.1zm26.2 62.7 57.4 57.4-57.4 57.4L320 384l80-80-80-80-22.6 22.6z" />',
        viewBox: '0 0 512 512'
    };

    var clipboardMarkdownIcon = {
        name: 'clipboard-markdown',
        content: '<path d="M226 224h30v128h-32v-72.8l-32.2 45.6L160 279v73h-32V224h32l31.8 46.2L226 224zm126 64h32l-48 64-48-64h32l.2-64H352v64zm64-256H311.4C300.3 12.9 279.7 0 256 0s-44.3 12.9-55.4 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-160 0c17.7 0 32 14.3 32 32h-64c0-17.7 14.3-32 32-32zm160 416H96V64h64v64h192V64h64v384z" />',
        viewBox: '0 0 512 512'
    };

    var clipboardTextIcon = {
        name: 'clipboard-text',
        content: '<path d="M416 32H311.4C300.3 12.9 279.7 0 256 0s-44.3 12.9-55.4 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-160 0c17.7 0 32 14.3 32 32h-64c0-17.7 14.3-32 32-32zm160 416H96V64h64v64h192V64h64v384zm-32-224H128v-32h256v32zm0 64H128v-32h256v32zm0 64H128v-32h256v32zm0 64H128v-32h256v32z" />',
        viewBox: '0 0 512 512'
    };

    var applyFormatIcon = {
        name: 'apply-format',
        content: '<path d="M380.984 313.69c12.445 12.445 12.445 32.81 0 45.255L266.529 470.658c-12.445 12.445-32.787 12.467-45.255 0L0 248.898c18.584 18.584 40.255-4.835 40.255-4.835L154.71 132.671c12.445-12.445 32.81-12.445 45.255 0L380.984 313.69zm89.682-227.101-45.255-45.255c-12.445-12.445-32.81-12.445-45.255 0l-67.882 67.882-22.627-22.627c-12.445-12.445-32.81-12.445-45.255 0l-22.627 22.627 181.019 181.019 22.627-22.627c12.445-12.445 12.445-32.81 0-45.255l-22.627-22.627 67.882-67.882c12.445-12.446 12.445-32.81 0-45.255z" />',
        viewBox: '0 0 512 512'
    };

    var clearCssIcon = {
        name: 'clear-css',
        content: '<path d="M402.784 290.235 221.765 109.216l22.627-22.627c12.445-12.445 32.81-12.445 45.255 0l22.627 22.627 67.882-67.882c12.445-12.445 32.81-12.445 45.255 0l45.255 45.255c12.445 12.445 12.445 32.81 0 45.255l-67.882 67.882 22.627 22.627c12.445 12.445 12.445 32.81 0 45.255l-22.627 22.627zm-21.8 23.455-181.02-181.019c-12.346-12.346-32.483-12.437-44.953-.287L54.627 32 32 54.627l100.074 100.074-91.819 89.362S18.585 267.482 0 248.898l221.274 221.76c12.467 12.467 32.81 12.445 45.255 0l91.851-89.651L457.373 480 480 457.373l-98.73-98.73c12.151-12.47 12.06-32.607-.286-44.953z" />',
        viewBox: '0 0 512 512'
    };

    var copyFormatIcon = {
        name: 'copy-format',
        content: '<path d="M96 480h160v32H64v-64H0V288h32v128h32v-64h32v128zm32-32h96v-32h-96v32zm0-96v32h32v-32h-32zm284.2-92.6L253.8 101c-12.4-12.4-32.9-12.4-45.3.1l-69.8 69.8-.2.2c-11.6 11.6-30 12.7-42.5 2.7l200.9 200.9c12.5 12.5 32.8 12.4 45.3 0l69.9-69.9c12.5-12.5 12.5-33 .1-45.4zM502.7 32 480 9.3c-12.4-12.4-32.8-12.4-45.3 0l-67.9 67.9-22.6-22.6c-12.4-12.4-32.8-12.4-45.3 0l-22.6 22.6 158.4 158.4 22.6-22.6c12.4-12.4 12.4-32.8 0-45.3l-22.6-22.6 67.9-67.9c12.5-12.4 12.5-32.8.1-45.2z" />',
        viewBox: '0 0 512 512'
    };

    var stripAllFormattingIcon = {
        name: 'strip-all-formatting',
        content: '<path d="M32 480h224v32H0v.1V256h32v224zm32-32h159v-32H64v32zm97-96H63v32h98v-32zm-65-64H64v32h32v-32zm316.2-28.6L253.8 101c-12.4-12.4-32.9-12.4-45.3.1l-69.8 69.8-.2.2c-11.6 11.6-30 12.7-42.5 2.7l200.9 200.9c12.5 12.5 32.8 12.4 45.3 0l69.9-69.9c12.5-12.5 12.5-33 .1-45.4zM502.7 32 480 9.3c-12.4-12.4-32.8-12.4-45.3 0l-67.9 67.9-22.6-22.6c-12.4-12.4-32.8-12.4-45.3 0l-22.6 22.6 158.4 158.4 22.6-22.6c12.4-12.4 12.4-32.8 0-45.3l-22.6-22.6 67.9-67.9c12.5-12.4 12.5-32.8.1-45.2z" />',
        viewBox: '0 0 512 512'
    };

    var stripCssFormatIcon = {
        name: 'strip-css-format',
        content: '<path d="M0 288v224h416V288H0zm145 65.9c-10-6.2-21-9.3-33.4-9.3-13.6 0-24.5 4.6-32.9 13.7-8.3 9.1-12.5 21.5-12.5 37.1 0 15 3.9 26.9 11.8 35.8s18.4 13.3 31.7 13.3c12.7 0 24.3-3.3 34.3-9.9v31.8c-9.9 5.5-23.7 8.2-40.7 8.2-22.2 0-39.6-7-52.3-20.9-12.7-14-19-32.5-19-55.8 0-24.7 7.1-44.8 21.4-60.2 14.3-15.4 32.8-23.1 55.6-23.1 14.1 0 26 1.9 36 5.7v33.6zM260.6 450c-3.1 5.9-7.2 10.6-12.4 14.2-5.2 3.6-11.3 6.2-18.2 7.8-7 1.6-14.3 2.4-21.9 2.4-7.9 0-15.4-.7-22.5-2.2-7.2-1.4-13.4-3.6-18.5-6.5v-34.4c5.8 5.3 12.2 9.2 18.9 11.8 6.9 2.6 13.8 3.9 20.7 3.9 4.1 0 7.7-.4 10.7-1.2 3.1-.8 5.6-1.9 7.7-3.3 2-1.4 3.6-3.1 4.6-5 1-1.9 1.5-4 1.5-6.2 0-3-.8-5.7-2.4-8.1-1.6-2.4-3.8-4.6-6.6-6.6s-6.1-4-9.9-5.8c-3.8-1.9-8-3.8-12.4-5.7-11.3-5-19.6-11.2-25.1-18.4-5.5-7.3-8.3-15.9-8.3-26.2 0-8.1 1.5-15 4.5-20.7s7.1-10.6 12.3-14.3c5.2-3.7 11.2-6.5 18-8.3 6.9-1.8 14.1-2.6 21.7-2.6 7.5 0 14.2.5 19.9 1.5 5.8 1 11.2 2.5 16 4.5v32.2c-2.4-1.8-5.1-3.4-7.9-4.7-2.9-1.4-5.8-2.5-8.8-3.4s-6-1.6-9-2c-3-.4-5.8-.6-8.5-.6-3.7 0-7.1.4-10.1 1.1-3 .8-5.6 1.8-7.7 3.2-2.1 1.4-3.7 3-4.8 4.9-1.1 1.9-1.7 4-1.7 6.4 0 2.6.6 4.9 1.9 7 1.3 2.1 3.1 4 5.4 5.8 2.3 1.8 5.2 3.6 8.6 5.4s7.2 3.6 11.4 5.5c5.8 2.6 11 5.3 15.5 8.3 4.6 2.9 8.6 6.2 11.8 9.9 3.3 3.7 5.8 7.9 7.6 12.6 1.7 4.7 2.6 10.2 2.6 16.3 0 8.5-1.6 15.7-4.6 21.5zm119 0c-3.1 5.9-7.2 10.6-12.4 14.2-5.2 3.6-11.3 6.2-18.2 7.8-7 1.6-14.3 2.4-21.9 2.4-7.9 0-15.4-.7-22.5-2.2-7.2-1.4-13.4-3.6-18.5-6.5v-34.4c5.8 5.3 12.2 9.2 18.9 11.8 6.9 2.6 13.8 3.9 20.7 3.9 4.1 0 7.7-.4 10.7-1.2 3.1-.8 5.6-1.9 7.7-3.3 2-1.4 3.6-3.1 4.6-5 1-1.9 1.5-4 1.5-6.2 0-3-.8-5.7-2.4-8.1-1.6-2.4-3.8-4.6-6.6-6.6s-6.1-4-9.9-5.8c-3.8-1.9-8-3.8-12.4-5.7-11.3-5-19.6-11.2-25.1-18.4-5.5-7.3-8.3-15.9-8.3-26.2 0-8.1 1.5-15 4.5-20.7 3-5.8 7.1-10.6 12.3-14.3 5.2-3.7 11.2-6.5 18-8.3 6.9-1.8 14.1-2.6 21.7-2.6 7.5 0 14.2.5 19.9 1.5 5.8 1 11.2 2.5 16 4.5v32.2c-2.4-1.8-5.1-3.4-7.9-4.7-2.9-1.4-5.8-2.5-8.8-3.4-3-.9-6-1.6-9-2-3-.4-5.8-.6-8.5-.6-3.7 0-7.1.4-10.1 1.1-3 .8-5.6 1.8-7.7 3.2-2.1 1.4-3.7 3-4.8 4.9-1.1 1.9-1.7 4-1.7 6.4 0 2.6.6 4.9 1.9 7 1.3 2.1 3.1 4 5.4 5.8 2.4 1.8 5.2 3.6 8.6 5.4 3.4 1.8 7.2 3.6 11.4 5.5 5.8 2.6 11 5.3 15.5 8.3 4.6 2.9 8.5 6.2 11.8 9.9 3.3 3.7 5.8 7.9 7.6 12.6 1.7 4.7 2.6 10.2 2.6 16.3 0 8.5-1.5 15.7-4.6 21.5zM502.7 32 480 9.3c-12.4-12.4-32.8-12.4-45.3 0l-67.9 67.9-22.6-22.6c-12.4-12.4-32.8-12.4-45.3 0l-22.6 22.6 158.4 158.4 22.6-22.6c12.4-12.4 12.4-32.8 0-45.3l-22.6-22.6 67.9-67.9c12.5-12.4 12.5-32.8.1-45.2zm-246.9 69.9c-12.4-12.4-32.8-12.4-45.3 0l-79.7 79.7c-12.4 12.4-32.8 12.4-45.3 0L160 256h249.9L255.8 101.9z" />',
        viewBox: '0 0 512 512'
    };

    var stripFontElementsIcon = {
        name: 'strip-font-elements',
        content: '<path d="M502.666 31.961 480.039 9.334c-12.445-12.445-32.81-12.445-45.255 0l-67.882 67.882-22.627-22.627c-12.445-12.445-32.81-12.445-45.255 0l-22.627 22.627 158.392 158.392 22.627-22.627c12.445-12.445 12.445-32.81 0-45.255l-22.627-22.627 67.882-67.882c12.444-12.446 12.444-32.811-.001-45.256zm-246.848 69.936c-12.445-12.445-32.81-12.445-45.255 0l-79.706 79.706c-12.445 12.445-32.81 12.445-45.255 0L160 256h249.921L255.818 101.897zM176 348.121 200.706 416h-49.412L176 348.121zM0 288v224h352V288H0zm224 192-11.647-32h-72.706L128 480H96l58.235-160h43.53L256 480h-32z" />',
        viewBox: '0 0 512 512'
    };

    var stripSpanElementsIcon = {
        name: 'strip-span-elements',
        content: '<path d="M96 288 0 400l96 112h256V288H96zm170.3 167.5c-3.9 5.9-9.3 10.6-16.1 14.2-6.8 3.6-14.6 6.2-23.6 7.8-9 1.6-18.4 2.4-28.4 2.4-10.2 0-20-.7-29.2-2.2-9.2-1.4-17.2-3.6-24-6.5v-34.5c7.5 5.2 15.7 9.2 24.6 11.8 8.8 2.6 17.8 3.9 26.8 3.9 5.3 0 9.9-.4 13.9-1.2 3.9-.8 7.2-1.9 9.9-3.3 2.6-1.4 4.6-3.1 5.9-5 1.3-1.9 2-4 2-6.2 0-3-1-5.7-3.1-8.1-2.1-2.4-4.9-4.6-8.5-6.6-3.6-2-7.9-4-12.8-5.8-4.9-1.9-10.3-3.8-16-5.7-14.6-5-25.4-11.2-32.6-18.4-7.2-7.3-10.7-16-10.7-26.3 0-8.1 2-15 5.9-20.8 3.9-5.8 9.2-10.5 15.9-14.3 6.7-3.7 14.5-6.5 23.3-8.3 8.8-1.8 18.2-2.6 28.1-2.6 9.7 0 18.3.5 25.8 1.5s14.4 2.5 20.7 4.5v32.3c-3.1-1.8-6.5-3.4-10.2-4.7-3.7-1.4-7.5-2.5-11.4-3.4-3.9-.9-7.8-1.6-11.6-2-3.9-.4-7.5-.6-11-.6-4.8 0-9.1.4-13 1.1-3.9.8-7.2 1.8-9.9 3.2-2.7 1.4-4.8 3-6.2 4.9-1.5 1.9-2.2 4-2.2 6.4 0 2.6.8 4.9 2.5 7 1.6 2.1 4 4 7 5.8 3 1.8 6.7 3.6 11.1 5.4 4.3 1.8 9.2 3.6 14.7 5.4 7.5 2.6 14.2 5.3 20.1 8.3 5.9 2.9 11 6.2 15.3 9.9 4.2 3.7 7.5 7.9 9.8 12.6 2.3 4.7 3.4 10.2 3.4 16.4-.3 8.6-2.3 15.9-6.2 21.7zM502.7 32 480 9.3c-12.4-12.4-32.8-12.4-45.3 0l-67.9 67.9-22.6-22.6c-12.4-12.4-32.8-12.4-45.3 0l-22.6 22.6 158.4 158.4 22.6-22.6c12.4-12.4 12.4-32.8 0-45.3l-22.6-22.6 67.9-67.9c12.5-12.4 12.5-32.8.1-45.2zm-246.9 69.9c-12.4-12.4-32.8-12.4-45.3 0l-79.7 79.7c-12.4 12.4-32.8 12.4-45.3 0L160 256h249.9L255.8 101.9z" />',
        viewBox: '0 0 512 512'
    };

    var stripWordFormattingIcon = {
        name: 'strip-word-formatting',
        content: '<path d="M0 288v224h352V288H0zm239.3 192h-37.7L176 385.4 147.4 480h-40.9L64 320h40.6l21.9 100.4L155.8 320h40.4l25.2 100.4 19.4-71.4H224v-29h64l-48.7 160zM502.7 77.2l-67.9 67.9 22.6 22.6c12.4 12.4 12.4 32.8 0 45.3l-22.6 22.6L276.4 77.2 299 54.6c12.4-12.4 32.8-12.4 45.3 0l22.6 22.6 67.9-67.9c12.4-12.4 32.8-12.4 45.3 0L502.7 32c12.4 12.4 12.4 32.8 0 45.2zM409.9 256H160l-74.4-74.4c12.4 12.4 32.8 12.4 45.3 0l79.7-79.7c12.4-12.4 32.8-12.4 45.3 0l154 154.1z" />',
        viewBox: '0 0 512 512'
    };

    var formatCodeBlockIcon = {
        name: 'format-code-block',
        content: '<path d="M224 352v160h288V352H224zm102.6 105.4L304 480l-48-48 22.6-22.6L304 384l22.6 22.6-25.3 25.4 25.3 25.4zM432 480l-22.6-22.6 25.4-25.4-25.4-25.4L432 384l25.4 25.4L480 432l-48 48zM192 160V32c0-17.6-14.4-32-32-32h-32c-17.6 0-32 14.4-32 32v128L0 256h288l-96-96zm96 128H0v192h64V320h32v160h32V320h32v160h32V320h96v-32z" />',
        viewBox: '0 0 512 512'
    };

    var buildingBlocksIcon = {
        name: 'building-blocks',
        content: '<path d="M127.9 289V128H160V80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h64V80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h32v160l-256.1 1zM96 320v-48c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v48H0v128h224V320H96zm384 0v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H288v128h224V320h-32z" />',
        viewBox: '0 0 512 512'
    };

    var puzzlePieceIcon = {
        name: 'puzzle-piece',
        content: '<path d="M480 352c0 1 0 2-.1 2.9v.8c0 .8-.1 1.7-.2 2.5v.5c-.1 1-.2 1.9-.4 2.8-.1.4-.1.9-.2 1.3s-.1.8-.2 1.2c-.1.4-.2.7-.2 1.1l-.6 2.7c-.1.4-.2.7-.3 1.1 0 .2-.1.5-.2.7-.2.5-.4 1.1-.5 1.7-.3.9-.6 1.8-.9 2.6 0 .1-.1.2-.1.3-.3.8-.6 1.6-.9 2.3-.1.2-.2.5-.3.7-.3.8-.7 1.5-1 2.3 0 .1-.1.2-.1.2-.4.8-.8 1.6-1.3 2.4l-.6 1.2c-.2.4-.4.7-.6 1.1-.2.3-.3.6-.5.8-.5.8-1 1.5-1.5 2.3l-.6.9c-.2.4-.5.7-.7 1-.2.3-.5.6-.7.9-.5.7-1.1 1.4-1.7 2.1l-.3.3-1.5 1.8c-.2.2-.3.4-.5.5-.6.7-1.2 1.3-1.9 2-.6.6-1.3 1.3-2 1.9-.4.3-.7.7-1.1 1-.3.3-.7.6-1 .9-.2.1-.3.3-.5.4-.7.6-1.4 1.1-2.1 1.7-.3.3-.7.5-1 .8-.3.2-.6.5-1 .7l-.9.6c-.8.5-1.5 1-2.3 1.5-.2.1-.5.3-.7.4-.4.2-.7.4-1.1.6-.4.2-.8.5-1.3.7-.8.4-1.6.9-2.4 1.3-.1.1-.2.1-.3.2-.3.2-.7.4-1 .5-.6.2-1.2.5-1.9.8-.8.3-1.6.6-2.3.9-.1 0-.2.1-.3.1-.9.3-1.7.6-2.6.9-.6.2-1.2.3-1.7.6-.2.1-.5.1-.7.2-.4.1-.7.2-1.1.3l-2.7.6c-.3.1-.5.1-.8.2-.5.1-1.1.2-1.7.3-.4.1-.8.1-1.2.2-.9.1-1.9.3-2.8.4-.2 0-.5 0-.7.1-.4.1-.9.1-1.3.1-.6 0-1.1.1-1.7.1-1 0-2 .1-2.9.1-1.2 0-2.3 0-3.5-.1-.4 0-.7-.1-1.1-.1-.8-.1-1.6-.1-2.3-.2-.4 0-.9-.1-1.3-.2l-2.1-.3c-.4-.1-.9-.2-1.3-.2-.7-.1-1.4-.3-2-.4-.4-.1-.9-.2-1.3-.3-.7-.2-1.4-.3-2-.5l-1.2-.3c-.7-.2-1.4-.4-2.1-.7-.4-.1-.7-.2-1.1-.4-.8-.3-1.5-.6-2.3-.9-.3-.1-.5-.2-.8-.3-1-.4-1.9-.8-2.8-1.2-.1 0-.1-.1-.2-.1-3.1-1.5-6-3.2-8.8-5.1-.1 0-.1-.1-.2-.2-.8-.6-1.7-1.2-2.5-1.8-.1-.1-.2-.2-.3-.2-.8-.6-1.6-1.2-2.3-1.9-.3-.2-.6-.5-.8-.7-.5-.4-1-.8-1.4-1.3l-.5-.5c-.8-.8-1.6-1.5-2.3-2.3l-1.5-1.5c-.3-.3-.5-.6-.7-.9-.1-.2-.2-.3-.4-.5-4.9-5.7-12-8.9-19.5-8.9h-1.4c-14.3 0-25.9 11.6-25.9 25.9v70H217.9c-14.3 0-25.9-11.6-25.9-25.9v-1.4c0-7.5 3.3-14.6 8.9-19.5 15-12.5 24.2-31.6 23-52.9-1.8-32.5-28.3-58.7-60.9-60.2-36.7-1.7-67 27.6-67 63.9 0 19.6 8.8 37.1 22.6 48.8 5.9 5 9.4 12.2 9.4 19.9v1.4c0 14.3-11.6 25.9-25.9 25.9H32V192h70.1c14.3 0 25.9-11.6 25.9-25.9v-1.4c0-7.5-3.3-14.6-8.9-19.5l-.3-.3c-.7-.5-1.4-1.1-2-1.7l-.6-.6c-.8-.8-1.6-1.5-2.3-2.3l-.2-.2c-.7-.7-1.4-1.5-2.1-2.3-.1-.1-.2-.2-.2-.3-.7-.8-1.3-1.5-1.9-2.3-.1-.1-.2-.2-.2-.3-.6-.8-1.2-1.6-1.8-2.5l-.2-.2c-1.9-2.8-3.6-5.7-5.1-8.8 0-.1-.1-.1-.1-.2-.4-.9-.9-1.9-1.2-2.8-.1-.3-.2-.5-.3-.8-.3-.8-.6-1.5-.9-2.3-.1-.3-.2-.7-.4-1.1-.2-.7-.5-1.4-.7-2.1l-.3-1.2c-.2-.7-.4-1.4-.5-2-.1-.4-.2-.9-.3-1.3-.1-.7-.3-1.4-.4-2-.1-.4-.2-.9-.2-1.3l-.3-2.1c-.1-.4-.1-.9-.2-1.3-.1-.8-.1-1.6-.2-2.3 0-.4-.1-.7-.1-1.1-.1-1.2-.1-2.3-.1-3.5 0-1 0-2 .1-2.9 0-.4 0-.9.1-1.3 0-.7.1-1.4.2-2v-.4c.1-.9.2-1.9.4-2.8 0-.2.1-.4.1-.7.1-.8.3-1.6.4-2.4 0-.2.1-.4.1-.5l.6-2.7c0-.1.1-.3.1-.4.2-.7.4-1.4.6-2.2l.3-.9c.3-.9.6-1.8.9-2.6 0-.1.1-.2.1-.3.3-.8.6-1.6.9-2.3.1-.2.2-.5.3-.7.3-.8.7-1.5 1-2.3 0-.1.1-.2.1-.3.4-.8.8-1.6 1.3-2.4l.3-.6c.4-.7.7-1.3 1.1-1.9.1-.2.2-.3.3-.5.5-.8 1-1.5 1.5-2.3.1-.1.2-.3.3-.4.4-.6.9-1.2 1.3-1.8.1-.2.3-.4.4-.6.5-.7 1.1-1.4 1.7-2.1l.3-.3 1.5-1.8c.2-.2.3-.4.5-.5.6-.7 1.2-1.3 1.9-2 .6-.6 1.3-1.3 2-1.9.2-.2.4-.3.5-.5l1.8-1.5.3-.3c.7-.6 1.4-1.1 2.1-1.7.2-.1.3-.3.5-.4.6-.5 1.3-.9 1.9-1.3.2-.1.3-.2.5-.3.8-.5 1.5-1 2.3-1.5.1-.1.3-.2.4-.2.6-.4 1.3-.8 1.9-1.1.2-.1.5-.3.7-.4.8-.4 1.6-.9 2.4-1.3.1 0 .2-.1.2-.1.8-.4 1.5-.7 2.3-1 .2-.1.5-.2.7-.3.8-.3 1.5-.6 2.3-.9.1 0 .2-.1.3-.1.9-.3 1.7-.6 2.6-.9.3-.1.6-.2.8-.3.7-.2 1.4-.4 2.2-.6.2 0 .3-.1.5-.1l2.7-.6c.2 0 .4-.1.6-.1.8-.2 1.6-.3 2.3-.4.2 0 .5-.1.7-.1.9-.1 1.9-.3 2.8-.4.2 0 .4 0 .5-.1.8-.1 1.6-.1 2.5-.2h.7c1 0 1.9-.1 2.9-.1s2 0 3 .1h.7c.9.1 1.8.1 2.7.2h.2c30 3.1 53.9 26.9 57.1 57 0 .3.1.7.1 1 .1.7.1 1.4.2 2.1 0 .5 0 .9.1 1.4v5c0 .5-.1 1-.1 1.4 0 .6-.1 1.2-.1 1.7s-.1 1-.2 1.5c-.1.6-.1 1.1-.2 1.7-.1.5-.1 1-.2 1.5s-.2 1.1-.3 1.6l-.3 1.5c-.1.5-.2 1-.4 1.5-.1.5-.2 1-.4 1.5-.1.5-.3.9-.4 1.4-.2.5-.3 1-.5 1.5-.1.4-.3.9-.4 1.3-.2.5-.4 1.1-.6 1.6-.1.4-.3.8-.5 1.2-.2.6-.4 1.1-.7 1.7-.1.3-.3.7-.4 1-.3.6-.5 1.2-.8 1.8-.1.2-.2.5-.4.7-.3.7-.7 1.3-1 2 0 .1-.1.2-.1.2-3.8 6.7-8.7 12.7-14.5 17.7h-.1c-5.8 5-9.4 12.2-9.4 19.9v1.4c0 14.3 11.6 25.9 25.9 25.9H320v116.7c0 6.3 5.1 11.3 11.3 11.3H357c5.2 0 9.1-4.1 10-9.2 0-.1.1-.1.1-.2 5-5.8 10.9-10.8 17.7-14.5.1 0 .2-.1.2-.1.7-.4 1.3-.7 2-1 .2-.1.5-.2.7-.4.6-.3 1.2-.6 1.8-.8.3-.1.7-.3 1-.4.6-.2 1.1-.5 1.7-.7.4-.2.8-.3 1.2-.5.5-.2 1.1-.4 1.6-.6.4-.2.9-.3 1.3-.4.5-.2 1-.3 1.5-.5.5-.1.9-.3 1.4-.4.5-.1 1-.3 1.5-.4.5-.1 1-.2 1.5-.4l1.5-.3c.5-.1 1.1-.2 1.6-.3.5-.1 1-.2 1.5-.2.6-.1 1.1-.1 1.7-.2.5-.1 1-.1 1.5-.2.6-.1 1.1-.1 1.7-.1.5 0 1-.1 1.4-.1h5c.5 0 .9 0 1.4.1.7 0 1.4.1 2.1.2.3 0 .7.1 1 .1 30 3.1 53.9 27 57 57.1v.2c.1.9.2 1.8.2 2.7v.7c.2.4.2 1.4.2 2.4z" />',
        viewBox: '0 0 512 512'
    };

    var linkAddIcon = {
        name: 'link-add',
        content: '<path d="M384 384zm64 32v-64h-32v64h-64v32h64v64h32v-64h64v-32h-64zM96 256c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32zm-32 0c0 35.4 28.6 64 64 64h110.8c-22.1 38.2-63.5 64-110.8 64C57.3 384 0 326.7 0 256s57.3-128 128-128c47.4 0 88.7 25.8 110.8 64H128c-35.4 0-64 28.6-64 64zm416 84.7c19.9-22.6 32-52.2 32-84.7 0-70.7-57.3-128-128-128-47.3 0-88.7 25.8-110.8 64H384c35.3 0 64 28.6 64 64s-28.6 64-64 64h96v20.7zM384 320H273.2c22.1 38.2 63.4 64 110.8 64v-64z" />',
        viewBox: '0 0 512 512'
    };

    var globeLinkIcon = {
        name: 'globe-link',
        content: '<path d="M161.7 412.6C69.1 391.2 0 308.1 0 209 0 93.6 93.6 0 209 0s209 93.6 209 209c0 58.2-23.8 110.8-62.2 148.7-20.5-23.1-50.4-37.7-83.8-37.7-3.9 0-7.8.2-11.6.6 12-15.9 26.4-28.8 41.3-33 22.6-18.6 21.6-35.2 18.6-50.2-7-12.6-38.7-23.6-68.8-49.7-18.1-4-40.2 7.5-48.7-3.5-8.5-11.1-48.7-27.1-31.1-44.7s44.2.5 54.8-35.7C236.9 67.6 259 82.6 270 82.6c11.1 0 13.1-26.1-7.5-35.7-20.6-9.5-49.7-19.6-100.5-14.6-50.7 5-86.4 27.6-75.4 47.7 11.1 20.1 44.2 83.9 81.4 94.5 37.2 10.6 35.7 20.2 41.7 27.1 6 7-11.3 22.2 5.1 50.8 8.9 12 17 5 21 25.1 1.9 9.4-2.7 30.3-6.4 50.8-34.9 14.4-61 46-67.7 84.3zM224 432c0-5.1.8-10.1 2.3-14.7C232.5 398 250.6 384 272 384h64c-1.5-1.9-3-3.8-4.6-5.6-14.6-16.2-35.8-26.4-59.4-26.4-12.2 0-23.8 2.7-34.1 7.6-4.4 2.1-8.6 4.6-12.5 7.4-16.4 11.8-28.2 29.7-32 50.4-.9 4.7-1.4 9.6-1.4 14.6 0 44.2 35.8 80 80 80 26.2 0 49.4-12.6 64-32h-64c-26.5 0-48-21.5-48-48zm208-80c-26.2 0-49.4 12.6-64 32h64c26.5 0 48 21.5 48 48s-21.5 48-48 48h-64c14.6 19.4 37.8 32 64 32 44.2 0 80-35.8 80-80s-35.8-80-80-80zm0 64H272c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />',
        viewBox: '0 0 512 512'
    };

    var globeUnlinkIcon = {
        name: 'globe-unlink',
        content: '<path d="M161.7 412.6C69.1 391.2 0 308.1 0 209 0 93.6 93.6 0 209 0s209 93.6 209 209c0 58.2-23.8 110.8-62.2 148.7-20.5-23.1-50.4-37.7-83.8-37.7-3.9 0-7.8.2-11.6.6 12-15.9 26.4-28.8 41.3-33 22.6-18.6 21.6-35.2 18.6-50.2-7-12.6-38.7-23.6-68.8-49.7-18.1-4-40.2 7.5-48.7-3.5-8.5-11.1-48.7-27.1-31.1-44.7s44.2.5 54.8-35.7C236.9 67.6 259 82.6 270 82.6s13.1-26.1-7.5-35.7c-20.6-9.5-49.7-19.6-100.5-14.6-50.7 5-86.4 27.6-75.4 47.7 11.1 20.1 44.2 83.9 81.4 94.5 37.2 10.6 35.7 20.2 41.7 27.1 6 7-11.3 22.2 5.1 50.8 8.9 12 17 5 21 25.1 1.9 9.4-2.7 30.3-6.4 50.8-34.9 14.4-61 46-67.7 84.3M224 432c0-5.1.8-10.1 2.3-14.7C232.5 398 250.6 384 272 384h64c-1.5-1.9-3-3.8-4.6-5.6-14.6-16.2-35.8-26.4-59.4-26.4-12.2 0-23.8 2.7-34.1 7.6-4.4 2.1-8.6 4.6-12.5 7.4-16.4 11.8-28.2 29.7-32 50.4-.9 4.7-1.4 9.6-1.4 14.6 0 44.2 35.8 80 80 80 26.2 0 49.4-12.6 64-32h-64c-26.5 0-48-21.5-48-48m208-80c-26.2 0-49.4 12.6-64 32h64c26.5 0 48 21.5 48 48s-21.5 48-48 48h-64c14.6 19.4 37.8 32 64 32 44.2 0 80-35.8 80-80s-35.8-80-80-80" />',
        viewBox: '0 0 512 512'
    };

    var envelopLinkIcon = {
        name: 'envelop-link',
        content: '<path d="M224 432c0-5.1.8-10.1 2.3-14.7C232.5 398 250.6 384 272 384h64c-1.5-1.9-3-3.8-4.6-5.6-14.6-16.2-35.8-26.4-59.4-26.4-12.2 0-23.8 2.7-34.1 7.6-4.4 2.1-8.6 4.6-12.5 7.4-16.4 11.8-28.2 29.7-32 50.4-.9 4.7-1.4 9.6-1.4 14.6 0 44.2 35.8 80 80 80 26.2 0 49.4-12.6 64-32h-64c-26.5 0-48-21.5-48-48zm208-80c-26.2 0-49.4 12.6-64 32h64c26.5 0 48 21.5 48 48s-21.5 48-48 48h-64c14.6 19.4 37.8 32 64 32 44.2 0 80-35.8 80-80s-35.8-80-80-80zm0 64H272c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16zM32 0C14.3 0 0 14.3 0 32v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H32zm23.7 32L224 200.3 392.3 32c11 2.9 19.7 11.6 22.6 22.6L310.6 158.9l104.3 104.3c-2.9 11-11.6 19.7-22.6 22.6L288 181.5l-64 64-64-64L55.7 285.8c-11-2.9-19.7-11.6-22.6-22.6l104.3-104.3L33.1 54.6C36 43.6 44.7 34.9 55.7 32z" />',
        viewBox: '0 0 512 512'
    };

    var anchorIcon = {
        name: 'anchor',
        content: '<path d="m352 288 44.5 44.5c-22.3 40.7-61.7 70.7-108.5 80.3V151.4c19.1-11.1 32-31.8 32-55.4 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.6 12.9 44.3 32 55.4v261.4c-46.8-9.5-86.2-39.6-108.5-80.3L160 288H32v128l36.9-36.9C108.9 439.9 177.8 480 256 480s147.1-40.1 187.1-100.9L480 416V288H352zM256 64c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32z" />',
        viewBox: '0 0 512 512'
    };

    var tableAddIcon = {
        name: 'table-add',
        content: '<path d="M448 320V32H32v416h288V320h128zm-288 96H64v-96h96v96zm0-128H64v-96h96v96zm0-128H64V64h96v96zm128 256h-96v-96h96v96zm0-128h-96v-96h96v96zm0-128h-96V64h96v96zm32-96h96v96h-96V64zm0 224v-96h96v96h-96zm192 128v32h-64v64h-32v-64h-64v-32h64v-64h32v64h64z" />',
        viewBox: '0 0 512 512'
    };

    var tableIcon = {
        name: 'table',
        content: '<path d="M32 32v416h416V32H32zm256 32v96h-96V64h96zm0 128v96h-96v-96h96zM64 64h96v96H64V64zm0 128h96v96H64v-96zm0 224v-96h96v96H64zm128 0v-96h96v96h-96zm224 0h-96v-96h96v96zm0-128h-96v-96h96v96zm0-128h-96V64h96v96z" />',
        viewBox: '0 0 512 512'
    };

    var tablePropertiesIcon = {
        name: 'table-properties',
        content: '<path d="m502.666 77.216-22.627 22.627-67.882-67.882 22.627-22.627c12.445-12.445 32.81-12.445 45.255 0l22.627 22.627c12.445 12.445 12.445 32.81 0 45.255zM392.483 51.635l67.882 67.882L290.66 288H224v-66.66L392.483 51.635zm22.627 67.882L392.483 96.89 256.719 232.654l22.627 22.627L415.11 119.517zM384 256l32-32v288H0V96h288l-32 32h-96v224h224v-96zM128 384H32v96h96v-96zm0-128H32v96h96v-96zm0-128H32v96h96v-96zm128 256h-96v96h96v-96zm128 0h-96v96h96v-96z" />',
        viewBox: '0 0 512 512'
    };

    var tableCellIcon = {
        name: 'table-cell',
        content: '<path d="M32 32v416h416V32H32zm128 384H64v-96h96v96zm0-128H64v-96h96v96zm0-128H64V64h96v96zm128 256h-96v-96h96v96zm0-256h-96V64h96v96zm128 256h-96v-96h96v96zm0-128h-96v-96h96v96zm0-128h-96V64h96v96z" />',
        viewBox: '0 0 512 512'
    };

    var tableCellPropertiesIcon = {
        name: 'table-cell-properties',
        content: '<path d="m502.666 77.216-22.627 22.627-67.882-67.882 22.627-22.627c12.445-12.445 32.81-12.445 45.255 0l22.627 22.627c12.445 12.445 12.445 32.81 0 45.255zM384 256l32-32v288H0V96h288l-32 32h-96v96h32v96h96v32h96v-96zM128 384H32v96h96v-96zm0-128H32v96h96v-96zm0-128H32v96h96v-96zm128 256h-96v96h96v-96zm128 0h-96v96h96v-96zm8.483-332.365 67.882 67.882-141.588 141.588L290.66 288H224v-66.66l26.895-28.118L392.483 51.635zm22.627 67.882L392.483 96.89 256.719 232.654l11.314 11.314 11.314 11.314L415.11 119.517z" />',
        viewBox: '0 0 512 512'
    };

    var tableColumnInsertLeftIcon = {
        name: 'table-column-insert-left',
        content: '<path d="M32 480V0h128v480H32zM480 32v416H192V32h288zM224 160h96V64h-96v96zm0 128h96v-96h-96v96zm0 128h96v-96h-96v96zm224-96h-96v96h96v-96zm0-32v-96h-96v96h96zm0-224h-96v96h96V64z" />',
        viewBox: '0 0 512 512'
    };

    var tableColumnInsertRightIcon = {
        name: 'table-column-insert-right',
        content: '<path d="M352 480V0h128v480H352zM320 32v416H32V32h288zm-32 32h-96v96h96V64zm0 128h-96v96h96v-96zm0 128h-96v96h96v-96zM64 416h96v-96H64v96zm96-128v-96H64v96h96zM64 160h96V64H64v96z" />',
        viewBox: '0 0 512 512'
    };

    var tableRowInsertAboveIcon = {
        name: 'table-row-insert-above',
        content: '<path d="M480 160H0V32h480v128zM32 192h416v288H32V192zm32 32v96h96v-96H64zm128 0v96h96v-96h-96zm128 0v96h96v-96h-96zm96 224v-96h-96v96h96zm-128-96h-96v96h96v-96zm-128 96v-96H64v96h96z" />',
        viewBox: '0 0 512 512'
    };

    var tableRowInsertBelowIcon = {
        name: 'table-row-insert-below',
        content: '<path d="M480 480H0V352h480v128zM32 32h416v288H32V32zm128 256v-96H64v96h96zm128 0v-96h-96v96h96zm128 0v-96h-96v96h96zM320 64v96h96V64h-96zm-32 0h-96v96h96V64zM64 64v96h96V64H64z" />',
        viewBox: '0 0 512 512'
    };

    var tableColumnDeleteIcon = {
        name: 'table-column-delete',
        content: '<path d="M192 288v224h128V288H192zm0-288v64h128V0H192zm160 32h128v416H352V32zm96 288h-64v96h64v-96zm0-128h-64v96h64v-96zm0-128h-64v96h64V64zM32 32h128v416H32V32zm96 288H64v96h64v-96zm0-128H64v96h64v-96zm0-128H64v96h64V64zm128 89.373L313.373 96 336 118.627 278.627 176 336 233.373 313.373 256 256 198.627 198.627 256 176 233.373 233.373 176 176 118.627 198.627 96 256 153.373z" />',
        viewBox: '0 0 512 512'
    };

    var tableRowDeleteIcon = {
        name: 'table-row-delete',
        content: '<path d="M224 192H0v128h224V192zm288 0h-64v128h64V192zm-32 160v128H64V352h416zm-288 96v-64H96v64h96zm128 0v-64h-96v64h96zm128 0v-64h-96v64h96zm32-416v128H64V32h416zm-288 96V64H96v64h96zm128 0V64h-96v64h96zm128 0V64h-96v64h96zm-89.373 128L416 313.373 393.373 336 336 278.627 278.627 336 256 313.373 313.373 256 256 198.627 278.627 176 336 233.373 393.373 176 416 198.627 358.627 256z" />',
        viewBox: '0 0 512 512'
    };

    var tableCellDeleteIcon = {
        name: 'table-cell-delete',
        content: '<path d="M96 192h160v128H96V192zM32 352h160v128H32V352zm32 32v64h96v-64H64zm128-224H32V32h160v128zm-32-96H64v64h96V64zm262.627 192L480 313.373 457.373 336 400 278.627 342.627 336 320 313.373 377.373 256 320 198.627 342.627 176 400 233.373 457.373 176 480 198.627 422.627 256z" />',
        viewBox: '0 0 512 512'
    };

    var tableDeleteIcon = {
        name: 'table-delete',
        content: '<path d="M32 32v416h416V32H32zm384 128h-64v32h64v96h-64v32h64v96h-96v-64h-32v64h-96v-64h-32v64H64v-96h64v-32H64v-96h64v-32H64V64h96v64h32V64h96v64h32V64h96v96zm-153.4 80 57.4 57.4-22.6 22.6-57.4-57.4-57.4 57.4-22.6-22.6 57.4-57.4-57.4-57.4 22.6-22.6 57.4 57.4 57.4-57.4 22.6 22.6-57.4 57.4z" />',
        viewBox: '0 0 512 512'
    };

    var cellsMergeIcon = {
        name: 'cells-merge',
        content: '<path d="M32 32v448h416V32H32zm160 32h96v64h-96V64zM64 64h96v64H64V64zm96 384H64v-64h96v64zm128 0h-96v-64h96v64zm128 0h-96v-64h96v64zm0-96H64V160h352v192zm0-224h-96V64h96v64z" />',
        viewBox: '0 0 512 512'
    };

    var cellsMergeHorizontallyIcon = {
        name: 'cells-merge-horizontally',
        content: '<path d="M32 32v416h416V32H32zm160 32h96v96h-96V64zM64 64h96v96H64V64zm96 352H64v-96h96v96zm128 0h-96v-96h96v96zm128 0h-96v-96h96v96zm0-128H64v-96h352v96zm0-128h-96V64h96v96z" />',
        viewBox: '0 0 512 512'
    };

    var cellsMergeVerticallyIcon = {
        name: 'cells-merge-vertically',
        content: '<path d="M32 448h416V32H32v416zm32-160v-96h96v96H64zm0 128v-96h96v96H64zm352-96v96h-96v-96h96zm0-128v96h-96v-96h96zm0-128v96h-96V64h96zm-128 0v352h-96V64h96zm-128 0v96H64V64h96z" />',
        viewBox: '0 0 512 512'
    };

    var cellSplitHorizontallyIcon = {
        name: 'cell-split-horizontally',
        content: '<path d="M32 32v416h416V32H32zm32 32h160v64H64V64zm160 160h-64v-64h64v64zM64 160h64v64H64v-64zm0 96h160v64H64v-64zm0 160v-64h160v64H64zm192-256h64v64h-64v-64zm160 256H256v-64h160v64zm0-96H256v-64h160v64zm0-96h-64v-64h64v64zm0-96H256V64h160v64z" />',
        viewBox: '0 0 512 512'
    };

    var cellSplitVerticallyIcon = {
        name: 'cell-split-vertically',
        content: '<path d="M32 448h416V32H32v416zm32-32V256h64v160H64zm160-160v64h-64v-64h64zm-64 160v-64h64v64h-64zm96 0V256h64v160h-64zm160 0h-64V256h64v160zM160 224v-64h64v64h-64zM416 64v160h-64V64h64zm-96 0v160h-64V64h64zm-96 0v64h-64V64h64zm-96 0v160H64V64h64z" />',
        viewBox: '0 0 512 512'
    };

    var tableUnmergeIcon = {
        name: 'table-unmerge',
        content: '<path d="M32 32v416h416V32H32zm160 32h96v96h-96V64zm96 128v96h-96v-96h96zM64 64h96v96H64V64zm0 128h96v96H64v-96zm96 224H64v-96h96v96zm128 0h-96v-96h96v96zm128 0h-96v-96h96v96zm0-128h-96v-96h96v96zm0-128h-96V64h96v96z" />',
        viewBox: '0 0 512 512'
    };

    var paneFreezeIcon = {
        name: 'pane-freeze',
        content: '<path d="M32 32v416h416V32H32zm256 32 96 96h-64l-96-96h64zm-128 0 96 96h-64L96 64h64zM64 96l96 96v64l-96-96V96zm0 128 96 96v64l-96-96v-64zm0 192v-64l64 64H64zm224 0h-96v-96h96v96zm0-128h-96v-96h96v96zm128 128h-96v-96h96v96zm0-128h-96v-96h96v96zM352 64h64v64l-64-64z" />',
        viewBox: '0 0 512 512'
    };

    var rowFreezeIcon = {
        name: 'row-freeze',
        content: '<path d="M32 448h416V32H32v416zM64 96l64 64H64V96zm96-32 96 96h-64L96 64h64zm128 0 96 96h-64l-96-96h64zm128 64-64-64h64v64zm-96 160v-96h96v96h-96zm-128 0v-96h96v96h-96zm-32 0H64v-96h96v96zm160 128v-96h96v96h-96zm-128 0v-96h96v96h-96zm-128 0v-96h96v96H64z" />',
        viewBox: '0 0 512 512'
    };

    var columnFreezeIcon = {
        name: 'column-freeze',
        content: '<path d="M32 32v416h416V32H32zm128 32v64L96 64h64zM64 96l96 96v64l-96-96V96zm0 128 96 96v64l-96-96v-64zm0 192v-64l64 64H64zm224 0h-96v-96h96v96zm0-128h-96v-96h96v96zm-96-128V64h96v96h-96zm224 256h-96v-96h96v96zm0-128h-96v-96h96v96zm0-128h-96V64h96v96z" />',
        viewBox: '0 0 512 512'
    };

    var toolbarFloatIcon = {
        name: 'toolbar-float',
        content: '<path d="M64 352h416v128H64V352zm96 32H96v64h96v-64h-32zm160 0h-96v64h96v-64zm32 0v64h96v-64h-96zM63.961 131.844l90.51 90.51 45.255-45.255-90.51-90.51-45.255 45.255zm0 0 90.51 90.51 45.255-45.255-90.51-90.51-45.255 45.255zm158.392 67.882 67.882-67.882-22.627-22.627-22.627 22.627-90.51-90.51c-12.445-12.445-32.81-12.445-45.255 0l-67.882 67.882c-12.445 12.445-12.445 32.81 0 45.255l90.51 90.51-22.627 22.627 22.627 22.627 67.882-67.882L297.373 320 320 297.373l-97.647-97.647zm-67.882 22.627-90.51-90.51 45.255-45.255 90.51 90.51-45.255 45.255zM480 256h-64v64h64v-64z" />',
        viewBox: '0 0 512 512'
    };

    var spellCheckerIcon = {
        name: 'spell-checker',
        content: '<path d="M113.2 206.2c-7.4 6.2-15.6 10.7-24.6 13.5s-19.3 4.2-31 4.2c-8.4 0-16.1-1-23.1-2.9s-13.1-4.9-18.2-8.8c-5.1-3.9-9.1-8.8-12-14.6C1.4 192 0 185.2 0 177.5c0-18.9 8.1-32.9 24.4-41.9s40.9-13.5 74-13.5h13.7c0-2.6 0-5.3-.1-8.2-.1-2.9-.3-5.4-.7-7.6-.8-7.6-3.5-13.2-8-17-4.5-3.7-11.8-5.6-21.7-5.6-10.4 0-18.1 1.9-23.3 5.8s-7.8 9.5-7.8 16.8H7c2.4-32.7 27.8-49 76.3-49 6.6 0 12.6.2 17.9.6 5.3.4 10.2 1.1 14.6 2 4.4 1 8.6 2.2 12.5 3.7 3.9 1.5 7.6 3.4 11.4 5.7 3.5 2.2 6.4 4.7 9 7.4 2.5 2.8 4.6 6.1 6.4 9.9 1.7 3.9 3 8.3 3.8 13.3s1.2 10.8 1.2 17.4V224h-46.8l-.1-17.8zm-1-58H96.8c-16.2 0-28.4 2-36.5 5.9s-12.2 10.6-12.2 20.2c0 7.3 2.5 12.7 7.5 16.2s11.5 5.2 19.4 5.2c7.6 0 14.6-1.5 21.2-4.5s11.9-6.9 15.8-11.7v-31.3h.2zm125.2-61.6c5.5-7.2 12.3-12.8 20.2-16.7C265.5 66 274 64 283.1 64c10.2 0 19.2 1.9 26.8 5.7 7.7 3.8 14.1 9.2 19.3 16.3 5.2 7.1 9.1 15.7 11.7 25.9s4 21.6 4 34.3-1.2 19-4.3 29.4c-3 10.4-7.6 17.9-13.3 25.2-5.7 7.3-12.6 13-20.7 17.1s-17.3 6.1-27.5 6.1c-17.5 0-31.9-5.2-43.3-15.6V224H192V0h45.4v86.6zm0 91.7c4.4 4.1 9.1 7.2 14.1 9.4 5 2.1 10.5 3.2 16.5 3.2 9.8 0 17.4-4.3 22.7-12.8 5.3-8.6 7.9-14.7 7.9-31.8 0-32.7-9.6-49-28.7-49-6.2 0-12 1.9-17.4 5.6s-10.5 9-15.1 15.8v59.6zM442.2 224c-12.4 0-23.4-1.8-33.3-5.4-9.8-3.6-18.1-8.8-25-15.6-6.8-6.8-12-15.2-15.7-25.1-3.7-9.9-5.5-21.3-5.5-34s1.8-24 5.5-33.9 8.9-18.2 15.9-25.1c6.9-6.9 15.3-12.1 25.2-15.6 9.9-3.6 21.1-5.4 33.6-5.4 20 0 36 4.7 48 14.1s19 23 21 40.9h-41c-1-7-3.9-12.7-8.8-16.9-4.9-4.2-11.2-6.3-19.2-6.3-10.2 0-18.4 3.9-24.5 11.6s-9.2 19.9-9.2 36.6c0 16.5 3.1 28.7 9.2 36.5s14.3 11.7 24.5 11.7c7.9 0 14.4-2.1 19.3-6.3s7.8-9.8 8.7-16.9h41c-2.5 17.7-9.7 31.2-21.5 40.7-11.6 9.6-27.7 14.4-48.2 14.4zm69.8 0L224 512 64 352l64-64 96 96 288-160" />',
        viewBox: '0 0 512 512'
    };

    var validationXhtmlIcon = {
        name: 'validation-xhtml',
        content: '<path d="M192 224h-54l-26.2-96L86 224H32L0 64h42l22 96 22-96h52l22 96 22-96h42l-32 160zm272.5-121.8c4.7 4.2 7.4 9.8 8.5 16.8h38.9c-2-17.9-8.6-31.3-19.9-40.8-11.5-9.3-26.5-14-45.6-14-11.9 0-22.5 1.7-32 5.3-9.4 3.6-17.4 8.9-23.9 15.7-6.7 6.9-11.6 15.2-15.1 25-3.5 10-5.3 21.2-5.3 33.8 0 12.8 1.8 24 5.3 33.8 3.5 10 8.3 18.4 14.8 25.1 6.5 6.7 14.5 11.8 23.8 15.4 9.4 3.6 20 5.4 31.6 5.4 19.4 0 34.7-4.8 45.9-14.3 11.2-9.5 18-23 20.4-40.5H473c-.9 7-3.7 12.6-8.3 16.8-4.7 4.3-10.7 6.3-18.3 6.3-9.8 0-17.5-3.9-23.5-11.7-5.8-7.8-8.6-19.9-8.6-36.3 0-16.7 2.8-28.7 8.6-36.5 5.9-7.8 13.6-11.5 23.5-11.5 7.5 0 13.6 2 18.1 6.2zM316.7 219.8c7.3-2.3 13.6-5.8 18.9-10.2l.1-.1c5.2-4.6 9.1-9.9 11.8-16.1 2.8-6 4.2-12.7 4.2-20.7 0-10-2.7-18.4-8-25.3-3.5-4.4-7.9-7.9-13.2-10.5.3-.3.7-.5 1-.8 3.1-2.4 5.5-5 7.6-8.1 2-3 3.5-6.2 4.5-9.4 1-3.5 1.5-6.9 1.5-10.4 0-6.6-1.3-12.6-3.9-18.1-2.6-5.4-6.4-10.3-11.4-14.2-4.8-4.2-10.5-7.2-17-9.1-6.3-1.8-13.7-2.8-22.1-2.8-7.4 0-14.3 1-20.8 3.1-6.3 2.1-11.7 5.2-16.9 9.3-5 4.1-9 9.2-11.9 15.1-3 5.9-4.9 12.7-5.6 20.3l-.5 5.1h38.2l.5-4.4c1.6-14.6 9.9-16.5 16.9-16.5 4.8 0 8.3 1.1 10.7 3.3l.1.1c2.7 2.5 3.3 7.1 3.3 10.4 0 5.6-1.2 9.4-3.8 11.4l-.1.1c-2.8 2.4-7.2 3.5-13.4 3.5H276v31h13.7c7.4 0 12.8 1.4 16.3 4 3.3 2.7 4.9 6.5 4.9 12.2 0 2.9-.5 5.6-1.4 8-.9 2.3-2.1 4.1-3.9 5.9-1.4 1.5-3.4 2.7-5.9 3.6-2.4.9-5.2 1.4-8.4 1.4-3.4 0-6.3-.4-9-1.3-2.2-.8-4.1-2-5.7-3.5-1.6-1.6-2.8-3.3-3.7-5.2-.8-1.9-1.2-4.1-1.5-6.7l-.4-4.2h-39.1l.3 5c.5 7.4 2.3 14.5 5.3 21 3.1 6.1 7.8 11.8 14.2 16.6 4.9 3.8 10.8 6.6 17.8 8.4h.4c6.4 1.5 13.8 2.3 22.1 2.3 9.5 0 17.5-1.2 24.7-3.5zM64 352l64-64 96 96 288-160-288 288L64 352z" />',
        viewBox: '0 0 512 512'
    };

    var validationDataIcon = {
        name: 'validation-data',
        content: '<path d="m64 352 64-64 96 96 288-160-288 288L64 352zm48.6-193.6c0 13-2.5 24.4-7.6 34.4s-12.3 17.7-21.8 23.1c-9.4 5.4-20.3 8.1-32.7 8.1H0V96h49.5c42.1 0 63.1 20.8 63.1 62.4zm-38 .3c0-6.3-1.2-12-3.5-17-2.4-5-5.7-8.9-10.1-11.7-4.4-2.7-9.6-4.1-15.6-4.1H36v68h10.1c8.6 0 15.6-3.2 20.7-9.5 5.2-6.4 7.8-14.9 7.8-25.7zM216.2 224l-5.5-24h-37.2l-5.9 24H128l42.3-128h45.9L256 224h-39.8zm-23.6-100h-.9c-.1 1.4-.5 3.8-1.2 7.1s-4.1 17.2-10.4 41.9h23.4l-8.6-34.7c-1.1-5-1.9-9.8-2.3-14.3zm127.4 4v96h-32v-96h-32V96h98v32h-34zm120.2 96-5.5-24h-37.2l-5.9 24H352l42.3-128h45.9L480 224h-39.8zm-23.6-100h-.9c-.1 1.4-.5 3.8-1.2 7.1s-4.1 17.2-10.4 41.9h23.4l-8.6-34.7c-1.1-5-1.9-9.8-2.3-14.3z" />',
        viewBox: '0 0 512 512'
    };

    var toggleFullScreenModeIcon = {
        name: 'toggle-full-screen-mode',
        content: '<path d="M448 32H64c-17.6 0-32 14.4-32 32v288c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32zm0 319.942a.53.53 0 0 1-.058.058H64.058a.454.454 0 0 1-.058-.058V64.057a.511.511 0 0 1 .057-.057h383.885c.02.017.041.038.058.057v287.885zM384 480H128c35.346 0 64-28.654 64-64h128c0 35.346 28.654 64 64 64zm32-160H96c58.263-113.973 183.21-192 320-192v192z" />',
        viewBox: '0 0 512 512'
    };

    var formulaFxIcon = {
        name: 'formula-fx',
        content: '<path d="m214 183.4-24.7 110c-11.5 53.4-22.7 92.1-33.7 116.1-11 24-23.8 41.8-38.4 53.2-14.7 11.6-31.5 17.3-50.5 17.3-12 0-20.7-2.7-26.3-8-5.6-5.3-8.4-11.5-8.4-18.7 0-6.7 2.3-12.5 7-17.4 4.7-4.9 10.8-7.3 18.3-7.3 6.3 0 11.2 1.9 14.5 5.6 3.4 3.7 5.1 8.5 5.1 14.2 0 5.2-1 9.1-3.2 11.6-2.1 2.5-3.2 4.2-3.2 5l1 1.7c.8.8 1.8 1.2 3 1.2 4.2 0 7.8-1.5 10.8-4.7 7.4-7.7 13-17 16.6-27.9 2.5-7.5 7.4-27.4 14.5-59.5l43-192.6h-29.3l7-28.7c10.5.2 18.2-1.4 23-4.7 4.8-3.3 9.8-10.6 15.2-22 15.4-33.1 31.7-60.1 48.9-74.4S260.4 32 281.5 32c13.5 0 23.3 3 29.4 9.1 6.1 6.1 9.2 13.9 9.2 23.5 0 8.5-2 15.2-6.1 20.2-4.1 5.1-9.2 7.5-15.2 7.5-5.6 0-10.3-2-13.9-6.1-3.6-4.1-5.5-9-5.5-14.7 0-4.1 1.1-8.4 3.5-13 2.3-4.6 3.5-7.7 3.5-9.3 0-1.8-.5-3.3-1.6-4.4-1-1.1-2.4-1.7-4.1-1.7-8.3 0-16.8 5.9-25.5 17.9-14.3 19.1-25.9 52.5-34.5 93.8h30.5l-7.4 28.7-29.8-.1zm78.7 22.7 68.9-14.1c12.5 23.3 21.3 48.9 26.5 76.9 12.9-22.7 22.7-38.6 29.3-47.6 8.8-12.2 16.1-20.1 21.8-23.8 5.8-3.7 11.9-5.5 18.3-5.5 7.2 0 12.8 2.4 16.7 7 3.9 4.7 5.8 11 5.8 19 0 7.5-2 13.6-5.8 18.4-3.9 4.7-8.7 7.1-14.5 7.1-4.2 0-9-.9-14.5-2.7-5.4-1.8-9.3-2.7-11.3-2.7-5.6 0-10.8 2.4-15.8 7-6.8 6.4-15.2 20.1-25.3 41 11.2 46.9 20.1 75.5 26.9 85.8 3.9 6.1 7.9 9.2 12.1 9.2 3.4 0 6.4-1 8.9-3 3.8-3.3 9.7-11.5 17.6-24.6l7.1 4.9c-11.6 22.2-22.9 37.9-34 46.9-8.4 7-16.7 10.6-24.9 10.6-8.4 0-15.4-2.3-21-6.7-5.6-4.5-10.6-11.7-14.9-21.8-4.4-10-9.5-26.2-15.4-48.4-15.4 23.3-27.5 40.3-36.3 51-8.7 10.7-16 17.7-21.8 21-5.8 3.3-12 4.9-18.6 4.9-6.8 0-12.3-2.4-16.3-7-4-4.7-6-10.8-6-18.3 0-7.9 2.2-14.5 6.5-19.6 4.3-5.2 9.9-7.7 16.6-7.7 3.6 0 7.6 1.3 12.1 3.7 6.6 3.8 11.3 5.7 14.2 5.7 3.8 0 7.2-.9 10.3-2.8 3.9-2.4 9-7.4 15-15.3 3.7-4.8 10.5-15.1 20.4-31-12.6-55.8-22.5-89.1-29.6-100-4.5-7-10.2-10.6-17-10.6-3.6 0-7.9.6-13 1.9l1-8.8z" />',
        viewBox: '0 0 512 512'
    };

    var sumIcon = {
        name: 'sum',
        content: '<path d="M416 64v128l-64-64H160l128 128-128 128h192l64-64v128H96v-64l128-128L96 128V64h320z" />',
        viewBox: '0 0 512 512'
    };

    var symbolIcon = {
        name: 'symbol',
        content: '<path d="m448 416 32-32v96H320V375.8c11.4-5.1 22.2-11.5 32-19 38.9-29.7 64-76.9 64-130.1C416 136.8 344.4 64 256 64S96 136.8 96 226.7c0 53.2 25.1 100.5 64 130.1 9.8 7.5 20.6 13.9 32 19V480H32v-96l32 32h96v-18.5C84.3 366.7 32 300.6 32 224 32 118 132.3 32 256 32s224 86 224 192c0 76.6-52.3 142.7-128 173.5V416h96z" />',
        viewBox: '0 0 512 512'
    };

    var dollarIcon = {
        name: 'dollar',
        content: '<path d="M326.6 273c-8.3-7.3-18.4-13.6-30.4-19.1-11.8-5.4-25.2-10.2-40.2-14.5V131.3c6.5.8 13 2.2 17.7 4.2 7.5 3.3 13.7 7.8 18.8 13.7 5.1 5.8 8.9 12.7 11.4 20.7 2.6 8 3.8 16.7 3.8 26.2H352c0-29.2-7.5-52-22.5-68.8s-36-26.8-62.9-30.1c0 0-5-.4-10.6-.8V32h-32v66.2c-11.9 1.5-22.6 4.3-32.2 8.4-10.6 4.5-19.6 10.3-27.1 17.5-7.5 7.2-13.2 15.6-17.2 25.4-4 9.7-6 20.5-6 32.2 0 12.7 2.2 23.8 6.7 33.4s11 18.2 19.5 25.6 18.8 13.8 30.9 19.3c7.8 3.5 16.3 6.8 25.4 9.7v110.7c-2.7-.4-5.4-.9-8.1-1.5-7.9-1.8-15.2-5.1-21.7-9.8-6.5-4.7-11.8-11-15.8-19s-6-18-6-30H128c0 16.2 2.6 30 7.9 41.6 5.3 11.6 12.4 21.2 21.3 28.6 8.9 7.5 19.1 13.3 30.6 17.3s23.4 6.5 35.7 7.5c0 0 .2 0 .5.1V480h32v-64.7c1.9-.2 3.1-.3 3.1-.3 14.1-1.3 26.9-4.1 38.4-8.3 11.5-4.3 21.3-10 29.4-17.1 8.1-7.1 14.3-15.6 18.6-25.4 4.3-9.8 6.5-20.9 6.5-33.2 0-12.5-2.2-23.5-6.5-33-4.3-9.4-10.6-17.8-18.9-25zm-104.7-46.2c-8.8-4.1-15.9-8.4-21.2-12.9s-9.1-9.6-11.3-15c-2.2-5.5-3.4-11.6-3.4-18.5 0-7.4 1.2-14.1 3.6-20.3 2.4-6.1 6-11.3 10.8-15.7 4.8-4.3 10.9-7.7 18.3-10.1 1.7-.6 3.5-1 5.3-1.5v94.9c-.6-.2-1.4-.5-2.1-.9zm81 125.2c-3 6.2-7.5 11.4-13.2 15.8-5.8 4.3-12.8 7.7-21.2 10-3.9 1.1-8.1 1.9-12.5 2.5V279.2c5.6 2 10.7 4.1 15.3 6.2 8.6 4 15.6 8.3 20.9 13 5.4 4.7 9.3 9.7 11.7 15.1 2.4 5.4 3.6 11.3 3.6 17.7 0 7.7-1.5 14.7-4.6 20.8z" />',
        viewBox: '0 0 512 512'
    };

    var percentIcon = {
        name: 'percent',
        content: '<path d="M352 64h32L160 448h-32L352 64zm16 160c-44.2 0-80 50.1-80 112s35.8 112 80 112 80-50.1 80-112-35.8-112-80-112zm0 192c-22.7 0-48-32.9-48-80s25.3-80 48-80 48 32.9 48 80-25.3 80-48 80zM144 64c-44.2 0-80 50.1-80 112s35.8 112 80 112 80-50.1 80-112-35.8-112-80-112zm0 192c-22.7 0-48-32.9-48-80s25.3-80 48-80 48 32.9 48 80-25.3 80-48 80z" />',
        viewBox: '0 0 512 512'
    };

    var customFormatIcon = {
        name: 'custom-format',
        content: '<path d="M128 128v224H80V182.4s-13.1 19.1-48 19.1v-40.6c34.9 0 61.7-32.9 61.7-32.9H128zm94.4 184H320v40H169v-16.6c.3-11.3 2.2-21.4 6-30.3 3.8-9 8.6-17 14.3-24.1s12-13.4 18.8-18.9 13.3-10.4 19.4-14.8c6.5-4.6 12.1-9 17-13.2s9-8.4 12.3-12.5 5.8-8.3 7.5-12.6c1.6-4.2 2.5-8.8 2.5-13.6 0-9.4-2.7-16.5-8-21.4-5.3-4.8-13.5-7.2-24.4-7.2-18.9 0-37.1 7.5-54.4 22.6v-42.7c19.2-12.4 40.8-18.6 64.8-18.6 11.2 0 21.2 1.5 30 4.4 8.9 2.9 16.4 7.1 22.5 12.5s10.8 12 14.1 19.7c3.2 7.7 4.8 16.4 4.8 25.9 0 10.1-1.6 19.2-4.7 27-3.1 7.9-7.3 15.1-12.4 21.5-5.2 6.5-11.1 12.4-17.9 17.7-6.8 5.4-13.8 10.6-21 15.6-4.9 3.5-9.7 6.9-14.2 10.4-4.6 3.4-8.6 6.8-12.1 10.1s-6.2 6.6-8.3 9.8c-2.2 3.1-3.2 9.3-3.2 9.3zM341 341.2v-41.7s32.1 15.8 51.5 15.8c12.2 0 21.8-2.6 28.6-7.9 6.8-5.3 10.2-12.5 10.2-21.9 0-9.7-4.2-17.1-12.7-22.3-8.4-5.3-20-7.9-34.8-7.2H364v-37h17.7c28.4 0 42.6-9.4 42.6-28.1 0-17.6-10.9-26.4-32.7-26.4-14.7 0-28.8 4.7-42.6 14v-38.9c15.4-7.7 33.1-11.5 53.6-11.5 22.3 0 39.6 5 52.1 14.9 12.4 10 18.7 22.9 18.7 38.8 0 28.3-14.5 46-43.4 53.2v.3c15.5 1.9 27.6 7.5 36.5 16.8 8.9 9.2 13.3 20.6 13.3 34 0 20.3-7.4 36.4-22.4 48.2-15 11.8-35.5 17.7-61.7 17.7-22.3.1-40.6-3.5-54.7-10.8z" />',
        viewBox: '0 0 512 512'
    };

    var decimalIncreaseIcon = {
        name: 'decimal-increase',
        content: '<path d="M384 256c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64 35.4 0 64-28.7 64-64v-64c0-35.3-28.6-64-64-64zm32 118c0 23.6-14.3 42.7-32 42.7-17.6 0-32-19.1-32-42.7v-42.7c0-23.5 14.4-42.6 32-42.6 17.7 0 32 19.1 32 42.6V374zM384 32c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64 35.4 0 64-28.7 64-64V96c0-35.3-28.6-64-64-64zm32 118c0 23.6-14.3 42.7-32 42.7-17.6 0-32-19.1-32-42.7v-42.7c0-23.6 14.4-42.7 32-42.7 17.7 0 32 19.1 32 42.7V150zM224 256c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64s64-28.7 64-64v-64c0-35.3-28.6-64-64-64zm32 118c0 23.6-14.3 42.7-32 42.7s-32-19.1-32-42.7v-42.7c0-23.5 14.3-42.6 32-42.6s32 19.1 32 42.6V374zM96 416h32v32H96v-32zm160-224h32v32h-32v-32zM192 32v192L64 128l128-96z" />',
        viewBox: '0 0 512 512'
    };

    var decimalDecreaseIcon = {
        name: 'decimal-decrease',
        content: '<path d="M384 32c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64 35.4 0 64-28.7 64-64V96c0-35.3-28.6-64-64-64zm32 116.7c0 23.5-14.3 42.6-32 42.6-17.6 0-32-19.1-32-42.6V106c0-23.6 14.4-42.7 32-42.7 17.7 0 32 19.1 32 42.7v42.7zM384 256c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64 35.4 0 64-28.7 64-64v-64c0-35.3-28.6-64-64-64zm32 116.7c0 23.6-14.3 42.7-32 42.7-17.6 0-32-19.1-32-42.7V330c0-23.6 14.4-42.7 32-42.7 17.7 0 32 19.1 32 42.7v42.7zM224 32c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64 35.4 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 116.7c0 23.5-14.3 42.6-32 42.6s-32-19.1-32-42.6V106c0-23.6 14.3-42.7 32-42.7s32 19.1 32 42.7v42.7zM128 224H96v-32h32v32zm128 192h32v32h-32v-32zM64 256l128 96-128 96V256z" />',
        viewBox: '0 0 512 512'
    };

    var fontSizeIcon = {
        name: 'font-size',
        content: '<path d="M97 224 32 416h29l16.9-50H146l16.9 50h29l-65-192H97zm-8.9 112 23.9-70.6 23.9 70.6H88.1zM376 96h-48L224 416h48l26-80h108l26 80h48L376 96zm-62.4 192L352 169.8 390.4 288h-76.8z" />',
        viewBox: '0 0 512 512'
    };

    var imageAbsolutePositionIcon = {
        name: 'image-absolute-position',
        content: '<path d="M416 240c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm96-80v320c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32zm-32 26.7c0-14.7-11.9-26.7-26.7-26.7H186.7c-14.7 0-26.7 11.9-26.7 26.7V384l96-96 96 96 64-64 64 64V186.7zM32 0H0v512h32v-64h32v-32H32v-64h32v-32H32v-64h32v-32H32v-64h32v-32H32V32h96v32h32V32h64v32h32V32h64v32h32V32h64v32h32V32h64V0H32z" />',
        viewBox: '0 0 512 512'
    };

    var tableWizardIcon = {
        name: 'table-wizard',
        content: '<path d="M160 384V160h224v96l32 32V0H0v416h288l-32-32h-96zM288 32h96v96h-96V32zm-128 0h96v96h-96V32zm-32 352H32v-96h96v96zm0-128H32v-96h96v96zm0-128H32V32h96v96zm376.6 362.1-15.5 15.5c-8.6 8.6-22.4 8.6-31 0l-124-124c-8.6-8.6-8.6-22.4 0-31l15.5-15.5c8.6-8.6 22.4-8.6 31 0l124 124c8.6 8.5 8.6 22.4 0 31zm-158.5-209-21-14.8c-3.2-2.3-5.1-6-5.1-10l.3-25.7c.1-6.6-5.2-12.1-11.8-12.2-2.6 0-5.2.8-7.3 2.4l-20.6 15.4c-3.2 2.4-7.3 3-11 1.8l-24.3-8.3c-6.8-2.3-14.3 1.9-15.7 9.3-.4 2.1-.1 4.2.5 6.2l8.2 24.1c1.3 3.7.6 7.8-1.8 11l-15.4 20.6c-4.3 5.8-2.6 14.2 4 17.8 1.9 1 4 1.4 6.1 1.4l25.4-.3c3.9-.1 7.7 1.8 10 5.1l14.8 21c4.2 5.9 12.7 6.9 18.1 1.7 1.5-1.5 2.6-3.3 3.2-5.3l7.5-24.3c1.2-3.8 4.1-6.7 7.9-7.9l24.5-7.6c6.3-2 9.8-8.7 7.9-15-.7-2.7-2.3-4.9-4.4-6.4z" />',
        viewBox: '0 0 512 512'
    };

    var crosstabIcon = {
        name: 'crosstab',
        content: '<path d="M192.3 32H32v160h1v288h447V32H192.3zm-.3 416H96v-96h96v96zm0-128H96v-96h96v96zm0-128H96V96h96v96zm128 256h-96v-96h96v96zm0-128h-96v-96h96v96zm0-128h-96V96h96v96zm128 256h-96v-96h96v96zm0-128h-96v-96h96v96zm0-128h-96V96h96v96z" />',
        viewBox: '0 0 512 512'
    };

    var crosstabWizardIcon = {
        name: 'crosstab-wizard',
        content: '<path d="M192 416V192h224v96l32 32V0H0v160h1v288h318.7l-31.9-32H192zM320 64h96v96h-96V64zm-128 0h96v96h-96V64zm-32 352H64v-96h96v96zm0-128H64v-96h96v96zm0-128H64V64h96v96zm344.6 330.1-15.5 15.5c-8.6 8.6-22.4 8.6-31 0l-124-124c-8.6-8.6-8.6-22.4 0-31l15.5-15.5c8.6-8.6 22.4-8.6 31 0l124 124c8.6 8.5 8.6 22.4 0 31zM221.2 300.8c-4.3 5.8-2.6 14.2 4 17.8 1.9 1 4 1.4 6.1 1.4l25.4-.3c3.9-.1 7.7 1.8 10 5.1l14.8 21c4.2 5.9 12.7 6.9 18.1 1.7 1.5-1.5 2.6-3.3 3.2-5.3l7.5-24.3c1.2-3.8 4.1-6.7 7.9-7.9l24.5-7.6c6.3-2 9.9-8.7 7.9-15-.8-2.5-2.4-4.7-4.5-6.2l-21-14.8c-3.2-2.3-5.1-6-5.1-10l.3-25.7c.1-6.6-5.2-12.1-11.8-12.2-2.6 0-5.2.8-7.3 2.4l-20.6 15.4c-3.2 2.4-7.3 3-11 1.8l-24.3-8.3c-6.8-2.3-14.3 1.9-15.7 9.3-.4 2.1-.1 4.2.5 6.2l8.2 24.1c1.3 3.7.6 7.8-1.8 11l-15.3 20.4z" />',
        viewBox: '0 0 512 512'
    };

    var tableBodyIcon = {
        name: 'table-body',
        content: '<path d="M32 32v416h416V32H32zm256 32v96h-96V64h96zm128 256v64L224 192h64l128 128zM64 64h96v96H64V64zm0 128h96v96H64v-96zm0 224v-96h96v96H64zm128 0v-64l64 64h-64zm128 0L192 288v-64l192 192h-64zm96-160-64-64h64v64zm0-96h-96V64h96v96z" />',
        viewBox: '0 0 512 512'
    };

    var tableColumnGroupsIcon = {
        name: 'table-column-groups',
        content: '<path d="M32 32v416h416V32H32zm256 32v64l-64-64h64zm0 320-96-96v-64l96 96v64zM192 96l96 96v64l-96-96V96zM64 64h96v96H64V64zm0 128h96v96H64v-96zm0 224v-96h96v96H64zm128 0v-64l64 64h-64zm224 0h-96v-96h96v96zm0-128h-96v-96h96v96zm0-128h-96V64h96v96z" />',
        viewBox: '0 0 512 512'
    };

    var tableCornerIcon = {
        name: 'table-corner',
        content: '<path d="M32 32v416h416V32H32zm256 32v96h-96V64h96zm0 128v96h-96v-96h96zM160 64v64L96 64h64zM64 96l64 64H64V96zm0 96h96v96H64v-96zm0 224v-96h96v96H64zm128 0v-96h96v96h-96zm224 0h-96v-96h96v96zm0-128h-96v-96h96v96zm0-128h-96V64h96v96z" />',
        viewBox: '0 0 512 512'
    };

    var tableRowGroupsIcon = {
        name: 'table-row-groups',
        content: '<path d="M32 32v416h416V32H32zm256 32v96h-96V64h96zm-64 128h64l96 96h-64l-96-96zm32 96h-64l-96-96h64l96 96zM64 64h96v96H64V64zm0 160 64 64H64v-64zm0 192v-96h96v96H64zm128 0v-96h96v96h-96zm224 0h-96v-96h96v96zm0-160-64-64h64v64zm0-96h-96V64h96v96z" />',
        viewBox: '0 0 512 512'
    };

    var globeOutlineIcon = {
        name: 'globe-outline',
        content: '<path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zM64 256c0-57 24.8-108.2 64.3-143.3.3 1.8 1 3.6 1.9 5.4 11.9 22.1 47.7 92.5 87.8 104.1 40.1 11.6 38.6 22.2 45 29.9 6.5 7.7-12.2 24.4 5.6 55.9 9.6 13.2 18.3 5.5 22.6 27.6 4.1 21-20.6 95-7.8 110.4-9 1.3-18.1 2-27.4 2-106 0-192-86-192-192zm222.4 189.6c10.5-37 41.8-89.2 75.8-98.9 24.4-20.5 23.3-38.8 20.1-55.4-7.6-13.9-41.7-26-74.3-54.8-19.5-4.4-43.4 8.3-52.6-3.9-9.2-12.2-52.6-29.9-33.6-49.3s47.7.6 59.1-39.3 35.2-23.2 47.2-23.2S342.2 92 320 81.5c-16.7-7.9-38.6-16.1-71.7-17.4 2.6-.1 5.2-.2 7.8-.2 106 0 192 86 192 192C448 351.7 378 431 286.4 445.6z" />',
        viewBox: '0 0 512 512'
    };

    var globeIcon = {
        name: 'globe',
        content: '<path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm106.2 314.7c-34.7 10-66.7 64.2-76.4 101.3-17.9-9.4 9.8-90.2 5.4-112.4-4.3-22.1-13-14.4-22.6-27.6-17.8-31.5.9-48.3-5.6-55.9-6.5-7.7-4.9-18.3-45-29.9-40.1-11.6-75.9-81.9-87.8-104.1-11.9-22.1 26.6-47 81.3-52.6 10.3-1 19.7-1.5 28.4-1.5 37.8.1 61.9 9 80 17.5 22.2 10.5 20.1 39.3 8.1 39.3s-35.8-16.6-47.2 23.2-40.1 19.9-59.1 39.3 24.4 37.1 33.6 49.3c9.2 12.2 33.1-.6 52.6 3.9 32.6 28.8 66.7 41 74.3 54.8 3.3 16.6 4.4 34.9-20 55.4z" />',
        viewBox: '0 0 512 512'
    };

    var mapMarkerIcon = {
        name: 'map-marker',
        content: '<path d="M256 0C158.8 0 80 78.8 80 176s176 336 176 336 176-238.8 176-336S353.2 0 256 0zm0 288c-61.9 0-112-50.1-112-112S194.1 64 256 64s112 50.1 112 112-50.1 112-112 112z" />',
        viewBox: '0 0 512 512'
    };

    var mapMarkerTargetIcon = {
        name: 'map-marker-target',
        content: '<path d="M256 0C158.8 0 80 78.8 80 176s176 336 176 336 176-238.8 176-336S353.2 0 256 0zm0 288c-61.9 0-112-50.1-112-112S194.1 64 256 64s112 50.1 112 112-50.1 112-112 112zm48-112c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48z" />',
        viewBox: '0 0 512 512'
    };

    var pinIcon = {
        name: 'pin',
        content: '<path d="M320 256V96c0-17.6-14.4-32-32-32h-96c-17.6 0-32 14.4-32 32v160H96v32h128v160h32V288h128v-32h-64zm-128 0V96h64v160h-64z" />',
        viewBox: '0 0 512 512'
    };

    var unpinIcon = {
        name: 'unpin',
        content: '<path d="M256 320h160c17.6 0 32-14.4 32-32v-96c0-17.6-14.4-32-32-32H256V96h-32v128H64v32h160v128h32v-64zm0-128h160v64H256v-64z" />',
        viewBox: '0 0 512 512'
    };

    var shareIcon = {
        name: 'share',
        content: '<path d="M480 432c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-10.6 2.1-20.7 5.8-30l-158.6-88.1C152.9 327.6 133.4 336 112 336c-44.2 0-80-35.8-80-80s35.8-80 80-80c21.4 0 40.9 8.4 55.2 22.1L325.8 110c-3.8-9.3-5.8-19.4-5.8-30 0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80c-22 0-41.9-8.9-56.4-23.3l-158 87.8c4.1 9.7 6.4 20.3 6.4 31.5s-2.3 21.8-6.4 31.5l158 87.8C358.1 360.9 378 352 400 352c44.2 0 80 35.8 80 80z" />',
        viewBox: '0 0 512 512'
    };

    var userIcon = {
        name: 'user',
        content: '<path d="M352 128c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zm-96 128c-106 0-192 86-192 192 0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32 0-106-86-192-192-192z" />',
        viewBox: '0 0 512 512'
    };

    var inboxIcon = {
        name: 'inbox',
        content: '<path d="M384 32H128L32 288v160c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V288L384 32zM150.2 64h211.6l84 224H352l-32 64H192l-32-64H66.2l84-224z" />',
        viewBox: '0 0 512 512'
    };

    var bloggerIcon = {
        name: 'blogger',
        content: '<path d="M188.9 64C119.9 64 64 119.5 64 188v136.1C64 392.5 119.9 448 188.9 448h134.4c69 0 124.7-55.5 124.7-123.9v-87.9c0-13.7-11-28.2-24.8-28.2h-21.5c-13.2 0-24.7-11.2-25.6-24 0-68.5-55.2-120-124.2-120h-63zm-4.9 96h72c13.2 0 24 10.8 24 24s-10.8 24-24 24h-72c-13.2 0-24-10.8-24-24s10.8-24 24-24zm0 144h144c13.2 0 24 10.8 24 24s-10.8 24-24 24H184c-13.2 0-24-10.8-24-24s10.8-24 24-24z" />',
        viewBox: '0 0 512 512'
    };

    var bloggerBoxIcon = {
        name: 'blogger-box',
        content: '<path d="M448 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-31 280.7c0 57.1-46.6 103.3-104.2 103.3H200.4C142.7 416 96 369.8 96 312.7V199.3C96 142.2 142.7 96 200.4 96h52.1C310 96 356 138.9 356 196c.7 10.7 10.4 20 21.4 20h18c11.5 0 20.7 12.1 20.6 23.5l1 73.2zM196 216h60c11 0 20-9 20-20s-9-20-20-20h-60c-11 0-20 9-20 20s9 20 20 20zm120 80H196c-11 0-20 9-20 20s9 20 20 20h120c11 0 20-9 20-20s-9-20-20-20z" />',
        viewBox: '0 0 512 512'
    };

    var deliciousIcon = {
        name: 'delicious',
        content: '<path d="M256 32h224v224H256V32zM32 256h224v224H32V256z" />',
        viewBox: '0 0 512 512'
    };

    var deliciousBoxIcon = {
        name: 'delicious-box',
        content: '<path d="M480 448V64c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32zm-224-32V256H96V96h160v160h160v160H256z" />',
        viewBox: '0 0 512 512'
    };

    var diggIcon = {
        name: 'digg',
        content: '<path d="M96 96v64H32v160h96V96H96zm64 0v32h32V96h-32zm0 64v160h32V160h-32zm64 0v160h64v32h-64v32h96V160h-96zm128 0v160h64v32h-64v32h96V160h-96zM64 192h32v96H64v-96zm192 0h32v96h-32v-96zm128 0h32v96h-32v-96z" />',
        viewBox: '0 0 512 512'
    };

    var diggBoxIcon = {
        name: 'digg-box',
        content: '<path d="M448 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM160 203.5V352H64V192h64v-64h32v75.5zM212 352h-32V192h32v160zm0-192h-32v-32h32v32zm119 153.7V416h-96v-32h64v-32h-64V192h96v121.7zm117 0V416h-96v-32h64v-32h-64V192h96v121.7zM96 224h32v96H96v-96zm171 0h32v96h-32v-96zm117 0h32v96h-32v-96z" />',
        viewBox: '0 0 512 512'
    };

    var envelopIcon = {
        name: 'envelop',
        content: '<path d="M64 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H64zm23.7 32L256 296.3 424.3 128c11 2.9 19.7 11.6 22.6 22.6L342.6 254.9l104.3 104.3c-2.9 11-11.6 19.7-22.6 22.6L320 277.5l-64 64-64-64L87.7 381.8c-11-2.9-19.7-11.6-22.6-22.6l104.3-104.3L65.1 150.6c2.9-11 11.6-19.7 22.6-22.6z" />',
        viewBox: '0 0 512 512'
    };

    var envelopBoxIcon = {
        name: 'envelop-box',
        content: '<path d="m377 182.4-88.8 88.8-31.2 29-33.2-29-88.8-88.8c-7.7 2-13.8 8.1-15.8 15.8l73 73-73 73c2 7.7 8.1 13.8 15.8 15.8l73-73 49 44.8 47-44.8 73 73c7.7-2 13.8-8.1 15.8-15.8l-73-73 73-73c-2-7.7-8.1-13.8-15.8-15.8zM448 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-32 329.6c0 12.4-10 22.4-22.4 22.4H118.4C106 384 96 374 96 361.6V182.4c0-12.4 10-22.4 22.4-22.4h275.2c12.4 0 22.4 10 22.4 22.4v179.2z" />',
        viewBox: '0 0 512 512'
    };

    var facebookIcon = {
        name: 'facebook',
        content: '<path d="M290 32c-59.8 0-96 32-96 96v64h-66v96h66v192h96V288h80l14-96h-94v-32c0-32 32-32 32-32h62V34.9c-7.2-.9-65.4-2.9-94-2.9z" />',
        viewBox: '0 0 512 512'
    };

    var facebookBoxIcon = {
        name: 'facebook-box',
        content: '<path d="M57.6 32C43.6 32 32 43.5 32 57.6v396.8c0 14 11.5 25.6 25.6 25.6h396.8c14 0 25.6-11.5 25.6-25.6V57.6c0-14-11.5-25.6-25.6-25.6H57.6zm315.8 65.5c24.1 0 42 2.3 42 2.3L414 155s-18.2-.2-38.1-.2c-21.5 0-24.9 9.9-24.9 26.1V224h64.1l-2.8 59H351v165h-63V283h-44v-59h44v-50.5c0-39.6 25.8-76 85.4-76z" />',
        viewBox: '0 0 512 512'
    };

    var googleIcon = {
        name: 'google',
        content: '<path d="M268.3 33c-16.1-1-33.4 1-52 4.9s-36.4 12.8-53.2 26.5c-12.6 11-21.9 23.4-28.3 37.3-6.3 13.9-9.4 27.7-9.4 41.5 0 11.4 2.1 22.7 6.5 33.8 4.3 11.1 10.6 21.1 18.8 29.7 8.2 8.6 18.4 15.6 30.6 20.9 12.2 5.3 26.1 7.9 41.8 7.9 3.1 0 6.2-.1 9.4-.3s6.3-.5 9.4-.9c-1.6 3.5-2.9 7-4.1 10.3-1.2 3.3-1.8 7.6-1.8 12.6 0 9 1.9 16.5 5.6 22.6s7.7 11.9 12 17.4c-6.7.4-14.5 1-23.5 1.8s-18.6 2.1-28.8 4.1-20.5 4.6-30.9 7.9-20.1 7.7-29.1 13.2c-17.2 10.2-29.1 22-35.6 35.6-6.5 13.6-9.7 25.6-9.7 36.2 0 11 2.6 21.5 7.7 31.5s12.9 18.9 23.5 26.7c10.6 7.9 23.8 14.1 39.7 18.8 15.9 4.7 34.4 7 55.5 7 25.1 0 47.3-3.2 66.7-9.7s35.6-14.9 48.5-25.3 22.7-22.3 29.4-35.6c6.7-13.3 10-26.9 10-40.6 0-10.2-1.4-19.3-4.2-27.1-2.7-7.9-6.4-14.9-10.8-21.2-4.5-6.3-9.8-12.2-15.9-17.7s-12.3-11-18.5-16.5l-21.1-16.5c-3.2-2.8-6.5-6-10-9.7s-5.3-8.9-5.3-15.6c0-6.7 1.8-12.2 5.3-16.5s7.2-8.4 11.2-12.4c6.2-4.7 12.4-9.7 18.2-15 5.9-5.3 11.2-11.2 15.9-17.6 4.7-6.5 8.4-13.8 11.2-22.1 2.7-8.2 4.1-17.9 4.1-28.8s-1.5-20.8-4.7-29.5c-3.1-8.6-6.8-16.2-11.2-22.7-4.3-6.5-8.8-12-13.5-16.5S315.3 52 315.3 52H352l31.7-20-115.4 1zm-37.1 17.8c12.2 0 22.8 3.6 32 10.9s17 16.4 23.2 27.5c6.2 11 11 22.8 14.1 35.4s4.7 24.2 4.7 34.8c0 5.5-.8 12.4-2.3 20.7s-5.7 15.7-12.4 22.4c-4.7 4.7-10.7 8.7-18 11.8-7.3 3.2-14.6 4.7-22 4.7-12.5 0-23.4-3.6-32.6-10.9-9.2-7.3-16.9-16.3-22.9-26.8-6.1-10.6-10.6-22-13.5-34.2s-4.4-23.2-4.4-33.1c0-7.9.9-15.5 2.7-23S185 76.6 190 70.3c4.7-5.9 10.8-10.6 18.2-14.1 7.5-3.6 15.1-5.4 23-5.4zM260 314h7.3c1.8 0 3.8.2 6.2.6 11 7.8 20.6 14.9 28.8 21.2 8.2 6.2 14.9 12.4 20 18.2 5.1 5.9 8.9 11.8 11.5 18 2.5 6 3.8 12.8 3.8 20.3 0 18.4-7.3 33.6-22 45.6-14.7 11.9-36.2 17.9-64.4 17.9-31.8 0-57-6.7-75.6-20s-27.9-30.6-27.9-51.7c0-10.6 2.1-19.4 6.2-26.5 4.1-7 8.9-12.9 14.4-17.6s11.1-8.3 16.8-10.8c5.7-2.6 10.1-4.4 13.2-5.6 6.3-2 12.7-3.6 19.4-5s12.9-2.4 18.8-3c5.9-.6 11-1 15.3-1.2 4.2-.2 7-.3 8.2-.4z" />',
        viewBox: '0 0 512 512'
    };

    var googleBoxIcon = {
        name: 'google-box',
        content: '<path d="M212.6 236.1c5.1-5.1 8.2-10.8 9.4-17.1s1.8-11.6 1.8-15.8c0-8.1-1.2-17-3.6-26.6s-6-18.6-10.8-27-10.7-15.4-17.7-21-15.2-8.4-24.4-8.4c-6 0-11.8 1.3-17.5 4.1s-10.3 6.3-13.9 10.8c-3.9 4.8-6.5 10-7.8 15.7s-2 11.6-2 17.6c0 7.5 1.1 15.9 3.4 25.2 2.3 9.3 5.7 18 10.3 26.1s10.5 14.9 17.5 20.5c7 5.5 15.3 8.3 24.9 8.3 5.7 0 11.3-1.2 16.8-3.6s10-5.2 13.6-8.8zM448 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM270.9 394.1c-5.1 10.2-12.6 19.3-22.4 27.2s-22.2 14.4-37 19.4c-14.8 4.9-31.8 7.4-50.9 7.4-16.2 0-30.3-1.8-42.4-5.4s-22.2-8.4-30.3-14.4-14.1-12.8-18-20.4-5.9-15.6-5.9-24c0-8.1 2.5-17.2 7.4-27.6s14-19.4 27.2-27.2c6.8-4.2 14.3-7.6 22.2-10.1s15.8-4.6 23.6-6c7.8-1.5 15.1-2.5 22-3.1s12.9-1.1 18-1.3c-3.3-4.2-6.4-8.6-9.2-13.3s-4.3-10.4-4.3-17.3c0-3.9.4-7.1 1.3-9.7s1.9-5.2 3.1-7.9c-2.4.3-4.8.5-7.2.7s-4.8.2-7.2.2c-12 0-22.6-2-31.9-6-9.3-4-17.1-9.3-23.4-15.9-6.3-6.6-11.1-14.1-14.3-22.7s-4.9-17.2-4.9-25.8c0-10.5 2.4-21 7.2-31.6s12-20.1 21.6-28.5c12.8-10.5 26.4-17.2 40.6-20.2s27.5-4.5 39.7-4.6H288l-28.7 16h-27.8c2.7 1.9 5.8 4.7 9.4 8.1 3.6 3.5 7 7.6 10.3 12.6s6.1 10.7 8.5 17.3 3.6 14.1 3.6 22.5-1.1 15.7-3.1 22c-2.1 6.3-4.9 11.9-8.5 16.9s-7.6 9.4-12.1 13.5-9.2 7.9-13.9 11.5c-3 3-5.9 6.1-8.5 9.4s-4 7.5-4 12.6 1.3 9.1 4 11.9 5.2 5.3 7.6 7.4l16.2 12.6c4.8 4.2 9.5 8.4 14.1 12.6 4.6 4.2 8.7 8.7 12.1 13.5 3.5 4.8 6.2 10.1 8.3 16.2s3.2 12.9 3.2 20.7c-.1 10.2-2.6 20.5-7.8 30.8zm-34.1-42.6c-3.9-4.5-9-9.1-15.3-13.9s-13.6-10.2-22-16.2c-1.8-.3-3.4-.4-4.7-.4h-5.6c-.9 0-3 .1-6.3.2s-7.2.4-11.7.9-9.3 1.2-14.3 2.3-10 2.3-14.8 3.8c-2.4.9-5.8 2.3-10.1 4.3s-8.6 4.7-12.8 8.3-7.8 8.1-11 13.5c-3.1 5.4-4.7 12.1-4.7 20.2 0 16.2 7.1 29.3 21.3 39.5s33.4 15.3 57.7 15.3c21.5 0 37.9-4.5 49.2-13.7s16.8-20.7 16.8-34.8c0-5.7-1-10.8-2.9-15.5s-4.9-9.3-8.8-13.8z" />',
        viewBox: '0 0 512 512'
    };

    var googlePlusIcon = {
        name: 'google-plus',
        content: '<path d="M204.3 33c-16.1-1-33.4 1-52 4.9s-36.4 12.8-53.2 26.5c-12.6 11-22 23.4-28.3 37.3s-9.4 27.7-9.4 41.5c0 11.4 2.1 22.7 6.5 33.8 4.3 11.1 10.6 21.1 18.8 29.7 8.2 8.6 18.4 15.6 30.6 20.9 12.2 5.3 26.1 7.9 41.8 7.9 3.1 0 6.2-.1 9.4-.3s6.3-.5 9.4-.9c-1.6 3.5-2.9 7-4.1 10.3-1.2 3.3-1.8 7.6-1.8 12.6 0 9 1.9 16.5 5.6 22.6s7.7 11.9 12 17.4c-6.7.4-14.5 1-23.5 1.8s-18.6 2.1-28.8 4.1-20.5 4.6-30.9 7.9-20.1 7.7-29.1 13.2c-17.2 10.2-29.1 22-35.6 35.6-6.5 13.6-9.7 25.6-9.7 36.2 0 11 2.6 21.5 7.7 31.5s12.9 18.9 23.5 26.7C73.8 462 87 468.3 102.9 473s34.4 7 55.6 7c25.1 0 47.3-3.2 66.7-9.7s35.6-14.9 48.5-25.3 22.7-22.3 29.4-35.6c6.7-13.3 10-26.9 10-40.6 0-10.2-1.4-19.3-4.2-27.1-2.7-7.9-6.4-14.9-10.8-21.2-4.5-6.3-9.8-12.2-15.9-17.7s-12.3-11-18.5-16.5l-21.2-16.5c-3.2-2.8-6.5-6-10-9.7s-5.3-8.9-5.3-15.6c0-6.7 1.8-12.2 5.3-16.5s7.2-8.4 11.2-12.4c6.2-4.7 12.4-9.7 18.2-15 5.9-5.3 11.2-11.2 15.9-17.6 4.7-6.5 8.4-13.8 11.2-22.1 2.7-8.2 4.1-17.9 4.1-28.8s-1.5-20.8-4.7-29.5c-3.1-8.6-6.8-16.2-11.2-22.7-4.3-6.5-8.8-12-13.5-16.5S251.3 52 251.3 52H288l31.7-20-115.4 1zm-37 17.8c12.2 0 22.8 3.6 32 10.9s17 16.4 23.2 27.5c6.2 11 11 22.8 14.1 35.4s4.7 24.2 4.7 34.8c0 5.5-.8 12.4-2.3 20.7-1.6 8.3-5.7 15.7-12.4 22.4-4.7 4.7-10.7 8.7-18 11.8-7.3 3.2-14.6 4.7-22 4.7-12.5 0-23.4-3.6-32.6-10.9-9.2-7.3-16.9-16.3-22.9-26.8-6.1-10.6-10.6-22-13.5-34.2s-4.4-23.2-4.4-33.1c0-7.9.9-15.5 2.7-23S121 76.6 126 70.3c4.7-5.9 10.8-10.6 18.2-14.1 7.5-3.6 15.2-5.4 23.1-5.4zM196.1 314h7.3c1.8 0 3.8.2 6.2.6 11 7.8 20.6 14.9 28.8 21.2 8.2 6.2 14.9 12.4 20 18.2 5.1 5.9 8.9 11.8 11.5 18 2.5 6 3.8 12.8 3.8 20.3 0 18.4-7.3 33.6-22 45.6-14.7 11.9-36.2 17.9-64.4 17.9-31.8 0-57-6.7-75.6-20s-27.9-30.6-27.9-51.7c0-10.6 2.1-19.4 6.2-26.5s8.9-12.9 14.4-17.6 11.1-8.3 16.8-10.8c5.7-2.6 10.1-4.4 13.2-5.6 6.3-2 12.7-3.6 19.4-5s12.9-2.4 18.8-3c5.9-.6 11-1 15.3-1.2 4.2-.2 6.9-.3 8.2-.4zM384 32v64h-64v32h64v64h32v-64h64V96h-64V32h-32z" />',
        viewBox: '0 0 512 512'
    };

    var googlePlusBoxIcon = {
        name: 'google-plus-box',
        content: '<path d="M212.6 236.1c5.1-5.1 8.2-10.8 9.4-17.1s1.8-11.6 1.8-15.8c0-8.1-1.2-17-3.6-26.6s-6-18.6-10.8-27-10.7-15.4-17.7-21-15.2-8.4-24.4-8.4c-6 0-11.8 1.3-17.5 4.1s-10.3 6.3-13.9 10.8c-3.9 4.8-6.5 10-7.8 15.7s-2 11.6-2 17.6c0 7.5 1.1 15.9 3.4 25.2 2.3 9.3 5.7 18 10.3 26.1s10.5 14.9 17.5 20.5c7 5.5 15.3 8.3 24.9 8.3 5.7 0 11.3-1.2 16.8-3.6s10-5.2 13.6-8.8zM448 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM270.9 394.1c-5.1 10.2-12.6 19.3-22.4 27.2s-22.2 14.4-37 19.4c-14.8 4.9-31.8 7.4-50.9 7.4-16.2 0-30.3-1.8-42.4-5.4s-22.2-8.4-30.3-14.4-14.1-12.8-18-20.4-5.9-15.6-5.9-24c0-8.1 2.5-17.2 7.4-27.6s14-19.4 27.2-27.2c6.8-4.2 14.3-7.6 22.2-10.1s15.8-4.6 23.6-6c7.8-1.5 15.1-2.5 22-3.1s12.9-1.1 18-1.3c-3.3-4.2-6.4-8.6-9.2-13.3s-4.3-10.4-4.3-17.3c0-3.9.4-7.1 1.3-9.7s1.9-5.2 3.1-7.9c-2.4.3-4.8.5-7.2.7s-4.8.2-7.2.2c-12 0-22.6-2-31.9-6-9.3-4-17.1-9.3-23.4-15.9-6.3-6.6-11.1-14.1-14.3-22.7s-4.9-17.2-4.9-25.8c0-10.5 2.4-21 7.2-31.6s12-20.1 21.6-28.5c12.8-10.5 26.4-17.2 40.6-20.2s27.5-4.5 39.7-4.6H288l-28.7 16h-27.8c2.7 1.9 5.8 4.7 9.4 8.1 3.6 3.5 7 7.6 10.3 12.6s6.1 10.7 8.5 17.3 3.6 14.1 3.6 22.5-1.1 15.7-3.1 22c-2.1 6.3-4.9 11.9-8.5 16.9s-7.6 9.4-12.1 13.5-9.2 7.9-13.9 11.5c-3 3-5.9 6.1-8.5 9.4s-4 7.5-4 12.6 1.3 9.1 4 11.9 5.2 5.3 7.6 7.4l16.2 12.6c4.8 4.2 9.5 8.4 14.1 12.6 4.6 4.2 8.7 8.7 12.1 13.5 3.5 4.8 6.2 10.1 8.3 16.2s3.2 12.9 3.2 20.7c-.1 10.2-2.6 20.5-7.8 30.8zM448 192h-64v64h-32v-64h-64v-32h64V96h32v64h64v32zM236.8 351.5c-3.9-4.5-9-9.1-15.3-13.9s-13.6-10.2-22-16.2c-1.8-.3-3.4-.4-4.7-.4h-5.6c-.9 0-3 .1-6.3.2s-7.2.4-11.7.9-9.3 1.2-14.3 2.3-10 2.3-14.8 3.8c-2.4.9-5.8 2.3-10.1 4.3s-8.6 4.7-12.8 8.3-7.8 8.1-11 13.5c-3.1 5.4-4.7 12.1-4.7 20.2 0 16.2 7.1 29.3 21.3 39.5s33.4 15.3 57.7 15.3c21.5 0 37.9-4.5 49.2-13.7s16.8-20.7 16.8-34.8c0-5.7-1-10.8-2.9-15.5s-4.9-9.3-8.8-13.8z" />',
        viewBox: '0 0 512 512'
    };

    var linkedinIcon = {
        name: 'linkedin',
        content: '<path d="M112 32c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zM64 160v288h96V160H64zm128 0v288h96V288c0-32 32-32 32-32s32 0 32 32v160h96V290.9c0-66.5-13.6-130.9-96-130.9-36.2 0-62.9 32-64 44.9V160h-96z" />',
        viewBox: '0 0 512 512'
    };

    var linkedinBoxIcon = {
        name: 'linkedin-box',
        content: '<path d="M448 32H64c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32zM160 416H96V192h64v224zm-32-256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm288 256h-64V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v128h-64V192h64v39.7c13.2-18.1 33.4-39.7 56-39.7 39.8 0 72 35.8 72 80v144z" />',
        viewBox: '0 0 512 512'
    };

    var myspaceIcon = {
        name: 'myspace',
        content: '<path d="M400 64c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm-176 64c-35.4 0-64 28.6-64 64s28.6 64 64 64 64-28.6 64-64-28.6-64-64-64zM80 192c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm320 64c-44.2 0-80 36.1-80 80.5V448h160V336.5c0-44.5-35.8-80.5-80-80.5zm-176 32c-35.4 0-64 31.5-64 70.3V448h128v-89.7c0-38.8-28.6-70.3-64-70.3zM80 320c-26.5 0-48 21.8-48 48.7V448h96v-79.3c0-26.9-21.5-48.7-48-48.7z" />',
        viewBox: '0 0 512 512'
    };

    var myspaceBoxIcon = {
        name: 'myspace-box',
        content: '<path d="M448 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM128 416H64v-63.5c0-17.9 14.3-32.5 32-32.5s32 14.5 32 32.5V416zM96 288c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm160 128h-96v-75.3c0-29.1 21.5-52.7 48-52.7s48 23.6 48 52.7V416zm-48-160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm208 160H288v-92.9c0-37.1 27.2-67.1 64-67.1s64 30 64 67.1V416zm-64-192c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64z" />',
        viewBox: '0 0 512 512'
    };

    var pinterestIcon = {
        name: 'pinterest',
        content: '<path d="M250.7 32C126.6 32 64 119.7 64 192.7c0 44.3 17 83.6 53.5 98.3 6 2.4 11.4.1 13.1-6.4 1.2-4.5 4.1-15.9 5.3-20.7 1.8-6.5 1.1-8.7-3.7-14.3-10.5-12.2-17.2-28.1-17.2-50.5 0-65.1 49.4-123.3 128.6-123.3 70.2 0 108.7 42.2 108.7 98.6 0 74.2-33.3 136.8-82.8 136.8-27.3 0-47.8-22.2-41.2-49.6 7.9-32.6 23.1-67.8 23.1-91.3 0-21.1-11.5-38.7-35.2-38.7-27.9 0-50.4 28.5-50.4 66.6 0 24.3 8.3 40.7 8.3 40.7s-28.6 119.3-33.6 140.2c-10 41.6-1.5 92.7-.8 97.8.5 3 4.4 3.7 6.2 1.5 2.6-3.3 35.9-43.8 47.2-84.2 3.2-11.4 18.4-70.8 18.4-70.8 9.1 17.1 35.6 32.1 63.8 32.1 84 0 141-75.4 141-176.4C416 103 350.3 32 250.7 32z" />',
        viewBox: '0 0 512 512'
    };

    var pinterestBoxIcon = {
        name: 'pinterest-box',
        content: '<path d="M448 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM276.6 327.3c-19.8 0-38.5-10.8-44.9-22.9 0 0-10.7 42.4-12.9 50.5-8 28.9-31.4 57.8-33.2 60.2-1.3 1.6-4.1 1.1-4.4-1.1-.5-3.7-6.5-40.1.5-69.9 3.5-14.9 23.6-100.2 23.6-100.2s-5.9-11.7-5.9-29.1c0-27.2 15.8-47.6 35.5-47.6 16.7 0 24.8 12.5 24.8 27.6 0 16.8-10.7 41.9-16.2 65.2-4.6 19.5 9.8 35.4 29 35.4 34.8 0 58.3-44.7 58.3-97.7 0-40.3-27.1-70.4-76.5-70.4-55.7 0-90.5 41.6-90.5 88 0 16 4.7 27.3 12.1 36.1 3.4 4 3.9 5.6 2.6 10.2-.9 3.4-2.9 11.5-3.7 14.8-1.2 4.6-5 6.3-9.2 4.6-25.6-10.4-37.6-38.5-37.6-70.2C128 158.6 172 96 259.4 96c70.2 0 116.4 50.8 116.4 105.3-.1 72.1-40.2 126-99.2 126z" />',
        viewBox: '0 0 512 512'
    };

    var redditIcon = {
        name: 'reddit',
        content: '<path d="M420.3 33c-7 0-14.5 1-22.4 3h-1.7c-12.4 4.8-21.9 12.3-28.8 22.5-17-7-34-10.4-50.7-10.4-6.3 0-12.6.6-19.1 1.9H296c-8.8 2.1-16.5 5.8-23.3 11s-12.4 11.6-16.6 19.1c-5.3 8.7-8.9 31.3-10.5 41.1-1.7 9.8-2.6 25-2.6 34.7-20.9 1.5-41.8 4.5-62.8 9.1s-40.6 11.9-59 21.9c-1.3.4-2.5.9-3.5 1.3s-2 .9-2.9 1.3c-6.2-4.5-13-8-20.5-10.6-7.8-2.6-16.1-3.9-24.9-3.9h-5.8c-8.7 0-16.7 1.6-24.1 4.8s-14.1 7.7-20.3 13.4c-5.8 5.8-10.3 12.2-13.9 19.4-3.6 7.3-5.3 14.8-5.3 22.7.4 10.8 4.4 21.3 11.8 31.4 5.7 8.3 13.8 15.4 24.3 21.1-.5 2.1-.7 4.4-1 6.8-.2 2.5-.3 4.8-.3 6.9 0 10 1.5 20 4.5 30.1 3 10.1 7.4 19.4 13.1 28.1 10.9 16.6 24.5 30.5 40.9 41.6 16.4 11 33.8 20.2 52.1 27.2 17.5 6.6 35.5 11.6 54 14.8 18.6 3.3 37.4 5 56.6 5 12.5 0 25.1-.8 37.5-2.4 12.5-1.6 25-3.7 37.6-6.3 23.2-5.5 45.5-13.9 66.8-25.1s39.4-26 54.3-44.3c17.1-20.5 25.6-43.4 25.6-68.8 0-2.6-.1-5.1-.4-7.5-.3-2.4-.5-4.7-.9-6.8 10-4.9 18.3-11.9 24.9-21.1 7.1-9.6 10.6-20.3 10.6-32v-3c-1.2-13.4-6.8-25.1-16.3-34.9-9.8-10-21.2-16.7-34.2-20.1h-.6c-6-1.3-11.6-1.9-16.9-1.9-14.1-.2-26.6 3.2-37.4 10.2-2.3 1.1-5.2 2.8-8.6 5.4-.8-.9-1.8-1.3-2.6-1.3l-.7-.6c-18.2-9.6-37.5-16.9-57.7-21.8-20.1-4.9-40.6-8-61.6-9.3 0-7.7.7-34.2 1.8-41.9s3.7-14.8 7.5-21.4c4.9-9.6 13.4-15.1 25.6-16.4h5.8c7.4 0 14.7 1.1 21.7 3 7.1 2 14.1 4.3 21.2 6.9v1.9c0 7.5 1.5 14.2 4.5 20.3 2.9 6 6.9 11.6 11.8 16.5 10.3 10.4 22.8 16.3 37.7 17.5h7.3c14.9 0 28.1-4.8 39.8-14.4 5.3-4.4 9.7-9.6 13.1-15.5s5.5-12.5 6.4-20c.4-1.3.6-3.2.6-5.8.2-11-3.3-21.4-10.3-30.9-7.1-9.2-15.8-15.7-26.2-19.5h-.5c-6.5-2.7-14.1-4.1-22.9-4zm1.2 27.4c7.2.1 13.2 2.7 18.3 7.7C446 73 449 79.2 449 86.7V88c-.8 6.8-3.9 12.7-9.3 17.6-5.5 4.9-11.9 7.4-19.1 7.4h-1.9c-7.1 0-13.4-2.5-19.4-7.4-5.5-4.7-8.3-10.6-8.3-17.6v-1.3c0-6.6 2.1-12.1 6.5-16.6 3.8-4.7 8.9-7.7 15.1-8.9 2-.4 4.4-.6 7.5-.6.4-.2.9-.2 1.4-.2zm-165 125.7c10 0 20.3.5 30.8 1.6 10.6 1.1 20.9 2.7 30.8 4.8l9.9 2.6 10.2 2.6c17.5 4.9 34.1 11.9 49.9 21.1 15.8 9.2 29 20.8 40 34.9 5.1 7.3 9.2 14.9 12.3 23 3.1 8.1 4.6 16.5 4.6 25.3v7.6c0 2.3-.4 4.6-1.3 6.7-2.8 12.4-8.5 24-17.3 34.9-7.4 10-17 19.2-28.8 27.5-17.5 11.7-36.4 20.7-56.9 26.9-20.4 6.2-41.3 10.1-62.7 11.8-3.6.5-7.3.6-10.8.6h-10.8c-21.3 0-42.4-2.2-63.1-6.6-20.8-4.4-40.3-11.4-58.6-21l-4.5-2.6-4.8-2.2c-13-8.3-24.4-17.5-34.5-27.5-10.2-11.5-17.2-24-21.1-37.4-1.7-5.2-2.6-11.2-2.6-18.2 0-18.1 5.6-34.2 16.9-48.3 11-14.1 24.4-25.8 40.1-35.2s32.2-16.5 49.7-21.4c26.2-7.7 53.7-11.6 82.6-11.5zM65.7 204h3.2c3.2 0 6.1.4 8.8 1.3 2.6.9 5.4 1.7 8.4 2.6-8.7 7-16.5 14.6-23.5 22.7-6.9 8.1-12.8 17-17.7 26.6-2.8-2-5.2-4.8-7.4-8.6-3-3.5-4.5-7.8-4.5-13.1v-2.1c.7-7.7 4-14.4 10.3-20.2 7.1-5.3 14.6-8.3 22.4-9.2zm377.6-.4c6.4 0 12.7 1.5 18.9 4.4 6.1 3.5 10.8 7.8 13.7 13.2 2.1 4.5 3.2 8.6 3.2 12.5 0 5.3-1.2 10.1-3.8 14.4-2.4 3.6-5 6.7-8 9.2-4.7-10-10.6-19.1-17.6-27.2-7-8.1-14.9-15.6-23.6-22.7 5.3-2.6 11-3.8 17.2-3.8zm-107.6 43.2c-3.6 0-7.4.7-11.2 1.9-6.2 2.2-11.2 5.9-15 11.2-4 4.7-6.1 10.3-6.1 16.9 0 2.4.2 4.2.6 5.5v.6c1.3 7.5 5.1 13.1 11.2 17 6.2 4.7 13.2 7 21.1 7 2.5 0 5.5-.6 9-1.9h.9c5.6-1.1 11-4.5 16.3-10.2 3.8-5.3 5.8-11.4 5.8-18 0-3-.6-6.2-2-9.6-1.6-6.2-5.6-11.3-11.8-15.3-5.9-3.3-12.2-5.1-18.8-5.1zm-158.8-.1c-2.6 0-4.7.2-6.3.7-5.8.9-10.8 3.1-15.2 6.9-4.4 3.7-7.4 8.3-9.1 13.6-.9 1.2-1.3 2.7-1.3 4.1v4.2c0 7 1.9 13.2 5.8 18.6 4.2 5.1 9.6 8.5 16.3 10.2 3 1.2 6.3 1.9 9.9 1.9 8.3 0 15.8-2.8 22.4-8.3 7.1-5.7 10.6-12.8 10.6-21.1v-2c0-7.9-3.3-14.6-9.9-20.1-7.2-5.8-14.9-8.7-23.2-8.7zm-1.6 94c-1.2 0-3.2.5-5.7 1.3h-.8c-2.6.8-5 2.7-7.3 5.7-1.2 2.1-1.9 4.8-1.9 8 0 2.6.6 5.2 1.9 8 1.3 2.2 3.2 3.9 5.8 5.1 24.5 15.4 51.4 23.1 80.7 23.1h4.8c14.1 0 27.8-1.3 41-4s26.1-6.9 38.5-12.6c1.7-.9 3.5-1.7 5.4-2.6 1.9-.8 3.9-1.9 6-3.2 2.2-.9 4-2.1 5.5-3.8 2.1-2.1 3.3-4.4 3.8-6.8.4-.8.7-1.9.7-3.2 0-1.3-.4-3.2-1.3-5.8-1.3-3.2-3.5-5.4-6.4-6.7-3.3-1.7-6.2-2.6-8.6-2.6-2.5 0-5.3.6-8 2-23.2 13-48.6 19.6-76 19.8-20.4 0-39.5-3.9-57-11.8-2.5-.9-5.7-2.9-9.2-6.1-.9-.4-1.8-.8-2.8-1.3-1-.5-2.2-.9-3.3-1.3-2.7-.8-4.6-1.3-5.8-1.2z" />',
        viewBox: '0 0 512 512'
    };

    var redditBoxIcon = {
        name: 'reddit-box',
        content: '<path d="M111.1 244.9c-5.2 6.1-9.6 12.7-13.2 19.9-2.1-1.5-3.9-3.6-5.5-6.5-2.3-2.6-3.4-5.9-3.4-9.8v-1.4c.5-5.8 3-10.8 7.7-15.1 5.3-4 10.9-6.3 16.8-7h2.4c2.4 0 4.6.3 6.6 1 2 .6 4.1 1.3 6.3 1.9a124.3 124.3 0 0 0-17.7 17zm252.1-94.3c4.4 3.7 9.1 5.4 14.4 5.4h1.4c5.3 0 10-1.8 14.2-5.4 4-3.7 6.3-8 6.9-13.1v-1c0-5.5-2.3-10.1-6.9-13.8-3.8-3.8-8.3-5.6-13.6-5.7h-1.1c-2.2 0-4.1.1-5.5.5-4.6.9-8.4 3.2-11.2 6.6-3.3 3.4-4.8 7.4-4.8 12.4v1c0 5.1 2 9.5 6.2 13.1zM394.5 279c2.3 6.1 3.5 12.4 3.5 19v5.7c0 1.8-.3 3.4-1 5-2.1 9.3-6.4 18-13 26.2-5.6 7.5-12.8 14.4-21.6 20.6-13.1 8.8-27.3 15.5-42.7 20.2-15.4 4.7-31 7.6-47 8.9-2.7.4-5.5.5-8.1.5h-8.1c-16 0-31.8-1.6-47.4-4.9s-30.2-8.5-44-15.7l-3.4-1.9-3.6-1.7c-9.8-6.2-18.3-13.1-25.8-20.6-7.7-8.6-12.9-18-15.8-28.1-1.3-3.9-1.9-8.4-1.9-13.7 0-13.6 4.2-25.7 12.7-36.3 8.3-10.6 18.3-19.3 30.1-26.4 11.8-7 24.2-12.4 37.3-16.1 19.6-5.7 40.2-8.7 61.8-8.7h.1c7.5 0 15.2.4 23.1 1.2s15.6 2 23.1 3.6l7.4 1.9 7.7 1.9c13.1 3.7 25.6 9 37.4 15.8 11.9 6.9 21.8 15.6 30 26.2 3.8 5.6 6.9 11.4 9.2 17.4zm-205.9 21.9c2.3.9 4.7 1.4 7.5 1.4 6.3 0 12-2.1 16.9-6.3 5.3-4.3 8-9.7 8-15.9v-1.5c0-5.9-2.5-11-7.5-15.2-5.3-4.3-11.2-6.6-17.4-6.6-1.9 0-3.5.1-4.7.5-4.3.6-8.2 2.3-11.5 5.2-3.3 2.8-5.5 6.3-6.9 10.3-.7.9-1 2-1 3.1v3.1c0 5.3 1.4 10 4.3 14 3.3 4 7.3 6.7 12.3 7.9zm139.5 38.2c0-1-.3-2.4-1-4.3-1-2.4-2.6-4.1-4.7-4.9-2.5-1.3-4.6-1.9-6.4-1.9-1.9 0-4 .5-5.9 1.5-17.2 9.6-36 14.5-56.2 14.7-15.1 0-29.3-3-42.2-8.8-1.9-.6-4.2-2.2-6.8-4.6-.6-.3-1.3-.6-2.1-1s-1.6-.6-2.4-1c-1.9-.6-3.4-1-4.3-1v.1c-.9 0-2.4.4-4.3 1h-.5c-1.9.6-3.7 2-5.4 4.3-.9 1.6-1.4 3.6-1.4 5.9 0 1.9.5 3.9 1.4 5.9 1 1.6 2.4 2.9 4.3 3.8 18.2 11.4 38.1 17.1 59.8 17.1h3.6c10.5 0 20.6-1 30.4-3 9.8-2 19.3-5.1 28.5-9.4 1.2-.6 2.6-1.3 4.1-1.9 1.4-.6 3-1.4 4.5-2.4 1.6-.7 3-1.6 4.1-2.9 1.6-1.6 2.5-3.3 2.9-5-.2-.4 0-1.2 0-2.2zm12.2-59.2c0-2.2-.5-4.6-1.5-7.2-1.2-4.6-4.2-8.4-8.8-11.5-4.5-2.6-9.2-3.9-14.1-3.9-2.7 0-5.5.5-8.4 1.4-4.6 1.6-8.4 4.4-11.3 8.4-3 3.5-4.6 7.8-4.6 12.7 0 1.8.2 3.1.4 4.1v.5c1 5.6 3.8 9.8 8.4 12.7 4.6 3.5 9.9 5.3 15.8 5.3 1.9 0 4.1-.5 6.7-1.4h.7c4.2-.8 8.2-3.4 12.2-7.7 3-3.9 4.5-8.4 4.5-13.4zM480 64v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32zm-32.3 181c-.9-10.3-5.2-19.1-12.4-26.6-7.4-7.6-16.2-12.7-26-15.4h-.1c-4.5-1-8.7-1.4-12.7-1.4-10.6-.2-19.8 2.4-28 7.7-1.7.8-3.9 2.1-6.5 4.1-.6-.6-1.3-1-1.9-1l-.5-.5c-13.7-7.2-28-12.7-43.1-16.3-15.1-3.7-30.4-6-46.1-7 0-5.8.5-25.5 1.4-31.3.9-5.8 2.8-11.1 5.6-16.1 3.6-7.2 10.1-11.3 19.1-12.3h4.3c5.6 0 11 .8 16.3 2.3s10.6 3.2 15.9 5.2v1.5c0 5.6 1.1 10.8 3.4 15.3 2.2 4.5 5.2 8.7 8.8 12.5 7.7 7.8 17.1 12.3 28.4 13.3h5.5c11.2 0 21.1-3.6 30.1-10.9 4-3.3 7.3-7.2 9.8-11.7 2.6-4.4 4.2-9.4 4.8-15.1.3-1 .5-2.4.5-4.3.2-8.3-2.4-16.2-7.7-23.4-5.3-6.9-11.9-11.9-19.7-14.7h-.5c-4.9-2.3-10.7-3.4-17.3-3.4-5.4 0-11.1.8-17.1 2.4h-.4c-9.7 3.8-17.1 9.7-22.5 17.6-13.3-5.4-26.5-8-39.5-8-4.9 0-9.9.5-14.9 1.4h.9c-6.6 1.6-12.4 4.4-17.5 8.3-5.1 3.9-9.3 8.7-12.5 14.3-4 6.5-6.6 23.5-7.9 30.9-1.3 7.3-1.9 18.7-1.9 26-15.7 1.1-31.3 3.4-47.2 6.8-15.7 3.5-30.4 8.9-44.2 16.4-1 .3-1.8.7-2.6 1s-1.5.6-2.2 1c-4.7-3.4-9.7-6-15.4-7.9-5.9-1.9-12.1-2.9-18.6-2.9h-4.3c-6.5 0-12.6 1.2-18.1 3.6s-10.6 5.8-15.2 10.1c-4.3 4.3-7.8 9.2-10.4 14.5-2.7 5.4-3.9 11-3.9 16.9.3 8.1 3.3 16 8.9 23.5 4.3 6.2 10.4 11.5 18.2 15.8-.4 1.6-.6 3.3-.7 5.1-.1 1.8-.2 3.6-.2 5.2 0 7.5 1.1 15 3.4 22.6 2.3 7.5 5.5 14.6 9.8 21.1 8.1 12.5 18.4 22.9 30.7 31.2s25.3 15.1 39.1 20.4c13.1 5 26.6 8.7 40.5 11.1 13.9 2.5 28.1 3.7 42.4 3.7 9.4 0 18.8-.6 28.1-1.8 9.4-1.2 18.8-2.8 28.2-4.7 17.4-4.1 34.1-10.4 50.2-18.8s29.5-19.5 40.8-33.2c12.8-15.4 19.2-32.6 19.2-51.7 0-1.9-.1-3.8-.3-5.6-.2-1.8-.4-3.6-.7-5.1 7.5-3.7 13.7-8.9 18.7-15.8 5.3-7.2 7.9-15.2 7.9-24V245h-.2zm-37.1-17c-4.7-2.2-9.4-3.3-14.1-3.3-4.6 0-8.9.9-12.9 2.9 6.5 5.3 12.5 10.9 17.7 17 5.3 6.1 9.7 12.9 13.2 20.4 2.2-1.9 4.2-4.2 6-6.9 1.9-3.2 2.9-6.8 2.9-10.8 0-2.9-.9-6-2.4-9.4-2.3-4-5.8-7.3-10.4-9.9z" />',
        viewBox: '0 0 512 512'
    };

    var stumbleUponIcon = {
        name: 'stumble-upon',
        content: '<path d="m288.1 256 26.8 8.4L352 256v64c1.1 18.9 12.8 32 32 32s30.9-13.1 32-32v-64h64v64s0 96-96 96-96-96-96-96l.1-64zm26.8-23.2L288 224v-32s0-32-32-32-32 32-32 32v128s0 96-96 96-96-96-96-96v-64h64v64c1.1 18.9 12.8 32 32 32 19.1 0 30.9-13.2 32.1-32h-.1V192s0-96 96-96 96 96 96 96v32l-37.1 8.8z" />',
        viewBox: '0 0 512 512'
    };

    var stumbleUponBoxIcon = {
        name: 'stumble-upon-box',
        content: '<path d="M64 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H64zm191.5 96.3c82.5 0 82.5 87.3 82.5 87.3v8.4l-31.9 8-23.1-8v-8.6s0-29.2-27.5-29.2-27.5 29.2-27.5 29.2v81.5s0 87-82 87-82-87-82-87V256h55v41h-.9c.9 17.2 11 29.1 27.5 29.1s26.6-12 27.6-29.1h-.2v-81.4s0-87.3 82.5-87.3zM283.1 256l23 7.6L338 256v40.7c.9 17.2 11 29.1 27.5 29.1s26.6-11.9 27.5-29.1V256h55v40.7s0 87.3-82.5 87.3-82.5-87.3-82.5-87.3l.1-40.7z" />',
        viewBox: '0 0 512 512'
    };

    var tellAFriendIcon = {
        name: 'tell-a-friend',
        content: '<path d="M383.5 64c-31.7 0-57.5 24-57.5 53.5v2.1c0 14.9-12.2 30.3-28.5 33.3-5.5.5-9.9 4.8-9.9 10.1 0 2.6 1.1 5 2.9 6.8 13.3 10.5 28.3 22.2 92.5 22.2s80.1-11.7 93.3-22.2c1.8-1.8 2.9-4.1 2.9-6.8 0-5.3-4.3-9.6-9.9-10.1-16.3-3-28.5-18.4-28.5-33.3v-2.1c0-29-25-52.7-55.9-53.5h-.5.2-1.1c.2 0 0 0 0 0zm.6 0h.9-.9zM128 224c-64.9 0-96 70-96 128v96h192v-96c0-52.7-34-128-96-128zm256 0c-96 0-96 224-96 224h192s0-224-96-224zm-192-96c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64z" />',
        viewBox: '0 0 512 512'
    };

    var tellAFriendBoxIcon = {
        name: 'tell-a-friend-box',
        content: '<path d="M448 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM144 96c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm80 320H64v-96c0-48.3 26-96 80.2-96 51.7 0 79.8 52.1 79.8 96v96zm223.6 0H288s0-192 80-192 79.6 192 79.6 192zm-2-240.7c-11.1 7.9-24.3 16.7-78 16.7s-66.3-8.8-77.3-16.7c-1.5-1.3-2.4-3.1-2.4-5.1 0-4 3.6-7.2 8.2-7.5 13.6-2.3 23.8-13.8 23.8-25v-1.6c0-22.1 21.4-40.1 48-40.1h.9c26.1.4 47.1 18.2 47.1 40.1v1.6c0 11.2 10.2 22.7 23.8 25 4.6.4 8.2 3.6 8.2 7.5.1 2-.8 3.8-2.3 5.1z" />',
        viewBox: '0 0 512 512'
    };

    var tumblrIcon = {
        name: 'tumblr',
        content: '<path d="M192.6 32c-2.8 23.1-8.1 42.1-15.7 57.1s-17.7 27.8-30.3 38.5-33 18.9-50.6 24.6V224h61v148.7c0 20.5 2.1 36.1 6.4 46.9s12 21 23.1 30.6c11.1 9.5 25 16.9 40.7 22.1s27.8 7.7 48.3 7.7c18 0 34.8-1.8 50.4-5.4 15.5-3.6 39.1-10.9 58.2-19.9V384c-22.3 14.8-51 22.9-73.7 22.9-12.8 0-24-3-33.9-8.9-7.5-4.4-14.3-12-17-19.2-2.8-7.4-2.4-22.3-2.4-48.2V224h96v-96h-96V32h-64.5z" />',
        viewBox: '0 0 512 512'
    };

    var tumblrBoxIcon = {
        name: 'tumblr-box',
        content: '<path d="M448 32H64c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32zm-96.1 366c-12.7 6.4-28.5 11.6-38.9 14.2-10.4 2.6-21.6 3.9-33.7 3.9-13.7 0-21.8-1.9-32.3-5.5-10.5-3.7-19.9-9-27.3-15.8-7.4-6.9-12.6-14.1-15.4-21.8-2.9-7.7-4.3-18.9-4.3-33.5V224h-40v-42.2c11.7-4.1 25.3-9.9 33.6-17.6 8.4-7.6 15.1-16.8 20.2-27.5s8.6-24.3 10.5-40.8H267v64h53v64h-53v85.2c0 18.6-.2 29.3 1.6 34.5 1.8 5.2 6.4 10.7 11.4 13.8 6.6 4.2 14.2 6.4 22.7 6.4 15.1 0 34.3-5.9 49.3-16.5V398h-.1z" />',
        viewBox: '0 0 512 512'
    };

    var twitterIcon = {
        name: 'twitter',
        content: '<path d="M342 64c-50.8 0-91.9 41.2-91.9 91.9 0 7.2.8 14.2 2.4 21-76.4-3.8-144.1-40.4-189.4-96-7.9 13.6-12.4 29.3-12.4 46.2 0 31.9 16.2 60 40.9 76.5-15.1-.5-29.2-4.6-41.6-11.5v1.2c0 44.5 31.7 81.7 73.7 90.1-7.7 2.1-15.8 3.3-24.2 3.3-5.9 0-11.7-.6-17.3-1.6 11.7 36.5 45.6 63.1 85.9 63.8-31.7 24.5-71.3 39.2-114.3 39.2-7.4 0-14.8-.4-22-1.3 40.7 26 89 41.3 140.9 41.3 169.1 0 261.5-140.1 261.5-261.5 0-4-.1-8-.2-11.9 18-12.9 33.5-29.1 45.9-47.6-16.5 7.3-34.2 12.3-52.8 14.5 19-11.4 33.6-29.4 40.4-50.8-17.8 10.5-37.4 18.2-58.4 22.3C392.3 75.1 368.4 64 342 64z" />',
        viewBox: '0 0 512 512'
    };

    var twitterBoxIcon = {
        name: 'twitter-box',
        content: '<path d="M448 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-64.7 159.7c.1 2.8.2 5.6.2 8.4 0 85.4-66 183.9-186.8 183.9-37.1 0-71.6-10.7-100.6-29.1 5.1.6 10.4.9 15.7.9 30.8 0 59.1-10.4 81.5-27.7-28.7-.5-53-19.2-61.3-44.9 4 .7 8.1 1.2 12.4 1.2 6 0 11.8-.8 17.3-2.3-30-5.9-52.7-32-52.7-63.3v-.8c8.9 4.8 19 7.7 29.7 8.1-17.6-11.6-29.2-31.4-29.2-53.8 0-11.8 3.2-22.9 8.9-32.5 32.4 39.1 80.8 64.8 135.3 67.5-1.1-4.7-1.7-9.7-1.7-14.7 0-35.7 29.4-64.6 65.6-64.6 18.9 0 36 7.8 47.9 20.4 14.9-2.9 29-8.3 41.7-15.7-4.9 15.1-15.3 27.7-28.9 35.7 13.3-1.6 26-5.1 37.7-10.2-8.9 13.1-19.9 24.5-32.7 33.5z" />',
        viewBox: '0 0 512 512'
    };

    var yammerIcon = {
        name: 'yammer',
        content: '<path d="M263.9 32.1c-10.1-.2-19.6 6.8-23.2 18-.1.4-.3 1-.5 1.9 0 .1-.1.3-.1.4-8 25.9-73.6 235.6-73.6 235.6h-1.2l-84-239.2C75.6 35.3 61.6 28.7 48.9 34c-13 5.5-19.7 21.5-15.4 36.2 10.1 29 105.8 290.4 105.8 290.4l-6.3 15.6c-10.6 32.1-31.6 53.8-63.2 53.8-3.1 0-13.7-.7-14.4-.8-10.2-.6-19.7 6.9-22.5 18.4-3.1 13.1 3.7 26.6 15.3 30.4 8.4 1.6 17 2.2 24.7 2.2 58.3 0 86.8-37.7 106-92.8 0 0 101-300.5 105.8-312.9.8-2 1.4-3.7 2-5.4l-.1-.1c.1-.4.3-.7.4-1.1 4.1-14.5-3-29.9-15.8-34.5-2.5-.8-4.9-1.3-7.3-1.3zM383.5 96c-6.3.1-13.3 2.5-20.4 9.6-21.5 21.6-43 86.4-43 86.4s64.6-21.6 86.4-43.5-.4-42.8-.4-42.8-9.7-9.8-22.6-9.7zm64.6 128c-32 0-96 32-96 32s64 32 96.4 32 31.5-32 31.5-32 .1-32-31.9-32zm-128 96s21.5 64.8 43 86.4 43-.1 43-.1 22.1-21 .4-42.8c-21.8-21.9-86.4-43.5-86.4-43.5z" />',
        viewBox: '0 0 512 512'
    };

    var yammerBoxIcon = {
        name: 'yammer-box',
        content: '<path d="M448 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM332.5 148.6c15.4-15.4 30.7 0 30.7 0s15.8 15 .3 30.6-61.7 31.1-61.7 31.1 15.4-46.3 30.7-61.7zm-54.7-26.4c-.1.3-.2.5-.3.8h.1c-.4 1.2-.9 2.4-1.4 3.8-3.5 8.8-75.5 223.1-75.5 223.1-13.7 39.3-34 66.2-75.6 66.2-5.5 0-11.6-.4-17.6-1.6-8.3-2.7-13.2-12.3-10.9-21.7 2-8.2 8.8-13.6 16.1-13.2.5.1 8.1.6 10.3.6 22.6 0 37.5-15.5 45.1-38.3l4.5-11.1s-68.2-186.3-75.5-207c-3-10.5 1.7-22 11-25.9 9.1-3.8 19.1.9 23.2 10.6l.8 2.4L191.3 279h.9s46.7-149.5 52.5-168c0-.1 0-.2.1-.3.2-.6.3-1.1.4-1.3 3.2-9.8 12.7-15.1 21.6-11.9 8.9 3.4 14 14.4 11 24.7zm85.4 241.2s-15.3 15.5-30.7 0-30.8-61.7-30.8-61.7 46.1 15.4 61.7 31.1-.2 30.6-.2 30.6zm30.3-84.6c-23.2 0-68.9-22.8-68.9-22.8s45.7-22.8 68.6-22.8S416 256 416 256s.7 22.8-22.5 22.8z" />',
        viewBox: '0 0 512 512'
    };

    var behanceIcon = {
        name: 'behance',
        content: '<path d="M448 128H304V96h144v32zM245.335 254.873c7.09 11.573 10.665 25.65 10.665 42.197 0 17.067-4.069 32.379-12.176 45.903-5.178 9.005-11.62 16.58-19.358 22.691-8.723 7.022-18.988 11.833-30.855 14.467C181.744 382.732 168.89 384 155.02 384H32V96h131.927c33.321.504 56.901 10.744 70.803 30.705 8.323 12.24 12.515 26.869 12.515 43.936 0 17.588-4.192 31.729-12.607 42.425-4.716 5.982-11.683 11.443-20.868 16.385 13.963 5.364 24.474 13.817 31.565 25.422zm-158.9-45.318H152.8c11.867 0 21.484-2.406 28.913-7.152 7.367-4.763 11.097-13.215 11.097-25.292 0-13.426-4.901-22.285-14.672-26.609-8.446-2.991-19.204-4.486-32.273-4.486h-59.43v63.539zm111.923 83.452c0-15.019-5.795-25.292-17.385-30.917-6.504-3.121-15.597-4.746-27.31-4.876H86.435v76.787h66.303c11.836 0 21.084-1.69 27.68-5.071 11.96-6.275 17.94-18.238 17.94-35.923zM479.932 288H330.824c.813 21.182 7.938 34.778 21.409 43.322 8.157 5.287 18.002 7.931 29.503 7.931 12.189 0 22.096-3.224 29.722-9.704 4.157-3.482 7.813-8.318 11.001-14.541h54.693c-1.438 12.541-8.095 25.276-19.846 38.204C438.959 373.748 413.269 384 380.266 384c-27.253 0-51.286-8.64-72.132-25.985-20.846-17.28-31.222-45.522-31.222-84.532 0-36.624 9.376-64.672 28.19-84.21C323.917 169.785 348.294 160 378.328 160c17.814 0 33.847 3.288 48.129 9.898 14.282 6.593 26.096 17.023 35.378 31.24 8.407 12.573 13.876 27.114 16.346 43.685 1.438 9.704 2.033 24.929 1.751 43.177zm-55.567-37.696c-.969-14.669-5.72-25.759-14.283-33.4-8.532-7.576-19.095-11.348-31.753-11.348-13.72 0-24.377 3.998-31.94 12.058-7.563 8.028-12.314 18.957-14.282 32.691h92.258z" />',
        viewBox: '0 0 512 512'
    };

    var behanceBoxIcon = {
        name: 'behance-box',
        content: '<path d="M167.543 228.938h-56.884v-56.479h50.939c11.202 0 20.423 1.329 27.663 3.988 8.376 3.844 12.576 11.718 12.576 23.652 0 10.735-3.197 18.249-9.511 22.482-6.368 4.219-14.612 6.357-24.783 6.357zm220.527 11.836c-7.313-6.494-16.367-9.727-27.217-9.727-11.76 0-20.895 3.427-27.378 10.335-6.483 6.881-10.555 16.249-12.242 28.021h79.079c-.83-12.573-4.902-22.079-12.242-28.629zm-196.379 34.862c-5.575-2.774-13.369-4.219-23.409-4.335h-57.624v68.255h56.831c10.146 0 18.072-1.503 23.726-4.508 10.251-5.577 15.377-16.211 15.377-31.931 0-13.35-4.967-22.482-14.901-27.481zM480 64v384c0 17.664-14.336 32-32 32H64c-17.664 0-32-14.336-32-32V64c0-17.664 14.336-32 32-32h384c17.664 0 32 14.336 32 32zm-176 96h112v-32H304v32zm-48 146.729c0-14.709-3.065-27.221-9.142-37.509-6.078-10.316-15.087-17.829-27.056-22.597 7.873-4.392 13.845-9.247 17.887-14.564 7.213-9.507 10.806-22.077 10.806-37.711 0-15.171-3.593-28.175-10.727-39.055-11.916-17.743-32.128-26.846-60.689-27.293H64v256h105.445c11.889 0 22.907-1.127 33.079-3.439 10.172-2.341 18.97-6.618 26.447-12.859 6.632-5.433 12.154-12.166 16.592-20.17C252.512 335.51 256 321.899 256 306.729zm190.442-42.024c-2.117-14.204-6.804-26.667-14.01-37.444-7.956-12.187-18.082-21.126-30.324-26.777-12.242-5.665-25.985-8.484-41.254-8.484-25.744 0-46.638 8.387-62.765 25.091-16.127 16.746-24.163 40.788-24.163 72.18 0 33.437 8.894 57.644 26.762 72.456C318.555 376.594 339.155 384 362.514 384c28.288 0 50.308-8.788 66.033-26.391 10.072-11.081 15.778-26.86 17.011-37.609h-46.879c-1.178 6-2.512 10.667-9.429 17.327-6.536 5.555-15.028 8.318-25.476 8.318-9.858 0-18.297-2.266-25.288-6.798-11.546-7.323-17.654-18.977-18.35-37.133h127.807c.24-15.641-.269-28.691-1.501-37.009z" />',
        viewBox: '0 0 512 512'
    };

    var dribbbleIcon = {
        name: 'dribbble',
        content: '<path d="M256 32C132.469 32 32 132.469 32 256c0 123.5 100.469 224 224 224 123.5 0 224-100.5 224-224 0-123.531-100.5-224-224-224zm148.094 103.281c26.625 32.562 42.781 74.031 43.188 119.188-6.312-1.312-69.562-14.156-133.219-6.156a850.738 850.738 0 0 0-4.125-9.875c-3.969-9.312-8.25-18.594-12.688-27.719 70.75-28.875 102.812-69.969 106.844-75.438zM256 64.969c48.594 0 93.031 18.219 126.812 48.188-3.438 4.906-32.25 43.625-100.281 69.125-31.344-57.594-66.094-104.938-71.375-112A190.999 190.999 0 0 1 256 64.969zm-81.344 18.156c5.031 6.938 39.219 54.312 70.938 110.656-89.5 23.781-168.344 23.438-176.906 23.312 12.406-59.374 52.437-108.718 105.968-133.968zm-110 173.156c0-1.969.031-3.906.094-5.844 8.375.156 101.094 1.375 196.657-27.219 5.469 10.719 10.688 21.594 15.5 32.469a192.95 192.95 0 0 0-7.531 2.281c-98.688 31.875-151.188 118.812-155.531 126.25-30.564-33.937-49.189-78.812-49.189-127.937zM256 447.594c-44.25 0-85-15.094-117.438-40.375 3.438-7.031 42.156-81.875 150.094-119.5.406-.125.812-.281 1.25-.406 26.875 69.812 37.969 128.312 40.812 145.094-22.968 9.781-48.218 15.187-74.718 15.187zm106.875-32.719c-1.938-11.625-12.125-67.625-37.156-136.406 59.969-9.594 112.625 6.125 119.188 8.188-8.532 53.218-39.095 99.218-82.032 128.218z" />',
        viewBox: '0 0 512 512'
    };

    var dribbbleBoxIcon = {
        name: 'dribbble-box',
        content: '<path d="M448 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM256 448c-106 0-192-86-192-192S150 64 256 64s192 86 192 192-86 192-192 192zm28-164.8c-82.9 28.9-118.1 83.4-126.7 98.7 27.2 21.3 61.5 34.1 98.7 34.1 22.5 0 43.9-4.6 63.3-13-3.3-18.4-13.1-65.2-34.2-120.1-.4 0-.8.2-1.1.3zm-95.5-172.3c-44.9 20.9-78.5 62.1-89 111.8 17.1-.1 78.6-1.7 147.6-20-24.3-43.2-50.3-80.1-58.6-91.8zm79 146.8c2.1-.7 4.3-1.3 6.5-2-4.1-9.3-8.6-18.6-13.3-27.8-74.1 22.2-146.1 23.4-164.6 23.4 0 1.6-.1 3.1-.1 4.7 0 40.8 15.3 78 40.4 106.3 10.5-16.7 54.6-79.9 131.1-104.6zm94.9-121.1C334.2 111.3 296.9 96 256 96c-12.4 0-24.5 1.4-36 4.1 8.7 11.9 34.9 48.8 58.8 92.7 50.7-19 76-46.7 83.6-56.2zm-46.6 138.7C335 328 344 371.9 346.9 387.8c35.2-24.3 60.2-62.5 67.2-106.6-13.2-3.7-53.4-13.1-98.3-5.9zm-24.4-58.1c3.8 7.8 7.5 15.8 10.9 23.8 1.2 2.8 2.4 5.7 3.5 8.5 48-6 95.7 1.8 110.2 4.5-.5-37.2-13.7-71.4-35.4-98.3-8.4 10-36.1 39.8-89.2 61.5z" />',
        viewBox: '0 0 512 512'
    };

    var rssIcon = {
        name: 'rss',
        content: '<path d="M151.4 420c0 32.9-26.7 59.5-59.7 59.5S32 452.9 32 420s26.7-59.5 59.7-59.5 59.7 26.7 59.7 59.5zM32 184.3v85.9c56 0 108.5 21.8 148.1 61.3 39.6 39.6 61.4 92.3 61.4 148.5h86.2C327.6 317 195 184.3 32 184.3zM32 32v85.9c199.4 0 361.6 162.5 361.6 362.1h86.2C479.8 233 278.9 32 32 32z" />',
        viewBox: '0 0 512 512'
    };

    var rssBoxIcon = {
        name: 'rss-box',
        content: '<path d="M448 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM115.2 447.6c-28.3 0-51.2-22.8-51.2-51s22.9-51 51.2-51c28.3 0 51.2 22.8 51.2 51s-23 51-51.2 51zm128.8.4c0-48.1-18.7-93.3-52.8-127.3-34-33.9-79.2-52.6-127.2-52.6v-73.6c140.1 0 254.1 113.7 254.1 253.5H244zm129.9 0c0-171.2-139-310.4-309.9-310.4V64c211.6 0 383.8 172.3 383.8 384h-73.9z" />',
        viewBox: '0 0 512 512'
    };

    var vimeoIcon = {
        name: 'vimeo',
        content: '<path d="M479.783 152.805c-2 43.26-32.469 102.444-91.344 177.477C327.532 408.792 275.969 448 233.782 448c-26.094 0-48.188-23.873-66.25-71.742-12.063-43.896-24.094-87.854-36.157-131.657-13.407-47.901-27.782-71.835-43.188-71.835-3.344 0-15.032 6.985-35.125 20.955L32 166.744c22.094-19.201 43.844-38.526 65.282-57.773 29.407-25.316 51.5-38.556 66.25-39.938 34.782-3.353 56.219 20.287 64.282 70.78 8.625 54.559 14.719 88.475 18.032 101.777 10.031 45.2 21.093 67.769 33.156 67.769 9.344 0 23.375-14.591 42.157-43.818 18.75-29.29 28.782-51.548 30.125-66.868 2.656-25.27-7.375-37.827-30.125-37.827-10.719 0-21.782 2.251-33.157 6.969C310.126 96.647 352.283 62.08 414.533 64.082c46.156 1.289 67.906 30.935 65.25 88.723z" />',
        viewBox: '0 0 512 512'
    };

    var vimeoBoxIcon = {
        name: 'vimeo-box',
        content: '<path d="M448 32H64c-17.664 0-32 14.336-32 32v384c0 17.664 14.336 32 32 32h384c17.664 0 32-14.336 32-32V64c0-17.664-14.336-32-32-32zm-.186 140.119c-1.714 37.08-27.831 87.809-78.295 152.123-52.206 67.294-96.402 100.901-132.563 100.901-22.366 0-41.304-20.462-56.786-61.493-10.339-37.625-20.652-75.303-30.991-112.849-11.491-41.058-23.813-61.573-37.018-61.573-2.866 0-12.884 5.987-30.107 17.961L64 184.066c18.938-16.458 37.581-33.022 55.956-49.519 25.206-21.7 44.143-33.048 56.786-34.232 29.813-2.874 48.188 17.389 55.099 60.668 7.393 46.765 12.616 75.835 15.456 87.237 8.598 38.743 18.08 58.087 28.419 58.087 8.009 0 20.036-12.506 36.134-37.559 16.071-25.106 24.67-44.184 25.822-57.315 2.277-21.66-6.321-32.423-25.822-32.423-9.188 0-18.67 1.929-28.42 5.974 18.964-61.001 55.099-90.63 108.456-88.914 39.562 1.105 58.205 26.516 55.928 76.049z" />',
        viewBox: '0 0 512 512'
    };

    var youtubeIcon = {
        name: 'youtube',
        content: '<path d="M475.5 165s-4.4-31.4-17.8-45.2c-17-18.1-36.1-18.2-44.9-19.3C350.1 96 256.1 96 256.1 96h-.2s-94 0-156.7 4.6c-8.8 1.1-27.8 1.2-44.9 19.3C40.9 133.7 36.5 165 36.5 165S32 201.9 32 238.7v34.5c0 36.8 4.5 73.6 4.5 73.6s4.4 31.4 17.8 45.2c17 18.1 39.4 17.5 49.4 19.4C139.5 414.9 256 416 256 416s94.1-.1 156.8-4.7c8.8-1.1 27.9-1.2 44.9-19.3 13.4-13.8 17.8-45.2 17.8-45.2s4.5-36.8 4.5-73.6v-34.5c0-36.8-4.5-73.7-4.5-73.7zM192 336V176l144 80-144 80z" />',
        viewBox: '0 0 512 512'
    };

    var youtubeBoxIcon = {
        name: 'youtube-box',
        content: '<path d="M448 32H64c-17.664 0-32 14.336-32 32v384c0 17.664 14.336 32 32 32h384c17.664 0 32-14.336 32-32V64c0-17.664-14.336-32-32-32zm0 237.749c0 29.454-3.835 58.909-3.835 58.909s-3.752 25.082-15.265 36.128c-14.602 14.497-30.97 14.569-38.476 15.417C336.689 383.885 256 384 256 384s-99.838-.864-130.559-3.656c-8.546-1.519-27.734-1.061-42.341-15.558-11.513-11.045-15.26-36.128-15.26-36.128S64 299.203 64 269.749v-27.614c0-29.454 3.84-58.909 3.84-58.909s3.747-25.082 15.26-36.128c14.607-14.497 30.969-14.569 38.476-15.417C175.313 128 255.917 128 255.917 128h.167s80.606 0 134.341 3.682c7.506.849 23.873.92 38.476 15.417 11.513 11.045 15.265 36.128 15.265 36.128S448 212.681 448 242.136v27.613zM192 176l144 80-144 80V176z" />',
        viewBox: '0 0 512 512'
    };

    var folderIcon = {
        name: 'folder',
        content: '<path d="m242.8 128-32-32H96v288h320V192H128v-32h288c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h128l64 64" />',
        viewBox: '0 0 512 512'
    };

    var folderOpenIcon = {
        name: 'folder-open',
        content: '<path d="M425.6 160h-246c-17.6 0-37.2 14.4-43.6 32L64 384V96h114.8l32 32H256l-64-64H64c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h268.4c17.6 0 37.2-14.4 43.6-32l70-192c6.4-17.6-2.8-32-20.4-32zM346 373.1c-2 5.5-10.1 10.9-13.6 10.9H98.1L166 202.9c2-5.5 10.1-10.9 13.6-10.9h232.3L346 373.1z" />',
        viewBox: '0 0 512 512'
    };

    var folderAddIcon = {
        name: 'folder-add',
        content: '<path d="M96 160h288c17.7 0 32 14.3 32 32v64h-32v-64H96v-32zm352 224h-32v-64h-32v64h-64v32h64v64h32v-64h64v-32h-32zM64 96h114.8l32 32H256l-64-64H64c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h192v-32H64V96z" />',
        viewBox: '0 0 512 512'
    };

    var folderUpIcon = {
        name: 'folder-up',
        content: '<path d="M96 160h288c17.7 0 32 14.3 32 32v64l-32 32v-96H96v-32zM64 96h114.8l32 32H256l-64-64H64c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h192l32-32H64V96zm336 240-80 80h64v64h32v-64h64l-80-80z" />',
        viewBox: '0 0 512 512'
    };

    var folderMoreIcon = {
        name: 'folder-more',
        content: '<path d="M64 384h96v32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h128l64 64h-45.2l-32-32H64v288zm192-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm160-64v-96c0-17.7-14.3-32-32-32H96v32h288v96h32zm32 64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />',
        viewBox: '0 0 512 512'
    };

    var aggregateFieldsIcon = {
        name: 'aggregate-fields',
        content: '<path d="M128 128c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h256c32 0 32-32 32-32H128V128zm-64 64c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h256c32 0 32-32 32-32H64V192zM448 64H192c-17.6 0-32 14.4-32 32v160c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32V96c0-17.6-14.4-32-32-32zm1 192s0 .1 0 0l-256.9.1-.1-.1V96.1l.1-.1H448v160h1z" />',
        viewBox: '0 0 512 512'
    };

    var fileIcon = {
        name: 'file',
        content: '<path d="M352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288z" />',
        viewBox: '0 0 512 512'
    };

    var fileAddIcon = {
        name: 'file-add',
        content: '<path d="M512 416h-64v64h-32v-64h-64v-32h64v-64h32v64h64v32zM96 448V64h224v96h96v96h32V128l-96-96H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h224v-32" />',
        viewBox: '0 0 512 512'
    };

    var fileTxtIcon = {
        name: 'file-txt',
        content: '<path d="M352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288zm-32-96v32H128v-32h256zM256 160v32H128v-32m256 64v32H128v-32h256zm-256 96v-32h224v32H128z" />',
        viewBox: '0 0 512 512'
    };

    var fileCsvIcon = {
        name: 'file-csv',
        content: '<path d="M178.6 224c-10 0-18.9 2.1-26.7 6.2-7.7 4.2-13.7 10.1-17.9 17.7-4.2 7.6-6.3 16.3-6.3 26.1 0 9.1 1.9 17.1 5.7 24.1s9.2 12.3 16.4 16.1c7.2 3.8 15.7 5.7 25.6 5.7 10 0 18.9-1.4 26.6-4.1v-24.9c-6.9 3.5-13.8 5.2-20.5 5.2-7.3 0-13.2-2.1-17.6-6.4-4.4-4.3-6.6-10.1-6.6-17.6s2.2-13.4 6.6-17.7 10.4-6.5 18-6.5c3.7 0 7.3.4 10.9 1.3s6.7 2.1 9.2 3.6V227c-7.6-2-15.3-2.9-23.4-3zm73.8.1c-11.5 0-20.6 2.7-27.5 8.1-6.8 5.4-10.2 12.5-10.2 21.5 0 12.8 7.5 22.1 22.4 27.8 4.6 1.7 7.8 3.1 9.5 4.1 1.7 1 3 2 3.8 3.2.8 1.2 1.2 2.5 1.2 4 0 2.1-.8 3.7-2.5 4.8-1.7 1.1-4.1 1.7-7.1 1.7-4.1 0-8.4-.9-13.2-2.6-4.7-1.8-9-4-12.9-6.9V315c8.1 3.3 17 4.9 26.7 4.9 8.4 0 15.5-1.1 21.5-3.4 6-2.2 10.6-5.7 13.9-10.2 3.3-4.6 5-9.9 5-16.1 0-6.3-2-11.8-6-16.4-4-4.6-10.8-8.9-20.4-12.8-4.9-2-8.1-3.7-9.6-5-1.5-1.3-2.3-2.9-2.3-4.8 0-2 1-3.6 2.8-4.8 1.9-1.2 4.4-1.8 7.5-1.8 7.6 0 15.2 2.1 23 6.4v-23.6c-4-1.1-7.1-1.8-9.3-2.2-2.2-.4-4.7-.7-7.4-1-2.7-.1-5.8-.1-8.9-.1zm39.8-.1 30 96h31.4l30.4-96h-29.1l-13.8 58.9c-1.1 4.4-1.8 8.1-2 11.1h-.6c-.1-2.4-.8-5.9-1.9-10.7L322.4 224h-30.2zM352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288z" />',
        viewBox: '0 0 512 512'
    };

    var fileExcelIcon = {
        name: 'file-excel',
        content: '<path d="m288 304 64 112h-48l-48-84.5-31.5 52.5H256v32h-96l64-112-64-112h48l48 84 48-84h48l-64 112zm64-272H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288z" />',
        viewBox: '0 0 512 512'
    };

    var fileWordIcon = {
        name: 'file-word',
        content: '<path d="M352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288zm-32.4-256-6.9 32-41.6 192h-46.7l-32.8-132.5L222.9 416h-46.7l-48.6-224h47.8l24.8 139.2L233.3 192h44.5l33.1 139.2L330.1 224H311v-32h72.6z" />',
        viewBox: '0 0 512 512'
    };

    var fileMdbIcon = {
        name: 'file-mdb',
        content: '<path d="M231.1 192 144 416h80v-32h-25.5l14.8-38h85.6l27.2 70h42L281 192h-49.9zm-1.5 112 26.5-68 26.4 68h-52.9zM352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288z" />',
        viewBox: '0 0 512 512'
    };

    var filePptIcon = {
        name: 'file-ppt',
        content: '<path d="m192 192-32 32h32v192h49v-80h25.6c16.4 0 29.1-1.5 38.2-4.4 14.4-4.5 25.9-12.9 34.4-25.4s12.8-26.6 12.8-42.6c0-15.8-4-29.5-12-41.1s-18.8-20.1-32.4-25.4c-10.3-3.7-24.4-5.5-42-5.5M241 225h20.1c11.2.3 20.2 2.1 26.9 5.6 12.1 6.4 23.3 17.6 23.3 33.5 0 17.3-11.9 29-25.2 35-6.7 2.9-15.1 4.4-25.2 3.9H241v-78zM352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288z" />',
        viewBox: '0 0 512 512'
    };

    var filePdfIcon = {
        name: 'file-pdf',
        content: '<path d="M240.9 160c-7.6 0-13.8 4-15.4 9.9-4.9 18.6.2 46.3 9.4 82.3l-2.4 5.9c-6.6 16.4-14.8 33-22.1 47.6l-1 1.9c-7.7 15.3-14.6 28.4-21 39.4l-6.5 3.5c-.5.3-11.6 6.3-14.3 7.9-22.2 13.6-36.9 28.9-39.4 41.2-.8 3.9-.2 8.9 3.7 11.2l6.3 3.2c2.7 1.4 5.6 2.1 8.6 2.1 15.8 0 34.2-20.2 59.5-65.3 29.2-9.7 62.5-17.8 91.6-22.3 22.2 12.8 49.5 21.7 66.8 21.7 3.1 0 5.7-.3 7.8-.9 3.3-.9 6.1-2.8 7.8-5.4 3.4-5.2 4-12.2 3.1-19.5-.3-2.1-2-4.8-3.8-6.6-5.1-5.2-16.5-7.9-33.7-8.1-11.7-.1-25.8.9-40.6 3-6.6-3.9-13.5-8.2-18.8-13.3-14.4-13.8-26.5-32.9-34-53.9.5-2 .9-3.7 1.3-5.4 0 0 8.1-47.1 6-63.1-.3-2.2-.5-2.8-1.1-4.5l-.7-1.9c-2.2-5.2-6.5-10.7-13.3-10.4l-3.8-.2zm2.7 8.4c5.1 0 8 13.1 8.2 25.4.3 12.3-2.6 20.9-6 27.3-2.9-9.4-4.3-24.3-4.3-34-.1-.1-.3-18.7 2.1-18.7zm.4 104.1c8.6 16 19.3 29.5 31.9 40.4 1.6 1.3 3.2 2.7 5 4.1-25.6 5.2-47.7 11.5-67.1 19.1 3.6-6.5 7.2-13.3 11-20.6 9.1-17.7 14.9-31.6 19.2-43zm102.2 51.6c9.3 0 12 0 21.1 2.3 9.1 2.4 9.2 7.2 7.6 8.2-1.6 1-6 1.6-8.9 1.6-9.2 0-20.7-4.3-36.8-11.4 6.3-.4 11.9-.7 17-.7zm-165.4 35.8c-17.7 28.8-29.5 40.3-37.3 43.8 2.9-8.1 14.3-24 31.2-38.1 1.1-.9 3.7-3.4 6.1-5.7zM352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288z" />',
        viewBox: '0 0 512 512'
    };

    var filePsdIcon = {
        name: 'file-psd',
        content: '<path d="M128 160v256h45v-91h21.4c24.2 0 43.5-7.8 57.9-23.4 14.4-15.6 21.6-36.1 21.6-61.3 0-53.4-25.2-80.2-75.5-80.2H128zm45 44h17.5c23.7 0 35.5 12.8 35.5 38.6 0 26.3-11.8 39.4-35.5 39.4H173v-78zm164.6 51.7c-8.1 0-15.9.9-23.4 2.8-7.5 1.9-14.2 4.7-20 8.6-5.8 3.9-10.4 9-14 15.2-3.5 6.2-5.2 13.6-5.2 22.1 0 6.2.8 11.7 2.3 16.3 1.5 4.5 3.7 8.6 6.7 12.1 2.9 3.5 6.5 6.5 10.8 9.2 4.3 2.7 9.3 5.1 15 7.4 3.5 1.5 7.2 2.8 11 4 3.8 1.2 7.3 2.5 10.5 4s5.8 3.2 7.8 5.2 3 4.5 3 7.5c0 4.7-2.2 8.2-6.7 10.4-4.5 2.3-10.6 3.4-18.5 3.4-6.4 0-13.3-1.2-20.5-3.4s-14.5-5.8-21.7-10.4v38.3c13.4 5.2 27.9 7.7 43.7 7.7 8.5 0 16.8-.9 24.7-2.8 7.9-1.8 15-4.8 21.1-8.8s10.9-9.2 14.7-15.7 5.5-14.2 5.5-23.3c0-6.5-.9-12-2.7-16.8-1.8-4.7-4.4-8.7-7.8-12.2-3.4-3.5-7.4-6.5-12.2-9.1-4.7-2.6-10-5-15.9-7.1-3.2-1.2-6.5-2.4-9.8-3.5s-6.3-2.4-9-3.9-4.9-3.1-6.5-5.2c-1.6-2.1-2.5-4.4-2.5-7.1 0-2.1.5-3.9 1.7-5.6 1.1-1.7 2.6-3 4.6-4 2-1 4.2-1.8 6.7-2.4s5.2-.8 8.1-.8c6.1 0 12.3.9 18.8 2.6 6.4 1.7 12.3 4.4 18 7.8v-36.4c-6.3-2-12.8-3.5-19.3-4.5s-13-1.6-19.3-1.6h.3zM352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288z" />',
        viewBox: '0 0 512 512'
    };

    var fileFlashIcon = {
        name: 'file-flash',
        content: '<path d="M352 191.3V237c-21 .2-46.6-3.2-69.6 45H320v45h-47.9s-37.4 91.1-111.9 90.1c-.6-10 0-30.8 0-45 49.3-7.6 65.4-62.1 76.8-89.4 26.5-82.8 73.9-92 93.4-92.1 5.6 0 21.6.7 21.6.7zm96-63.3v320c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h256l96 96zm-32 32h-96V64H96v384h320V160z" />',
        viewBox: '0 0 512 512'
    };

    var fileConfigIcon = {
        name: 'file-config',
        content: '<path d="M352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288zm-41.8-124.6-23.7-17.9c1-5.7 1.6-11.5 1.6-17.4 0-6-.5-11.8-1.6-17.4l23.7-17.9c3.7-2.8 4.7-7.9 2.4-11.9l-19.4-33.5c-2.3-4-7.2-5.6-11.5-3.9L318.4 215c-8.8-7.5-19-13.5-30.2-17.4l-3.7-29.5c-.6-4.6-4.5-8-9.1-8h-38.7c-4.6 0-8.5 3.4-9.1 8l-3.7 29.5c-11.1 4-21.3 9.9-30.2 17.4l-27.4-11.6c-4.2-1.8-9.2-.1-11.5 3.9l-19.4 33.5c-2.3 4-1.3 9.1 2.4 11.9l23.7 17.9c-1 5.7-1.6 11.5-1.6 17.4 0 6 .5 11.8 1.6 17.4l-23.7 17.9c-3.7 2.8-4.7 7.9-2.4 11.9l19.4 33.5c2.3 4 7.2 5.6 11.5 3.9l27.4-11.6c8.8 7.5 19 13.5 30.2 17.4l3.7 29.5c.6 4.6 4.5 8 9.1 8h38.7c4.6 0 8.5-3.4 9.1-8l3.7-29.5c11.1-4 21.3-9.9 30.2-17.4l27.4 11.6c4.2 1.8 9.2.1 11.5-3.9l19.4-33.5c2.2-4 1.2-9-2.5-11.8zM256 336c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" />',
        viewBox: '0 0 512 512'
    };

    var fileAscxIcon = {
        name: 'file-ascx',
        content: '<path d="M384 224h-96v-32h96v32zm0 160h-96v-32h96v32zM256 256H128v-96h128v96zm0 160H128v-96h128v96zm96-384H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288z" />',
        viewBox: '0 0 512 512'
    };

    var fileBacIcon = {
        name: 'file-bac',
        content: '<path d="M352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H289v-96h64l-96.5-96-95.5 96h64v96H96V64h224v96h96v288z" />',
        viewBox: '0 0 512 512'
    };

    var fileZipIcon = {
        name: 'file-zip',
        content: '<path d="M352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h64v32h32v32h-32v32h32v32h-32v32h32v32h-32v32h32v34.7c-18.6 6.6-32 24.4-32 45.3 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V256h32v-32h-32v-32h32v-32h-32v-32h32V96h-32V64h96v96h96v288zm-192-80c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16z" />',
        viewBox: '0 0 512 512'
    };

    var filmIcon = {
        name: 'film',
        content: '<path d="M416 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM128 448H96v-32h32v32zm0-96H96v-64h32v64zm0-128H96v-64h32v64zm0-128H96V64h32v32zm224 352H160v-96h192v96zm0-128H160V192h192v128zm0-160H160V64h192v96zm64 288h-32v-32h32v32zm0-96h-32v-64h32v64zm0-128h-32v-64h32v64zm0-128h-32V64h32v32z" />',
        viewBox: '0 0 512 512'
    };

    var css3Icon = {
        name: 'css3',
        content: '<path d="m64 32 30.2 384L256 480l161.8-64L448 32H64zm65.6 82h250.3l-4.9 48.9L255.4 214h115.9L358 366.1l-102.1 29.7-102.4-30.2-6.6-76.6h50.9l3.3 39.7 54.4 13.8.5-.1v-.1l56.3-15.8 3.9-64.4H143.7l-3.8-47.8 123-51.2H135.7l-6.1-49.1z" />',
        viewBox: '0 0 512 512'
    };

    var html5Icon = {
        name: 'html5',
        content: '<path d="m64 32 30.4 384 161.3 64 161.7-64L448 32H64zm68 83h247.7l-1.2 13.2-2.2 24.8-1 11H186.1l4.5 51h180.1l-1.2 13.3-11.7 129.9-.7 8.4-101.3 37-101.2-37-6.9-77.6h49l3.5 39.7 55.5 24 55.6-24.1 5.8-64.6h-172L133 128.2l-1-13.2z" />',
        viewBox: '0 0 512 512'
    };

    var codeIcon = {
        name: 'code',
        content: '<path d="M512 256 384 384l-22.6-22.6L466.7 256 361.4 150.6 384 128l128 128zM150.6 361.4 45.3 256l105.4-105.4L128 128 0 256l128 128 22.6-22.6zM321.1 72.3 290.2 64l-99.4 375.7 30.9 8.3 99.4-375.7z" />',
        viewBox: '0 0 512 512'
    };

    var cssIcon = {
        name: 'css',
        content: '<path d="m192 96-32 .1S96 96 96 160v48c0 27.8-21.8 31.4-32 32H48c-2.2 0-4.3.4-6.2 1.2-.5.2-1 .4-1.4.7s-.9.5-1.3.8c-1.3.9-2.4 1.9-3.4 3.1-.2.2-.3.4-.5.6-.9 1.2-1.7 2.6-2.2 4.1-.2.5-.3 1-.5 1.5-.3 1-.4 2.1-.5 3.2v1.6c.1 1.1.2 2.1.5 3.2.1.5.3 1 .5 1.5.5 1.5 1.3 2.8 2.2 4.1.2.2.3.4.5.6 1 1.2 2.1 2.2 3.4 3.1.4.3.9.5 1.3.8s.9.5 1.4.7c1.9.8 4 1.2 6.2 1.2h16c10.2.6 32 4.2 32 32v48c0 64 64 63.9 64 63.9l32 .1v-32l-31.8-.1s-32.2.1-32.2-32v-48.5s0-29-19.6-47.9c19.6-18.8 19.6-47.9 19.6-47.9v-47.9c0-31.9 32.2-31.8 32.2-31.8l31.8-.1V96zm128-.1V128l31.7.1S384 128 384 160v48s0 29.1 19.5 48C384 274.9 384 304 384 304v48c0 32-32.1 31.9-32.1 31.9l-31.9.1v32l32.1-.1s63.9.1 63.9-63.7V304c0-27.8 21.8-31.4 32-32h16c2.2 0 4.3-.4 6.2-1.2.5-.2 1-.4 1.4-.7s.9-.5 1.3-.8c1.3-.9 2.4-1.9 3.4-3.1.2-.2.3-.4.5-.6.9-1.2 1.7-2.6 2.2-4.1.2-.5.3-1 .5-1.5.3-1 .4-2.1.5-3.2v-1.6c-.1-1.1-.2-2.1-.5-3.2-.1-.5-.3-1-.5-1.5-.5-1.5-1.3-2.8-2.2-4.1-.2-.2-.3-.4-.5-.6-1-1.2-2.1-2.2-3.4-3.1-.4-.3-.9-.5-1.3-.8s-.9-.5-1.4-.7c-1.9-.8-4-1.2-6.2-1.2h-16.1c-10.2-.6-31.9-4.2-31.9-32v-48c0-64-64.1-63.9-64.1-63.9l-31.9-.2z" />',
        viewBox: '0 0 512 512'
    };

    var jsIcon = {
        name: 'js',
        content: '<path d="M478.4 96C471 59.5 438.7 32 400 32H208c-38.7 0-71 27.5-78.4 64-1.1 5.2-1.6 10.5-1.6 16v272H32v16c0 5.5.5 10.8 1.6 16 7.4 36.5 39.7 64 78.4 64h192c38.7 0 71-27.5 78.4-64 1.1-5.2 1.6-10.5 1.6-16V128h96v-16c0-5.5-.5-10.8-1.6-16zm-124.8 0c-1.1 5.2-1.6 10.5-1.6 16v288c0 5.6-1 11-2.8 16-6.6 18.6-24.4 32-45.2 32-20.9 0-38.7-13.4-45.2-32-1.8-5-2.8-10.4-2.8-16v-16h-96V112c0-5.6 1-11 2.8-16 6.6-18.6 24.4-32 45.2-32h160c-7 9.3-12 20.2-14.4 32zM320 192H192v-32h128v32zm0 64H192v-32h128v32zm0 64H192v-32h128v32z" />',
        viewBox: '0 0 512 512'
    };

    var exeIcon = {
        name: 'exe',
        content: '<path d="M64 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H64zm160 32c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM64 160h384v288H64V160z" />',
        viewBox: '0 0 512 512'
    };

    var csprojIcon = {
        name: 'csproj',
        content: '<path d="M64 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H64zm157.9 32.1c19.3-1.2 35.2 14.7 34 34-1 15.9-13.9 28.8-29.9 29.9-19.3 1.2-35.2-14.7-34-34 1.1-16 14-28.9 29.9-29.9zm96 0c19.3-1.2 35.2 14.7 34 34-1 15.9-13.9 28.8-29.9 29.9-19.3 1.2-35.2-14.7-34-34 1.1-16 14-28.9 29.9-29.9zm96 0c19.3-1.2 35.2 14.7 34 34-1 15.9-13.9 28.8-29.9 29.9-19.3 1.2-35.2-14.7-34-34 1.1-16 14-28.9 29.9-29.9zM64 160h384v288H64V160zm119.7 64c-17.3 0-32.7 3.5-46 10.4s-23.6 16.8-30.9 29.5c-7.3 12.8-10.9 27.3-10.9 43.6 0 15.2 3.3 28.6 9.8 40.2s15.9 20.6 28.3 26.8c12.4 6.3 27 9.4 44.1 9.4 17.3 0 32.6-2.3 45.9-6.9v-41.5c-11.9 5.8-23.7 8.6-35.4 8.6-12.6 0-22.8-3.6-30.3-10.7s-11.4-16.9-11.4-29.2c0-12.4 3.8-22.3 11.3-29.6s17.9-10.9 31-10.9c6.3 0 12.6.7 18.8 2.1s11.5 3.5 16 6v-43c-13.1-3.2-26.4-4.8-40.3-4.8zm114.2 0-8.3 39h-17.4l-5.7 29H284l-6.1 26H262l-6.1 29h15.4l-7.7 37h30.9l7.9-37h26.8l-7.7 37h30.4l8.2-37h16.3l7.2-29h-17.2l6.1-26h15l6.3-29h-14.7l8.3-39H356l-8.3 39h-26.4l8.3-39h-31.7zm16.8 68h26.8l-6.3 27h-26.7l6.2-27z" />',
        viewBox: '0 0 512 512'
    };

    var vbprojIcon = {
        name: 'vbproj',
        content: '<path d="M64 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H64zm160 32c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM64 160h384v288H64V160zm32 64 51.6 160h54.1L254 224h-50.2L180 321.9c-1.9 7.4-3 13.5-3.5 18.5h-1.1c-.2-3.9-1.3-9.9-3.2-17.9L147.8 224H96zm183.3 0v160h73c20.4 0 36.2-4.3 47.2-12.8s16.5-20.6 16.5-36.3c0-5.8-1.6-11.4-4.9-16.8s-7.9-9.9-14-13.5-12.8-5.9-20.4-6.8v-.4c6.5-1.3 12.5-3.6 18-7.1s9.5-7.6 12.2-12.2c2.7-4.6 4-9.8 4-15.3 0-25.8-21.2-38.7-63.7-38.7h-67.9v-.1zm48.2 32.3h8.9c15.6 0 23.3 5 23.3 14.8 0 4.5-1.7 8.3-5.1 11.1s-7.8 4.3-13.2 4.3h-14l.1-30.2zm0 62.5h19c5.5 0 9.9 1.5 13.3 4.4s5 6.8 5 11.4c0 5.2-1.9 9.3-5.7 12.3s-9 4.5-15.5 4.5h-16.1v-32.6z" />',
        viewBox: '0 0 512 512'
    };

    var csIcon = {
        name: 'cs',
        content: '<path d="M165.9 128c-26.4 0-49.8 5.6-70.1 16.7s-36 26.8-47.1 47.2S32 235.5 32 261.6c0 24.3 5 45.7 14.9 64.3s24.3 32.9 43.1 43 41.2 15.1 67.2 15.1c26.4 0 46.6-3.7 65.8-11v-66.5c-17.1 9.2-32 13.8-49.8 13.8-19.3 0-34.7-5.7-46.2-17.2s-17.3-27.1-17.3-46.9c0-19.9 5.8-35.7 17.3-47.3s27.3-17.4 47.2-17.4c9.6 0 16 1.2 25.4 3.5s17.5 5.5 24.4 9.7v-68.9c-19.7-5.2-37-7.8-58.1-7.8zm158.8 0-13.3 62h-29l-9.3 46h28.6l-10.3 43h-25.6l-9.8 46h25.2l-12.5 59h50l12.9-59h43.5l-12.5 59h49.2l13.3-59h26.8l11.5-46h-28.2l10.3-43h24.2l10.3-46h-23.7l13.5-63h-51.7l-13.5 63h-43.5l13.5-63h-50l.1 1zm26.9 108H395l-10.3 43h-43.3l10.2-43z" />',
        viewBox: '0 0 512 512'
    };

    var vbIcon = {
        name: 'vb',
        content: '<path d="m32 160 73.2 224h76.7L256 160h-71.1l-33.7 137c-2.6 10.3-4.3 19-4.9 25.9h-1.6c-.3-5.5-1.8-13.9-4.6-25L105.5 160H32zm252 0v224h104.6c29.3 0 51.9-6 67.7-17.9 15.8-11.9 23.7-28.9 23.7-50.8 0-8.1-2.4-16-7-23.5-4.7-7.6-11.4-13.9-20-18.9-8.7-5-18.4-8.2-29.3-9.5v-.6c9.4-1.8 18-5.1 25.8-10 7.8-4.9 13.7-10.6 17.5-17.1 3.8-6.5 5.8-13.7 5.8-21.5 0-36.1-30.5-54.2-91.4-54.2H284zm69.1 45.2h12.8c22.3 0 33.4 6.9 33.4 20.8 0 6.4-2.5 11.5-7.4 15.5s-11.2 6-18.9 6h-20l.1-42.3zm0 87.6h27.2c7.9 0 14.3 2.1 19 6.2s7.2 9.5 7.2 15.9c0 7.3-2.7 13-8.1 17.2-5.4 4.2-12.9 6.3-22.2 6.3h-23v-45.6h-.1z" />',
        viewBox: '0 0 512 512'
    };

    var slnIcon = {
        name: 'sln',
        content: '<path d="M352 32 172.5 211.5 64 128l-32 32v192l32 32 108.5-83.5L352 480l128-32V64L352 32zM64 320V192l64 64-64 64zm166.4-64L352 162.5v187.1L230.4 256z" />',
        viewBox: '0 0 512 512'
    };

    var cloudIcon = {
        name: 'cloud',
        content: '<path d="M442.2 243.6c3.7-11.2 5.8-23.2 5.8-35.6 0-61.9-50.1-112-112-112-37.8 0-71.3 18.8-91.6 47.5-15-9.8-33-15.5-52.3-15.5-52.9 0-95.8 42.9-95.8 95.8 0 1.8.1 3.6.2 5.5C58.9 242.3 32 278 32 320c0 53 43 96 96 96h256c53 0 96-43 96-96 0-31.1-14.8-58.8-37.8-76.4z" />',
        viewBox: '0 0 512 512'
    };

    var fileHorizontalIcon = {
        name: 'file-horizontal',
        content: '<path d="M384 64H64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160l-96-96zm64 352H64V96h288v96h96v224z" />',
        viewBox: '0 0 512 512'
    };

    var subreportIcon = {
        name: 'subreport',
        content: '<path d="M448 480c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-96h32v96h288V96H128v64H96V96c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v384zM63.9 32l254.3-.2L286.4 0 63.8.2C46.2.2 32 14.4 32 32l.1 128H64l-.1-128zm.1 351H32v32c0 17.7 14.3 32 32 32v-64zm-32-62.9S64 288 95 288v32l65-48.1L96 224v32c-32.1 0-64 32.1-64 64.1zM352 384l-160 .1V416l160-.1V384zm-96-192c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64h-64v-64zm32-32v64h64c0-35.3-28.7-64-64-64z" />',
        viewBox: '0 0 512 512'
    };

    var dataIcon = {
        name: 'data',
        content: '<path d="M448 125.6v.3c-.5 33.9-86.3 61.3-192 61.3S64.5 159.8 64 125.9v-.3c0-34 86-61.6 192-61.6s192 27.6 192 61.6zm0 46.4v.3c-.5 33.9-86.3 61.3-192 61.3S64.5 206.2 64 172.3v-.3l1 86.8v.5c.5 33.7 85.8 61 191 61s190.5-27.3 191-61v-.5l1-86.8zm0 128v.3c-.5 33.9-86.3 61.3-192 61.3S64.5 334.2 64 300.3v-.3l1 86.8v.5c.5 33.7 85.8 61 191 61s190.5-27.3 191-61v-.5l1-86.8z" />',
        viewBox: '0 0 512 512'
    };

    var fileHeaderIcon = {
        name: 'file-header',
        content: '<path d="M416 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm0 416H96V64h320v384zm-32-64H128v-32h256v32zm0-96H128v32h256v-32zm0-160H128v96h256v-96z" />',
        viewBox: '0 0 512 512'
    };

    var fileFooterIcon = {
        name: 'file-footer',
        content: '<path d="M416 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm0 416H96V64h320v384zm-32-224H128v-32h256v32zm0-96H128v32h256v-32zm0 160H128v96h256v-96z" />',
        viewBox: '0 0 512 512'
    };

    var groupHeaderSectionIcon = {
        name: 'group-header-section',
        content: '<path d="m128 448 32 32H32V32h128l-32 32H64v384h64zm320-320H128v96h320v-96zm0 160H128v32h320v-32zm0 64H128v32h320v-32z" />',
        viewBox: '0 0 512 512'
    };

    var groupFooterSectionIcon = {
        name: 'group-footer-section',
        content: '<path d="m128 448 32 32H32V32h128l-32 32H64v384h64zm320-160H128v96h320v-96zm0-160H128v32h320v-32zm0 64H128v32h320v-32z" />',
        viewBox: '0 0 512 512'
    };

    var pageHeaderSectionIcon = {
        name: 'page-header-section',
        content: '<path d="M352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288zm-32-160H128v-96h256v96zm0 96H128v32h256v-32zm0-64H128v32h256v-32z" />',
        viewBox: '0 0 512 512'
    };

    var pageFooterSectionIcon = {
        name: 'page-footer-section',
        content: '<path d="M352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288zm-31-32H129v-96h256v96zm0-160H129v32h256v-32zm0-64H129v32h256v-32z" />',
        viewBox: '0 0 512 512'
    };

    var detailSectionIcon = {
        name: 'detail-section',
        content: '<path d="M96 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H96zm320 416H96V64h320v384zm-33-224h-63v-32h63v32zm-96-32h-63v32h63v-32zm-96 0h-63v32h63v-32zm192 96h-63v32h63v-32zm-96 0h-63v32h63v-32zm-96 0h-63v32h63v-32z" />',
        viewBox: '0 0 512 512'
    };

    var tocSectionIcon = {
        name: 'toc-section',
        content: '<path d="M96 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H96zm320 416H96V64h320v384zm-32-288H224v-32h160v32zm-64 64h-96v-32h96v32zm0 64h-96v-32h96v32zm64 64H224v-32h160v32z" />',
        viewBox: '0 0 512 512'
    };

    var groupSectionIcon = {
        name: 'group-section',
        content: '<path d="m128 416 32 32H32V32h128l-32 32H64v352h64zm320-288H128v32h320v-32zm0 192H128v32h320v-32zm0-96H128v32h320v-32z" />',
        viewBox: '0 0 512 512'
    };

    var parametersIcon = {
        name: 'parameters',
        content: '<path d="M96 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H96zm320 416H96V64h320v384zM285.3 160c-8.9-25-36.3-38.1-61.4-29.2-13.7 4.8-24.4 15.6-29.2 29.2H128v32h66.7c8.9 25 36.3 38.1 61.4 29.2 13.7-4.8 24.4-15.6 29.2-29.2H384v-32h-98.7zM240 192c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm109.3 96c-8.9-25-36.3-38.1-61.4-29.2-13.7 4.8-24.4 15.6-29.2 29.2H128v32h130.7c8.9 25 36.3 38.1 61.4 29.2 13.7-4.8 24.4-15.6 29.2-29.2H384v-32h-34.7zM304 320c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" />',
        viewBox: '0 0 512 512'
    };

    var dataCsvIcon = {
        name: 'data-csv',
        content: '<path d="M415.9 93.6v.3c-.5 33.9-86.3 61.3-191.9 61.3S32.6 127.8 32.1 93.9v-.3C32.1 59.6 118 32 224 32s191.9 27.6 191.9 61.6zm0 46.4v.3c-.5 33.9-86.3 61.3-191.9 61.3S32.5 174.2 32 140.3v-.3l.1 86.8v.3c.5 33.9 86.3 61.3 191.9 61.3s191.4-27.4 192-61.3v-.3l-.1-86.8zm.1 180-.1-52v.3c-.3 21.7-35.7 40.8-88.9 51.7h89zM271 420.8c-7.7 4.5-16.4 6.8-25.4 6.7-9.7 0-17.4-3-23.1-9s-8.6-14.1-8.6-24.3c0-10.6 3-19 9.1-25.2 6.1-6.2 14-9.3 23.9-9.3 8.4-.1 16.7 2 24 6.3v-22.8c-7-2.6-15.7-3.9-25.9-3.9-16.6 0-30 5.2-40.4 15.7-10.4 10.5-15.6 24.1-15.6 40.9 0 15.8 4.6 28.4 13.8 37.9 9.2 9.5 21.9 14.2 38 14.2 12.3 0 22.3-1.9 30-5.6l.2-21.6zm36.6 25.7c5.4 1 10.9 1.5 16.4 1.5 5.4 0 10.7-.5 16-1.6 4.7-.9 9.2-2.7 13.3-5.3 3.8-2.4 6.8-5.8 9-9.7 2.2-4 3.3-8.9 3.3-14.8.1-3.8-.6-7.6-1.9-11.2-1.3-3.2-3.1-6.1-5.5-8.5-2.6-2.6-5.5-4.9-8.6-6.7-3.6-2.1-7.4-4-11.3-5.6-3.1-1.3-5.8-2.5-8.3-3.7-2.2-1-4.3-2.3-6.2-3.7-1.5-1.1-2.9-2.4-4-4-.9-1.4-1.4-3-1.4-4.7 0-1.5.4-3.1 1.2-4.4.9-1.4 2.1-2.5 3.5-3.3 1.7-1 3.6-1.7 5.6-2.2 2.4-.5 4.9-.8 7.3-.8 2.1 0 4.1.2 6.2.4 2.2.3 4.4.8 6.5 1.4 2.2.6 4.3 1.4 6.4 2.3 2 .9 3.9 2 5.8 3.2v-21.9c-3.8-1.4-7.7-2.4-11.7-3-4.8-.7-9.7-1-14.5-1-5.3 0-10.6.6-15.8 1.8-4.7 1.1-9.1 3-13.1 5.6-3.7 2.5-6.8 5.8-9 9.7-2.3 4.3-3.4 9.2-3.3 14.1-.2 6.5 2 12.8 6 17.9 4 4.9 10.1 9.1 18.3 12.5 3.2 1.3 6.2 2.6 9 3.9 2.5 1.1 4.9 2.5 7.2 4 1.8 1.2 3.5 2.7 4.8 4.5 1.2 1.6 1.8 3.5 1.8 5.5 0 1.5-.4 2.9-1.1 4.2-.8 1.4-2 2.5-3.3 3.4-1.7 1-3.6 1.8-5.6 2.2-2.6.6-5.2.8-7.8.8-5.1 0-10.2-.9-15.1-2.7-5.1-1.8-9.8-4.5-13.9-8V442c4.5 2.3 9 3.8 13.8 4.5zm147.7-105.4-21.8 72.8c-1.1 3.5-1.8 7.1-2.3 10.8h-.4c-.3-3.6-1.1-7.1-2.1-10.5l-21.9-73.1h-25.5l35.7 105h26.8l36.2-105h-24.7zm-295.3-15C85.7 317.7 32.4 295 32 268.3v-.3l.1 86.8v.3c.4 26.7 53.7 49.3 127.9 57.8v-86.8z" />',
        viewBox: '0 0 512 512'
    };

    var dataJsonIcon = {
        name: 'data-json',
        content: '<path d="M415.9 93.6v.3c-.5 33.9-86.3 61.3-191.9 61.3S32.6 127.8 32.1 93.9v-.3C32.1 59.6 118 32 224 32s191.9 27.6 191.9 61.6zm0 46.4v.3c-.5 33.9-86.3 61.3-191.9 61.3S32.5 174.2 32 140.3v-.3l.1 86.8v.3c.5 33.9 86.3 61.3 191.9 61.3s191.4-27.4 192-61.3v-.3l-.1-86.8zm.1 180-.1-52v.3c-.3 21.7-35.7 40.8-88.9 51.7h89zm-251.3 21.1h-23.6v62.4c0 16-5.4 24-16.2 24-4.9.1-9.7-1.5-13.6-4.5v22.2c4.9 1.9 10.1 2.9 15.3 2.8 12.4 0 21.8-3.7 28.3-11.2s9.8-18.2 9.8-32.3v-63.4zm31.7 105.4c5.4 1 10.9 1.5 16.4 1.5 5.4 0 10.7-.5 16-1.6 4.7-.9 9.2-2.7 13.3-5.3 3.8-2.4 6.8-5.8 9-9.7 2.2-4 3.3-8.9 3.3-14.8.1-3.8-.6-7.6-1.9-11.2-1.3-3.2-3.1-6.1-5.5-8.5-2.6-2.6-5.4-4.9-8.6-6.7-3.6-2.1-7.4-4-11.3-5.6-3.1-1.3-5.8-2.5-8.3-3.7-2.2-1-4.3-2.3-6.2-3.7-1.6-1.1-2.9-2.4-4-4-.9-1.4-1.4-3-1.4-4.7 0-1.5.4-3.1 1.2-4.4.9-1.4 2.1-2.5 3.5-3.3 1.7-1 3.6-1.7 5.6-2.2 2.4-.5 4.9-.8 7.4-.7 2.1 0 4.1.1 6.2.4 2.2.3 4.4.8 6.6 1.4 2.2.6 4.3 1.4 6.4 2.3 2 .9 3.9 2 5.8 3.2v-21.9c-3.8-1.4-7.7-2.4-11.7-3-4.8-.7-9.7-1-14.5-1-5.3 0-10.6.6-15.8 1.8-4.7 1.1-9.1 3-13.1 5.6-3.7 2.5-6.8 5.8-9 9.7-2.3 4.3-3.4 9.2-3.3 14.1-.2 6.5 1.9 12.8 6 17.9 4 4.9 10.1 9.1 18.4 12.5 3.2 1.3 6.2 2.6 9 3.9 2.5 1.1 4.9 2.5 7.2 4 1.8 1.2 3.5 2.7 4.8 4.5 1.2 1.6 1.8 3.5 1.8 5.5 0 1.5-.4 2.9-1.1 4.2-.8 1.4-2 2.5-3.3 3.4-1.7 1-3.6 1.8-5.6 2.2-2.6.6-5.2.8-7.8.8-5.1 0-10.3-.9-15.1-2.7-5.1-1.8-9.7-4.5-13.8-8v23.4c4.1 2.2 8.7 3.7 13.4 4.4zm157.3-13.7c9.6-10.1 14.4-23.4 14.4-39.9 0-16.1-4.6-29-13.9-38.8-9.3-9.8-21.4-14.7-36.4-14.7-15.9 0-28.6 5.1-38.2 15.4-9.6 10.3-14.4 23.7-14.4 40.3 0 15.7 4.7 28.5 14.2 38.3s21.7 14.7 36.8 14.7c15.4-.1 27.9-5.2 37.5-15.3zm-17.5-64c4.6 6 6.9 14.5 7 25.4 0 10.4-2.4 18.6-7.2 24.5s-11.3 8.8-19.4 8.8c-7.5.2-14.6-3.2-19.2-9.1-4.9-6.1-7.3-14.3-7.3-24.7 0-10.2 2.4-18.5 7.3-24.7s11.5-9.3 19.8-9.3c8 0 14.4 3.1 19 9.1zM480 341.1h-22.3v58.1c-.1 4.8.1 9.6.6 14.4h-.3c-1.6-2.8-3.4-5.7-5.3-8.6L411 341.1h-25.5v105h22.3v-57.7c0-7.6-.2-13.3-.6-17h.3c1.6 3 3.4 5.9 5.3 8.7l43.3 66H480v-105zM96 313.9c-39-11.2-63.7-27.5-64-45.6v-.3l.1 86.8v.3c.3 18.1 24.9 34.3 63.9 45.6v-86.8z" />',
        viewBox: '0 0 512 512'
    };

    var dataSqlIcon = {
        name: 'data-sql',
        content: '<path d="M415.9 93.6v.3c-.5 33.9-86.3 61.3-191.9 61.3S32.6 127.8 32.1 93.9v-.3C32.1 59.6 118 32 224 32s191.9 27.6 191.9 61.6zm0 46.4v.3c-.5 33.9-86.3 61.3-191.9 61.3S32.5 174.2 32 140.3v-.3l.1 86.8v.3c.5 33.9 86.3 61.3 191.9 61.3s191.4-27.4 192-61.3v-.3l-.1-86.8zm.1 180-.1-52v.3c-.3 21.7-35.7 40.8-88.9 51.7h89zM209.1 448.6c5.4 1 10.9 1.5 16.4 1.5 5.4 0 10.7-.5 16-1.6 4.7-.9 9.2-2.7 13.3-5.3 3.8-2.4 6.8-5.8 9-9.7 2.2-4 3.3-8.9 3.3-14.8.1-3.8-.6-7.6-1.9-11.2-1.3-3.2-3.1-6.1-5.5-8.5-2.5-2.6-5.4-4.9-8.6-6.7-3.6-2.1-7.4-4-11.3-5.6-3.1-1.3-5.8-2.5-8.3-3.7-2.2-1-4.3-2.3-6.2-3.7-1.6-1.1-2.9-2.4-4-4-.9-1.4-1.4-3-1.4-4.7 0-1.5.4-3.1 1.3-4.4.9-1.4 2.1-2.5 3.5-3.3 1.7-1 3.6-1.7 5.6-2.2 2.4-.5 4.9-.8 7.3-.8 2.1 0 4.1.2 6.2.4 2.2.3 4.4.8 6.6 1.4 2.2.6 4.3 1.4 6.4 2.3 2 .9 3.9 2 5.8 3.2v-21.9c-3.8-1.4-7.7-2.4-11.7-3-4.8-.7-9.7-1-14.5-1-5.3 0-10.6.6-15.8 1.8-4.7 1.1-9.1 3-13.1 5.6-3.7 2.5-6.8 5.8-9 9.7-2.3 4.3-3.4 9.2-3.3 14.1-.2 6.5 1.9 12.8 6 17.9 4 4.9 10.1 9.1 18.4 12.5 3.2 1.3 6.2 2.6 9 3.9 2.5 1.1 4.9 2.4 7.2 4 1.8 1.2 3.5 2.7 4.8 4.5 1.2 1.6 1.8 3.5 1.8 5.5 0 1.5-.4 2.9-1.1 4.2-.8 1.4-2 2.5-3.3 3.4-1.7 1-3.6 1.8-5.6 2.2-2.6.6-5.2.8-7.8.8-5.1 0-10.3-.9-15.1-2.7-5.1-1.8-9.7-4.5-13.8-8v23.4c4 2.3 8.6 3.8 13.4 4.5zm172.8-21.2c5.7-9 8.5-19.8 8.5-32.4 0-16.1-4.6-29-13.9-38.8s-21.3-14.7-36.2-14.8c-16 0-28.8 5.1-38.5 15.4s-14.4 23.7-14.4 40.3c-.1 7 1.1 13.9 3.4 20.4 2.1 6.1 5.4 11.7 9.6 16.6 4.2 4.7 9.3 8.6 15 11.2 6.1 2.8 12.8 4.4 19.5 4.5 3.8 4.2 7.4 8.1 10.9 11.8 3.3 3.5 6.9 6.7 10.8 9.6 3.6 2.6 7.4 4.8 11.6 6.4 4.2 1.6 8.7 2.4 13.2 2.3 3.4 0 6.7-.2 10.1-.7 2.2-.3 4.3-.8 6.5-1.3V458c-.8.3-1.6.6-2.4.8l-2.7.6c-.9.2-1.9.3-2.8.4s-1.8.1-2.6.1c-2.7 0-5.4-.2-8-.6-2.5-.4-4.9-1.1-7.1-2.1-2.5-1.1-4.8-2.5-6.9-4.2-2.6-2-5-4.3-7.3-6.7 9.9-3.4 18.2-10.1 23.7-18.9zm-23.3-56.3c4.6 6 6.9 14.5 6.9 25.3 0 10.4-2.4 18.6-7.2 24.5-4.8 6-11.3 8.9-19.4 8.8-7.5.2-14.7-3.2-19.3-9.1-4.8-6.1-7.3-14.3-7.3-24.7 0-10.4 2.4-18.6 7.3-24.7 4.9-6.2 11.5-9.4 19.8-9.4 8.3.1 14.6 3.1 19.2 9.3zm121.4 58h-38.9v-85.8h-23.7v105H480v-19.2zm-320-103C85.7 317.7 32.4 295 32 268.3v-.3l.1 86.8v.3c.4 26.7 53.7 49.3 127.9 57.8v-86.8z" />',
        viewBox: '0 0 512 512'
    };

    var dataWebIcon = {
        name: 'data-web',
        content: '<path d="M415.9 93.6v.3c-.5 33.9-86.3 61.3-191.9 61.3S32.6 127.8 32.1 93.9v-.3C32.1 59.6 118 32 224 32s191.9 27.6 191.9 61.6zm0 46.4v.3c-.5 33.9-86.3 61.3-191.9 61.3S32.5 174.2 32 140.3v-.3l.1 86.8v.3c.5 33.9 86.3 61.3 191.9 61.3s191.4-27.4 192-61.3v-.3l-.1-86.8zm.1 180-.1-52v.3c-.3 21.7-35.7 40.8-88.9 51.7h89zm-151.1 23-14.5 70.1c-.8 3.9-1.3 7.8-1.5 11.7h-.3c-.3-3.8-.9-7.6-1.7-11.3L229.6 343h-25.3l-19.1 69.6c-1.1 4-1.9 8.1-2.1 12.3h-.4c-.2-4-.6-8-1.4-12l-14.8-70h-25.8l27.6 105h27.3l17.9-67.4c1-3.9 1.6-7.8 1.9-11.8h.3c.1 4 .7 7.9 1.7 11.8l17.4 67.4H261l27.8-105h-23.9zm109.8 85.8h-39.3v-24h34.4v-19.2h-34.4v-23.4h36.9V343h-60.6v105h63v-19.2zm66.8 19.2c11.9 0 21.3-2.8 28.2-8.5 6.9-5.6 10.3-13.3 10.3-22.9.1-6.3-2.3-12.3-6.7-16.8-4.5-4.6-10.4-7.3-17.9-8.3v-.3c5.6-1.5 10.8-4.5 14.7-8.9 3.8-4 5.8-9.4 5.8-14.9 0-7.8-3.2-13.9-9.5-18.2-6.3-4.3-15.3-6.5-27-6.5h-38.3v105h40.4zm-7.9-87.6c11.5 0 17.3 3.9 17.3 11.6.2 3.7-1.4 7.3-4.2 9.8-2.8 2.4-6.6 3.6-11.5 3.5h-10.4v-24.9h8.8zm4.1 42.5c5.5 0 9.7 1.2 12.8 3.6 3 2.4 4.7 6 4.6 9.9.2 4-1.5 7.9-4.6 10.4-3.1 2.5-7.4 3.8-12.9 3.8h-12.8v-27.7h12.9zM96 313.9c-39-11.2-63.7-27.5-64-45.6v-.3l.1 86.8v.3c.3 18.1 24.9 34.3 63.9 45.6v-86.8z" />',
        viewBox: '0 0 512 512'
    };

    var groupCollectionIcon = {
        name: 'group-collection',
        content: '<path d="M448 352H160v-32h288v32zm0 32H160v32h288v-32zm0-288H160v32h288V96zm0 64H160v32h288v-32zM64 192V96h64l32-32H32v160h128l-32-32H64zm0 224v-96h64l32-32H32v160h128l-32-32H64z" />',
        viewBox: '0 0 512 512'
    };

    var parameterBooleanIcon = {
        name: 'parameter-boolean',
        content: '<path d="M64 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H64zm384 288H64V128h384v256zM207 212h-39v114h-32V212H96v-26h111v26zm96.8-37-68.1 163h-27.5l67.9-163h27.7zM416 212h-49v34h45v26h-45v54h-32V186h81v26z" />',
        viewBox: '0 0 512 512'
    };

    var parameterDateTimeIcon = {
        name: 'parameter-date-time',
        content: '<path d="M416 202.8V128c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h304c61.9 0 112-50.1 112.1-111.9 0-43.3-25-82.8-64.1-101.3zM64.1 384 64 192h304c-61.9 0-112 50.2-112 112 0 30.1 12.1 58.9 33.6 80H64.1zm303.9 0c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zm48-96v32h-64v-64h32v32h32zm-224 32H96v-96h96v96z" />',
        viewBox: '0 0 512 512'
    };

    var parameterFloatIcon = {
        name: 'parameter-float',
        content: '<path d="M64 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H64zm384 288H64V128h384v256zm-276-55.6c-33.3 0-50-23.4-50-70.2 0-24.3 4.5-42.8 13.5-55.5s22.1-19.1 39.2-19.1c32.6 0 48.8 23.8 48.8 71.4 0 23.7-4.4 41.9-13.3 54.5-8.9 12.6-21.6 18.9-38.2 18.9zm1.4-121.3c-13.3 0-20 16.8-20 50.3 0 31.6 6.5 47.4 19.6 47.4 12.8 0 19.1-16.3 19.1-48.8s-6.2-48.9-18.7-48.9zm83.8 121.3c-4.7.1-9.2-1.5-12.7-4.7-3.3-2.9-5.2-7.1-5.1-11.5-.1-4.4 1.8-8.7 5.2-11.5 3.6-3 8.3-4.6 13-4.5 5.3 0 9.6 1.5 12.9 4.5 6.4 5.9 6.7 15.9.8 22.2l-.9.9c-3.3 3.1-7.8 4.6-13.2 4.6zM390 326h-88v-24h29v-87.2l-30 6.4v-25.5l60-12.1V302h29v24z" />',
        viewBox: '0 0 512 512'
    };

    var parameterIntegerIcon = {
        name: 'parameter-integer',
        content: '<path d="M64 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H64zm384 288H64V128h384v256zm-262.6-58H96.8v-24.4h29v-87.2L96 220.8v-25l60.6-12.2v118h28.8V326zm59.2-26.2v.6h56.8V326h-92.2v-24l40.1-38.4c8.1-7.7 13.7-14.2 17-19.5 3.2-4.9 4.9-10.7 4.9-16.6 0-12.9-6.9-19.3-20.8-19.3-12 0-23.6 4.8-34.6 14.4v-27.2c12.2-7.9 25.9-11.8 41.2-11.8 14.3 0 25.5 3.6 33.5 10.8 8 7.2 12.1 16.9 12.1 29.1 0 16.3-9.8 33.2-29.4 50.7l-28.6 25.6zm82.1 21.6v-26.9c9.4 6.8 20.3 10.3 32.8 10.3 7.9 0 14-1.7 18.4-5.1 4.4-3.4 6.6-8.1 6.6-14.2 0-6.2-2.7-11.1-8.1-14.5-5.4-3.4-12.9-5.1-22.4-5.1h-12.6v-23.6H353c18.2 0 27.4-6.1 27.4-18.2 0-11.4-7-17.1-21-17.1-9.4 0-18.5 3-27.3 9.1V191c9.8-4.9 21.3-7.4 34.4-7.4 14.3 0 25.5 3.2 33.5 9.7 7.8 6 12.2 15.3 12 25.1 0 18.3-9.3 29.8-27.8 34.4v.5c9.9 1.2 17.7 4.8 23.4 10.8 5.7 5.9 8.8 13.8 8.6 21.9 0 13.1-4.8 23.4-14.4 31.1s-22.8 11.4-39.6 11.4c-14.7-.1-26.4-2.4-35.5-7.1z" />',
        viewBox: '0 0 512 512'
    };

    var parameterStringIcon = {
        name: 'parameter-string',
        content: '<path d="M127.3 328.9c13.2 0 23.1-5.6 29.8-16.8h.4v14.4h29.2v-59.8c0-28.5-14.3-42.7-42.8-42.7-6.9.1-13.7.9-20.4 2.5-7.4 1.7-13.3 3.6-17.6 5.9v23.2c10.8-7.1 22.1-10.6 34-10.6s17.8 5.5 17.8 16.4l-27.2 3.6c-23 3-34.5 14.2-34.5 33.6 0 9.2 2.8 16.5 8.3 22s13.2 8.3 23 8.3zm12.2-47.5 18.2-2.3v6.7c0 6.1-1.8 11.2-5.5 15.2-3.6 4-8.8 6.2-14.2 6-4.2 0-7.5-1.1-9.9-3.4-2.4-2.2-3.8-5.4-3.7-8.6 0-7.7 5-12.3 15.1-13.6zm209 33.5c-9.5-9.3-14.3-21.3-14.3-36 0-17 5.1-30.4 15.3-40.2 10.2-9.8 23.8-14.7 40.9-14.7 11.8 0 20.3 1.6 25.6 4.7v26.2c-6.2-4.7-13.8-7.3-21.6-7.2-8.9 0-15.9 2.6-21 7.8-5.2 5.2-7.8 12.3-7.8 21.4 0 8.9 2.5 15.8 7.4 20.9 4.9 5 11.8 7.6 20.4 7.6 7.7 0 15.2-2.4 22.6-7.3v24.8c-7 4-17 6-30.2 6-15.3 0-27.8-4.7-37.3-14zm-104 .5h.4c6.3 9.4 15.6 14.1 27.9 14.1 13.6 0 24.5-5 32.6-15.1 8.1-10.1 12.2-23.5 12.2-40.1 0-15.3-3.5-27.4-10.5-36.3s-16.9-13.3-29.8-13.3c-14.1 0-24.9 5.8-32.5 17.5h-.4V179h-30.9v148h30.9l.1-11.6zm-.5-42.2c0-7.4 2-13.4 6.1-18.1 3.8-4.5 9.5-7.1 15.4-6.9 6.6 0 11.6 2.3 15.2 7 3.5 4.7 5.3 11.1 5.3 19.4 0 10-1.9 17.7-5.8 23.1-3.9 5.4-9.3 8.2-16.4 8.2-5.5.1-10.7-2.2-14.3-6.4-3.7-4.2-5.6-9.6-5.6-16l.1-10.3zM448 96H64c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zm0 288H64V128h384v256z" />',
        viewBox: '0 0 512 512'
    };

    var tocSectionLevelIcon = {
        name: 'toc-section-level',
        content: '<path d="M96 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H96zm320 416H96V64h320v384zm-32-288H192v-32h192v32zm0 64h-96v-32h96v32zm0 64h-96v-32h96v32zm0 64h-96v-32h96v32zm-192-32v-96l64 48-64 48z" />',
        viewBox: '0 0 512 512'
    };

    var inheritedIcon = {
        name: 'inherited',
        content: '<path d="M448 320v128H320V320h30.4L256 244.5 161.6 320H192v128H64V320h46.4l120-96H176V64h160v160h-54.4l120 96H448z" />',
        viewBox: '0 0 512 512'
    };

    var fileVideoIcon = {
        name: 'file-video',
        content: '<path d="M352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288zM304 304.8v-.8c0-8.8-7.2-16-16-16h-10.1c24.2-3.1 42.8-24.3 41.8-49.6-1-24.8-21.2-45-46-46-27.4-1.1-49.9 20.8-49.9 48 0 24.4 18.2 44.6 41.8 47.6h-70.4c17.2-1.7 30.3-16.9 28.7-34.8-1.4-15.5-14.1-27.9-29.6-28.9-18.7-1.3-34.2 13.5-34.2 31.9 0 16.6 12.7 30.2 28.8 31.8H176c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h111.7c8.4 0 15.6-6.3 16.3-14.6.2-3.1-.3-6.1-1.7-8.7l1.8 1.1 44.9 27.1c1.3.8 2.7 1.2 4.1 1.2 1.3 0 2.7-.3 3.9-1 2.5-1.4 4.1-4.1 4.1-7v-95.8c0-2.9-1.5-5.5-4-6.9s-5.5-1.5-8 0L304 304.8zM193.5 272c-.5.1-1 .1-1.5.1s-1 0-1.5-.1h-.2c-8.6-.8-15.1-8.5-14.3-17.2.6-7.9 7.2-14.2 15.1-14.6 9.2-.5 16.8 6.9 16.8 16 .1 8.1-6.1 15-14.4 15.8zm82.3-.3c-.3 0-.6.1-.9.1-1 .1-2.1.2-3.1.2s-2.1 0-3.1-.2c-.3 0-.6-.1-.9-.1-15.9-2-27.9-15.7-27.9-31.7 0-17.6 14.4-32 32-32s32 14.4 32 32c-.1 16.1-12.1 29.7-28.1 31.7z" />',
        viewBox: '0 0 512 512'
    };

    var fileAudioIcon = {
        name: 'file-audio',
        content: '<path d="M218 353.8c-5.5-2.9-12.1-4.5-19-4.5-21 0-38 14.8-38 33.2s17 33.2 38 33.2 38-14.8 38-33.2V256.6l96-22.6v87.8c-5.5-2.9-12.1-4.5-19-4.5-21 0-38 14.8-38 33.2s17 33.2 38 33.2 38-14.8 38-33.2V192.2l-134 31.5v130.1zM352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288z" />',
        viewBox: '0 0 512 512'
    };

    var fileImageIcon = {
        name: 'file-image',
        content: '<path d="M298.7 385.2S272.2 288 213.1 288s-85 128-85 128h256s-11.9-78.7-42.7-78.7-42.7 47.9-42.7 47.9zM352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288zM288 256c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32z" />',
        viewBox: '0 0 512 512'
    };

    var filePresentationIcon = {
        name: 'file-presentation',
        content: '<path d="M127.5 214.4c0 9.9 6.1 18.2 14.5 21.2v113.1c0 12.4 9.6 22.4 21.3 22.4H246v11.8l-13.6 14.6c-1.9 2-3 4.8-3 8 0 6.3 4.7 11.3 10.5 11.3 2.8 0 5.5-1.3 7.4-3.3.1-.1.2-.3.4-.4l8.9-9.6 8.9 9.6c.1.1.2.3.4.4 1.9 2 4.5 3.3 7.4 3.3 5.8 0 10.5-5 10.5-11.3 0-3.1-1.2-6-3-8L267 382.8V371h78.8c11.1 0 20.1-9.3 20.9-21h1.3V235.9c9-2.6 15.7-11.3 15.7-21.6 0-12.4-9.5-22.4-21.3-22.4H148.8c-11.8.1-21.3 10.1-21.3 22.5zM299 237h43v89h-43v-89zm-64 26h43v63h-43v-63zm-64 18h43v45h-43v-45zM352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288z" />',
        viewBox: '0 0 512 512'
    };

    var fileDataIcon = {
        name: 'file-data',
        content: '<path d="M352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288zM128 229.3v149.4c0 20.6 19.1 37.3 42.7 37.3h170.6c23.6 0 42.7-16.7 42.7-37.3V229.3c0-20.6-19.1-37.3-42.7-37.3H170.7c-23.6 0-42.7 16.7-42.7 37.3zM247 379h-76v-47h76v47zm18-112h76v47h-76v-47zm0 65h76v47h-76v-47zm-18-19h-76v-47h76v47z" />',
        viewBox: '0 0 512 512'
    };

    var fileDiscImageIcon = {
        name: 'file-disc-image',
        content: '<path d="M256.1 322.7c3.7 0 7.2-1.1 10.1-3s5.2-4.5 6.7-7.6c1.2-2.5 1.9-5.2 1.9-8.1 0-10.3-8.4-18.7-18.7-18.7-2.8 0-5.4.6-7.7 1.7-3.4 1.6-6.3 4.1-8.3 7.3-1.7 2.8-2.7 6.1-2.7 9.7 0 10.4 8.3 18.7 18.7 18.7zm-52.5-117.8c-19.1 10.1-34.9 25.5-45.4 44.4-9 16.1-14.1 34.7-14.1 54.4 0 61.7 50 111.7 111.7 111.7 20 0 38.8-5.3 55.1-14.5 18.6-10.6 33.9-26.4 43.9-45.4 8.1-15.5 12.7-33.1 12.7-51.8 0-61.7-50-111.7-111.7-111.7-18.9 0-36.7 4.7-52.2 12.9zm89.8 99.2c0 6.1-1.4 11.8-4 16.9l48.7 25.8c-8.3 15.8-20.9 28.9-36.3 37.7l-26.6-48.3c-5.6 3.3-12.1 5.3-19.1 5.3-20.6 0-37.4-16.7-37.4-37.4 0-6.8 1.8-13.2 5-18.7l-49.2-27.1c8.8-15.7 22-28.6 38-37l26.8 49.3c5-2.5 10.7-3.9 16.7-3.9 20.7 0 37.4 16.7 37.4 37.4zM352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288z" />',
        viewBox: '0 0 512 512'
    };

    var fileProgrammingIcon = {
        name: 'file-programming',
        content: '<path d="m236 256-52.6-.2-48.6 48.6.1.1c-4.1 3.9-6.7 9.4-6.7 15.5 0 5.8 2.3 11 6 14.8l49.1 49.1 46.8-.2-59.7-59.7c.2-.9.3-1.8.3-2.8L236 256zm105.2 65.5c.1.9.2 1.9.3 2.8L281.9 384l46.8.2 49.1-49.1c3.7-3.8 6-9.1 6-14.8 0-6.1-2.6-11.6-6.7-15.5l.1-.1-48.6-48.7-52.6.2 65.2 65.3zM352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288z" />',
        viewBox: '0 0 512 512'
    };

    var parametersByteArrayIcon = {
        name: 'parameters-byte-array',
        content: '<path d="M64 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H64zm384 288H64V128h384v256zm-306.2-55.6c-33.3 0-50-23.4-50-70.2 0-24.3 4.5-42.8 13.5-55.5s22.1-19.1 39.2-19.1c32.6 0 48.8 23.8 48.8 71.4 0 23.7-4.4 41.9-13.3 54.5-8.9 12.6-21.6 18.9-38.2 18.9zm1.4-121.3c-13.3 0-20 16.8-20 50.3 0 31.6 6.5 47.4 19.6 47.4 12.8 0 19.1-16.3 19.1-48.8s-6.2-48.9-18.7-48.9zm113.6 121.3c-33.3 0-50-23.4-50-70.2 0-24.3 4.5-42.8 13.5-55.5s22.1-19.1 39.2-19.1c32.6 0 48.8 23.8 48.8 71.4 0 23.7-4.4 41.9-13.3 54.5-8.8 12.6-21.6 18.9-38.2 18.9zm1.4-121.3c-13.3 0-20 16.8-20 50.3 0 31.6 6.5 47.4 19.6 47.4 12.8 0 19.2-16.3 19.2-48.8s-6.3-48.8-18.8-48.9zM420 326h-88v-24h29v-87.2l-30 6.4v-25.4l61-12.3V302h28v24z" />',
        viewBox: '0 0 512 512'
    };

    var parametersUnknownIcon = {
        name: 'parameters-unknown',
        content: '<path d="M64 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H64zm384 288H64V128h384v256zm-64-64h-64v-32h64v32zm-96 0h-64v-32h64v32zm-96 0h-64v-32h64v32z" />',
        viewBox: '0 0 512 512'
    };

    var fileErrorIcon = {
        name: 'file-error',
        content: '<path d="M160 320h32V160h-32v160zm16 32c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zM352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128l-96-96zm64 416H96V64h224v96h96v288z" />',
        viewBox: '0 0 512 512'
    };

    var filesErrorIcon = {
        name: 'files-error',
        content: '<path d="M64 64h224l-32-32H64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h64v-32H64V64zm208 320c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zM384 96H192c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V192l-96-96zm64 352H192V128h160v96h96v224zm-192-96h32V192h-32v160z" />',
        viewBox: '0 0 512 512'
    };

    var dataRestIcon = {
        name: 'data-rest',
        content: '<path d="M32 268v.33-.33zm0 .33.12 86.48v.32c.29 18.1 24.9 34.34 63.87 45.56l.01-86.77c-38.99-11.22-63.7-27.48-64-45.59zm192.01-113.1c105.67 0 191.4-27.41 191.93-61.29v-.33C415.94 59.59 330 32 224 32S32.06 59.59 32.07 93.61v.33c.53 33.88 86.27 61.29 191.94 61.29zM32 140.32s0 .01 0 0V140v.32zm384 86.81v-.32l-.12-86.81v.32c-.53 33.88-86.26 61.29-191.93 61.29-105.66 0-191.4-27.41-191.95-61.28l.12 86.48v.32c.53 33.88 86.26 61.29 191.93 61.29S415.46 261 416 227.13zM327 320h89l-.07-52v.32c-.34 21.73-35.73 40.8-88.93 51.68zm-130.74 96.93 19.85 31.05h-27.17l-16.33-27.03c-1.22-2.05-2.39-3.88-3.52-5.49-1.12-1.61-2.26-2.99-3.41-4.14-1.15-1.15-2.34-2.03-3.59-2.64-1.25-.61-2.6-.92-4.06-.92h-6.37v40.21H128V342.95h37.5c25.49 0 38.23 9.52 38.23 28.56 0 3.66-.56 7.04-1.68 10.14-1.12 3.1-2.71 5.9-4.76 8.39s-4.53 4.64-7.43 6.45c-2.91 1.81-6.14 3.22-9.7 4.25v.29c1.56.49 3.08 1.28 4.54 2.38 1.46 1.1 2.88 2.38 4.25 3.85 1.37 1.46 2.67 3.04 3.92 4.72 1.23 1.69 2.37 3.34 3.39 4.95zm-17.43-42.48c0-9.18-5.49-13.77-16.48-13.77h-10.69v29.22h10.25c5.08 0 9.16-1.46 12.23-4.39 3.13-2.98 4.69-6.67 4.69-11.06zm70.75 30.32h34.35v-19.19h-34.35v-23.36h36.91v-19.26h-60.57v105.03h62.99V428.8h-39.33v-24.03zm115.58-6.01c-2.39-2.49-5.26-4.72-8.61-6.7-3.34-1.98-7.12-3.85-11.32-5.6-3.08-1.27-5.84-2.5-8.28-3.7-2.44-1.2-4.52-2.42-6.23-3.66-1.71-1.24-3.03-2.56-3.96-3.96-.93-1.39-1.39-2.97-1.39-4.72 0-1.61.41-3.06 1.25-4.36.83-1.29 2-2.4 3.52-3.33 1.51-.93 3.37-1.65 5.57-2.16 2.2-.51 4.64-.77 7.32-.77 1.95 0 4.02.15 6.19.44s4.36.75 6.56 1.36 4.33 1.38 6.41 2.31c2.07.93 3.99 2 5.75 3.22v-21.9c-3.56-1.37-7.46-2.38-11.68-3.04-4.22-.66-9.07-.99-14.54-.99-5.57 0-10.84.6-15.82 1.79s-9.36 3.06-13.15 5.6c-3.78 2.54-6.77 5.77-8.97 9.7-2.2 3.93-3.3 8.63-3.3 14.1 0 6.98 2.01 12.94 6.04 17.87 4.03 4.93 10.14 9.11 18.35 12.52 3.22 1.32 6.23 2.61 9.01 3.88 2.78 1.27 5.19 2.59 7.21 3.96 2.03 1.37 3.63 2.86 4.8 4.47s1.76 3.44 1.76 5.49c0 1.51-.37 2.92-1.1 4.21-.73 1.29-1.84 2.42-3.33 3.37-1.49.95-3.34 1.7-5.57 2.23-2.22.54-4.82.81-7.8.81-5.08 0-10.11-.89-15.09-2.67s-9.59-4.46-13.84-8.02v23.44c3.81 1.95 8.31 3.42 13.51 4.39s10.68 1.46 16.44 1.46c5.61 0 10.95-.54 16-1.61 5.05-1.07 9.49-2.84 13.29-5.31s6.82-5.69 9.05-9.67c2.22-3.98 3.33-8.9 3.33-14.76 0-4.25-.63-7.97-1.9-11.17a26.091 26.091 0 0 0-5.48-8.52zm14.94-55.81v19.26h29.81v85.77h23.73v-85.77h29.96v-19.26h-83.5z" />',
        viewBox: '0 0 512 512'
    };

    var fileTypescriptIcon = {
        name: 'file-typescript',
        content: '<path d="M64 128h192v48h-72v208h-48V176H64v-48zm316.6 107.6c-35-12.6-50.1-21.6-50.1-40.6 0-14.6 12.9-29.9 43.3-29.9 24.6 0 42.9 7.1 52.3 11.8l11.5-36.6c-13.6-6.5-34.4-12.3-62.8-12.3-56.8 0-92.7 30.6-92.7 71.3 0 35.6 27.6 57.6 70.9 72.1 33.1 11.4 46.4 22.4 46.4 41.2 0 20.3-17.1 33.9-47.6 33.9-24.4 0-47.9-7.4-63.3-15.8l-10.6 37.6c14.3 8.3 43.1 15.8 70.8 15.8 67.6 0 99.3-34.6 99.3-74.6 0-35.8-21.9-57.4-67.4-73.9z" />',
        viewBox: '0 0 512 512'
    };

    var tablePositionStartIcon = {
        name: 'table-position-start',
        content: '<path d="M480 320v32H32v-32h448zM32 416h448v-32H32v32zm192-160H32V32h224v224h-32zm-64-128h64V64h-64v64zm-32 32H64v64h64v-64zm0-96H64v64h64V64zm32 160h64v-64h-64v64zM32 480h320v-32H32v32z" />',
        viewBox: '0 0 512 512'
    };

    var tablePositionCenterIcon = {
        name: 'table-position-center',
        content: '<path d="M352 256V32H128v224h224zM256 64h64v64h-64V64zm-32 160h-64v-64h64v64zm0-96h-64V64h64v64zm32 32h64v64h-64v-64zM32 448h320v32H32v-32zm448-128v32H32v-32h448zM32 384h448v32H32v-32z" />',
        viewBox: '0 0 512 512'
    };

    var tablePositionEndIcon = {
        name: 'table-position-end',
        content: '<path d="M32 384h448v32H32v-32zm0 96h320v-32H32v32zM480 32v224H256V32h224zM352 160h-64v64h64v-64zm0-96h-64v64h64V64zm96 96h-64v64h64v-64zm0-96h-64v64h64V64zM32 352h448v-32H32v32z" />',
        viewBox: '0 0 512 512'
    };

    var listRomanUpperIcon = {
        name: 'list-roman-upper',
        content: '<path d="M32 32h32v128H32V32zm0 288h32V192H32v128zm64 0h32V192H96v128zM32 480h32V352H32v128zm64 0h32V352H96v128zm64 0h32V352h-32v128zM128 96h352v32H128V96zm64 160h288v32H192v-32zm64 160h224v32H256v-32zM96 152c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm64 160c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm64 160c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z" />',
        viewBox: '0 0 512 512'
    };

    var listRomanLowerIcon = {
        name: 'list-roman-lower',
        content: '<path d="M32 64h16v96H32V64zm0 256h16v-96H32v96zm32 0h16v-96H64v96zM32 480h16v-96H32v96zm32 0h16v-96H64v96zm32 0h16v-96H96v96zM48 40c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm32 112c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm32 160c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM48 200c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm32 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM48 360c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm32 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm32 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm32 112c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM128 96h352v32H128V96zm32 160h320v32H160v-32zm32 160h288v32H192v-32z" />',
        viewBox: '0 0 512 512'
    };

    var importIcon = {
        name: 'import',
        content: '<path d="M96 480c-17.7 0-32-14.3-32-31.9V192c0-17.7 14.3-32 32-32h96.3v30.9H96.4V448h319.1V190.9h-95.9V160H416c17.7 0 32 14.3 32 31.9V448c0 17.7-14.3 32-31.9 32H96zm159.5-162 96.5-94h-64.5V32h-64v192H159l96.5 94z" />',
        viewBox: '0 0 512 512'
    };

    var exportIcon = {
        name: 'export',
        content: '<path d="M96 480c-4.3 0-8.5-.8-12.5-2.5-3.8-1.6-7.3-3.9-10.2-6.9-2.9-2.9-5.3-6.4-6.9-10.2-1.7-3.9-2.5-8.2-2.5-12.5V192c0-4.3.8-8.5 2.5-12.5 1.6-3.8 3.9-7.3 6.9-10.2 2.9-2.9 6.4-5.3 10.2-6.9 3.9-1.7 8.2-2.5 12.5-2.5h96.3v31.9H96.4v256.3h319.1V191.9h-95.9V160H416c17.7 0 32 14.3 32 31.9V448c0 17.7-14.3 32-31.9 32H96zm192-160V126h64.5L256 32l-96.5 94H224v194h64z" />',
        viewBox: '0 0 512 512'
    };

    var graphIcon = {
        name: 'graph',
        content: '<path d="M64 448h416v32H32V32h32v416zm128-192-96 96v64h384V160L288 320l-96-64zM416 64l14.2 14.2L288 192l-96-64-96 96v64l96-96 96 64 174.5-145.4L480 128V64h-64z" />',
        viewBox: '0 0 512 512'
    };

    var chartColumnClusteredIcon = {
        name: 'chart-column-clustered',
        content: '<path d="M320 96v352h-32V288H128v160H64V32H32v448h448V96H320zm-64 352h-96V320h96v128z" />',
        viewBox: '0 0 512 512'
    };

    var chartColumnStackedIcon = {
        name: 'chart-column-stacked',
        content: '<path d="M320 192v256h-32V96H128v352H64V32H32v448h448V192H320zM160 448V256h96v192h-96zm192 0v-96h96v96h-96z" />',
        viewBox: '0 0 512 512'
    };

    var chartColumnStacked100Icon = {
        name: 'chart-column-stacked100',
        content: '<path d="M320 32v416h-32V32H128v416H64V32H32v448h448V32H320zM160 448V192h96v256h-96zm192 0V288h96v160h-96z" />',
        viewBox: '0 0 512 512'
    };

    var chartColumnRangeIcon = {
        name: 'chart-column-range',
        content: '<path d="M480 448v32H32V32h32v416h416zM256 128h-96v224h96V128m32-32v288H128V96h160zm192-64H320v224h160V32z" />',
        viewBox: '0 0 512 512'
    };

    var chartBarClusteredIcon = {
        name: 'chart-bar-clustered',
        content: '<path d="M64 448v-64h160V224H64v-32h352V32H32v448h448v-32H64zm128-192v96H64v-96h128z" />',
        viewBox: '0 0 512 512'
    };

    var chartBarStackedIcon = {
        name: 'chart-bar-stacked',
        content: '<path d="M64 448v-64h352V224H64v-32h256V32H32v448h448v-32H64zm0-384h96v96H64V64zm192 192v96H64v-96h192z" />',
        viewBox: '0 0 512 512'
    };

    var chartBarStacked100Icon = {
        name: 'chart-bar-stacked100',
        content: '<path d="M480 192V32H32v448h448v-32H64v-64h416V224H64v-32h416zm-160 64v96H64v-96h256zM64 64h160v96H64V64z" />',
        viewBox: '0 0 512 512'
    };

    var chartBarRangeIcon = {
        name: 'chart-bar-range',
        content: '<path d="M480 448v32H32V32h32v416h416zm-96-192H160v96h224v-96m32-32v160H128V224h288zm64-192H256v160h224V32z" />',
        viewBox: '0 0 512 512'
    };

    var chartAreaClusteredIcon = {
        name: 'chart-area-clustered',
        content: '<path d="m405.5 200.3-88.2-88.2-91.2 114L192 192l-37.6 45.1L64 146.8V32H32v448h448V96l-74.5 104.3zM320 160l66.7 66.7L320 320l-71.1-71.1L320 160zM64 192l69.8 69.8L64 345.6V192z" />',
        viewBox: '0 0 512 512'
    };

    var chartAreaStackedIcon = {
        name: 'chart-area-stacked',
        content: '<path d="m320 165.3-128-64-128 128V32H32v448h448V32L320 165.3zm128 7.5L320 352 192 224 64 377.6v-103l134.3-134.3 126.1 63 123.6-103v72.5z" />',
        viewBox: '0 0 512 512'
    };

    var chartAreaStacked100Icon = {
        name: 'chart-area-stacked100',
        content: '<path d="M32 32v448h448V32H32zm416 108.8L320 320 192 192 64 345.6V64h384v76.8z" />',
        viewBox: '0 0 512 512'
    };

    var chartAreaRangeIcon = {
        name: 'chart-area-range',
        content: '<path d="M64 416v32h416v32H32V32h32v224l128-128 128 64L480 32v192L320 384l-127-64-129 96z" />',
        viewBox: '0 0 512 512'
    };

    var chartLineIcon = {
        name: 'chart-line',
        content: '<path d="M64 448h416v32H32V32h32v416zm152.4-190.4L96 416v-51.2l97.2-129.6 41.2-33-27.3-34.1L96 224v-38l119.9-58.1 43.5 54.3 109-87.2 55.9 85.7L480 114v47l-38 46.7 38 58.3.5 53.3-58.5-87-82.5 101.3-85.1-106.4-38 30.4zm63-50.4 60.1 75.2 64.3-77.1-42.7-63.5-81.7 65.4z" />',
        viewBox: '0 0 512 512'
    };

    var chartLineStackedIcon = {
        name: 'chart-line-stacked',
        content: '<path d="M480 448v32H32V32h32v416h416zM224 292l128 64 128-96v-36l-128 96-128-64-128 96v36l128-96zm0-160 128 92 128-60v-36l-128 60-128-92-128 64v36l128-64z" />',
        viewBox: '0 0 512 512'
    };

    var chartLineStacked100Icon = {
        name: 'chart-line-stacked100',
        content: '<path d="M480 448v32H32V32h32v416h416zM224 228l128 64 128-96v-36l-128 96-128-64-128 96v36l128-96zM480 32H96v32h384V32z" />',
        viewBox: '0 0 512 512'
    };

    var chartLineMarkersIcon = {
        name: 'chart-line-markers',
        content: '<path d="M480 448v32H0V32h32v416h448zm0-96c.1 17.7-14.2 32-31.9 32.1-17.7.1-32-14.2-32.1-31.9 0-1.3.1-2.7.2-4l-83.7-62.8c-8 3.4-17.1 3.4-25.2 0l-83.7 62.8c2.1 17.5-10.4 33.5-27.9 35.6s-33.5-10.4-35.6-27.9c-.7-6.2.3-12.4 3.1-18l-49-73.6-22.7 39.6c8.9 15.3 3.7 34.9-11.5 43.8s-34.9 3.7-43.8-11.5-3.7-34.9 11.5-43.8c4.9-2.8 10.4-4.3 16-4.4l30.6-53.5-28.4-42.6c-.7 0-1.4.1-2.1.1-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32c0 4.9-1.1 9.8-3.3 14.2l19.5 29.3 52.2-91.3c-8.9-15.3-3.8-34.9 11.5-43.8s34.9-3.8 43.8 11.5c2.5 4.4 4 9.2 4.3 14.3l78.4 39.2c14.7-9.7 34.6-5.7 44.3 9 .3.5.7 1.1 1 1.6h72.6c8.8-15.3 28.4-20.5 43.7-11.7 15.3 8.8 20.5 28.4 11.7 43.7s-28.4 20.5-43.7 11.7c-4.9-2.8-8.9-6.8-11.7-11.7h-72.6c-8.8 15.3-28.4 20.5-43.7 11.7-9.3-5.4-15.3-15.1-15.9-25.8l-78.4-39.2c-5.2 3.4-11.3 5.3-17.5 5.3l-60 105.2 57.9 86.9c.7 0 1.4-.1 2.1-.1 4.3 0 8.6.9 12.6 2.6l83.7-62.8c-2.2-17.5 10.3-33.5 27.8-35.7 17.5-2.2 33.5 10.3 35.7 27.8.3 2.6.3 5.2 0 7.8l83.7 62.8c16.2-7 35.1.6 42 16.8 1.6 4.1 2.5 8.4 2.5 12.7zm-48-192c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zm-128 0c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zM176 96c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zm-96 64c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm0 160c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm128 32c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm128-96c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm128 96c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16z" />',
        viewBox: '0 0 512 512'
    };

    var chartLineStackedMarkersIcon = {
        name: 'chart-line-stacked-markers',
        content: '<path d="M480 448v32H0V32h32v416h448zm0-320c0 17.7-14.3 32-32 32-6.9 0-13.7-2.2-19.2-6.4L352 192c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-2.5.3-5 .9-7.4l-81.1-60.8c-11.1 6.3-24.8 5.4-35-2.2L96 160c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32c6.9 0 13.7 2.2 19.2 6.4L160 96c0-17.7 14.3-32 32-32s32 14.3 32 32c0 2.5-.3 5-.9 7.4l81.1 60.8c11.1-6.3 24.8-5.4 35 2.2L416 128c0-17.7 14.3-32 32-32s32 14.3 32 32zM80 160c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm128-64c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm128 96c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm128-64c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm16 128c0 17.7-14.3 32-32 32-5.5 0-11-1.4-15.8-4.2l-81.1 60.8c4.1 17.2-6.6 34.4-23.8 38.5-17.2 4.1-34.4-6.6-38.5-23.8-.6-2.4-.9-4.9-.9-7.4l-76.8-38.4c-10.2 7.6-23.9 8.5-35 2.2L95 376.5c4.1 17.2-6.6 34.4-23.8 38.5s-34.4-6.6-38.5-23.8 6.6-34.4 23.8-38.5c7.9-1.9 16.1-.7 23.1 3.3l81.1-60.8c-4.1-17.2 6.6-34.4 23.8-38.5 17.2-4.1 34.4 6.6 38.5 23.8.6 2.4.9 4.9.9 7.4l76.8 38.4c10.2-7.6 23.9-8.5 35-2.2l81.1-60.8c-4.1-17.2 6.5-34.5 23.7-38.6 17.2-4.1 34.5 6.5 38.6 23.7.6 2.5.9 5.1.9 7.6zM80 384c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm128-96c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm128 64c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm128-96c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16z" />',
        viewBox: '0 0 512 512'
    };

    var chartLineStacked100MarkersIcon = {
        name: 'chart-line-stacked100-markers',
        content: '<path d="M480 448v32H0V32h32v416h448zm0-192c0 17.7-14.3 32-32 32-5.5 0-11-1.4-15.8-4.2l-81.1 60.8c4.1 17.2-6.6 34.4-23.8 38.5-17.2 4.1-34.4-6.6-38.5-23.8-.6-2.4-.9-4.9-.9-7.4l-76.8-38.4c-10.2 7.6-23.9 8.5-35 2.2L95 376.5c4.1 17.2-6.6 34.4-23.8 38.5s-34.4-6.6-38.5-23.8 6.6-34.4 23.8-38.5c7.9-1.9 16.1-.7 23.1 3.3l81.1-60.8c-4.1-17.2 6.6-34.4 23.8-38.5 17.2-4.1 34.4 6.6 38.5 23.8.6 2.4.9 4.9.9 7.4l76.8 38.4c10.2-7.6 23.9-8.5 35-2.2l81.1-60.8c-4.1-17.2 6.5-34.5 23.7-38.6 17.2-4.1 34.5 6.5 38.6 23.7.6 2.5.9 5.1.9 7.6zM80 384c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm128-96c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm128 64c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm128-96c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm16-192c0 17.7-14.3 32-32 32-11.4 0-22-6.1-27.7-16h-72.6c-8.8 15.3-28.4 20.5-43.7 11.7-4.9-2.8-8.9-6.8-11.7-11.7h-72.6c-8.8 15.3-28.4 20.5-43.7 11.7-4.9-2.8-8.9-6.8-11.7-11.7H91.7C82.9 95.3 63.3 100.5 48 91.7S27.4 63.3 36.3 48 64.7 27.5 80 36.3c4.9 2.8 8.9 6.8 11.7 11.7h72.6c8.8-15.3 28.4-20.5 43.7-11.7 4.9 2.8 8.9 6.8 11.7 11.7h72.6c8.8-15.3 28.4-20.5 43.7-11.7 4.9 2.8 8.9 6.8 11.7 11.7h72.6c8.8-15.3 28.4-20.5 43.7-11.7 9.9 5.7 16 16.3 16 27.7zM80 64c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm128 0c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm128 0c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm128 0c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16z" />',
        viewBox: '0 0 512 512'
    };

    var chartPieIcon = {
        name: 'chart-pie',
        content: '<path d="M473 310.3c.9-2.1 1.4-4.2 1.8-6.3l.1-.5c.5-2.1.9-4.1 1.3-6.2v-.2c.8-4.4 1.5-8.8 1.8-13.3v-.4c.5-2 .7-3.9.9-5.9l.1-1.7c.1-1.6.3-3.1.4-4.7 0-.7.1-1.4.1-2 .1-1.5.2-3.1.2-4.6 0-.6 0-1.3.1-1.9.1-2.2.1-4.3.1-6.5 0-31.8-6.7-63.2-19.8-92.2-1.5-3.3-3.1-6.6-4.7-9.8-4.1-8-8.7-15.8-13.8-23.3-5-7.4-10.5-14.6-16.4-21.3-1.2-1.3-2.4-2.7-3.6-4-2.4-2.7-4.9-5.3-7.4-7.8s-5.1-5-7.8-7.4c-2.7-2.4-5.4-4.7-8.1-7-4.1-3.4-8.4-6.7-12.8-9.8-20.7-14.8-43.8-25.9-68.3-32.9-5.3-1.5-10.7-2.8-16.2-4-3.6-.7-7.3-1.4-11-2s-7.4-1-11.2-1.3c-5.6-.6-11.3-.9-17.1-1.1-1.9 0-3.9-.1-5.8-.1C132.3 32 32 132.3 32 256s100.3 224 224 224c105 0 193.1-72.2 217-169.7zm-81.2 81.5c-74.4 75.6-195.9 76.6-271.5 2.2S43.7 198 118 122.5l2.2-2.2c36-36.2 84.9-56.4 135.8-56.3v192l186.3 46.6c-8.4 33.8-25.9 64.6-50.5 89.2z" />',
        viewBox: '0 0 512 512'
    };

    var chartDoughnutIcon = {
        name: 'chart-doughnut',
        content: '<path d="M473 310.3c.9-2.1 1.4-4.2 1.8-6.3l.1-.5c.5-2.1.9-4.1 1.3-6.2v-.3c.8-4.4 1.5-8.8 1.8-13.3v-.4c.5-2 .7-3.9.9-5.9l.1-1.7c.1-1.6.3-3.1.4-4.7 0-.7.1-1.4.1-2 .1-1.5.2-3.1.2-4.6 0-.6 0-1.3.1-1.9.1-2.2.1-4.3.1-6.5 0-31.8-6.7-63.2-19.8-92.2-1.5-3.3-3.1-6.6-4.7-9.8-4.1-8-8.7-15.8-13.8-23.3-5-7.4-10.5-14.6-16.4-21.3-1.2-1.3-2.4-2.7-3.6-4-2.4-2.7-4.9-5.3-7.4-7.8s-5.1-5-7.8-7.4c-2.7-2.4-5.4-4.7-8.1-7-4.1-3.4-8.4-6.7-12.8-9.8-20.7-14.8-43.8-25.9-68.3-32.9-5.3-1.5-10.7-2.8-16.2-4-3.6-.7-7.3-1.4-11-2s-7.4-1-11.2-1.3c-5.6-.6-11.3-.9-17.1-1.1-1.9 0-3.9-.1-5.8-.1C132.3 32 32 132.3 32 256s100.3 224 224 224c105 0 193.1-72.2 217-169.7zM320 256c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm71.8 135.8c-74.4 75.6-195.9 76.6-271.5 2.2S43.7 198 118 122.4l2.2-2.2c36-36.1 84.9-56.3 135.8-56.2v96c-53 0-96 43-96 96s43 96 96 96c44 0 82.4-30 93.1-72.7l93.2 23.3c-8.4 33.8-25.9 64.6-50.5 89.2zm-39.8-133v.8-.8zm0 2.8v.9-.9zm-.4 2.9-.1.7.1-.7zm-.6 3.2v.2-.2zm-1 5.9v.1-.1zm0 2.8v.2-.2z" />',
        viewBox: '0 0 512 512'
    };

    var chartScatterIcon = {
        name: 'chart-scatter',
        content: '<path d="M480 448v32H32V32h32v416h416zM160 96c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-16 0c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm112 192c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-16 0c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm112-128c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-16 0c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm112 192c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-16 0c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16z" />',
        viewBox: '0 0 512 512'
    };

    var chartScatterSmoothLinesMarkersIcon = {
        name: 'chart-scatter-smooth-lines-markers',
        content: '<path d="M480 448v32H32V32h32v416h416zm0-384c0 17.7-14.3 32-32 32-15.6 0-28.9-11.2-31.5-26.5-9.2-1.3-22-1.8-39-.8C342.5 71 305.1 79.4 275 92c-19.1 7.9-47.9 23-60.7 45.1 12.7 12.3 13 32.6.6 45.3l-1.1 1.1c9.1 13.1 28.9 18.6 61.1 25.1 21 4.2 42.8 8.5 60.2 18.9 12.7 7.6 21.7 17.8 27 30.3 16.8 5.6 25.8 23.7 20.2 40.5-3.2 9.5-10.6 17-20.1 20.2-11.2 29.5-39.2 54.6-81.6 72.2-29.7 12.1-61.2 19.2-93.2 21.1-4 .2-7.8.3-11.4.3-9.6.1-19.3-.7-28.8-2.5-14.1 10.6-34.2 7.7-44.8-6.4-10.6-14.1-7.7-34.2 6.4-44.8s34.2-7.7 44.8 6.4c3.2 4.2 5.2 9.1 6 14.3 8.7 1 17.5 1.2 26.2.7 28.3-1.6 56.2-7.9 82.5-18.6 19.7-8.2 49.8-24.3 62-49.6-13-12-13.8-32.2-1.8-45.2.4-.5.8-.9 1.3-1.3-9.1-13.2-28.8-18.7-61.1-25.2-21-4.2-42.8-8.5-60.2-18.9-12.8-7.7-21.9-18-27.2-30.7-16.7-5.9-25.4-24.2-19.5-40.9 3.3-9.4 10.9-16.7 20.4-19.8 5-11 12-21 20.6-29.5 14.6-14.5 34.7-27.2 59.8-37.6C296 48.6 337 39.2 375.4 36.8c22.9-1.5 40-.4 52.8 2.1 13.9-11 34-8.6 44.9 5.3 4.5 5.6 6.9 12.6 6.9 19.8zm-272 96c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm-64 224c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm192-96c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zM464 64c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16z" />',
        viewBox: '0 0 512 512'
    };

    var chartScatterSmoothLinesIcon = {
        name: 'chart-scatter-smooth-lines',
        content: '<path d="M480 448v32H32V32h32v416h416zm-144-87.8c21.1-19.9 31.8-44.5 31.8-73.1 0-27.3-11-47.6-32.6-60.6-17.3-10.3-38.8-14.5-59.6-18.6-46.2-9-66.5-16.3-66.8-47.9-.4-41.2 71.8-65.5 114.8-76.4C385.4 68.1 448.4 64 449 64l-2-32c-2.7.2-66.2 4.3-130.8 20.5-38.7 9.7-69.8 21.8-92.4 36-31.4 19.8-47.3 43.9-47 71.7.2 27.2 11.3 47.6 32.9 60.5 17.3 10.3 38.9 14.5 59.7 18.6 19 3.7 36.9 7.2 49.3 14.6 11.9 7.1 17 17.1 17 33.2 0 19.7-7.1 36-21.7 49.7-24.1 22.8-68.9 38.2-129.3 44.6-29.2 3-58.5 3.9-87.8 2.6l-2 32c1.7.1 12.1.7 28 .7 51.4 0 159.8-6.4 213.1-56.5z" />',
        viewBox: '0 0 512 512'
    };

    var chartScatterStraightLinesMarkersIcon = {
        name: 'chart-scatter-straight-lines-markers',
        content: '<path d="M480 448v32H32V32h32v416h416zm0-384c0 17.7-14.3 32-32 32-7.4 0-14.6-2.6-20.3-7.3L224 165.1l116.4 93.1c16.5-6.4 35 1.7 41.4 18.2s-1.7 35-18.2 41.4c-10.3 4-22 2.4-30.8-4.2l-173.1 74.2c-2.1 17.5-18 30.1-35.6 28s-30.1-18-28-35.6c2.1-17.5 18-30.1 35.6-28 5.6.7 10.9 2.8 15.4 6.2l173.1-74.2c0-.4.1-.7.1-1l-116.7-93.4c-16.5 6.4-35-1.7-41.4-18.2s1.7-35 18.2-41.4c10.8-4.2 23-2.3 32 5.1l204.1-76.5c2.9-17.4 19.4-29.2 36.8-26.3C468.7 35.1 480 48.4 480 64zm-272 96c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm-64 224c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm192-96c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zM464 64c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16z" />',
        viewBox: '0 0 512 512'
    };

    var chartScatterStraightLinesIcon = {
        name: 'chart-scatter-straight-lines',
        content: '<path d="M480 448v32H32V32h32v416h416zm-98.5-156.9-158.8-127L448 64V32L161.3 156l161.2 128.9L128 384v32l253.5-124.9z" />',
        viewBox: '0 0 512 512'
    };

    var chartBubbleIcon = {
        name: 'chart-bubble',
        content: '<path d="M480 448v32H32V32h32v416h416zM192 256c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64m0-32c53 0 96 43 96 96s-43 96-96 96-96-43-96-96 43-96 96-96zm224 96c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32m0-32c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM368 96c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zM176 64c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" />',
        viewBox: '0 0 512 512'
    };

    var chartCandlestickIcon = {
        name: 'chart-candlestick',
        content: '<path d="M480 448v32H32V32h32v416h416zm-192-96h-64v64h-32v-64h-64V96h64V32h32v64h64v256zm-32-224h-96v192h96V128zm224 64h-64V64h-32v128h-64v128h64v64h32v-64h64V192z" />',
        viewBox: '0 0 512 512'
    };

    var chartOhlcIcon = {
        name: 'chart-ohlc',
        content: '<path d="M480 448v32H32V32h32v416h416zM224 320V96h-32v32h-64v32h64v256h32v-64h64v-32h-64zM416 96V32h-32v160h-64v32h64v96h32V128h64V96h-64z" />',
        viewBox: '0 0 512 512'
    };

    var chartRadarIcon = {
        name: 'chart-radar',
        content: '<path d="M272 32h-32v44L80.7 195.5l-41.1-10-7.6 31.1 42.3 10.3 81 148.5-62.7 86.3 25.9 18.8 67.2-92.5L344 412.3l49.5 68.2 25.9-18.8-46.8-64.4 40.8-163.1 65.8-15.3-7.3-31.2-74.9 17.4L272 80V32zm-32 202.2-119-28.9L240 116v118.2zm32 0v-109l88.4 88.4-88.4 20.6zm-95.9 112.5-59.8-109.6 118.5 28.8-58.7 80.8zm172 17.3-71-97.7 101.3-23.6L348.1 364zm-30.6 12-110.6-17 49.1-67.6 61.5 84.6z" />',
        viewBox: '0 0 512 512'
    };

    var chartRadarMarkersIcon = {
        name: 'chart-radar-markers',
        content: '<path d="m472 187.7-51.2 11.9c-9.4-8-22.5-9.9-33.8-4.8L288.1 96c0-11.5-6.2-22.1-16.1-27.8V32h-32v36.4c-7.1 4.1-12.3 10.8-14.6 18.6L96.1 184c-8.6 0-16.7 3.4-22.8 9.5l-32.8-8-7.5 31.1 32.3 7.8c2.7 9.9 10 17.8 19.6 21.5l61 111.8c-3 8.9-2 18.7 2.9 26.7l-56.1 77.3 25.9 18.8L177 400c8.5-.2 16.5-3.8 22.3-10l122 18.8c3.9 13.8 16.5 23.2 30.8 23.2 1.9 0 3.9-.2 5.8-.5l35.6 49 25.9-18.8-37.1-51.1c3.7-10.4 1.7-22-5.2-30.6l31.4-125.2c11.8-3.2 20.8-12.9 23.1-24.9l47.7-11.1-7.3-31.1zm-111.4 25.9L272 234.2V125.1l88.6 88.5zM256 80c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm-21.1 39.9c1.6 1.4 3.3 2.6 5.1 3.7V234l-113.3-27.6c-.4-1.4-1-2.8-1.6-4.1l109.8-82.4zM96 232c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm80 152c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm7.2-47.2c-2.4-.5-4.8-.8-7.2-.8-1.8 0-3.7.2-5.5.5l-52.9-96.9c.7-.6 1.3-1.2 1.9-1.9l115.3 28-51.6 71.1zm23.6 22 49.1-67.6 61.5 84.6-110.6-17zM352 416c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm-3.9-52.3L277 265.9l97.4-22.6c.9 1.2 1.9 2.4 3 3.5l-29.3 116.9zM400 240c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" />',
        viewBox: '0 0 512 512'
    };

    var chartRadarFilledIcon = {
        name: 'chart-radar-filled',
        content: '<path d="m354.4 372.1 65.1 89.6-25.9 18.8-75-103.2-109.2-21.8-90.8 125-25.9-18.8 90-123.8-67.3-101L32 216.6l7.5-31.1 65.8 16L240 107.2V32h32v80l99.2 99.2L472 187.7l7.3 31.2-98.8 23-26.1 130.2z" />',
        viewBox: '0 0 512 512'
    };

    var chartRoseIcon = {
        name: 'chart-rose',
        content: '<path d="M226 251.4 44.3 329.3c-23.8-68.9-12.6-145.1 30-204.3L226 251.4zm-82.1-109.5L240 222V96.8c-36.2 3.6-70.1 19.6-96.1 45.1zm231.5 160.2L279 278l27.3 95.7c31.8-13.6 56.7-39.4 69.1-71.6zM96 353.4c37.3 69.1 115 106.1 192.2 91.4L244 290 96 353.4zM272 32v211.4l204.6 51.1c2.3-12.9 3.4-26 3.4-39.1C480 137.1 388.2 40.2 272 32z" />',
        viewBox: '0 0 512 512'
    };

    var chartChoroplethIcon = {
        name: 'chart-choropleth',
        content: '<path d="M448 64v384H64V64h384m32-32H32v448h448V32zm-96 256v13.3l-64 64v37.5l13.3 13.3H416V264.6L384 288zm-50.7-160 64 64-32 32 18.8 23.4 32-21.3V96H288v18.8l13.3 13.3h32zM224 192l32 32-23.7 23.7L352 276v-20l-32-32 32-32-32-32h-32l-32-32V96h-32l-64 64 32 32h32zm0 86-32 10-32 32 32 32v32l-32 32h128v-64l50.4-50.4L224 278zm-29.4-37.8 16.2-16.2h-32l-64-64 64-64H96v167.5l98.6-23.3zM114.8 320l37.6-37.6L96 296.5V416h32v-13.3l32-32v-5.5L114.8 320z" />',
        viewBox: '0 0 512 512'
    };

    var svgIcons = /*#__PURE__*/Object.freeze({
        __proto__: null,
        accessibilityIcon: accessibilityIcon,
        aggregateFieldsIcon: aggregateFieldsIcon,
        alignBottomIcon: alignBottomIcon,
        alignCenterIcon: alignCenterIcon,
        alignItemsBaselineAltIcon: alignItemsBaselineAltIcon,
        alignItemsBaselineIcon: alignItemsBaselineIcon,
        alignItemsCenterAltIcon: alignItemsCenterAltIcon,
        alignItemsCenterIcon: alignItemsCenterIcon,
        alignItemsEndAltIcon: alignItemsEndAltIcon,
        alignItemsEndIcon: alignItemsEndIcon,
        alignItemsStartAltIcon: alignItemsStartAltIcon,
        alignItemsStartIcon: alignItemsStartIcon,
        alignItemsStretchAltIcon: alignItemsStretchAltIcon,
        alignItemsStretchIcon: alignItemsStretchIcon,
        alignJustifyIcon: alignJustifyIcon,
        alignLeftIcon: alignLeftIcon,
        alignMiddleIcon: alignMiddleIcon,
        alignRemoveIcon: alignRemoveIcon,
        alignRightIcon: alignRightIcon,
        alignSelfCenterAltIcon: alignSelfCenterAltIcon,
        alignSelfCenterIcon: alignSelfCenterIcon,
        alignSelfEndAltIcon: alignSelfEndAltIcon,
        alignSelfEndIcon: alignSelfEndIcon,
        alignSelfStartAltIcon: alignSelfStartAltIcon,
        alignSelfStartIcon: alignSelfStartIcon,
        alignSelfStretchAltIcon: alignSelfStretchAltIcon,
        alignSelfStretchIcon: alignSelfStretchIcon,
        alignToGridIcon: alignToGridIcon,
        alignTopIcon: alignTopIcon,
        allIcon: allIcon,
        anchorIcon: anchorIcon,
        applyFormatIcon: applyFormatIcon,
        arrowDownIcon: arrowDownIcon,
        arrowLeftIcon: arrowLeftIcon,
        arrowOverflowDownIcon: arrowOverflowDownIcon,
        arrowRightIcon: arrowRightIcon,
        arrowRotateCcwIcon: arrowRotateCcwIcon,
        arrowRotateCcwSmallIcon: arrowRotateCcwSmallIcon,
        arrowRotateCwIcon: arrowRotateCwIcon,
        arrowRotateCwSmallIcon: arrowRotateCwSmallIcon,
        arrowUpIcon: arrowUpIcon,
        arrowsAxesIcon: arrowsAxesIcon,
        arrowsLeftRightIcon: arrowsLeftRightIcon,
        arrowsMoveIcon: arrowsMoveIcon,
        arrowsNoChangeIcon: arrowsNoChangeIcon,
        arrowsNoRepeatIcon: arrowsNoRepeatIcon,
        arrowsSwapIcon: arrowsSwapIcon,
        arrowsTopBottomIcon: arrowsTopBottomIcon,
        barcodeIcon: barcodeIcon,
        barcodeOutlineIcon: barcodeOutlineIcon,
        barcodeQrCodeScannerIcon: barcodeQrCodeScannerIcon,
        barcodeScannerIcon: barcodeScannerIcon,
        behanceBoxIcon: behanceBoxIcon,
        behanceIcon: behanceIcon,
        bellIcon: bellIcon,
        binocularsIcon: binocularsIcon,
        bloggerBoxIcon: bloggerBoxIcon,
        bloggerIcon: bloggerIcon,
        blurIcon: blurIcon,
        boldIcon: boldIcon,
        bookIcon: bookIcon,
        borderBottomIcon: borderBottomIcon,
        borderLeftIcon: borderLeftIcon,
        borderRadiusBottomLeftIcon: borderRadiusBottomLeftIcon,
        borderRadiusBottomRightIcon: borderRadiusBottomRightIcon,
        borderRadiusIcon: borderRadiusIcon,
        borderRadiusTopLeftIcon: borderRadiusTopLeftIcon,
        borderRadiusTopRightIcon: borderRadiusTopRightIcon,
        borderRightIcon: borderRightIcon,
        borderStyleBottomIcon: borderStyleBottomIcon,
        borderStyleIcon: borderStyleIcon,
        borderStyleLeftIcon: borderStyleLeftIcon,
        borderStyleRightIcon: borderStyleRightIcon,
        borderStyleTopIcon: borderStyleTopIcon,
        borderTopIcon: borderTopIcon,
        bordersAllIcon: bordersAllIcon,
        bordersInsideHorizontalIcon: bordersInsideHorizontalIcon,
        bordersInsideIcon: bordersInsideIcon,
        bordersInsideVerticalIcon: bordersInsideVerticalIcon,
        bordersNoneIcon: bordersNoneIcon,
        bordersOutsideIcon: bordersOutsideIcon,
        bordersShowHideIcon: bordersShowHideIcon,
        boxSizingIcon: boxSizingIcon,
        brightnessContrastIcon: brightnessContrastIcon,
        bringBackwardIcon: bringBackwardIcon,
        bringForwardIcon: bringForwardIcon,
        bringToBackIcon: bringToBackIcon,
        bringToFrontIcon: bringToFrontIcon,
        brushIcon: brushIcon,
        buildingBlocksIcon: buildingBlocksIcon,
        buttonIcon: buttonIcon,
        calculatorIcon: calculatorIcon,
        calendarDateIcon: calendarDateIcon,
        calendarIcon: calendarIcon,
        cameraIcon: cameraIcon,
        cancelCircleIcon: cancelCircleIcon,
        cancelIcon: cancelIcon,
        cancelOutlineIcon: cancelOutlineIcon,
        caretAltDownIcon: caretAltDownIcon,
        caretAltExpandIcon: caretAltExpandIcon,
        caretAltLeftIcon: caretAltLeftIcon,
        caretAltRightIcon: caretAltRightIcon,
        caretAltToBottomIcon: caretAltToBottomIcon,
        caretAltToLeftIcon: caretAltToLeftIcon,
        caretAltToRightIcon: caretAltToRightIcon,
        caretAltToTopIcon: caretAltToTopIcon,
        caretAltUpIcon: caretAltUpIcon,
        caretBlIcon: caretBlIcon,
        caretBrIcon: caretBrIcon,
        caretDoubleAltDownIcon: caretDoubleAltDownIcon,
        caretDoubleAltLeftIcon: caretDoubleAltLeftIcon,
        caretDoubleAltRightIcon: caretDoubleAltRightIcon,
        caretDoubleAltUpIcon: caretDoubleAltUpIcon,
        caretTlIcon: caretTlIcon,
        caretTrIcon: caretTrIcon,
        cartIcon: cartIcon,
        categorizeIcon: categorizeIcon,
        cellSplitHorizontallyIcon: cellSplitHorizontallyIcon,
        cellSplitVerticallyIcon: cellSplitVerticallyIcon,
        cellsMergeHorizontallyIcon: cellsMergeHorizontallyIcon,
        cellsMergeIcon: cellsMergeIcon,
        cellsMergeVerticallyIcon: cellsMergeVerticallyIcon,
        changeManuallyIcon: changeManuallyIcon,
        chartAreaClusteredIcon: chartAreaClusteredIcon,
        chartAreaRangeIcon: chartAreaRangeIcon,
        chartAreaStacked100Icon: chartAreaStacked100Icon,
        chartAreaStackedIcon: chartAreaStackedIcon,
        chartBarClusteredIcon: chartBarClusteredIcon,
        chartBarRangeIcon: chartBarRangeIcon,
        chartBarStacked100Icon: chartBarStacked100Icon,
        chartBarStackedIcon: chartBarStackedIcon,
        chartBubbleIcon: chartBubbleIcon,
        chartCandlestickIcon: chartCandlestickIcon,
        chartChoroplethIcon: chartChoroplethIcon,
        chartColumnClusteredIcon: chartColumnClusteredIcon,
        chartColumnRangeIcon: chartColumnRangeIcon,
        chartColumnStacked100Icon: chartColumnStacked100Icon,
        chartColumnStackedIcon: chartColumnStackedIcon,
        chartDoughnutIcon: chartDoughnutIcon,
        chartLineIcon: chartLineIcon,
        chartLineMarkersIcon: chartLineMarkersIcon,
        chartLineStacked100Icon: chartLineStacked100Icon,
        chartLineStacked100MarkersIcon: chartLineStacked100MarkersIcon,
        chartLineStackedIcon: chartLineStackedIcon,
        chartLineStackedMarkersIcon: chartLineStackedMarkersIcon,
        chartOhlcIcon: chartOhlcIcon,
        chartPieIcon: chartPieIcon,
        chartRadarFilledIcon: chartRadarFilledIcon,
        chartRadarIcon: chartRadarIcon,
        chartRadarMarkersIcon: chartRadarMarkersIcon,
        chartRoseIcon: chartRoseIcon,
        chartScatterIcon: chartScatterIcon,
        chartScatterSmoothLinesIcon: chartScatterSmoothLinesIcon,
        chartScatterSmoothLinesMarkersIcon: chartScatterSmoothLinesMarkersIcon,
        chartScatterStraightLinesIcon: chartScatterStraightLinesIcon,
        chartScatterStraightLinesMarkersIcon: chartScatterStraightLinesMarkersIcon,
        checkCircleIcon: checkCircleIcon,
        checkIcon: checkIcon,
        checkOutlineIcon: checkOutlineIcon,
        checkboxCheckedIcon: checkboxCheckedIcon,
        checkboxIcon: checkboxIcon,
        checkboxIndeterminateIcon: checkboxIndeterminateIcon,
        checkboxNullIcon: checkboxNullIcon,
        chevronDoubleDownIcon: chevronDoubleDownIcon,
        chevronDoubleLeftIcon: chevronDoubleLeftIcon,
        chevronDoubleRightIcon: chevronDoubleRightIcon,
        chevronDoubleUpIcon: chevronDoubleUpIcon,
        chevronDownIcon: chevronDownIcon,
        chevronLeftIcon: chevronLeftIcon,
        chevronRightIcon: chevronRightIcon,
        chevronUpIcon: chevronUpIcon,
        circleIcon: circleIcon,
        clearCssIcon: clearCssIcon,
        clipboardCodeIcon: clipboardCodeIcon,
        clipboardHtmlIcon: clipboardHtmlIcon,
        clipboardIcon: clipboardIcon,
        clipboardMarkdownIcon: clipboardMarkdownIcon,
        clipboardTextIcon: clipboardTextIcon,
        clipboardWordAltIcon: clipboardWordAltIcon,
        clipboardWordIcon: clipboardWordIcon,
        clockArrowRotateIcon: clockArrowRotateIcon,
        clockIcon: clockIcon,
        closedCaptionsIcon: closedCaptionsIcon,
        cloudIcon: cloudIcon,
        codeIcon: codeIcon,
        codeSnippetIcon: codeSnippetIcon,
        colResizeIcon: colResizeIcon,
        columnFreezeIcon: columnFreezeIcon,
        columnsIcon: columnsIcon,
        commentIcon: commentIcon,
        commentRemoveIcon: commentRemoveIcon,
        commentsRemoveIcon: commentsRemoveIcon,
        connectorIcon: connectorIcon,
        convertLowercaseIcon: convertLowercaseIcon,
        convertUppercaseIcon: convertUppercaseIcon,
        copyFormatIcon: copyFormatIcon,
        copyIcon: copyIcon,
        cropIcon: cropIcon,
        crosstabIcon: crosstabIcon,
        crosstabWizardIcon: crosstabWizardIcon,
        csIcon: csIcon,
        csprojIcon: csprojIcon,
        css3Icon: css3Icon,
        cssIcon: cssIcon,
        customFormatIcon: customFormatIcon,
        customIconIcon: customIconIcon,
        cutIcon: cutIcon,
        dataCsvIcon: dataCsvIcon,
        dataIcon: dataIcon,
        dataJsonIcon: dataJsonIcon,
        dataOdsIcon: dataOdsIcon,
        dataRestIcon: dataRestIcon,
        dataSdsIcon: dataSdsIcon,
        dataSqlIcon: dataSqlIcon,
        dataWebIcon: dataWebIcon,
        decimalDecreaseIcon: decimalDecreaseIcon,
        decimalIncreaseIcon: decimalIncreaseIcon,
        decreaseHorizontalSpacingIcon: decreaseHorizontalSpacingIcon,
        decreaseVerticalSpacingIcon: decreaseVerticalSpacingIcon,
        deliciousBoxIcon: deliciousBoxIcon,
        deliciousIcon: deliciousIcon,
        detailSectionIcon: detailSectionIcon,
        diggBoxIcon: diggBoxIcon,
        diggIcon: diggIcon,
        dimensionsIcon: dimensionsIcon,
        displayBlockIcon: displayBlockIcon,
        displayFlexIcon: displayFlexIcon,
        displayInlineBlockIcon: displayInlineBlockIcon,
        displayInlineFlexIcon: displayInlineFlexIcon,
        divIcon: divIcon,
        divideIcon: divideIcon,
        documentManagerIcon: documentManagerIcon,
        dollarIcon: dollarIcon,
        downloadIcon: downloadIcon,
        downloadLightIcon: downloadLightIcon,
        dragAndDropIcon: dragAndDropIcon,
        dribbbleBoxIcon: dribbbleBoxIcon,
        dribbbleIcon: dribbbleIcon,
        dropletIcon: dropletIcon,
        dropletSlashIcon: dropletSlashIcon,
        dropletSliderIcon: dropletSliderIcon,
        editToolsIcon: editToolsIcon,
        envelopBoxIcon: envelopBoxIcon,
        envelopIcon: envelopIcon,
        envelopLinkIcon: envelopLinkIcon,
        equalIcon: equalIcon,
        exclamationCircleIcon: exclamationCircleIcon,
        exeIcon: exeIcon,
        exportIcon: exportIcon,
        eyeIcon: eyeIcon,
        eyeSlashIcon: eyeSlashIcon,
        eyedropperIcon: eyedropperIcon,
        facebookBoxIcon: facebookBoxIcon,
        facebookIcon: facebookIcon,
        fileAddIcon: fileAddIcon,
        fileAscxIcon: fileAscxIcon,
        fileAudioIcon: fileAudioIcon,
        fileBacIcon: fileBacIcon,
        fileConfigIcon: fileConfigIcon,
        fileCsvIcon: fileCsvIcon,
        fileDataIcon: fileDataIcon,
        fileDiscImageIcon: fileDiscImageIcon,
        fileErrorIcon: fileErrorIcon,
        fileExcelIcon: fileExcelIcon,
        fileFlashIcon: fileFlashIcon,
        fileFooterIcon: fileFooterIcon,
        fileHeaderIcon: fileHeaderIcon,
        fileHorizontalIcon: fileHorizontalIcon,
        fileIcon: fileIcon,
        fileImageIcon: fileImageIcon,
        fileMdbIcon: fileMdbIcon,
        filePdfIcon: filePdfIcon,
        filePptIcon: filePptIcon,
        filePresentationIcon: filePresentationIcon,
        fileProgrammingIcon: fileProgrammingIcon,
        filePsdIcon: filePsdIcon,
        fileReportIcon: fileReportIcon,
        fileTxtIcon: fileTxtIcon,
        fileTypescriptIcon: fileTypescriptIcon,
        fileVideoIcon: fileVideoIcon,
        fileWordIcon: fileWordIcon,
        fileWrenchIcon: fileWrenchIcon,
        fileZipIcon: fileZipIcon,
        filesErrorIcon: filesErrorIcon,
        filmIcon: filmIcon,
        filterAddExpressionIcon: filterAddExpressionIcon,
        filterAddGroupIcon: filterAddGroupIcon,
        filterClearIcon: filterClearIcon,
        filterIcon: filterIcon,
        filterSmallIcon: filterSmallIcon,
        filterSortAscSmallIcon: filterSortAscSmallIcon,
        filterSortDescSmallIcon: filterSortDescSmallIcon,
        flashManagerIcon: flashManagerIcon,
        flipHorizontalIcon: flipHorizontalIcon,
        flipVerticalIcon: flipVerticalIcon,
        folderAddIcon: folderAddIcon,
        folderIcon: folderIcon,
        folderMoreIcon: folderMoreIcon,
        folderOpenIcon: folderOpenIcon,
        folderUpIcon: folderUpIcon,
        fontFamilyIcon: fontFamilyIcon,
        fontSizeIcon: fontSizeIcon,
        foregroundColorIcon: foregroundColorIcon,
        formElementIcon: formElementIcon,
        formIcon: formIcon,
        formatCodeBlockIcon: formatCodeBlockIcon,
        formulaFxIcon: formulaFxIcon,
        forwardIcon: forwardIcon,
        fullscreenExitIcon: fullscreenExitIcon,
        fullscreenIcon: fullscreenIcon,
        gapColumnIcon: gapColumnIcon,
        gapRowIcon: gapRowIcon,
        gearIcon: gearIcon,
        gearsIcon: gearsIcon,
        globeIcon: globeIcon,
        globeLinkIcon: globeLinkIcon,
        globeOutlineIcon: globeOutlineIcon,
        globeUnlinkIcon: globeUnlinkIcon,
        googleBoxIcon: googleBoxIcon,
        googleIcon: googleIcon,
        googlePlusBoxIcon: googlePlusBoxIcon,
        googlePlusIcon: googlePlusIcon,
        graphIcon: graphIcon,
        grayscaleIcon: grayscaleIcon,
        greaterOrEqualIcon: greaterOrEqualIcon,
        gridIcon: gridIcon,
        gridLayoutIcon: gridLayoutIcon,
        groupBoxIcon: groupBoxIcon,
        groupCollectionIcon: groupCollectionIcon,
        groupFooterSectionIcon: groupFooterSectionIcon,
        groupHeaderSectionIcon: groupHeaderSectionIcon,
        groupIcon: groupIcon,
        groupSectionIcon: groupSectionIcon,
        h1Icon: h1Icon,
        h2Icon: h2Icon,
        h3Icon: h3Icon,
        h4Icon: h4Icon,
        h5Icon: h5Icon,
        h6Icon: h6Icon,
        handIcon: handIcon,
        handleDragIcon: handleDragIcon,
        handleResizeAltIcon: handleResizeAltIcon,
        handleResizeIcon: handleResizeIcon,
        hdIcon: hdIcon,
        heartIcon: heartIcon,
        heartOutlineIcon: heartOutlineIcon,
        homeIcon: homeIcon,
        horizontalRuleIcon: horizontalRuleIcon,
        html5Icon: html5Icon,
        hyperlinkOpenIcon: hyperlinkOpenIcon,
        hyperlinkOpenSmIcon: hyperlinkOpenSmIcon,
        imageAbsolutePositionIcon: imageAbsolutePositionIcon,
        imageAddIcon: imageAddIcon,
        imageEditIcon: imageEditIcon,
        imageExportIcon: imageExportIcon,
        imageIcon: imageIcon,
        imageMapEditorIcon: imageMapEditorIcon,
        imageResizeIcon: imageResizeIcon,
        imagesIcon: imagesIcon,
        importIcon: importIcon,
        inboxIcon: inboxIcon,
        increaseHorizontalSpacingIcon: increaseHorizontalSpacingIcon,
        increaseVerticalSpacingIcon: increaseVerticalSpacingIcon,
        indentIcon: indentIcon,
        infoCircleIcon: infoCircleIcon,
        inheritedIcon: inheritedIcon,
        insertBottomIcon: insertBottomIcon,
        insertMiddleIcon: insertMiddleIcon,
        insertTopIcon: insertTopIcon,
        invertColorsIcon: invertColorsIcon,
        italicIcon: italicIcon,
        jsIcon: jsIcon,
        justifyContentAroundAltIcon: justifyContentAroundAltIcon,
        justifyContentAroundIcon: justifyContentAroundIcon,
        justifyContentBetweenAltIcon: justifyContentBetweenAltIcon,
        justifyContentBetweenIcon: justifyContentBetweenIcon,
        justifyContentCenterAltIcon: justifyContentCenterAltIcon,
        justifyContentCenterIcon: justifyContentCenterIcon,
        justifyContentEndAltIcon: justifyContentEndAltIcon,
        justifyContentEndIcon: justifyContentEndIcon,
        justifyContentStartAltIcon: justifyContentStartAltIcon,
        justifyContentStartIcon: justifyContentStartIcon,
        kpiStatusDenyIcon: kpiStatusDenyIcon,
        kpiStatusHoldIcon: kpiStatusHoldIcon,
        kpiStatusOpenIcon: kpiStatusOpenIcon,
        launchIcon: launchIcon,
        layout1By4Icon: layout1By4Icon,
        layout2By2Icon: layout2By2Icon,
        layoutIcon: layoutIcon,
        layoutSideBySideIcon: layoutSideBySideIcon,
        layoutStackedIcon: layoutStackedIcon,
        lessOrEqualIcon: lessOrEqualIcon,
        letterSpaceIcon: letterSpaceIcon,
        levelDownIcon: levelDownIcon,
        levelToTopIcon: levelToTopIcon,
        levelUpIcon: levelUpIcon,
        lineHeightIcon: lineHeightIcon,
        linkAddIcon: linkAddIcon,
        linkIcon: linkIcon,
        linkVerticalIcon: linkVerticalIcon,
        linkedinBoxIcon: linkedinBoxIcon,
        linkedinIcon: linkedinIcon,
        listLatinBigIcon: listLatinBigIcon,
        listLatinSmallIcon: listLatinSmallIcon,
        listOrderedIcon: listOrderedIcon,
        listRomanBigIcon: listRomanBigIcon,
        listRomanLowerIcon: listRomanLowerIcon,
        listRomanSmallIcon: listRomanSmallIcon,
        listRomanUpperIcon: listRomanUpperIcon,
        listUnorderedIcon: listUnorderedIcon,
        listUnorderedOutlineIcon: listUnorderedOutlineIcon,
        listUnorderedSquareIcon: listUnorderedSquareIcon,
        lockIcon: lockIcon,
        loginIcon: loginIcon,
        logoutIcon: logoutIcon,
        makeHorizontalSpacingEqualIcon: makeHorizontalSpacingEqualIcon,
        makeSameHeightIcon: makeSameHeightIcon,
        makeSameSizeIcon: makeSameSizeIcon,
        makeSameWidthIcon: makeSameWidthIcon,
        makeVerticalSpacingEqualIcon: makeVerticalSpacingEqualIcon,
        mapMarkerIcon: mapMarkerIcon,
        mapMarkerTargetIcon: mapMarkerTargetIcon,
        maxHeightIcon: maxHeightIcon,
        maxWidthIcon: maxWidthIcon,
        mediaManagerIcon: mediaManagerIcon,
        menuIcon: menuIcon,
        minHeightIcon: minHeightIcon,
        minWidthIcon: minWidthIcon,
        minusCircleIcon: minusCircleIcon,
        minusIcon: minusIcon,
        minusOutlineIcon: minusOutlineIcon,
        minusSmIcon: minusSmIcon,
        mirrorIcon: mirrorIcon,
        moreHorizontalIcon: moreHorizontalIcon,
        moreVerticalIcon: moreVerticalIcon,
        musicNotesIcon: musicNotesIcon,
        myspaceBoxIcon: myspaceBoxIcon,
        myspaceIcon: myspaceIcon,
        nonRecurrenceIcon: nonRecurrenceIcon,
        notEqualIcon: notEqualIcon,
        outdentIcon: outdentIcon,
        outlineOffsetIcon: outlineOffsetIcon,
        outlineWidthIcon: outlineWidthIcon,
        overlapIcon: overlapIcon,
        paddingBottomIcon: paddingBottomIcon,
        paddingIcon: paddingIcon,
        paddingLeftIcon: paddingLeftIcon,
        paddingRightIcon: paddingRightIcon,
        paddingTopIcon: paddingTopIcon,
        pageFooterSectionIcon: pageFooterSectionIcon,
        pageHeaderSectionIcon: pageHeaderSectionIcon,
        paletteIcon: paletteIcon,
        paneFreezeIcon: paneFreezeIcon,
        paperclipAltIcon: paperclipAltIcon,
        paperclipIcon: paperclipIcon,
        paragraphAddIcon: paragraphAddIcon,
        parameterBooleanIcon: parameterBooleanIcon,
        parameterDateTimeIcon: parameterDateTimeIcon,
        parameterFloatIcon: parameterFloatIcon,
        parameterIntegerIcon: parameterIntegerIcon,
        parameterStringIcon: parameterStringIcon,
        parametersByteArrayIcon: parametersByteArrayIcon,
        parametersIcon: parametersIcon,
        parametersUnknownIcon: parametersUnknownIcon,
        passwordIcon: passwordIcon,
        pauseIcon: pauseIcon,
        pauseSmIcon: pauseSmIcon,
        pencilIcon: pencilIcon,
        percentIcon: percentIcon,
        photosIcon: photosIcon,
        pinIcon: pinIcon,
        pinterestBoxIcon: pinterestBoxIcon,
        pinterestIcon: pinterestIcon,
        playIcon: playIcon,
        playSmIcon: playSmIcon,
        playlistIcon: playlistIcon,
        plusCircleIcon: plusCircleIcon,
        plusIcon: plusIcon,
        plusOutlineIcon: plusOutlineIcon,
        plusSmIcon: plusSmIcon,
        pointerIcon: pointerIcon,
        positionBottomIcon: positionBottomIcon,
        positionLeftIcon: positionLeftIcon,
        positionRightIcon: positionRightIcon,
        positionTopIcon: positionTopIcon,
        printIcon: printIcon,
        puzzlePieceIcon: puzzlePieceIcon,
        qrCodeIcon: qrCodeIcon,
        qrCodeOutlineIcon: qrCodeOutlineIcon,
        qrCodeScannerIcon: qrCodeScannerIcon,
        questionCircleIcon: questionCircleIcon,
        radiobuttonCheckedIcon: radiobuttonCheckedIcon,
        radiobuttonIcon: radiobuttonIcon,
        redditBoxIcon: redditBoxIcon,
        redditIcon: redditIcon,
        redoIcon: redoIcon,
        regularExpressionIcon: regularExpressionIcon,
        removeHorizontalSpacingIcon: removeHorizontalSpacingIcon,
        removeVerticalSpacingIcon: removeVerticalSpacingIcon,
        reorderIcon: reorderIcon,
        replaceAllIcon: replaceAllIcon,
        replaceSingleIcon: replaceSingleIcon,
        reportElementIcon: reportElementIcon,
        rewindIcon: rewindIcon,
        rightDoubleQuotesIcon: rightDoubleQuotesIcon,
        rotateIcon: rotateIcon,
        rotateLeftIcon: rotateLeftIcon,
        rotateRightIcon: rotateRightIcon,
        roundCornersIcon: roundCornersIcon,
        rowFreezeIcon: rowFreezeIcon,
        rowsIcon: rowsIcon,
        rssBoxIcon: rssBoxIcon,
        rssIcon: rssIcon,
        saveIcon: saveIcon,
        searchIcon: searchIcon,
        selectAllIcon: selectAllIcon,
        selectBoxIcon: selectBoxIcon,
        setColumnPositionIcon: setColumnPositionIcon,
        shapeLineIcon: shapeLineIcon,
        shapesIcon: shapesIcon,
        shareIcon: shareIcon,
        sharpenIcon: sharpenIcon,
        signatureIcon: signatureIcon,
        silverlightIcon: silverlightIcon,
        sizeToGridIcon: sizeToGridIcon,
        slidersIcon: slidersIcon,
        slnIcon: slnIcon,
        snapGridIcon: snapGridIcon,
        snapToGridlinesIcon: snapToGridlinesIcon,
        snapToSnaplinesIcon: snapToSnaplinesIcon,
        sortAscIcon: sortAscIcon,
        sortAscSmallIcon: sortAscSmallIcon,
        sortClearIcon: sortClearIcon,
        sortDescIcon: sortDescIcon,
        sortDescSmallIcon: sortDescSmallIcon,
        spellCheckerIcon: spellCheckerIcon,
        starIcon: starIcon,
        starOutlineIcon: starOutlineIcon,
        stickIcon: stickIcon,
        stopIcon: stopIcon,
        stopSmIcon: stopSmIcon,
        strikethroughIcon: strikethroughIcon,
        stripAllFormattingIcon: stripAllFormattingIcon,
        stripCssFormatIcon: stripCssFormatIcon,
        stripFontElementsIcon: stripFontElementsIcon,
        stripSpanElementsIcon: stripSpanElementsIcon,
        stripWordFormattingIcon: stripWordFormattingIcon,
        stumbleUponBoxIcon: stumbleUponBoxIcon,
        stumbleUponIcon: stumbleUponIcon,
        subreportIcon: subreportIcon,
        subscriptIcon: subscriptIcon,
        sumIcon: sumIcon,
        supscriptIcon: supscriptIcon,
        symbolIcon: symbolIcon,
        tableAddIcon: tableAddIcon,
        tableAlignBottomCenterIcon: tableAlignBottomCenterIcon,
        tableAlignBottomLeftIcon: tableAlignBottomLeftIcon,
        tableAlignBottomRightIcon: tableAlignBottomRightIcon,
        tableAlignMiddleCenterIcon: tableAlignMiddleCenterIcon,
        tableAlignMiddleLeftIcon: tableAlignMiddleLeftIcon,
        tableAlignMiddleRightIcon: tableAlignMiddleRightIcon,
        tableAlignRemoveIcon: tableAlignRemoveIcon,
        tableAlignTopCenterIcon: tableAlignTopCenterIcon,
        tableAlignTopLeftIcon: tableAlignTopLeftIcon,
        tableAlignTopRightIcon: tableAlignTopRightIcon,
        tableBodyIcon: tableBodyIcon,
        tableCellDeleteIcon: tableCellDeleteIcon,
        tableCellIcon: tableCellIcon,
        tableCellPropertiesIcon: tableCellPropertiesIcon,
        tableColumnDeleteIcon: tableColumnDeleteIcon,
        tableColumnGroupsIcon: tableColumnGroupsIcon,
        tableColumnInsertLeftIcon: tableColumnInsertLeftIcon,
        tableColumnInsertRightIcon: tableColumnInsertRightIcon,
        tableCornerIcon: tableCornerIcon,
        tableDeleteIcon: tableDeleteIcon,
        tableIcon: tableIcon,
        tablePositionCenterIcon: tablePositionCenterIcon,
        tablePositionEndIcon: tablePositionEndIcon,
        tablePositionStartIcon: tablePositionStartIcon,
        tablePropertiesIcon: tablePropertiesIcon,
        tableRowDeleteIcon: tableRowDeleteIcon,
        tableRowGroupsIcon: tableRowGroupsIcon,
        tableRowInsertAboveIcon: tableRowInsertAboveIcon,
        tableRowInsertBelowIcon: tableRowInsertBelowIcon,
        tableUnmergeIcon: tableUnmergeIcon,
        tableWizardIcon: tableWizardIcon,
        tellAFriendBoxIcon: tellAFriendBoxIcon,
        tellAFriendIcon: tellAFriendIcon,
        templateManagerIcon: templateManagerIcon,
        textWrapIcon: textWrapIcon,
        textareaIcon: textareaIcon,
        textboxHiddenIcon: textboxHiddenIcon,
        textboxIcon: textboxIcon,
        thumbnailsDownIcon: thumbnailsDownIcon,
        thumbnailsLeftIcon: thumbnailsLeftIcon,
        thumbnailsRightIcon: thumbnailsRightIcon,
        thumbnailsUpIcon: thumbnailsUpIcon,
        tocSectionIcon: tocSectionIcon,
        tocSectionLevelIcon: tocSectionLevelIcon,
        toggleFullScreenModeIcon: toggleFullScreenModeIcon,
        toolbarFloatIcon: toolbarFloatIcon,
        trackChangesAcceptAllIcon: trackChangesAcceptAllIcon,
        trackChangesAcceptIcon: trackChangesAcceptIcon,
        trackChangesEnableIcon: trackChangesEnableIcon,
        trackChangesIcon: trackChangesIcon,
        trackChangesRejectAllIcon: trackChangesRejectAllIcon,
        trackChangesRejectIcon: trackChangesRejectIcon,
        transparencyIcon: transparencyIcon,
        trashIcon: trashIcon,
        tumblrBoxIcon: tumblrBoxIcon,
        tumblrIcon: tumblrIcon,
        twitterBoxIcon: twitterBoxIcon,
        twitterIcon: twitterIcon,
        underlineIcon: underlineIcon,
        undoIcon: undoIcon,
        ungroupIcon: ungroupIcon,
        unlinkIcon: unlinkIcon,
        unlinkVerticalIcon: unlinkVerticalIcon,
        unlockIcon: unlockIcon,
        unpinIcon: unpinIcon,
        unstickIcon: unstickIcon,
        uploadIcon: uploadIcon,
        userIcon: userIcon,
        validationDataIcon: validationDataIcon,
        validationXhtmlIcon: validationXhtmlIcon,
        vbIcon: vbIcon,
        vbprojIcon: vbprojIcon,
        videoExternalIcon: videoExternalIcon,
        vimeoBoxIcon: vimeoBoxIcon,
        vimeoIcon: vimeoIcon,
        volumeDownIcon: volumeDownIcon,
        volumeMuteIcon: volumeMuteIcon,
        volumeUpIcon: volumeUpIcon,
        wholeWordIcon: wholeWordIcon,
        windowIcon: windowIcon,
        windowMinimizeIcon: windowMinimizeIcon,
        windowRestoreIcon: windowRestoreIcon,
        wrenchIcon: wrenchIcon,
        xCircleIcon: xCircleIcon,
        xIcon: xIcon,
        xOutlineIcon: xOutlineIcon,
        yammerBoxIcon: yammerBoxIcon,
        yammerIcon: yammerIcon,
        youtubeBoxIcon: youtubeBoxIcon,
        youtubeIcon: youtubeIcon,
        zoomActualSizeIcon: zoomActualSizeIcon,
        zoomBestFitIcon: zoomBestFitIcon,
        zoomInIcon: zoomInIcon,
        zoomOutIcon: zoomOutIcon
    });

    var __meta__ = {
        id: "icons",
        name: "Icons",
        category: "web",
        description: "The Icons set provides both FontIcon and SvgIcon components along with the SVG icons collection from @progress/kendo-svg-icons",
        depends: ["core", "html.icon"]
    };

    (function($, undefined$1) {
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
    var kendo$1 = kendo;

    return kendo$1;

}));
