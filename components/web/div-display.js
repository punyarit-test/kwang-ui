"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = exports.Flex = exports.Block = void 0;
const decorators_js_1 = require("lit/decorators.js");
const div_base_1 = require("../base/div-base");
const BLOCK_NAME = 'c-block';
const FLEX_NAME = 'c-flex';
const GRID_NAME = 'c-grid';
class DivDisplay extends div_base_1.DivBase {
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
let Block = class Block extends DivDisplay {
};
Block = __decorate([
    (0, decorators_js_1.customElement)(BLOCK_NAME)
], Block);
exports.Block = Block;
let Flex = class Flex extends DivDisplay {
};
Flex = __decorate([
    (0, decorators_js_1.customElement)(FLEX_NAME)
], Flex);
exports.Flex = Flex;
let Grid = class Grid extends DivDisplay {
};
Grid = __decorate([
    (0, decorators_js_1.customElement)(GRID_NAME)
], Grid);
exports.Grid = Grid;
