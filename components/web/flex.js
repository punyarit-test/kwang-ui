"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flex = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const div_display_1 = require("./div-display");
const ELEMENT_NAME = 'c-flex';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/
let Flex = class Flex extends div_display_1.DivDisplay {
    render() {
        return (0, lit_1.html) ` <div>c-flex component was created!!</div> `;
    }
};
Flex.styles = (0, lit_1.css) ``;
Flex = __decorate([
    (0, decorators_js_1.customElement)(ELEMENT_NAME)
], Flex);
exports.Flex = Flex;
