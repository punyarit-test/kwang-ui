import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

enum element {
  name = 'body-sm',
}

@customElement(element.name)
export class BodySm extends Typography {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [element.name]: CTypography.Ref;
    }
  }
}
