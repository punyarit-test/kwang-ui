import { ElementBaseAttr } from '../types/div-base.type';
import { ElementBase } from './element-base';
export declare abstract class DivBase extends ElementBase {
}
declare global {
    namespace CDivElement {
        interface Ref extends CElementBase.Ref<any, any>, ElementBaseAttr {
        }
    }
}
