import { Typography } from './typography';
declare enum element {
    name = "header-xl"
}
export declare class HeaderXl extends Typography {
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [element.name]: CTypography.Ref;
        }
    }
}
export {};
