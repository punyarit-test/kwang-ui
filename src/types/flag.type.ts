export interface FlagAttr {
  name: string;
}

declare global {
  namespace CX {
    type Flag = FlagAttr;
  }
}
