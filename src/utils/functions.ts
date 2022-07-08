export const val = <T>(value: T): string => JSON.stringify(value);

export const evt = <Y>(
  component: unknown,
  eventName: keyof Y,
  callback: (e: CustomEvent) => void
): void => {
  (<HTMLElement>component).addEventListener(
    <keyof HTMLElementEventMap>eventName,
    <any>callback
  );
};

export const clr = <Y>(
  component: unknown,
  eventName: keyof Y,
  callback: (e: CustomEvent<any>) => void
): void => {
  (<HTMLElement>component).removeEventListener(
    <keyof HTMLElementEventMap>eventName,
    <any>callback
  );
};
