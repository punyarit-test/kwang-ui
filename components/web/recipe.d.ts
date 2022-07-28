import { ClassAttributes, HTMLAttributes } from 'react';
import { ElementBase } from '../base/element-base';
declare const ELEMENT_NAME = "c-recipe";
export declare class Recipe extends ElementBase {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CRecipe {
        interface Ref extends CElementBase.Ref<any, any> {
        }
        type Key = keyof Omit<CRecipe.Ref, keyof HTMLAttributes<CRecipe.Ref> | keyof ClassAttributes<CRecipe.Ref>>;
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CRecipe.Ref;
        }
    }
}
export {};
