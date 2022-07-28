export type BlockAttr = Partial<Record<'inline' | 'inline-block', boolean>>;

export type BlockKey = keyof BlockAttr;

declare global {
  namespace CX {
    type Block = BlockKey;
  }
}
