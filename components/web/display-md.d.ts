import { Typography } from './typography';
declare const ELEMENT_NAME = "display-md";
export declare class DisplayMd extends Typography {
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
