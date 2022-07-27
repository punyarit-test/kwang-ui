import { ColorsAttr } from './colors.type';
export declare type HoverColorKeys = `hover:${keyof ColorsAttr}`;
export declare type HoverColorAttr = Partial<Record<HoverColorKeys, boolean>>;
