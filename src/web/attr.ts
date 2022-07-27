import {customElement} from 'lit/decorators.js';
import {ElementBase} from '../base/element-base';
import {BlockAttr} from '../types/block.type';
import {FlexAttr} from '../types/flex.type';
import {GridAttr} from '../types/grid.type';

const ELEMENT_NAME = 'c-attr';

@customElement(ELEMENT_NAME)
export class Attr extends ElementBase {}

declare global {
  namespace CAttr {
    interface Ref extends CDivElement.Ref, FlexAttr, GridAttr, BlockAttr {}
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CAttr.Ref;
    }
  }
}
