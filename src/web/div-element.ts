import {css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {DivElementAttr} from '../types/div-element.type';
import {BaseElement} from './base-element';

const ELEMENT_NAME = 'div-element';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class DivElement extends BaseElement {}

declare global {
  namespace CDivElement {
    interface Ref extends CBaseElement.Ref<any,any>, DivElementAttr {}
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CDivElement.Ref;
    }
  }
}
