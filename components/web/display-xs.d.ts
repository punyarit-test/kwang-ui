import { Typography } from './typography';
declare enum element {
    name = "display-xs"
}
export declare class DisplayXs extends Typography {
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [element.name]: CTypography.Ref;
        }
    }
}
export {};
