export interface ElementBaseAttr {}

export type ElementBaseKey = keyof ElementBaseAttr;
declare global {
  namespace CX {
    type ElementBase = ElementBaseKey;
  }
}
