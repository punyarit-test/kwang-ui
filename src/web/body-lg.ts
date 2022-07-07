import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

enum element {
  name = 'body-lg',
}

@customElement(element.name)
export class BodyLg extends Typography {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [element.name]: CTypography.Ref;
    }
  }
}
