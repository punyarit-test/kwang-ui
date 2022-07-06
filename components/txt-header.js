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
exports.TxtHeader = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
var Element;
(function (Element) {
    Element["name"] = "txt-header";
})(Element || (Element = {}));
let TxtHeader = class TxtHeader extends lit_1.LitElement {
    render() {
        return (0, lit_1.html) `
      <span>
        <slot></slot>
      </span>
    `;
    }
};
TxtHeader.styles = (0, lit_1.css) ``;
__decorate([
    (0, decorators_js_1.property)({ type: Boolean }),
    __metadata("design:type", Boolean)
], TxtHeader.prototype, "xl", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean }),
    __metadata("design:type", Boolean)
], TxtHeader.prototype, "lg", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean }),
    __metadata("design:type", Boolean)
], TxtHeader.prototype, "md", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean }),
    __metadata("design:type", Boolean)
], TxtHeader.prototype, "sm", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean }),
    __metadata("design:type", Boolean)
], TxtHeader.prototype, "xs", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean }),
    __metadata("design:type", Boolean)
], TxtHeader.prototype, "light", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean }),
    __metadata("design:type", Boolean)
], TxtHeader.prototype, "thin", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean }),
    __metadata("design:type", Boolean)
], TxtHeader.prototype, "regular", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean }),
    __metadata("design:type", Boolean)
], TxtHeader.prototype, "medium", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean }),
    __metadata("design:type", Boolean)
], TxtHeader.prototype, "semibold", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean }),
    __metadata("design:type", Boolean)
], TxtHeader.prototype, "bold", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: String }),
    __metadata("design:type", String)
], TxtHeader.prototype, "color", void 0);
TxtHeader = __decorate([
    (0, decorators_js_1.customElement)(Element.name)
], TxtHeader);
exports.TxtHeader = TxtHeader;
//# sourceMappingURL=txt-header.js.map