import {customElement, property} from 'lit/decorators.js';
import {FlexAttr} from '../types/flex.type';
import {DivDisplay} from './div-display';

const ELEMENT_NAME = 'c-flex';

@customElement(ELEMENT_NAME)
export class Flex extends DivDisplay {}

declare global {
  namespace CFlex {
    interface Ref extends CDivDisplay.Ref, FlexAttr {}
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CFlex.Ref;
    }
  }
}
