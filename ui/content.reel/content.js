/**
 * @module ui/content.reel
 */
var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component;

/**
 * @class Content
 * @extends Component
 */
exports.Content = Montage.create(Component, {
    // the main component
    sandbox: {
        value: null
    },

    contentDeck: {
        value: null
    },

    _selectedItem: {value: null},
    selectedItem: {
        get: function() {
            return this._selectedItem;
        },
        set: function(value) {
            this._selectedItem = value;
            this.needsDraw = true;
        }
    },

    slotDidSwitchContent: {
        value: function(substitution, nodeShown, componentShown, nodeHidden, componentHidden) {
            console.log('substitution did switch content');

            if(componentHidden && typeof componentHidden.didBecomeInactiveInSlot === 'function') {
                componentHidden.didBecomeInactiveInSlot();
            }
            if(componentShown && typeof componentShown.didBecomeActiveInSlot === 'function') {
                componentShown.didBecomeActiveInSlot();
            }
        }
    }

});
