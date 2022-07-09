"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const colors_theme_1 = require("../theme/colors.theme");
const fonts_theme_1 = require("../theme/fonts.theme");
const ELEMENT_NAME = 'c-theme';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/
var ThemeIndex;
(function (ThemeIndex) {
    ThemeIndex[ThemeIndex["size"] = 0] = "size";
    ThemeIndex[ThemeIndex["color"] = 1] = "color";
})(ThemeIndex || (ThemeIndex = {}));
let Theme = class Theme extends lit_1.LitElement {
    render() {
        return (0, lit_1.html) ` <slot></slot> `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setThemeStyles();
    }
    onSetSize(size) {
        const currentColor = this.getClassName(ThemeIndex.color);
        this.setClassName(size, currentColor);
    }
    onSetTheme(color) {
        const currentSize = this.getClassName(ThemeIndex.size);
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
        this.className = `${sizeTheme || 'normal'} ${colorTheme || 'standard'}`;
    }
};
Theme.styles = [colors_theme_1.colors, fonts_theme_1.fonts];
Theme = __decorate([
    (0, decorators_js_1.customElement)(ELEMENT_NAME)
], Theme);
exports.Theme = Theme;
