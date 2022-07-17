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
exports.Example = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const base_element_1 = require("./base-element");
const ELEMENT_NAME = 'c-example';
const EVENT_ONE = 'event-1';
let Example = class Example extends base_element_1.BaseElement {
    constructor() {
        super(...arguments);
        this.p = '';
    }
    render() {
        return (0, lit_1.html) `
      <div style="font-family:var(--regular)">
        <button @click="${this.onEvent1}">event1</button>
        <button @click="${this.onEvent2}">event2</button>
        <button @click="${this.onEvent3}">event3</button>
        <button @click="${this.onEvent4}">event4</button>
      </div>
    `;
    }
    connectedCallback() {
        super.connectedCallback();
    }
    updated() {
        console.log('example |this.test123123|', this.test);
        console.log('example |this.sx|', this.sx);
        console.log('example |this.sx|', this.cfx);
    }
    onEvent1() {
        window['$cortex']['onEvent1'](10);
    }
    onEvent2() {
        window['$cortex']['onEvent2'](20);
    }
    onEvent3() {
        window['$cortex']['onEvent3'](30);
    }
    onEvent4() {
        window['$cortex']['onEvent4'](40);
    }
};
__decorate([
    (0, decorators_js_1.property)({ type: String }),
    __metadata("design:type", Object)
], Example.prototype, "p", void 0);
Example = __decorate([
    (0, decorators_js_1.customElement)(ELEMENT_NAME)
], Example);
exports.Example = Example;
