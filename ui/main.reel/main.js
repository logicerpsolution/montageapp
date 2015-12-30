/**
 * @module ui/main.reel
 */
var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    }
});
