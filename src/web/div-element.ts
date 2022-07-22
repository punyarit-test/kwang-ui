import {DivElementAttr} from '../types/div-element.type';
import {BaseElement} from './base-element';

export class DivElement extends BaseElement {}

declare global {
  namespace CDivElement {
    interface Ref extends CBaseElement.Ref<any, any>, DivElementAttr {}
  }
}
