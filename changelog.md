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

## Chart

**What's new**

  * Series aggregate function now receives group value (group date)

## DataSource

**What's fixed**

  * Incorrect number of change events are raised when data is substitude via the data method and the old array is modified

## Globalization

**What's new**

  * Strip literal symbols from the custom numeric format

## HierarchicalDataSource

**What's fixed**

  * JS error when removing root-level items to HierarchicalDataSource nested in a kendo.observable object

## MVVM

**What's fixed**

  * Avoid triggering multiple change events for nested observable objects.

## SPA

**What's new**

  * View's destroy method should destroy all children widgets.

## StockChart

**What's new**

  * Series aggregate function now receives group value (group date)

## Validator

**What's new**

  * Performance optimizations for IE8 when validating multiple input elements

# Web

**What's fixed**

  * zoomLevel is incorrectly detected in iframe in IE10.
  * Popup do not position correctly in IE10 when in iframe.

## Button

**What's fixed**

  * Disabled buttons have a hover effect in some themes

## Calendar

**What's fixed**

  * Setting min/max value does not re-render view when custom template is defined

## ColorPicker

**What's fixed**

  * Color pickers gain 1px height when expanded

## ComboBox

**What's new**

  * Add support for the HTML 5 form attribute

**What's fixed**

  * Widget does not add selected option to the selected item
  * Widget does not cascade when its value is 0
  * Widget triggers filtering on Shift key

## DataSource

**What's new**

  * User can provide custom comparer when performing sorting
  * String sorting ignores case

## DatePicker

**What's new**

  * Add support for the HTML 5 form attribute

## DateTimePicker

**What's new**

  * Add support for the HTML 5 form attribute

## DropDownList

**What's new**

  * Add support for the HTML 5 form attribute

**What's fixed**

  * Widget does not add selected option to the selected item
  * Widget does not cascade when its value is 0
  * The third cascaded DropDownList is enabled after selecting a value from the first DDL

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

## ListView

**What's fixed**

  * navigatable, selectable ListView throws an error when removing the items and adding a new one

## Menu

**What's fixed**

  * Link ending with sharp doesn't navigate.
  * Templated items always close on click
  * Menu doesn't open on second tap on the item in a touch-enabled browser

## MultiSelect

**What's new**

  * Load data on open when autoBind option is false and initial values are set
  * Add support for the HTML 5 form attribute

**What's fixed**

  * Widget sets new observable array instead of modifying the existing one

## NumericTextBox

**What's new**

  * Add support for the HTML 5 form attribute

**What's fixed**

  * Throws JavaScript expection on focus when group separator is empty string
  * Widget allows pasting negative values in the middle of text
  * Widget does not show correct decimal separator if current culture is different than en-US

## Splitter

**What's fixed**

  * Splitter pane expand/collapse stops working after calling trigger("resize")
  * Splitter does not ignore script tags used as pane siblings
  * Inherited splitters do not bind to parent splitter resize events

## ThemeBuilder

**What's fixed**

  * Creating new skin removes gradients

## TimePicker

**What's new**

  * Add support for the HTML 5 form attribute

## Tooltip

**What's fixed**

  * Tooltip callout is not positioned correctly in IE in some scenarios

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

## Upload

**What's fixed**

  * Firefox 20%2B can throw an error during asynchronous upload
  * Focus state not clearly indicated

## Window

**What's fixed**

  * The content configuration option cannot be decoratively bound
  * Calling open on a closing window during animation leaves it in an invalid state
  * Hitting escape during close animation triggers another close sequence
