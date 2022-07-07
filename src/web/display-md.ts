import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

enum element {
  name = 'display-md',
}

@customElement(element.name)
export class DisplayMd extends Typography {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [element.name]: CTypography.Ref;
    }
  }
}
