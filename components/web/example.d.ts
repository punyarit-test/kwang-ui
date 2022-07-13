import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-example";
declare const EVENT_ONE = "event-1";
interface EventOneProp {
    test: string;
}
export declare class Example extends BaseElement {
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CExample {
        interface Ref extends CBaseElement.Ref {
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
