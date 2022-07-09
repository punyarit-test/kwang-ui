import { TIconKeys } from './icons.type';
export interface INavbarPosition {
    top?: boolean;
    bottom?: boolean;
}
export interface INavbarMenus {
    name: string;
    path: string;
    icon: TIconKeys;
    disabled?: boolean;
    visible?: boolean;
}
