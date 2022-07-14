import {IconNameKeys} from './icons.type';

export interface MenuBar {
  name: string;
  path: string;
  icon: IconNameKeys;
  disabled?: boolean;
  visible?: boolean;
  active?: string[];
  service?: string;
  permission?: string;
}
