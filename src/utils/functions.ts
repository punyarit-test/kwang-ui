export const val = <T>(value: T): string => JSON.stringify(value);

export const evt = <Y>(
  component: React.RefObject<unknown>,
  eventName: keyof Y,
  callback: (e: CustomEvent) => void
): void => {
  (<HTMLElement>component.current).addEventListener(
    <keyof HTMLElementEventMap>eventName,
    <EventListener>callback
  );
};

export const clr = <Y>(
  component: React.RefObject<unknown>,
  eventName: keyof Y,
  callback: (e: CustomEvent) => void
): void => {
  (<HTMLElement>component.current).removeEventListener(
    <keyof HTMLElementEventMap>eventName,
    <EventListener>callback
  );
};

export const attr = (attrs: string): Record<string, boolean> => {
  let attrObj: Record<string, boolean> = {};
  for (const key of attrs.split(' ')) {
    attrObj[key] = true;
  }
  return attrObj;
};

// Async Event

const clearAsyncEvent = (
  asyncComponent: ReturnType<typeof setInterval>
): void => {
  clearInterval(asyncComponent);
};

export const asyncEvt = <Y>(
  component: React.RefObject<unknown>,
  eventName: keyof Y,
  callback: (e: CustomEvent) => void,
  timeout = 5000
): void => {
  const expire = Date.now() + timeout;
  const asyncComponent = setInterval(() => {
    //@ts-ignore
    if (component.current) {
      clearAsyncEvent(asyncComponent);
      (<HTMLElement>component.current).addEventListener(
        <keyof HTMLElementEventMap>eventName,
        <EventListener>callback
      );
    } else if (Date.now() >= expire) {
      clearAsyncEvent(asyncComponent);
      throw new Error('AsyncEvent: Component does not exist.');
    }
  }, 1000);
};

export const asyncClr = <Y>(
  component: React.RefObject<any>,
  eventName: keyof Y,
  callback: (e: CustomEvent) => void,
  timeout = 5000
): void => {
  const expire = Date.now() + timeout;
  const asyncComponent = setInterval(() => {
    //@ts-ignore
    if (component.current) {
      clearAsyncEvent(asyncComponent);
      (<HTMLElement>component.current).removeEventListener(
        <keyof HTMLElementEventMap>eventName,
        <EventListener>callback
      );
    } else if (Date.now() >= expire) {
      clearAsyncEvent(asyncComponent);
      throw new Error('AsyncEvent: Component does not exist.');
    }
  }, 1000);
};
