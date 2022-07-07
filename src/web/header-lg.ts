import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

enum element {
  name = 'header-lg',
}

@customElement(element.name)
export class HeaderLg extends Typography {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [element.name]: CTypography.Ref;
    }
  }
}
