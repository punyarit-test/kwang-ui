import { Typography } from './typography';
declare enum element {
    name = "body-lg"
}
export declare class BodyLg extends Typography {
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [element.name]: CTypography.Ref;
        }
    }
}
export {};
