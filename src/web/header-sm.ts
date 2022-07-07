import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

enum element {
  name = 'header-sm',
}

@customElement(element.name)
export class HeaderSm extends Typography {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [element.name]: CTypography;
    }
  }
}
