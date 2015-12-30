/**
 * @module ui/sidebar.reel
 */
var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component;

/**
 * @class Sidebar
 * @extends Component
 */
exports.Sidebar = Component.specialize(/** @lends Sidebar# */ {
    constructor: {
        value: function Sidebar() {
            this.super();
        }
    }
});
