"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typography = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const ELEMENT_NAME = 'c-typography';
let Typography = class Typography extends lit_1.LitElement {
    render() {
        return (0, lit_1.html) `<slot></slot>${this.p}`;
    }
    setFontStyle(fontSize) {
        const [attr1, attr2] = this.attributes;
        this.className = `${fontSize} ${attr1?.name || ''}${attr2?.name ? ' ' + attr2?.name : ''}`;
    }
};
Typography.styles = (0, lit_1.css) `
    :host {
      display: inline-block;
    }
  `;
__decorate([
    (0, decorators_js_1.property)({ type: String }),
    __metadata("design:type", String)
], Typography.prototype, "p", void 0);
Typography = __decorate([
    (0, decorators_js_1.customElement)(ELEMENT_NAME)
], Typography);
exports.Typography = Typography;
