import { Typography } from './typography';
declare enum element {
    name = "body-xs"
}
export declare class BodyXs extends Typography {
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [element.name]: CTypography.Ref;
        }
    }
}
export {};
