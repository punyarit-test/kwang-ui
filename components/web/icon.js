"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const base_element_1 = require("./base-element");
const ELEMENT_NAME = 'c-icon';
let Icon = class Icon extends base_element_1.BaseElement {
    render() {
        return (0, lit_1.html) ` <span class="icon">&#xe800;</span> `;
    }
    firstUpdated() {
        this.setIconAttr();
    }
    setIconAttr() {
        const [icon, attr1, attr2] = this.attributes;
        this.style.setProperty(`--icon`, icon?.name || '');
        this.className = `${attr1?.name ? 'ty-' + attr1?.name : ''}${attr2?.name ? ' ty-' + attr2?.name : ''}`;
    }
};
Icon.styles = (0, lit_1.css) `
    :host {
      display: inline-flex;
    }
    .icon {
      font-family: var(--icon);
    }
  `;
Icon = __decorate([
    (0, decorators_js_1.customElement)(ELEMENT_NAME)
], Icon);
exports.Icon = Icon;
