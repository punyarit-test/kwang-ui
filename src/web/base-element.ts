import {LitElement} from 'lit';
import {property, state} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {BaseElementAttr} from '../types/base-element.type';

export abstract class BaseElement extends LitElement {
  @property({type: Object}) public sx?: any;
  @property({type: Object}) public cfx?: Record<string, string>;

  @state() protected defaultStyles: Record<string, any> = {};
  @state() protected defaultConfig: Record<string, any> = {};

  private updateAttributes(styles: any, updatedAttributes: any): any {
    for (const key in styles) {
      updatedAttributes[key] = styles[key];
    }
    return {...updatedAttributes};
  }

  willUpdate(changedProperties: Map<PropertyKey, unknown>) {
    if (changedProperties.has('sx')) {
      this.defaultStyles = this.updateAttributes(this.sx, this.defaultStyles);
    }

    if (changedProperties.has('cfx')) {
      this.defaultConfig = this.updateAttributes(this.cfx, this.defaultConfig);
    }
    super.willUpdate(changedProperties);
  }

  // updated(changedProperties: Map<PropertyKey, unknown>) {
  // สิ่งนี้คือสิ่งที่ต้องการ super.update(e) จะทำให้เมื่อมีการ update state มันจะไม่เกิด infinity loop
  // super.update(changedProperties);
  // super.update(changedProperties);
  // }
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
