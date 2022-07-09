import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'body-md';

@customElement(ELEMENT_NAME)
export class BodyMd extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('size-16');
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
