export type SidebarPositionAttr = Partial<Record<'left' | 'right', Boolean>>;

declare global {
  namespace CX {
    type SidebarPosition = SidebarPositionAttr;
  }
}
