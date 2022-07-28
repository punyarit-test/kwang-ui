export type NavbarPositionAttr = Partial<Record<'top' | 'bottom', Boolean>>;

export type NavbarPositionKey = keyof NavbarPositionAttr;
declare global {
  namespace CX {
    type NavbarPosition = NavbarPositionAttr;
  }
}
