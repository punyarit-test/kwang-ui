import { DivDisplay } from './div-display';
declare const ELEMENT_NAME = "c-flex";
export declare class Flex extends DivDisplay {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CFlex {
        interface Ref extends CDivDisplay.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CFlex.Ref;
        }
    }
}
export {};
