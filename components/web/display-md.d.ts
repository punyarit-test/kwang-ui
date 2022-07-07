import { Typography } from './typography';
declare enum element {
    name = "display-md"
}
export declare class DisplayMd extends Typography {
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [element.name]: CTypography.Ref;
        }
    }
}
export {};
