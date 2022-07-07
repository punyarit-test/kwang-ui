import {LitElement} from 'lit';

export const customEvent = <T>(
  element: LitElement,
  event: string,
  data: Record<string, T>
) => {
  element.dispatchEvent(
    new CustomEvent(event, {
      detail: {
        ...data,
      },
      bubbles: true,
    })
  );
};
