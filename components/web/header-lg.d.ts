import { Typography } from './typography';
declare enum element {
    name = "header-lg"
}
export declare class HeaderLg extends Typography {
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [element.name]: CTypography.Ref;
        }
    }
}
export {};
