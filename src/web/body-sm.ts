import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'body-sm';

@customElement(ELEMENT_NAME)
export class BodySm extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('size-14');
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
