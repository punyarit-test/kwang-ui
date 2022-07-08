import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'display-sm';

@customElement(ELEMENT_NAME)
export class DisplaySm extends Typography {
  firstUpdated() {
    this.setFontSize('var(--fs-96)');
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
