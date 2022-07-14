import {customElement} from 'lit/decorators.js';
import {DivElement} from './div-element';

const ELEMENT_NAME = 'div-display';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class DivDisplay extends DivElement {
  connectedCallback() {
    super.connectedCallback();
    this.setClassName();
  }

  private setClassName(): void {
    this.className = this.getClassName();
  }

  private getClassName(): string {
    let className = '';
    for (const attr of this.attributes) {
      className = className + attr.name + ' ';
    }
    return className;
  }

  createRenderRoot(): this {
    return this;
  }
}

declare global {
  namespace CDivDisplay {
    interface Ref extends CDivElement.Ref {}
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CDivDisplay.Ref;
    }
  }
}
