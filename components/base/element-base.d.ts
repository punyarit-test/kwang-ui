import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { ElementBaseAttr } from '../types/element-base.type';
import { FunctionBind } from '../types/FunctionStore.type';
export declare abstract class ElementBase extends LitElement {
    sx?: Record<string, string>;
    ex?: Record<string, FunctionBind>;
    cfx?: Record<string, string>;
    protected defaultStyles: Record<string, any>;
    protected defaultConfig: Record<string, any>;
    willUpdate(changedProperties: Map<PropertyKey, unknown>): void;
    protected callFunctionStore(event: FunctionBind, value: unknown): void;
    protected concatenatedClassName(): string;
    protected checkAttributesLength(expectedLength: number): void;
    private updateAttributes;
}
declare global {
    namespace CElementBase {
        interface Ref<SX, CFX> extends Omit<HTMLAttributes<Ref<SX, CFX>>, 'color' | 'placeholder'>, ClassAttributes<Ref<SX, CFX>>, ElementBaseAttr {
            ex?: void | string;
            sx?: SX | string;
            cfx?: CFX | string;
        }
    }
}
