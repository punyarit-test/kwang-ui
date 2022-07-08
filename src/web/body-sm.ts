import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'body-sm';

@customElement(ELEMENT_NAME)
export class BodySm extends Typography {
  firstUpdated() {
    this.setFontSize('var(--fs-14)');
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
