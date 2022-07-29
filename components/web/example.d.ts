import { ClassAttributes, HTMLAttributes } from 'react';
import { ElementBase } from '../base/element-base';
import { SizeKey } from '../types/sizes.types';
import { ColorKey } from '../types/colors.type';
import { BorderRadiusKey } from '../types/div-base.type';
declare const ELEMENT_NAME = "c-example";
declare const EVENT_1 = "exampleEvent1";
declare const EVENT_2 = "exampleEvent2";
declare const EVENT_3 = "exampleEvent3";
declare const EVENT_4 = "exampleEvent4";
interface EventOneProp {
    test: string;
}
export declare class Example extends ElementBase {
    p: string;
    static defaultStyles: CExample.SX;
    static defaultConfig: CExample.CFX;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    willUpdate(changedProperties: any): void;
}
declare global {
    namespace CExample {
        interface EX {
            [EVENT_1]?: Function;
            [EVENT_2]?: Function;
            [EVENT_3]?: Function;
            [EVENT_4]?: Function;
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
            [EVENT_1]: CustomEvent<EventOneProp>;
            [EVENT_2]: CustomEvent<EventOneProp>;
            [EVENT_3]: CustomEvent<EventOneProp>;
            [EVENT_4]: CustomEvent<EventOneProp>;
        }
        interface Ref extends CElementBase.Ref<SX, CFX> {
            p?: string;
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
