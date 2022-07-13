import { FeatureAttr } from '../types/feature.type';
import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-feature";
export declare class Feature extends BaseElement {
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
}
declare global {
    namespace CFeature {
        interface Ref extends CBaseElement.Ref, FeatureAttr {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CFeature.Ref;
        }
    }
}
export {};
