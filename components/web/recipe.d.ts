import { ElementBase } from '../base/element-base';
declare const ELEMENT_NAME = "c-recipe";
export declare class Recipe extends ElementBase {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CRecipe {
        interface Ref extends CBaseElement.Ref<any, any> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CRecipe.Ref;
        }
    }
}
export {};
