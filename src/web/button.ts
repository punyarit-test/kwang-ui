import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

const ELEMENT_NAME = 'c-button';

@customElement(ELEMENT_NAME)
export class Button extends LitElement {
  static styles = css``;

  render() {
    return html` <div>c-button component was created!!</div> `;
  }
}

declare global {
  namespace CButton {
    interface Ref extends CBaseElement.Ref<any, any> {}
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CButton.Ref;
    }
  }
}
