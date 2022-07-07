import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

enum element {
  name = 'display-xs',
}

@customElement(element.name)
export class DisplayXs extends Typography {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [element.name]: CTypography.Ref;
    }
  }
}
