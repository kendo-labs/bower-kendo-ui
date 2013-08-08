# Changelog for Kendo UI v2013.2.716

# Release notes for Kendo UI v2013.2.716

# Framework

**What's new**

  * Init method added to classes that didn't inherit one in the TypeScript definitions
  * TypeScript 0.9 compatibility
  * Android: Styling broken after theme switch
  * Chart's pane doesn't apply background and border.

**What's fixed**

  * An exception is thrown when kendo scripts are loaded in IE modal dialog.
  * Opacity not working with the kendo.fx fade effect
  * {wrap: false} not working for kendo.View

![Kendo UI Chart Icon][1]

## Chart

**What's new**

  * Series aggregate function now receives group value (group date)

![Kendo UI DataSource Icon][2]

## DataSource

**What's fixed**

  * Incorrect number of change events are raised when data is substitude via the data method and the old array is modified

![Kendo UI Globalization Icon][3]

## Globalization

**What's new**

  * Strip literal symbols from the custom numeric format

![Kendo UI HierarchicalDataSource Icon][4]

## HierarchicalDataSource

**What's fixed**

  * JS error when removing root-level items to HierarchicalDataSource nested in a kendo.observable object

![Kendo UI MVVM Icon][5]

## MVVM

**What's fixed**

  * Avoid triggering multiple change events for nested observable objects.

![Kendo UI SPA Icon][6]

## SPA

**What's new**

  * View's destroy method should destroy all children widgets.

![Kendo UI StockChart Icon][7]

## StockChart

**What's new**

  * Series aggregate function now receives group value (group date)

![Kendo UI Validator Icon][8]

## Validator

**What's new**

  * Performance optimizations for IE8 when validating multiple input elements

# Web

**What's fixed**

  * zoomLevel is incorrectly detected in iframe in IE10.
  * Popup do not position correctly in IE10 when in iframe.

![Kendo UI Button Icon][9]

## Button

**What's fixed**

  * Disabled buttons have a hover effect in some themes

![Kendo UI Calendar Icon][10]

## Calendar

**What's fixed**

  * Setting min/max value does not re-render view when custom template is defined

![Kendo UI ColorPicker Icon][11]

## ColorPicker

**What's fixed**

  * Color pickers gain 1px height when expanded

![Kendo UI ComboBox Icon][12]

## ComboBox

**What's new**

  * Add support for the HTML 5 form attribute

**What's fixed**

  * Widget does not add selected option to the selected item
  * Widget does not cascade when its value is 0
  * Widget triggers filtering on Shift key

![Kendo UI DataSource Icon][2]

## DataSource

**What's new**

  * User can provide custom comparer when performing sorting
  * String sorting ignores case

![Kendo UI DatePicker Icon][13]

## DatePicker

**What's new**

  * Add support for the HTML 5 form attribute

![Kendo UI DateTimePicker Icon][13]

## DateTimePicker

**What's new**

  * Add support for the HTML 5 form attribute

![Kendo UI DropDownList Icon][14]

## DropDownList

**What's new**

  * Add support for the HTML 5 form attribute

**What's fixed**

  * Widget does not add selected option to the selected item
  * Widget does not cascade when its value is 0
  * The third cascaded DropDownList is enabled after selecting a value from the first DDL

![Kendo UI Editor Icon][15]

## Editor

**What's new**

  * Add support for emails in the hyperlink dialog
  * Improved layout and styling of ImageBrowser dialog
  * Allow customization of color picker tools' palettes
  * Toolbar button grouping
  * Context-aware items in styles tool
  * Convert Unicode characters to entities
  * Floating toolbar
  * Initialization from div[contentEditable]
  * Paste from Word improvements
  * Table editing tools

**What's fixed**

  * Editor ImageBrowser MVC wrapper does not have a FileTypes property
  * InsertHTML command does not persist selection in old IEs
  * JS error when inserting paragraph before image in IE8
  * destroy method is slow in a large DOM
  * Selected font-family is not persisted when going to new paragraphs
  * Editor is not working if nested in Window that is moved in the DOM
  * The position cannot be set after an image if there is no text in older versions of IE

![Kendo UI Grid Icon][16]

## Grid

**What's new**

  * User can provide custom comparer when performing sorting
  * String sorting ignores case

**What's fixed**

  * Grid Grouping drag n drop does not work correctly in RTL mode
  * Cannot change the page when editing cell in IE9
  * AntiXssEncoder in the web.config may cause parse errors in the Kendo UI MVC Grid client column templates
  * Enter key should be pressed twice in batch edit mode in navigatable Grid, when consecutive rows are added
  * Changed cell's red triangle indicator is not positioned properly when the cell is empty
  * Filter menu dropdown lists icons are broken in IE7
  * MultiSelect blurs on mousedown when keyboard navigation of the grid is enabled
  * When define className option for the destroy command the default class is not included
  * Hovered sort arrow disappears in Metro theme

![Kendo UI ListView Icon][17]

## ListView

**What's fixed**

  * navigatable, selectable ListView throws an error when removing the items and adding a new one

![Kendo UI Menu Icon][18]

## Menu

**What's fixed**

  * Link ending with sharp doesn't navigate.
  * Templated items always close on click
  * Menu doesn't open on second tap on the item in a touch-enabled browser

![Kendo UI MultiSelect Icon][19]

## MultiSelect

**What's new**

  * Load data on open when autoBind option is false and initial values are set
  * Add support for the HTML 5 form attribute

**What's fixed**

  * Widget sets new observable array instead of modifying the existing one

![Kendo UI NumericTextBox Icon][20]

## NumericTextBox

**What's new**

  * Add support for the HTML 5 form attribute

**What's fixed**

  * Throws JavaScript expection on focus when group separator is empty string
  * Widget allows pasting negative values in the middle of text
  * Widget does not show correct decimal separator if current culture is different than en-US

![Kendo UI Splitter Icon][21]

## Splitter

**What's fixed**

  * Splitter pane expand/collapse stops working after calling trigger("resize")
  * Splitter does not ignore script tags used as pane siblings
  * Inherited splitters do not bind to parent splitter resize events

![Kendo UI ThemeBuilder Icon][22]

## ThemeBuilder

**What's fixed**

  * Creating new skin removes gradients

![Kendo UI TimePicker Icon][23]

## TimePicker

**What's new**

  * Add support for the HTML 5 form attribute

![Kendo UI Tooltip Icon][24]

## Tooltip

**What's fixed**

  * Tooltip callout is not positioned correctly in IE in some scenarios

![Kendo UI TreeView Icon][25]

## TreeView

**What's new**

  * Allow manual update of indeterminate checkboxes through the updateIndeterminate method
  * Improve performance of template rendering

**What's fixed**

  * Keyboard support does not go past leaf nodes with set expanded flag
  * JS error when adding root-level items to HierarchicalDataSource nested in a kendo.observable object
  * CheckChildren: true triggers JS error when checking node without child checkboxes in sparse checkbox tree
  * Server URLs are not processed when serializing items as datasource
  * Initialization from arbitrary HTML elements yields a static tree

![Kendo UI Upload Icon][26]

## Upload

**What's fixed**

  * Firefox 20%2B can throw an error during asynchronous upload
  * Focus state not clearly indicated

![Kendo UI Window Icon][27]

## Window

**What's fixed**

  * The content configuration option cannot be decoratively bound
  * Calling open on a closing window during animation leaves it in an invalid state
  * Hitting escape during close animation triggers another close sequence

   [1]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/Chart_kendoui.sflb
   [2]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/DataSource_kendoui.sflb
   [3]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/Globalization_kendoui.sflb
   [4]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/HierarchicalDataSource_kendoui.sflb
   [5]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/MVVM_kendoui.sflb
   [6]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/SPA_kendoui.sflb
   [7]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/ChartStock_kendoui.sflb
   [8]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/Validator_kendoui.sflb
   [9]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/Button_kendoui.sflb
   [10]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/Calendar_kendoui.sflb
   [11]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/ColorPicker_kendoui.sflb
   [12]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/ComboBox_kendoui.sflb
   [13]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/DatePicker_kendoui.sflb
   [14]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/DropDown_kendoui.sflb
   [15]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/Editor_kendoui.sflb
   [16]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/Grid_kendoui.sflb
   [17]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/ListView_kendoui.sflb
   [18]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/Menu_kendoui.sflb
   [19]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/MultiSelect_kendoui.sflb
   [20]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/NumericTextBox_kendoui.sflb
   [21]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/Splitter_kendoui.sflb
   [22]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/ThemeBuilder_kendoui.sflb
   [23]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/TimePicker_kendoui.sflb
   [24]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/Tooltip_kendoui.sflb
   [25]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/TreeView_kendoui.sflb
   [26]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/Upload_kendoui.sflb
   [27]: https://www.kendoui.com/libraries/Kendo_UI_Icons_32x32/Window_kendoui.sflb
  
