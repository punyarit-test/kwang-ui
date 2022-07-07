import { Typography } from './typography';
declare enum element {
    name = "header-xs"
}
export declare class HeaderXs extends Typography {
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [element.name]: CTypography.Ref;
        }
    }
}
export {};
