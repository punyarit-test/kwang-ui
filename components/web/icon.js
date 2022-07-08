"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon2 = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const ELEMENT_NAME = 'c-icon';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/
let Icon2 = class Icon2 extends lit_1.LitElement {
    render() {
        return (0, lit_1.html) ` <span class="icon">&#xe800;</span> `;
    }
    firstUpdated() {
        this.setIconAttr();
    }
    setIconAttr() {
        const [icon, color, size] = this.attributes;
        console.log('icon |icon|', icon);
        console.log('icon |color|', color);
        console.log('icon |size|', size);
        this.style.setProperty(`--icon`, icon?.name || 'cortex');
        this.style.setProperty(`--color`, color?.name || 'gray-500');
        this.style.setProperty(`--size`, size?.name || 'regular');
    }
};
Icon2.styles = (0, lit_1.css) `
    .icon {
      font-family: var(--icon);
      font-size: var(--size);
      color: var(--color);
    }
  `;
Icon2 = __decorate([
    (0, decorators_js_1.customElement)(ELEMENT_NAME)
], Icon2);
exports.Icon2 = Icon2;
