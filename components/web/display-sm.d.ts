import { Typography } from './typography';
declare const ELEMENT_NAME = "display-sm";
export declare class DisplaySm extends Typography {
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
