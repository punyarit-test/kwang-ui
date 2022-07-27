import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ColorsAttr} from '../types/colors.type';
import {TySizesAttr} from '../types/tx-sizes.type';
import {WeightAttr} from '../types/weights.type';
import {ElementBase} from '../base/element-base';

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

abstract class Typography extends ElementBase {
  protected setFontStyle(fontSize: keyof TySizesAttr): void {
    const [attr1, attr2] = this.attributes;
    this.className = `${fontSize} ${attr1?.name ? 'tx-' + attr1?.name : ''}${
      attr2?.name ? ' tx-' + attr2?.name : ''
    }`;
  }

  createRenderRoot() {
    return this;
  }
}

@customElement(DISPLAY_MD_NAME)
export class DisplayMd extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('tx-124');
  }
}

@customElement(DISPLAY_SM_NAME)
export class DisplaySm extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('tx-96');
  }
}

@customElement(DISPLAY_XS_NAME)
export class DisplayXs extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('tx-72');
  }
}

@customElement(HEADER_XL_NAME)
export class HeaderXl extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('tx-60');
  }
}

@customElement(HEADER_LG_NAME)
export class HeaderLg extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('tx-48');
  }
}

@customElement(HEADER_MD_NAME)
export class HeaderMd extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('tx-36');
  }
}

@customElement(HEADER_SM_NAME)
export class HeaderSm extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('tx-32');
  }
}

@customElement(HEADER_XS_NAME)
export class HeaderXs extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('tx-24');
  }
}

@customElement(BODY_XL_NAME)
export class BodyXl extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('tx-20');
  }
}

@customElement(BODY_LG_NAME)
export class BodyLg extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('tx-18');
  }
}

@customElement(BODY_MD_NAME)
export class BodyMd extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('tx-16');
  }
}
@customElement(BODY_SM_NAME)
export class BodySm extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('tx-14');
  }
}

@customElement(BODY_XS_NAME)
export class BodyXs extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('tx-12');
  }
}

declare global {
  namespace CTypography {
    interface Ref extends CElementBase.Ref<any, any>, ColorsAttr, WeightAttr {
      p?: string;
    }
  }
  namespace JSX {
    interface IntrinsicElements {
      [DISPLAY_MD_NAME]: CTypography.Ref;
      [DISPLAY_SM_NAME]: CTypography.Ref;
      [DISPLAY_XS_NAME]: CTypography.Ref;
      [HEADER_XL_NAME]: CTypography.Ref;
      [HEADER_LG_NAME]: CTypography.Ref;
      [HEADER_MD_NAME]: CTypography.Ref;
      [HEADER_SM_NAME]: CTypography.Ref;
      [HEADER_XS_NAME]: CTypography.Ref;
      [BODY_XL_NAME]: CTypography.Ref;
      [BODY_LG_NAME]: CTypography.Ref;
      [BODY_MD_NAME]: CTypography.Ref;
      [BODY_SM_NAME]: CTypography.Ref;
      [BODY_XS_NAME]: CTypography.Ref;
    }
  }
}
