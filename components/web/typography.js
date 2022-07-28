"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyXs = exports.BodySm = exports.BodyMd = exports.BodyLg = exports.BodyXl = exports.HeaderXs = exports.HeaderSm = exports.HeaderMd = exports.HeaderLg = exports.HeaderXl = exports.DisplayXs = exports.DisplaySm = exports.DisplayMd = void 0;
const decorators_js_1 = require("lit/decorators.js");
const div_base_1 = require("../base/div-base");
const DISPLAY_SM_NAME = 'display-sm';
const DISPLAY_MD_NAME = 'display-md';
const DISPLAY_XS_NAME = 'display-xs';
const HEADER_XS_NAME = 'header-xs';
const HEADER_XL_NAME = 'header-xl';
const HEADER_SM_NAME = 'header-sm';
const HEADER_MD_NAME = 'header-md';
const HEADER_LG_NAME = 'header-lg';
const BODY_XS_NAME = 'body-xs';
const BODY_XL_NAME = 'body-xl';
const BODY_SM_NAME = 'body-sm';
const BODY_MD_NAME = 'body-md';
const BODY_LG_NAME = 'body-lg';
class Typography extends div_base_1.DivBase {
    setFontStyle(fontSize) {
        this.className = `${fontSize} ${this.concatenatedClassName()}`;
    }
    createRenderRoot() {
        return this;
    }
}
let DisplayMd = class DisplayMd extends Typography {
    connectedCallback() {
        super.connectedCallback();
        this.setFontStyle('tx-124');
    }
};
DisplayMd = __decorate([
    (0, decorators_js_1.customElement)(DISPLAY_MD_NAME)
], DisplayMd);
exports.DisplayMd = DisplayMd;
let DisplaySm = class DisplaySm extends Typography {
    connectedCallback() {
        super.connectedCallback();
        this.setFontStyle('tx-96');
    }
};
DisplaySm = __decorate([
    (0, decorators_js_1.customElement)(DISPLAY_SM_NAME)
], DisplaySm);
exports.DisplaySm = DisplaySm;
let DisplayXs = class DisplayXs extends Typography {
    connectedCallback() {
        super.connectedCallback();
        this.setFontStyle('tx-72');
    }
};
DisplayXs = __decorate([
    (0, decorators_js_1.customElement)(DISPLAY_XS_NAME)
], DisplayXs);
exports.DisplayXs = DisplayXs;
let HeaderXl = class HeaderXl extends Typography {
    connectedCallback() {
        super.connectedCallback();
        this.setFontStyle('tx-60');
    }
};
HeaderXl = __decorate([
    (0, decorators_js_1.customElement)(HEADER_XL_NAME)
], HeaderXl);
exports.HeaderXl = HeaderXl;
let HeaderLg = class HeaderLg extends Typography {
    connectedCallback() {
        super.connectedCallback();
        this.setFontStyle('tx-48');
    }
};
HeaderLg = __decorate([
    (0, decorators_js_1.customElement)(HEADER_LG_NAME)
], HeaderLg);
exports.HeaderLg = HeaderLg;
let HeaderMd = class HeaderMd extends Typography {
    connectedCallback() {
        super.connectedCallback();
        this.setFontStyle('tx-36');
    }
};
HeaderMd = __decorate([
    (0, decorators_js_1.customElement)(HEADER_MD_NAME)
], HeaderMd);
exports.HeaderMd = HeaderMd;
let HeaderSm = class HeaderSm extends Typography {
    connectedCallback() {
        super.connectedCallback();
        this.setFontStyle('tx-32');
    }
};
HeaderSm = __decorate([
    (0, decorators_js_1.customElement)(HEADER_SM_NAME)
], HeaderSm);
exports.HeaderSm = HeaderSm;
let HeaderXs = class HeaderXs extends Typography {
    connectedCallback() {
        super.connectedCallback();
        this.setFontStyle('tx-24');
    }
};
HeaderXs = __decorate([
    (0, decorators_js_1.customElement)(HEADER_XS_NAME)
], HeaderXs);
exports.HeaderXs = HeaderXs;
let BodyXl = class BodyXl extends Typography {
    connectedCallback() {
        super.connectedCallback();
        this.setFontStyle('tx-20');
    }
};
BodyXl = __decorate([
    (0, decorators_js_1.customElement)(BODY_XL_NAME)
], BodyXl);
exports.BodyXl = BodyXl;
let BodyLg = class BodyLg extends Typography {
    connectedCallback() {
        super.connectedCallback();
        this.setFontStyle('tx-18');
    }
};
BodyLg = __decorate([
    (0, decorators_js_1.customElement)(BODY_LG_NAME)
], BodyLg);
exports.BodyLg = BodyLg;
let BodyMd = class BodyMd extends Typography {
    connectedCallback() {
        super.connectedCallback();
        this.setFontStyle('tx-16');
    }
};
BodyMd = __decorate([
    (0, decorators_js_1.customElement)(BODY_MD_NAME)
], BodyMd);
exports.BodyMd = BodyMd;
let BodySm = class BodySm extends Typography {
    connectedCallback() {
        super.connectedCallback();
        this.setFontStyle('tx-14');
    }
};
BodySm = __decorate([
    (0, decorators_js_1.customElement)(BODY_SM_NAME)
], BodySm);
exports.BodySm = BodySm;
let BodyXs = class BodyXs extends Typography {
    connectedCallback() {
        super.connectedCallback();
        this.setFontStyle('tx-12');
    }
};
BodyXs = __decorate([
    (0, decorators_js_1.customElement)(BODY_XS_NAME)
], BodyXs);
exports.BodyXs = BodyXs;
