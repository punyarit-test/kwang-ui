import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { IGray, IPrimary } from '../types/colors.type';
import { TIcons } from '../types/icons.type';
declare const ELEMENT_NAME = "c-test";
declare const TEST_EVENT = "test-event";
declare const TEST_EVENT2 = "test-event-2";
declare const TEST_EVENT3 = "test-event-3";
interface TestEvent2 {
    test2: string;
}
interface TestEvent3 {
    test3: string;
}
export declare class Test extends LitElement {
    static styles: import("lit").CSSResult;
    icon: string;
    size: string;
    color: string;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
    testEvent(): void;
}
declare global {
    namespace CIcon {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref> {
            icon: TIcons;
            size?: string;
            color?: IPrimary | IGray;
        }
        interface Event {
            [TEST_EVENT]: CustomEvent<TestEvent>;
            [TEST_EVENT2]: CustomEvent<TestEvent2>;
            [TEST_EVENT3]: CustomEvent<TestEvent3>;
        }
        interface TestEvent extends CustomEvent<TestEvent2> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CIcon.Ref;
        }
    }
    namespace C { }
}
export {};
