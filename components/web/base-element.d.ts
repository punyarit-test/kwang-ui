import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { BaseElementAttr } from '../types/base-element.type';
export declare abstract class BaseElement extends LitElement {
    sx?: any;
    cfx?: Record<string, string>;
    protected defaultStyles: Record<string, any>;
    protected defaultConfig: Record<string, any>;
    private updateAttributes;
    willUpdate(changedProperties: Map<PropertyKey, unknown>): void;
    updated(e: any): void;
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
