import { Typography } from './typography';
declare const ELEMENT_NAME = "header-xl";
export declare class HeaderXl extends Typography {
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
