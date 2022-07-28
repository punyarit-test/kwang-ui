export declare type NavbarPositionAttr = Partial<Record<'top' | 'bottom', Boolean>>;
export declare type NavbarPositionKey = keyof NavbarPositionAttr;
declare global {
    namespace CX {
        type NavbarPosition = NavbarPositionAttr;
    }
}
