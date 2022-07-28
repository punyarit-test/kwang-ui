export type StartScreenAttr = Partial<Record<'fade', Boolean>>;

export type StartScreenKey = keyof StartScreenAttr;
declare global {
  namespace CX {
    type StartScreen = StartScreenKey;
  }
}
