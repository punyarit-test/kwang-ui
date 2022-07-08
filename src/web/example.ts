import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';

const ELEMENT_NAME = 'c-example';
const EVENT_ONE = 'event-1';
interface EventOneProp {
  test: string;
}

@customElement(ELEMENT_NAME)
export class Example extends LitElement {
  render() {
    return html`
      <div style="font-family:var(--regular)">
        c-example component was created!!
      </div>
    `;
  }
}

declare global {
  namespace CExample {
    interface Ref
      extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>,
        ClassAttributes<Ref> {}
    interface Event {
      [EVENT_ONE]: CustomEvent<EventOneProp>;
    }
    interface EventOne extends CustomEvent<EventOneProp> {}
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CExample.Ref;
    }
  }
}
