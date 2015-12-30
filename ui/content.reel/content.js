/**
 * @module ui/content.reel
 */
var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component;

/**
 * @class Content
 * @extends Component
 */
exports.Content = Component.specialize(/** @lends Content# */ {
    constructor: {
        value: function Content() {
            this.super();
        }
    }
});
