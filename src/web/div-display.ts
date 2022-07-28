import {customElement} from 'lit/decorators.js';
import {BlockAttr} from '../types/block.type';
import {FlexAttr} from '../types/flex.type';
import {GridAttr} from '../types/grid.type';
import {DivBase} from '../base/div-base';
import {attr} from '../utils/functions';
import {ClassAttributes, HTMLAttributes} from 'react';

const BLOCK_NAME = 'c-block';
const FLEX_NAME = 'c-flex';
const GRID_NAME = 'c-grid';
abstract class DivDisplay extends DivBase {
  connectedCallback() {
    super.connectedCallback();
    this.setClassName();
  }

  private setClassName(): void {
    this.className = this.concatenatedClassName();
  }

  createRenderRoot(): this {
    return this;
  }
}

@customElement(BLOCK_NAME)
export class Block extends DivDisplay {}

@customElement(FLEX_NAME)
export class Flex extends DivDisplay {}

@customElement(GRID_NAME)
export class Grid extends DivDisplay {}

declare global {
  namespace CDivDisplay {
    interface Ref extends CDivElement.Ref {}
    type Key = keyof Omit<
      CDivDisplay.Ref,
      | keyof HTMLAttributes<CDivDisplay.Ref>
      | keyof ClassAttributes<CDivDisplay.Ref>
    >;

    interface CBlockRef extends CDivDisplay.Ref, BlockAttr {}
    interface CFlexRef extends CDivDisplay.Ref, FlexAttr {}
    interface CGridRef extends CDivDisplay.Ref, GridAttr {}
  }

  namespace JSX {
    interface IntrinsicElements {
      [BLOCK_NAME]: CDivDisplay.CBlockRef;
      [FLEX_NAME]: CDivDisplay.CFlexRef;
      [GRID_NAME]: CDivDisplay.CGridRef;
    }
  }
}
