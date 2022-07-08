import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'header-sm';

@customElement(ELEMENT_NAME)
export class HeaderSm extends Typography {
  firstUpdated() {
    this.setFontSize('var(--fs-32)');
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
