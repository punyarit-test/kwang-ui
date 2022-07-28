export declare const SHADES: readonly ["25", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
export declare type BaseColorAttr = Partial<Record<'white' | 'black', Boolean>>;
export declare type GrayAttr = Partial<Record<`gray-${typeof SHADES[number]}`, boolean>>;
export declare type PrimaryAttr = Partial<Record<`primary-${typeof SHADES[number]}`, boolean>>;
export declare type ErrorAttr = Partial<Record<`error-${typeof SHADES[number]}`, boolean>>;
export declare type WarningAttr = Partial<Record<`warning-${typeof SHADES[number]}`, boolean>>;
export declare type SuccessAttr = Partial<Record<`success-${typeof SHADES[number]}`, boolean>>;
export declare type ModermGreenAttr = Partial<Record<`modern-green-${typeof SHADES[number]}`, boolean>>;
export declare type SurgeonGreenAttr = Partial<Record<`surgeon-green-${typeof SHADES[number]}`, boolean>>;
export declare type WellnessGreenAttr = Partial<Record<`wellness-green-${typeof SHADES[number]}`, boolean>>;
export declare type SafeBlueAttr = Partial<Record<`safe-blue-${typeof SHADES[number]}`, boolean>>;
export declare type BlueprintAttr = Partial<Record<`blueprint-${typeof SHADES[number]}`, boolean>>;
export declare type VioletAlertAttr = Partial<Record<`violet-alert-${typeof SHADES[number]}`, boolean>>;
export declare type PurpleAttr = Partial<Record<`purple-${typeof SHADES[number]}`, boolean>>;
export declare type PinkyAttr = Partial<Record<`pinky-${typeof SHADES[number]}`, boolean>>;
export declare type RedFlagAttr = Partial<Record<`red-flag-${typeof SHADES[number]}`, boolean>>;
export declare type AlarmOrangeAttr = Partial<Record<`alarm-orange-${typeof SHADES[number]}`, boolean>>;
export declare type WarningYellowAttr = Partial<Record<`warning-yellow-${typeof SHADES[number]}`, boolean>>;
export declare type BlueStateAttr = Partial<Record<`bluestate-${typeof SHADES[number]}`, boolean>>;
export interface ColorAttr extends BaseColorAttr, GrayAttr, PrimaryAttr, ErrorAttr, WarningAttr, SuccessAttr, ModermGreenAttr, SurgeonGreenAttr, WellnessGreenAttr, SafeBlueAttr, BlueprintAttr, VioletAlertAttr, PurpleAttr, PinkyAttr, RedFlagAttr, AlarmOrangeAttr, WarningYellowAttr, BlueStateAttr {
}
export declare type ColorKey = keyof ColorAttr;
declare global {
    namespace CX {
        type Color = ColorKey;
    }
}
