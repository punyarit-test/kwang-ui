import { Typography } from './typography';
declare const ELEMENT_NAME = "display-xs";
export declare class DisplayXs extends Typography {
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
