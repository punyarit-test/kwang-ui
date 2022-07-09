import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'display-md';

@customElement(ELEMENT_NAME)
export class DisplayMd extends Typography {
  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle('size-124');
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
