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
exports.ElementBase = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
class ElementBase extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.defaultStyles = {};
        this.defaultConfig = {};
        // updated(changedProperties: Map<PropertyKey, unknown>) {
        // สิ่งนี้คือสิ่งที่ต้องการ super.update(e) จะทำให้เมื่อมีการ update state มันจะไม่เกิด infinity loop
        // super.update(changedProperties);
        // }
    }
    updateAttributes(styles, updatedAttributes) {
        for (const key in styles) {
            updatedAttributes[key] = styles[key];
        }
        return { ...updatedAttributes };
    }
    willUpdate(changedProperties) {
        if (changedProperties.has('sx')) {
            this.defaultStyles = this.updateAttributes(this.sx, this.defaultStyles);
        }
        if (changedProperties.has('cfx')) {
            this.defaultConfig = this.updateAttributes(this.cfx, this.defaultConfig);
        }
        super.willUpdate(changedProperties);
    }
}
__decorate([
    (0, decorators_js_1.property)({ type: Object }),
    __metadata("design:type", Object)
], ElementBase.prototype, "sx", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Object }),
    __metadata("design:type", Object)
], ElementBase.prototype, "cfx", void 0);
__decorate([
    (0, decorators_js_1.state)(),
    __metadata("design:type", Object)
], ElementBase.prototype, "defaultStyles", void 0);
__decorate([
    (0, decorators_js_1.state)(),
    __metadata("design:type", Object)
], ElementBase.prototype, "defaultConfig", void 0);
exports.ElementBase = ElementBase;
