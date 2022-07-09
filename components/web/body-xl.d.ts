import { Typography } from './typography';
declare const ELEMENT_NAME = "body-xl";
export declare class BodyXl extends Typography {
    connectedCallback(): void;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CTypography.Ref;
        }
    }
}
export {};
