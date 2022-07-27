import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { ElementBaseAttr } from '../types/element-base.type';
export declare abstract class ElementBase extends LitElement {
    sx?: any;
    cfx?: Record<string, string>;
    protected defaultStyles: Record<string, any>;
    protected defaultConfig: Record<string, any>;
    willUpdate(changedProperties: Map<PropertyKey, unknown>): void;
    protected checkAttributesLength(expectedLength: number): void;
    private updateAttributes;
}
declare global {
    namespace CElementBase {
        interface Ref<SX, CFX> extends Omit<HTMLAttributes<Ref<SX, CFX>>, 'color' | 'placeholder'>, ClassAttributes<Ref<SX, CFX>>, ElementBaseAttr {
            ex?: void;
            sx?: SX | string;
            cfx?: CFX | string;
        }
    }
}
