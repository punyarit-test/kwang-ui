import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {DivDisplay} from './div-display';

const ELEMENT_NAME = 'c-block';

@customElement(ELEMENT_NAME)
export class Block extends DivDisplay {}

declare global {
  namespace CBlock {
    interface Ref extends CDivDisplay.Ref {}
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CBlock.Ref;
    }
  }
}
