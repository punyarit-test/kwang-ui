import {customElement} from 'lit/decorators.js';
import {DivElement} from './div-element';

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
      className = className + 'dv-' + attr.name + ' ';
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
  }
}
