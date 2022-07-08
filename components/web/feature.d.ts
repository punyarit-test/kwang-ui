import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { IFeature } from '../types/feature.type';
declare const ELEMENT_NAME = "c-feature";
export declare class Feature extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
}
declare global {
    namespace CFeature {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref>, IFeature {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CFeature.Ref;
        }
    }
}
export {};
