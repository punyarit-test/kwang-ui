import {IconKey} from './icons.type';

export interface MenuBarAttr {
  name: string;
  path: string;
  icon: IconKey;
  disabled?: boolean;
  visible?: boolean;
  active?: string[];
  service?: string;
  permission?: string;
}

declare global {
  namespace CX {
    type MenuBar = MenuBarAttr;
  }
}
