import { ColorsAttr } from '../types/colors.type';
import { TySizesAttr } from '../types/tx-sizes.type';
import { IconNames } from '../types/icons.type';
import { WeightAttr } from '../types/weights.type';
import { ElementBase } from '../base/element-base';
declare const ELEMENT_NAME = "c-icon";
export declare class Icon extends ElementBase {
    static styles: import("lit").CSSResult;
    render: () => import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
    private setIconAttr;
}
declare global {
    namespace CIcon {
        interface Ref extends CBaseElement.Ref<any, any>, IconNames, ColorsAttr, WeightAttr, TySizesAttr {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CIcon.Ref;
        }
    }
}
export {};
