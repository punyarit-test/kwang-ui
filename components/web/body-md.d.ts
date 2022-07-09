import { Typography } from './typography';
declare const ELEMENT_NAME = "body-md";
export declare class BodyMd extends Typography {
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
