import { Typography } from './typography';
declare const ELEMENT_NAME = "body-lg";
export declare class BodyLg extends Typography {
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
