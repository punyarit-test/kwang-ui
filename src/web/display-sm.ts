import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

enum element {
  name = 'display-sm',
}

@customElement(element.name)
export class DisplaySm extends Typography {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [element.name]: CTypography.Ref;
    }
  }
}
