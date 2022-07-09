import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'display-sm';

@customElement(ELEMENT_NAME)
export class DisplaySm extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('size-96');
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
