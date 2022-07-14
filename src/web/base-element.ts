import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {BaseElementAttr} from '../types/base-element.type';

const ELEMENT_NAME = 'base-element';

@customElement(ELEMENT_NAME)
export class BaseElement extends LitElement {}

declare global {
  namespace CBaseElement {
    interface Ref<T>
      extends Omit<HTMLAttributes<Ref<T>>, 'color' | 'placeholder'>,
        ClassAttributes<Ref<T>>,
        BaseElementAttr {
      sx?: Record<keyof T, string>;
    }
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
}
