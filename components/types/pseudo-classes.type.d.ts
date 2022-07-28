import { ColorAttr } from './colors.type';
import { TxColorKey } from './tx-colors.type';
export declare type HoverColorKey = `hover-${keyof ColorAttr}`;
export declare type ActiveColorKey = `active-${TxColorKey}`;
export declare type HoverColorAttr = Partial<Record<HoverColorKey, boolean>>;
export declare type ActiveColorAttr = Partial<Record<ActiveColorKey, boolean>>;
declare global {
    namespace CX {
        type HoverColor = HoverColorKey;
        type ActiveColor = ActiveColorKey;
    }
}
