export type WeightAttr = Partial<
  Record<
    | 'thin'
    | 'extralight'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold',
    Boolean
  >
>;

export type WeightKey = keyof WeightAttr;

declare global {
  namespace CX {
    type Weight = WeightKey;
  }
}

export {};
