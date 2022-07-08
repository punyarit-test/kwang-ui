import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'display-xs';

@customElement(ELEMENT_NAME)
export class DisplayXs extends Typography {
  firstUpdated() {
    this.setFontSize('var(--fs-72)');
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
