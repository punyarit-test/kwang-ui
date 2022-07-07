import { Typography } from './typography';
declare enum element {
    name = "body-xl"
}
export declare class BodyXl extends Typography {
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [element.name]: CTypography;
        }
    }
}
export {};
