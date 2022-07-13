import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { BaseElementAttr } from '../types/base-element.type';
export declare class BaseElement extends LitElement {
}
declare global {
    namespace CBaseElement {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref>, BaseElementAttr {
        }
    }
}
