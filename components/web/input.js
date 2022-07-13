"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const base_element_1 = require("./base-element");
const ELEMENT_NAME = 'c-input';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/
let Input = class Input extends base_element_1.BaseElement {
    render() {
        return (0, lit_1.html) ` <div>c-input component was created!!</div> `;
    }
};
Input.styles = (0, lit_1.css) ``;
Input = __decorate([
    (0, decorators_js_1.customElement)(ELEMENT_NAME)
], Input);
exports.Input = Input;
