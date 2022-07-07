import { Typography } from './typography';
declare enum element {
    name = "header-md"
}
export declare class HeaderMd extends Typography {
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [element.name]: CTypography;
        }
    }
}
export {};
