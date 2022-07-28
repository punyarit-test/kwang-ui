import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {ElementBase} from '../base/element-base';

const ELEMENT_NAME = 'c-input';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Input extends ElementBase {
  static styles = css``;

  render() {
    return html` <div>c-input component was created!!</div> `;
  }
}

declare global {
  namespace CInput {
    interface Ref extends CElementBase.Ref<any, any> {}
    type Key = keyof Omit<
      CInput.Ref,
      keyof HTMLAttributes<CInput.Ref> | keyof ClassAttributes<CInput.Ref>
    >;
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CInput.Ref;
    }
  }
}
