import { Colors } from '../types/colors.type';
import { TxSizesAttr } from '../types/tx-sizes.type';
import { IconNames } from '../types/icons.type';
import { WeightAttr } from '../types/weights.type';
import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-icon";
export declare class Icon extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
    private setIconAttr;
}
declare global {
    namespace CIcon {
        interface Ref extends CBaseElement.Ref<string>, IconNames, Colors, WeightAttr, TxSizesAttr {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CIcon.Ref;
        }
    }
}
export {};
