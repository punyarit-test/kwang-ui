import {IconNameKey} from './icons.type';

export interface MenuBar {
  name: string;
  path: string;
  icon: IconNameKey;
  disabled?: boolean;
  visible?: boolean;
  active?: string[];
  service?: string;
  permission?: string;
}
