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
exports.Theme = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const colors_theme_1 = require("../theme/colors.theme");
const sizes_theme_1 = require("../theme/sizes.theme");
const font_weights_theme_1 = require("../theme/font-weights.theme");
const theme_type_1 = require("../types/theme.type");
const base_element_1 = require("./base-element");
const ELEMENT_NAME = 'c-theme';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/
let Theme = class Theme extends base_element_1.BaseElement {
    constructor() {
        super(...arguments);
        this.render = () => (0, lit_1.html) ` <slot></slot> `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setThemeStyles();
    }
    onSetSize(size) {
        const currentColor = this.getClassName(theme_type_1.ThemeIndex.color);
        this.setClassName(size, currentColor);
    }
    onSetTheme(color) {
        const currentSize = this.getClassName(theme_type_1.ThemeIndex.size);
        this.setClassName(currentSize, color);
    }
    getClassName(index) {
        return this.className.split(' ')[index];
    }
    setThemeStyles() {
        const [sizeTheme, colorTheme] = this.attributes;
        this.setClassName(sizeTheme?.name, colorTheme?.name);
    }
    setClassName(sizeTheme, colorTheme) {
        this.className = `${sizeTheme || 'normal'} ${colorTheme || 'light'}`;
    }
};
Theme.styles = [colors_theme_1.colors, font_weights_theme_1.fontWeights, sizes_theme_1.sizes];
__decorate([
    (0, decorators_js_1.property)({ type: String }),
    __metadata("design:type", String)
], Theme.prototype, "sx", void 0);
Theme = __decorate([
    (0, decorators_js_1.customElement)(ELEMENT_NAME)
], Theme);
exports.Theme = Theme;
