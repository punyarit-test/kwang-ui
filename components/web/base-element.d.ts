import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { BaseElementAttr } from '../types/base-element.type';
export declare class BaseElement extends LitElement {
}
declare global {
    namespace CBaseElement {
        interface Ref<T> extends Omit<HTMLAttributes<Ref<T>>, 'color' | 'placeholder'>, ClassAttributes<Ref<T>>, BaseElementAttr {
            sx?: Record<keyof T, string>;
        }
    }
}
