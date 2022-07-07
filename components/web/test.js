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
exports.Test = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const helpers_1 = require("../utils/helpers");
const ELEMENT_NAME = 'c-test';
const TEST_EVENT = 'test-event';
const TEST_EVENT2 = 'test-event-2';
const TEST_EVENT3 = 'test-event-3';
let Test = class Test extends lit_1.LitElement {
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

      <div @click="${this.testEvent}" style="color:white">test</div>
      <span class="icon">&#xe800;</span>
    `;
    }
    firstUpdated() { }
    testEvent() {
        (0, helpers_1.customEvent)(this, TEST_EVENT, { test: 'test' });
        // this.dispatchEvent(
        //   new CustomEvent('test-event', {
        //     detail: {
        //       test: 'test',
        //     },
        //     bubbles: true,
        //   })
        // );
        // customEvent(this, TEST_EVENT2, {test2: 'test2'});
        // customEvent(this, TEST_EVENT3, {test3: 'test3'});
    }
};
Test.styles = (0, lit_1.css) `
    .icon {
      font-family: var(--icon);
      font-size: var(--size);
      color: var(--color);
    }
  `;
__decorate([
    (0, decorators_js_1.property)({ type: String }),
    __metadata("design:type", String)
], Test.prototype, "icon", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: String }),
    __metadata("design:type", Object)
], Test.prototype, "size", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: String }),
    __metadata("design:type", Object)
], Test.prototype, "color", void 0);
Test = __decorate([
    (0, decorators_js_1.customElement)(ELEMENT_NAME)
], Test);
exports.Test = Test;
//# sourceMappingURL=test.js.map