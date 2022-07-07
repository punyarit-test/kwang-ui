import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

enum element {
  name = 'header-xs',
}

@customElement(element.name)
export class HeaderXs extends Typography {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [element.name]: CTypography.Ref;
    }
  }
}
