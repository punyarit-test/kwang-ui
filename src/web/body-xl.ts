import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

enum element {
  name = 'body-xl',
}

@customElement(element.name)
export class BodyXl extends Typography {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [element.name]: CTypography;
    }
  }
}
