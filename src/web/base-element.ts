import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {BaseElementAttr} from '../types/base-element.type';

const ELEMENT_NAME = 'base-element';

@customElement(ELEMENT_NAME)
export class BaseElement extends LitElement {
  @property({type: Object}) public sx?: CBaseElement.Ref<any, any> | string;
  @property({type: Object}) public cfx?: CBaseElement.Ref<any, any> | string;
  @property({type: Object}) public test?: CBaseElement.Ref<any, any> | string;
}

declare global {
  namespace CBaseElement {
    interface Ref<SX, CFX>
      extends Omit<HTMLAttributes<Ref<SX, CFX>>, 'color' | 'placeholder'>,
        ClassAttributes<Ref<SX, CFX>>,
        BaseElementAttr {
      ex?: void;
      sx?: SX | string;
      cfx?: CFX | string;
    }
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
}
