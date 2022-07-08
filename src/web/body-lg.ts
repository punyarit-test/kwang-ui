import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'body-lg';

@customElement(ELEMENT_NAME)
export class BodyLg extends Typography {
  firstUpdated() {
    this.setFontSize('var(--fs-18)');
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
