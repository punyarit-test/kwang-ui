import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { BaseElementAttr } from '../types/base-element.type';
export declare class BaseElement extends LitElement {
    sx?: CBaseElement.Ref<any, any> | string;
    cfx?: CBaseElement.Ref<any, any> | string;
    test?: CBaseElement.Ref<any, any> | string;
}
declare global {
    namespace CBaseElement {
        interface Ref<SX, CFX> extends Omit<HTMLAttributes<Ref<SX, CFX>>, 'color' | 'placeholder'>, ClassAttributes<Ref<SX, CFX>>, BaseElementAttr {
            ex?: void;
            sx?: SX | string;
            cfx?: CFX | string;
        }
    }
}
