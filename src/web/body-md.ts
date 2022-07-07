import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

enum element {
  name = 'body-md',
}

@customElement(element.name)
export class BodyMd extends Typography {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [element.name]: CTypography.Ref;
    }
  }
}
