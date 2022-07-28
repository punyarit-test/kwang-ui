import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {IconAttr} from '../types/icons.type';
import {ClassAttributes, HTMLAttributes} from 'react';
import {DivBase} from '../base/div-base';

const ELEMENT_NAME = 'c-icon';

@customElement(ELEMENT_NAME)
export class Icon extends DivBase {
  render = () => html`&#xe800;`;

  connectedCallback() {
    super.connectedCallback();
    this.setIconAttr();
  }

  private setIconAttr(): void {
    this.className = this.concatenatedClassName();
  }
}

declare global {
  namespace CIcon {
    interface Ref extends CDivElement.Ref, IconAttr {}

    type Key = keyof Omit<
      CIcon.Ref,
      keyof HTMLAttributes<CIcon.Ref> | keyof ClassAttributes<CIcon.Ref>
    >;
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CIcon.Ref;
    }
  }
}
