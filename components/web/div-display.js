"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivDisplay = void 0;
const decorators_js_1 = require("lit/decorators.js");
const div_element_1 = require("./div-element");
const ELEMENT_NAME = 'div-display';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/
let DivDisplay = class DivDisplay extends div_element_1.DivElement {
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
};
DivDisplay = __decorate([
    (0, decorators_js_1.customElement)(ELEMENT_NAME)
], DivDisplay);
exports.DivDisplay = DivDisplay;
