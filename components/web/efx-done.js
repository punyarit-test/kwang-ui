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
exports.EfxDone = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
var element;
(function (element) {
    element["name"] = "efx-done";
})(element || (element = {}));
let EfxDone = class EfxDone extends lit_1.LitElement {
    render() {
        return this.disabled
            ? (0, lit_1.html) `<slot></slot> `
            : (0, lit_1.html) ` <div class="bubbly-efx"><slot></slot></div> `;
    }
    firstUpdated() {
        if (!this.disabled) {
            this.initEfx();
        }
    }
    initEfx() {
        const bubblyButtons = this.shadowRoot?.querySelector('.bubbly-efx');
        bubblyButtons?.addEventListener('mousedown', () => this.animateEfx(bubblyButtons), false);
    }
    animateEfx(e) {
        //reset animation
        e.style.pointerEvents = 'none';
        e.classList.remove('animate');
        e.classList.add('animate');
        setTimeout(function () {
            e.classList.remove('animate');
            e.style.pointerEvents = 'auto';
        }, 700);
    }
};
EfxDone.styles = (0, lit_1.css) `
    .bubbly-efx {
      font-family: 'Helvetica', 'Arial', sans-serif;
      display: inline-block;
      border-radius: 4px;
      position: relative;
      transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
    }
    .bubbly-efx:focus {
      outline: 0;
    }
    .bubbly-efx:before,
    .bubbly-efx:after {
      position: absolute;
      content: '';
      display: block;
      width: 140%;
      height: 100%;
      left: -20%;
      z-index: -1000;
      transition: all ease-in-out 0.5s;
      background-repeat: no-repeat;
    }
    .bubbly-efx:before {
      display: none;
      top: -75%;
      background-image: radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, transparent 20%, #ff0081 20%, transparent 30%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%);
      background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
        15% 15%, 10% 10%, 18% 18%;
    }
    .bubbly-efx:after {
      display: none;
      bottom: -75%;
      background-image: radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%);
      background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%,
        20% 20%;
    }
    .bubbly-efx.animate:before {
      display: block;
      animation: topBubbles ease-in-out 0.75s forwards;
    }
    .bubbly-efx.animate:after {
      display: block;
      animation: bottomBubbles ease-in-out 0.75s forwards;
    }

    @keyframes topBubbles {
      0% {
        background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
          40% 90%, 55% 90%, 70% 90%;
      }
      50% {
        background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
          50% 50%, 65% 20%, 90% 30%;
      }
      100% {
        background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
          50% 40%, 65% 10%, 90% 20%;
        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
      }
    }
    @keyframes bottomBubbles {
      0% {
        background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
          70% -10%, 70% 0%;
      }
      50% {
        background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%,
          95% 60%, 105% 0%;
      }
      100% {
        background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%,
          95% 70%, 110% 10%;
        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
      }
    }
  `;
__decorate([
    (0, decorators_js_1.property)({
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], EfxDone.prototype, "disabled", void 0);
__decorate([
    (0, decorators_js_1.property)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EfxDone.prototype, "render", null);
EfxDone = __decorate([
    (0, decorators_js_1.customElement)(element.name)
], EfxDone);
exports.EfxDone = EfxDone;
//# sourceMappingURL=efx-done.js.map