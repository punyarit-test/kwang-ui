import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'header-md';

@customElement(ELEMENT_NAME)
export class HeaderMd extends Typography {
  firstUpdated() {
    this.setFontSize('var(--fs-36)');
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
