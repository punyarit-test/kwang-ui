import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'header-xl';

@customElement(ELEMENT_NAME)
export class HeaderXl extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('size-60');
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
