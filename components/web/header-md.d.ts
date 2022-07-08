import { Typography } from './typography';
declare const ELEMENT_NAME = "header-md";
export declare class HeaderMd extends Typography {
    firstUpdated(): void;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CTypography.Ref;
        }
    }
}
export {};
