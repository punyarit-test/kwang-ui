import { Typography } from './typography';
declare const ELEMENT_NAME = "header-xs";
export declare class HeaderXs extends Typography {
    connectedCallback(): void;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CTypography.Ref;
        }
    }
}
export {};
