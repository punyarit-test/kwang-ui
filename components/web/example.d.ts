import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-example";
declare const EVENT_ONE = "event-1";
interface EventOneProp {
    test: string;
}
export declare class Example extends BaseElement {
    p: string;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    updated(): void;
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
            height?: string;
            backgroundColor?: string;
            borderRadius?: string;
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
        interface Ref extends CBaseElement.Ref<SX, CFX> {
            onTest?: () => void;
            p?: string;
            onTest1?: string;
            onTest2?: string;
            onTest3?: string;
            onTest4?: string;
            testClick?: any;
            test1?: any;
            ['primary-25']?: boolean;
        }
        interface EventOne extends CustomEvent<EventOneProp> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CExample.Ref;
        }
    }
}
export {};
