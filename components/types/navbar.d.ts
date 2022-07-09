import { TIconKeys } from './icons.type';
export interface INavbarPosition {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
}
export interface INavbarMenus {
    name: string;
    path: string;
    icon: TIconKeys;
    disabled?: boolean;
    visible?: boolean;
}
