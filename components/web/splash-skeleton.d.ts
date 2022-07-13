import { LitElement } from 'lit';
declare const ELEMENT_NAME = "splash-skeleton";
export declare class SplashSkeleton extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CSplashSkeleton {
        interface Ref extends CBaseElement.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CSplashSkeleton.Ref;
        }
    }
}
export {};
