import {LitElement} from 'lit';
import {property, state} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {ElementBaseAttr} from '../types/element-base.type';

export abstract class ElementBase extends LitElement {
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
}

declare global {
  namespace CBaseElement {
    interface Ref<SX, CFX>
      extends Omit<HTMLAttributes<Ref<SX, CFX>>, 'color' | 'placeholder'>,
        ClassAttributes<Ref<SX, CFX>>,
        ElementBaseAttr {
      ex?: void;
      sx?: SX | string;
      cfx?: CFX | string;
    }
  }
}
