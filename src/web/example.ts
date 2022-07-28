import {css, html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {ElementBase} from '../base/element-base';
import {SizeAttr, SizeKey} from '../types/sizes.types';
import {ColorAttr, ColorKey} from '../types/colors.type';
import {BorderRadiusAttr, BorderRadiusKey} from '../types/div-base.type';
import {FunctionStore} from '../utils/functions';

const ELEMENT_NAME = 'c-example';
const EVENT_ONE = 'event-1';
interface EventOneProp {
  test: string;
}

@customElement(ELEMENT_NAME)
export class Example extends ElementBase {
  @property({type: String}) public p = '';
  private static defaultStyles: CExample.SX = {
    backgroundColor: 'primary-100',
    borderRadius: 'round-12',
    height: 'size-10',
    width: 'size-124',
  };

  private static defaultConfig: CExample.CFX = {
    button1: true,
    button2: true,
    button3: true,
    button4: true,
  };

  static styles = css`
    .test {
      background-color: var(--background-color);
      border-radius: var(--border-radius);
      height: var(--height);
      width: var(--width);
    }
  `;

  render() {
    return html`
      <style>
        :host {
          --background-color: var(--${this.defaultStyles?.backgroundColor});
          --border-radius: var(--${this.defaultStyles?.borderRadius});
          --height: var(--${this.defaultStyles?.height});
          --width: var(--${this.defaultStyles?.width});
        }
      </style>
      <div class="test"></div>
      <div style="font-family:var(--regular)">
        <button
          .hidden="${!this.defaultConfig.button1}"
          @click="${this.onEvent1}"
        >
          event1
        </button>
        <button
          .hidden="${!this.defaultConfig.button2}"
          @click="${this.onEvent2}"
        >
          event2
        </button>
        <button
          .hidden="${!this.defaultConfig.button3}"
          @click="${this.onEvent3}"
        >
          event3
        </button>
        <button
          .hidden="${!this.defaultConfig.button4}"
          @click="${this.onEvent4}"
        >
          event4
        </button>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.defaultStyles = Example.defaultStyles;
    this.defaultConfig = Example.defaultConfig;
  }

  willUpdate(changedProperties: any) {
    super.willUpdate(changedProperties);
  }

  onEvent1() {
    FunctionStore.call('onEvent1', 10);
  }

  onEvent2() {
    FunctionStore.call('onEvent2', 20);
  }

  onEvent3() {
    FunctionStore.call('onEvent3');
  }

  onEvent4() {
    FunctionStore.call('onEvent4', 40);
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
      height?: SizeKey;
      backgroundColor?: ColorKey;
      borderRadius?: BorderRadiusKey;
      width?: SizeKey;
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

    interface Ref extends CElementBase.Ref<SX, CFX> {
      onEvent?: () => void;
      p?: string;
      onEvent1?: () => void;
      onEvent2?: () => void;
      onEvent3?: () => void;
      onEvent4?: () => void;
    }
    type Key = keyof Omit<
      CExample.Ref,
      keyof HTMLAttributes<CExample.Ref> | keyof ClassAttributes<CExample.Ref>
    >;

    interface EventOne extends CustomEvent<EventOneProp> {}

    // Parameter For FunctionStore
    type OnEvent1 = number;
  }

  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CExample.Ref;
    }
  }
}
