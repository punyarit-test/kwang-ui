import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {FlexAttr} from '../types/div-display.type';
import {BaseElement} from './base-element';
import {DivDisplay} from './div-display';

const ELEMENT_NAME = 'c-flex';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Flex extends DivDisplay {}

declare global {
  namespace CFlex {
    interface Ref extends CDivDisplay.Ref, FlexAttr {}
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CFlex.Ref;
    }
  }
}
