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
exports.Icon = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
var element;
(function (element) {
    element["name"] = "c-icon";
})(element || (element = {}));
let Icon = class Icon extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.size = '16px';
        this.color = 'gray-500';
    }
    render() {
        return (0, lit_1.html) `
      <style>
        :host {
          --icon: ${this.icon};
          --size: ${this.size};
          --color: ${this.color};
        }
      </style>

      <span class="icon">&#xe800;</span>
    `;
    }
};
Icon.styles = (0, lit_1.css) `
    .icon {
      font-family: var(--icon);
      font-size: var(--size);
      color: var(--color);
    }
  `;
__decorate([
    (0, decorators_js_1.property)({ type: String }),
    __metadata("design:type", String)
], Icon.prototype, "icon", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: String }),
    __metadata("design:type", Object)
], Icon.prototype, "size", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: String }),
    __metadata("design:type", Object)
], Icon.prototype, "color", void 0);
Icon = __decorate([
    (0, decorators_js_1.customElement)(element.name)
], Icon);
exports.Icon = Icon;
//# sourceMappingURL=icon.js.map