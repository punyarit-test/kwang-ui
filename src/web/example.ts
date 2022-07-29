import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {ElementBase} from '../base/element-base';
import {SizeKey} from '../types/sizes.types';
import {ColorKey} from '../types/colors.type';
import {BorderRadiusKey} from '../types/div-base.type';

const ELEMENT_NAME = 'c-example';

const EVENT_1 = 'exampleEvent1';
const EVENT_2 = 'exampleEvent2';
const EVENT_3 = 'exampleEvent3';
const EVENT_4 = 'exampleEvent4';
interface EventOneProp {
  test: string;
}

@customElement(ELEMENT_NAME)
export class Example extends ElementBase {
  @property({type: String}) public p = '';

  static defaultStyles: CExample.SX = {
    backgroundColor: 'primary-100',
    borderRadius: 'round-12',
    height: 'size-10',
    width: 'size-124',
  };

  static defaultConfig: CExample.CFX = {
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
          @click="${() => this.callFunctionStore(this.ex![EVENT_1], 10)}"
        >
          event1
        </button>
        <button
          .hidden="${!this.defaultConfig.button2}"
          @click="${() => this.callFunctionStore(this.ex![EVENT_2], 20)}"
        >
          event2
        </button>
        <button
          .hidden="${!this.defaultConfig.button3}"
          @click="${() => this.callFunctionStore(this.ex![EVENT_3], 30)}"
        >
          event3
        </button>
        <button
          .hidden="${!this.defaultConfig.button4}"
          @click="${() => this.callFunctionStore(this.ex![EVENT_4], 40)}"
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
}

declare global {
  namespace CExample {
    interface EX {
      [EVENT_1]?: Function;
      [EVENT_2]?: Function;
      [EVENT_3]?: Function;
      [EVENT_4]?: Function;
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
      [EVENT_1]: CustomEvent<EventOneProp>;
      [EVENT_2]: CustomEvent<EventOneProp>;
      [EVENT_3]: CustomEvent<EventOneProp>;
      [EVENT_4]: CustomEvent<EventOneProp>;
    }

    interface Ref extends CElementBase.Ref<SX, CFX> {
      p?: string;
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
