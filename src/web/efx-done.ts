import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {BaseElement} from './base-element';

enum element {
  name = 'efx-done',
}

@customElement(element.name)
export class EfxDone extends BaseElement {
  static styles = css`
    .bubbly-efx {
      display: inline-block;
      border-radius: 4px;
      position: relative;
      transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
    }
    .bubbly-efx:focus {
      outline: 0;
    }
    .bubbly-efx:before,
    .bubbly-efx:after {
      position: absolute;
      content: '';
      display: block;
      width: 140%;
      height: 100%;
      left: -20%;
      z-index: -1000;
      transition: all ease-in-out 0.5s;
      background-repeat: no-repeat;
    }
    .bubbly-efx:before {
      display: none;
      top: -75%;
      background-image: radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, transparent 20%, #ff0081 20%, transparent 30%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%);
      background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
        15% 15%, 10% 10%, 18% 18%;
    }
    .bubbly-efx:after {
      display: none;
      bottom: -75%;
      background-image: radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%);
      background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%,
        20% 20%;
    }
    .bubbly-efx.animate:before {
      display: block;
      animation: topBubbles ease-in-out 0.75s forwards;
    }
    .bubbly-efx.animate:after {
      display: block;
      animation: bottomBubbles ease-in-out 0.75s forwards;
    }

    @keyframes topBubbles {
      0% {
        background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
          40% 90%, 55% 90%, 70% 90%;
      }
      50% {
        background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
          50% 50%, 65% 20%, 90% 30%;
      }
      100% {
        background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
          50% 40%, 65% 10%, 90% 20%;
        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
      }
    }
    @keyframes bottomBubbles {
      0% {
        background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
          70% -10%, 70% 0%;
      }
      50% {
        background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%,
          95% 60%, 105% 0%;
      }
      100% {
        background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%,
          95% 70%, 110% 10%;
        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
      }
    }
  `;

  @property({type: Boolean}) public disabled?: boolean;

  @property()
  render() {
    return this.disabled
      ? html`<slot></slot> `
      : html` <div class="bubbly-efx"><slot></slot></div> `;
  }

  firstUpdated() {
    if (!this.disabled) {
      this.initEfx();
    }
  }

  private initEfx(): void {
    const bubblyButtons =
      this.shadowRoot?.querySelector<HTMLElement>('.bubbly-efx');

    if (!this.disabled) {
      bubblyButtons?.addEventListener(
        'mousedown',
        () => this.animateEfx(bubblyButtons),
        false
      );
    }
  }

  private animateEfx(e: HTMLElement): void {
    clearTimeout(this.setTimeEfx(e));
    //reset animation
    e.classList.remove('animate');
    e.classList.add('animate');

    this.setTimeEfx(e);
  }

  private setTimeEfx = (e: HTMLElement) =>
    setTimeout(function () {
      e.classList.remove('animate');
    }, 700);
}

/*

#3 Blubby Button

#30 Flipside
for decide dialog

*/
declare global {
  namespace CEfxDone {
    interface Ref extends CBaseElement.Ref<any,any> {
      disabled?: boolean;
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
      [element.name]: CEfxDone.Ref;
    }
  }
}
