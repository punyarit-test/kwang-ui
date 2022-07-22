import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'body-xs';

@customElement(ELEMENT_NAME)
export class BodyXs extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('tx-12');
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
