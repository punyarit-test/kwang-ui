export type GridAttr = Partial<Record<'inline-grid', boolean>>;

export type GridKey = keyof GridAttr;
declare global {
  namespace CX {
    type Grid = GridKey;
  }
}
