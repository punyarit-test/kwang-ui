"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivDisplay = void 0;
const div_element_1 = require("./div-element");
class DivDisplay extends div_element_1.DivElement {
    connectedCallback() {
        super.connectedCallback();
        this.setClassName();
    }
    setClassName() {
        this.className = this.getClassName();
    }
    getClassName() {
        let className = '';
        for (const attr of this.attributes) {
            className = className + 'dv-' + attr.name + ' ';
        }
        return className;
    }
    createRenderRoot() {
        return this;
    }
}
exports.DivDisplay = DivDisplay;
