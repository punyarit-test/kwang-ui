import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'header-xs';

@customElement(ELEMENT_NAME)
export class HeaderXs extends Typography {
  firstUpdated() {
    this.setFontSize('var(--fs-24)');
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
