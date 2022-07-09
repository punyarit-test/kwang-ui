import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {FeatureAttr} from '../types/feature.type';

const ELEMENT_NAME = 'c-feature';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Feature extends LitElement {
  render() {
    return html` <slot></slot> `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    const [flags] = this.attributes;
    sessionStorage.setItem('flags', flags.value);
  }
}

declare global {
  namespace CFeature {
    interface Ref
      extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>,
        ClassAttributes<Ref>,
        FeatureAttr {
      // checkFlag?: (flag: string) => boolean;
    }
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CFeature.Ref;
    }
  }
}
