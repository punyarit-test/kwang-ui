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
var Example_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const element_base_1 = require("../base/element-base");
const ELEMENT_NAME = 'c-example';
const EVENT_1 = 'exampleEvent1';
const EVENT_2 = 'exampleEvent2';
const EVENT_3 = 'exampleEvent3';
const EVENT_4 = 'exampleEvent4';
let Example = Example_1 = class Example extends element_base_1.ElementBase {
    constructor() {
        super(...arguments);
        this.p = '';
    }
    render() {
        return (0, lit_1.html) `
      <style>
        :host {
          --background-color: var(--${this.defaultStyles?.backgroundColor});
          --border-radius: var(--${this.defaultStyles?.borderRadius});
          --height: var(--${this.defaultStyles?.height});
          --width: var(--${this.defaultStyles?.width});
        }
      </style>
      <div class="test"></div>
      <div style="font-family:var(--regular)">
        <button
          .hidden="${!this.defaultConfig.button1}"
          @click="${() => this.callFunctionStore(this.ex[EVENT_1], 10)}"
        >
          event1
        </button>
        <button
          .hidden="${!this.defaultConfig.button2}"
          @click="${() => this.callFunctionStore(this.ex[EVENT_2], 20)}"
        >
          event2
        </button>
        <button
          .hidden="${!this.defaultConfig.button3}"
          @click="${() => this.callFunctionStore(this.ex[EVENT_3], 30)}"
        >
          event3
        </button>
        <button
          .hidden="${!this.defaultConfig.button4}"
          @click="${() => this.callFunctionStore(this.ex[EVENT_4], 40)}"
        >
          event4
        </button>
      </div>
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.defaultStyles = Example_1.defaultStyles;
        this.defaultConfig = Example_1.defaultConfig;
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
    }
};
Example.defaultStyles = {
    backgroundColor: 'primary-100',
    borderRadius: 'round-12',
    height: 'size-10',
    width: 'size-124',
};
Example.defaultConfig = {
    button1: true,
    button2: true,
    button3: true,
    button4: true,
};
Example.styles = (0, lit_1.css) `
    .test {
      background-color: var(--background-color);
      border-radius: var(--border-radius);
      height: var(--height);
      width: var(--width);
    }
  `;
__decorate([
    (0, decorators_js_1.property)({ type: String }),
    __metadata("design:type", Object)
], Example.prototype, "p", void 0);
Example = Example_1 = __decorate([
    (0, decorators_js_1.customElement)(ELEMENT_NAME)
], Example);
exports.Example = Example;
