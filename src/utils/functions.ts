(window as any)['$cortex'] = {};

// Async Event

const asyncComponent = (
  component: any,
  timeout: any,
  errorText: any,
  callback: any
) => {
  const expire = Date.now() + timeout;
  const asyncComponent = setInterval(() => {
    //@ts-ignore
    if (component.current) {
      clearAsyncComponent(asyncComponent);
      callback();
    } else if (Date.now() >= expire) {
      clearAsyncComponent(asyncComponent);
      throw new Error(errorText);
    }
  }, 1000);
};

const clearAsyncComponent = (
  asyncComponent: ReturnType<typeof setInterval>
): void => {
  clearInterval(asyncComponent);
};

// export

export const val = <T>(value: T): string => JSON.stringify(value);
export const ex = <T>(events: T): void => {
  let a: any = {};
  for (const key in events) {
    (window as any)['$cortex'][key] = events[key];
    // @ts-ignore
    a[key] = events[key].name;
  }

  // เด้วจะเอา a ไปทำต่อในส่วนของการเรียกใช้ฟังชั่นแบบนี้ใน web component
};

export const sx = <SX = void | undefined>(
  component: React.RefObject<unknown>,
  styles: SX
) => {
  (<CElementBase.Ref<any, any>>component.current).sx = styles;
};

export const cx = <SX = void | undefined>(
  component: React.RefObject<unknown>,
  styles: SX
) => {
  (<CElementBase.Ref<any, any>>component.current).cfx = styles;
};

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

export const attr = (
  attrs: Array<CAttr.Key | Array<CAttr.Key>>
): Record<string, boolean> => {
  let attrObj: Record<string, boolean> = {};
  for (const key of attrs.flat()) {
    attrObj[key] = true;
  }
  return attrObj;
};

export const asyncEvt = <Y>(
  component: React.RefObject<unknown>,
  eventName: keyof Y,
  callback: (e: CustomEvent) => void,
  timeout = 5000
): void => {
  asyncComponent(
    component,
    timeout,
    'AsyncEvent: Component does not exist.',
    () => {
      (<HTMLElement>component.current).addEventListener(
        <keyof HTMLElementEventMap>eventName,
        <EventListener>callback
      );
    }
  );
};

export const asyncClr = <Y>(
  component: React.RefObject<any>,
  eventName: keyof Y,
  callback: (e: CustomEvent) => void,
  timeout = 5000
): void => {
  asyncComponent(
    component,
    timeout,
    'AsyncEvent: Component does not exist.',
    () => {
      (<HTMLElement>component.current).removeEventListener(
        <keyof HTMLElementEventMap>eventName,
        <EventListener>callback
      );
    }
  );
};

// Effects
export const shake = (): void => {
  const body = document.body;
  body?.classList?.add('efx-shake');

  setTimeout(() => {
    body?.classList?.remove('efx-shake');
  }, 600);
};
