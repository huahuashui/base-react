import {SnUIComponentProps, SnUIComponentSize} from "./component";
import {FormRule} from "./form";

export interface ISnFormItemProps extends SnUIComponentProps {
    /** 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 */
    prop: string;

    /** 表单验证规则-父子都有传，取子的值 */
    rules: FormRule | FormRule[];

    /** 验证触发方式-blur,change, ['blur','change'] 默认blur触发 */
    trigger: string | string[];

    /** 是否显示必填字段的标签旁边的红色星号 */
    required: boolean;

    /** 标签文本 */
    label: string;

    /** 表单域标签的的宽度，例如'50px' */
    labelWidth: string;

    /** 用于控制该表单内组件的尺寸 */
    size: SnUIComponentSize;

    /** 是否显示校验错误信息 */
    showMessage: boolean;

    /** 以行内形式展示校验信息 */
    inlineMessage: boolean;
}

export interface ISnFormItemState {

}
