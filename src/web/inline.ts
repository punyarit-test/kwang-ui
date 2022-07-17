import {customElement} from 'lit/decorators.js';
import {BaseElement} from './base-element';

const ELEMENT_NAME = 'c-inline';

@customElement(ELEMENT_NAME)
export class Inline extends BaseElement {}

declare global {
  namespace CInline {
    interface Ref extends CDivDisplay.Ref {}
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CInline.Ref;
    }
  }
}
