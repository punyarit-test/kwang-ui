import {customElement} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {ElementBase} from '../base/element-base';
import {BlockAttr} from '../types/block.type';
import {FlexAttr} from '../types/flex.type';
import {GridAttr} from '../types/grid.type';
import {IconAttr, IconKey} from '../types/icons.type';
import {ThemeColorAttr, ThemeSizeAttr} from '../types/theme.type';

const ELEMENT_NAME = 'c-attr';

@customElement(ELEMENT_NAME)
export class Attr extends ElementBase {}

declare global {
  namespace CAttr {
    interface Ref
      extends CDivElement.Ref,
        IconAttr,
        FlexAttr,
        GridAttr,
        BlockAttr,
        ThemeColorAttr,
        ThemeSizeAttr {}
    type Key = keyof Omit<
      CAttr.Ref,
      keyof HTMLAttributes<CAttr.Ref> | keyof ClassAttributes<CAttr.Ref>
    >;
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CAttr.Ref;
    }
  }
}
