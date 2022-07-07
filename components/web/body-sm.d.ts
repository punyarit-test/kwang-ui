import { Typography } from './typography';
declare enum element {
    name = "body-sm"
}
export declare class BodySm extends Typography {
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [element.name]: CTypography.Ref;
        }
    }
}
export {};
