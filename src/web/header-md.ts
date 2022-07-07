import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

enum element {
  name = 'header-md',
}

@customElement(element.name)
export class HeaderMd extends Typography {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [element.name]: CTypography.Ref;
    }
  }
}
