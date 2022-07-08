import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'body-md';

@customElement(ELEMENT_NAME)
export class BodyMd extends Typography {
  firstUpdated() {
    this.setFontSize('var(--fs-16)');
    this.setFontStyle();
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
