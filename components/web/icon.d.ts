import { ColorAttr } from '../types/colors.type';
import { TxSizeAttr } from '../types/tx-sizes.type';
import { IconName } from '../types/icons.type';
import { WeightAttr } from '../types/weights.type';
import { ElementBase } from '../base/element-base';
declare const ELEMENT_NAME = "c-icon";
export declare class Icon extends ElementBase {
    static styles: import("lit").CSSResult;
    render: () => import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    firstUpdated(): void;
    private setIconAttr;
}
declare global {
    namespace CIcon {
        interface Ref extends CElementBase.Ref<any, any>, IconName, ColorAttr, WeightAttr, TxSizeAttr {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CIcon.Ref;
        }
    }
}
export {};
