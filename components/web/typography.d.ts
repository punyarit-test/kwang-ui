import { ColorsAttr } from '../types/colors.type';
import { TySizesAttr } from '../types/tx-sizes.type';
import { WeightAttr } from '../types/weights.type';
import { ElementBase } from '../base/element-base';
declare const DISPLAY_SM_NAME = "display-sm";
declare const DISPLAY_MD_NAME = "display-md";
declare const DISPLAY_XS_NAME = "display-xs";
declare const HEADER_XS_NAME = "header-xs";
declare const HEADER_XL_NAME = "header-xl";
declare const HEADER_SM_NAME = "header-sm";
declare const HEADER_MD_NAME = "header-md";
declare const HEADER_LG_NAME = "header-lg";
declare const BODY_XS_NAME = "body-xs";
declare const BODY_XL_NAME = "body-xl";
declare const BODY_SM_NAME = "body-sm";
declare const BODY_MD_NAME = "body-md";
declare const BODY_LG_NAME = "body-lg";
declare abstract class Typography extends ElementBase {
    protected setFontStyle(fontSize: keyof TySizesAttr): void;
    createRenderRoot(): this;
}
export declare class DisplayMd extends Typography {
    connectedCallback(): void;
}
export declare class DisplaySm extends Typography {
    connectedCallback(): void;
}
export declare class DisplayXs extends Typography {
    connectedCallback(): void;
}
export declare class HeaderXl extends Typography {
    connectedCallback(): void;
}
export declare class HeaderLg extends Typography {
    connectedCallback(): void;
}
export declare class HeaderMd extends Typography {
    connectedCallback(): void;
}
export declare class HeaderSm extends Typography {
    connectedCallback(): void;
}
export declare class HeaderXs extends Typography {
    connectedCallback(): void;
}
export declare class BodyXl extends Typography {
    connectedCallback(): void;
}
export declare class BodyLg extends Typography {
    connectedCallback(): void;
}
export declare class BodyMd extends Typography {
    connectedCallback(): void;
}
export declare class BodySm extends Typography {
    connectedCallback(): void;
}
export declare class BodyXs extends Typography {
    connectedCallback(): void;
}
declare global {
    namespace CTypography {
        interface Ref extends CElementBase.Ref<any, any>, ColorsAttr, WeightAttr {
            p?: string;
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [DISPLAY_MD_NAME]: CTypography.Ref;
            [DISPLAY_SM_NAME]: CTypography.Ref;
            [DISPLAY_XS_NAME]: CTypography.Ref;
            [HEADER_XL_NAME]: CTypography.Ref;
            [HEADER_LG_NAME]: CTypography.Ref;
            [HEADER_MD_NAME]: CTypography.Ref;
            [HEADER_SM_NAME]: CTypography.Ref;
            [HEADER_XS_NAME]: CTypography.Ref;
            [BODY_XL_NAME]: CTypography.Ref;
            [BODY_LG_NAME]: CTypography.Ref;
            [BODY_MD_NAME]: CTypography.Ref;
            [BODY_SM_NAME]: CTypography.Ref;
            [BODY_XS_NAME]: CTypography.Ref;
        }
    }
}
export {};
