import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
declare const ELEMENT_NAME = "c-example";
declare const EVENT_ONE = "event-1";
interface EventOneProp {
    test: string;
}
export declare class Example extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CExample {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref> {
        }
        interface Event {
            [EVENT_ONE]: CustomEvent<EventOneProp>;
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
