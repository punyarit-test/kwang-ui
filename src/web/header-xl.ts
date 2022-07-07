import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

enum element {
  name = 'header-xl',
}

@customElement(element.name)
export class HeaderXl extends Typography {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [element.name]: CTypography.Ref;
    }
  }
}
