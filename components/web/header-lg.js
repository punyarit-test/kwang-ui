"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderLg = void 0;
const decorators_js_1 = require("lit/decorators.js");
const typography_1 = require("./typography");
const ELEMENT_NAME = 'header-lg';
let HeaderLg = class HeaderLg extends typography_1.Typography {
    connectedCallback() {
        super.connectedCallback();
        this.setFontStyle('tx-48');
    }
};
HeaderLg = __decorate([
    (0, decorators_js_1.customElement)(ELEMENT_NAME)
], HeaderLg);
exports.HeaderLg = HeaderLg;
