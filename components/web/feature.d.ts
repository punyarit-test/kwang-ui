import { FeatureAttr } from '../types/feature.type';
import { ElementBase } from '../base/element-base';
declare const ELEMENT_NAME = "c-feature";
export declare class Feature extends ElementBase {
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
}
declare global {
    namespace CFeature {
        interface Ref extends CElementBase.Ref<any, any>, FeatureAttr {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CFeature.Ref;
        }
    }
}
export {};
