export interface FeatureAttr {
  flags: string[];
}

declare global {
  namespace CX {
    type Feature = FeatureAttr;
  }
}
