import { Typography } from './typography';
declare const ELEMENT_NAME = "body-xl";
export declare class BodyXl extends Typography {
    firstUpdated(): void;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CTypography.Ref;
        }
    }
}
export {};
