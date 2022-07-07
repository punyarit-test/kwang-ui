import { Typography } from './typography';
declare enum element {
    name = "body-md"
}
export declare class BodyMd extends Typography {
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [element.name]: CTypography.Ref;
        }
    }
}
export {};
