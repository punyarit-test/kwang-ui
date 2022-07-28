import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {FeatureAttr} from '../types/feature.type';
import {ElementBase} from '../base/element-base';
import {ClassAttributes, HTMLAttributes} from 'react';

const ELEMENT_NAME = 'c-feature';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Feature extends ElementBase {
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
    interface Ref extends CElementBase.Ref<any, any>, FeatureAttr {
      // checkFlag?: (flag: string) => boolean;
    }
    type Key = keyof Omit<
      CFeature.Ref,
      keyof HTMLAttributes<CFeature.Ref> | keyof ClassAttributes<CFeature.Ref>
    >;

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
