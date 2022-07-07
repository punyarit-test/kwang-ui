import { Typography } from './typography';
declare enum element {
    name = "display-sm"
}
export declare class DisplaySm extends Typography {
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [element.name]: CTypography;
        }
    }
}
export {};
