export const SHADES = [
  '25',
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
] as const;

export type BaseColorAttr = Partial<Record<'white' | 'black', Boolean>>;

export type GrayAttr = Partial<
  Record<`gray-${typeof SHADES[number]}`, boolean>
>;

export type PrimaryAttr = Partial<
  Record<`primary-${typeof SHADES[number]}`, boolean>
>;

export type ErrorAttr = Partial<
  Record<`error-${typeof SHADES[number]}`, boolean>
>;

export type WarningAttr = Partial<
  Record<`warning-${typeof SHADES[number]}`, boolean>
>;

export type SuccessAttr = Partial<
  Record<`success-${typeof SHADES[number]}`, boolean>
>;

export type ModermGreenAttr = Partial<
  Record<`modern-green-${typeof SHADES[number]}`, boolean>
>;

export type SurgeonGreenAttr = Partial<
  Record<`surgeon-green-${typeof SHADES[number]}`, boolean>
>;

export type WellnessGreenAttr = Partial<
  Record<`wellness-green-${typeof SHADES[number]}`, boolean>
>;

export type SafeBlueAttr = Partial<
  Record<`safe-blue-${typeof SHADES[number]}`, boolean>
>;

export type BlueprintAttr = Partial<
  Record<`blueprint-${typeof SHADES[number]}`, boolean>
>;

export type VioletAlertAttr = Partial<
  Record<`violet-alert-${typeof SHADES[number]}`, boolean>
>;

export type PurpleAttr = Partial<
  Record<`purple-${typeof SHADES[number]}`, boolean>
>;

export type PinkyAttr = Partial<
  Record<`pinky-${typeof SHADES[number]}`, boolean>
>;

export type RedFlagAttr = Partial<
  Record<`red-flag-${typeof SHADES[number]}`, boolean>
>;

export type AlarmOrangeAttr = Partial<
  Record<`alarm-orange-${typeof SHADES[number]}`, boolean>
>;

export type WarningYellowAttr = Partial<
  Record<`warning-yellow-${typeof SHADES[number]}`, boolean>
>;

export type BlueStateAttr = Partial<
  Record<`bluestate-${typeof SHADES[number]}`, boolean>
>;

export interface ColorAttr
  extends BaseColorAttr,
    GrayAttr,
    PrimaryAttr,
    ErrorAttr,
    WarningAttr,
    SuccessAttr,
    ModermGreenAttr,
    SurgeonGreenAttr,
    WellnessGreenAttr,
    SafeBlueAttr,
    BlueprintAttr,
    VioletAlertAttr,
    PurpleAttr,
    PinkyAttr,
    RedFlagAttr,
    AlarmOrangeAttr,
    WarningYellowAttr,
    BlueStateAttr {}
