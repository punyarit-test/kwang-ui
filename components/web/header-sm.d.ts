import { Typography } from './typography';
declare enum element {
    name = "header-sm"
}
export declare class HeaderSm extends Typography {
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [element.name]: CTypography.Ref;
        }
    }
}
export {};
