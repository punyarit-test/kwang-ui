import { ClassAttributes, HTMLAttributes } from 'react';
import { ElementBase } from '../base/element-base';
import { SizeKey } from '../types/sizes.types';
import { ColorKey } from '../types/colors.type';
import { BorderRadiusKey } from '../types/div-base.type';
declare const ELEMENT_NAME = "c-example";
declare const EVENT_ONE = "event-1";
interface EventOneProp {
    test: string;
}
export declare class Example extends ElementBase {
    p: string;
    private static defaultStyles;
    private static defaultConfig;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    willUpdate(changedProperties: any): void;
    onEvent1(): void;
    onEvent2(): void;
    onEvent3(): void;
    onEvent4(): void;
}
declare global {
    namespace CExample {
        interface EX {
            onEvent1?: (e: any) => any;
            onEvent2?: (e: any) => any;
            onEvent3?: (e: any) => any;
            onEvent4?: (e: any) => any;
        }
        interface SX {
            height?: SizeKey;
            backgroundColor?: ColorKey;
            borderRadius?: BorderRadiusKey;
            width?: SizeKey;
        }
        interface CFX {
            button1?: boolean;
            button2?: boolean;
            button3?: boolean;
            button4?: boolean;
        }
        interface EVT {
            [EVENT_ONE]: CustomEvent<EventOneProp>;
        }
        interface Ref extends CElementBase.Ref<SX, CFX> {
            onEvent?: () => void;
            p?: string;
            onEvent1?: () => void;
            onEvent2?: () => void;
            onEvent3?: () => void;
            onEvent4?: () => void;
        }
        type Key = keyof Omit<CExample.Ref, keyof HTMLAttributes<CExample.Ref> | keyof ClassAttributes<CExample.Ref>>;
        interface EventOne extends CustomEvent<EventOneProp> {
        }
        type OnEvent1 = number;
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CExample.Ref;
        }
    }
}
export {};
