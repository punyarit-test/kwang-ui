import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'header-lg';

@customElement(ELEMENT_NAME)
export class HeaderLg extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('tx-48');
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
