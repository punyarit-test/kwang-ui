import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

enum element {
  name = 'body-xs',
}

@customElement(element.name)
export class BodyXs extends Typography {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [element.name]: CTypography;
    }
  }
}
