import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'header-sm';

@customElement(ELEMENT_NAME)
export class HeaderSm extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('ty-32');
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
