import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {BaseElement} from './base-element';
import {attr} from '../utils/functions';

const ELEMENT_NAME = 'c-example';
const EVENT_ONE = 'event-1';
interface EventOneProp {
  test: string;
}

@customElement(ELEMENT_NAME)
export class Example extends BaseElement {
  @property({type: String}) public p = '';

  render() {
    return html`
      <div style="font-family:var(--regular)">
        <button @click="${this.onEvent1}">event1</button>
        <button @click="${this.onEvent2}">event2</button>
        <button @click="${this.onEvent3}">event3</button>
        <button @click="${this.onEvent4}">event4</button>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  updated() {
    console.log('example |this.test123123|', this.test);
    console.log('example |this.sx|', this.sx);
    console.log('example |this.sx|', this.cfx);
  }

  onEvent1() {
    (window as any)['$cortex']['onEvent1'](10);
  }

  onEvent2() {
    (window as any)['$cortex']['onEvent2'](20);
  }

  onEvent3() {
    (window as any)['$cortex']['onEvent3'](30);
  }

  onEvent4() {
    (window as any)['$cortex']['onEvent4'](40);
  }
}

declare global {
  namespace CExample {
    interface EX {
      onEvent1?: (e: any) => any;
      onEvent2?: (e: any) => any;
      onEvent3?: (e: any) => any;
      onEvent4?: (e: any) => any;
    }

    interface SX {
      height?: string;
      backgroundColor?: string;
      borderRadius?: string;
    }

    interface CFX {
      button1?: boolean;
      button2?: boolean;
      button3?: boolean;
      button4?: boolean;
    }

    interface EVT {
      [EVENT_ONE]: CustomEvent<EventOneProp>;
    }

    interface Ref extends CBaseElement.Ref<SX, CFX> {
      onTest?: () => void;
      p?: string;
      onTest1?: string;
      onTest2?: string;
      onTest3?: string;
      onTest4?: string;
      testClick?: any;
      test1?: any;
      ['primary-25']?: boolean;
    }

    interface EventOne extends CustomEvent<EventOneProp> {}
  }

  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CExample.Ref;
    }
  }
}
