import {SnUIComponentProps, SnUIComponentSize} from "./component";
import {SyntheticEvent} from "react";

export type FormItemLabelPosition = 'left' | 'right' | 'top';

/** 表单验证规则 */
export interface FormRule {
    /** 此条规则-验证触发方式 blur/change */
    trigger?: string | string[];

    /** 验证器类型 */
    type?: string;

    /** rule属性指示字段必须存在于被验证的源对象上 */
    required?: boolean;

    /**
     * 最小值
     * 对于字符串类型和数组类型，将对长度进行比较，
     * 对于数字类型，该数字必须不小于最小值，也不大于最大值。
     */
    min?: number;

    /**
     * 最大值
     * 对于字符串类型和数组类型，将对长度进行比较，
     * 对于数字类型，该数字必须不小于最小值，也不大于最大值。
     */
    max?: number;

    /** 字符串长度或数值大小，len属性与最小和最大范围属性相结合，则len优先 */
    len?: number;

    /** 正则表达式 */
    pattern?: string;

    /** 提示信息 */
    message?: string;

    /** 提示信息类型-内部定制化的提示-不传，取message中文本 */
    messageType?: string;

    /** 自定义验证函数 回调中不携带错误提示，表示验证通过，message存在取message */
    validator?: (rule: any, value: any, callback: validatorCallback) => string | Error | null;

    /** 枚举 */
    enum?: (string | number)[];

    /** 转换函数 */
    transform?: <T>(value: T) => T;

    defaultField?: FormRule | FormRule[];
}

export interface validatorCallback {
    /** 回调中不携带数据，表示验证通过 */
    (msg: string | Error | null): void;
}

export interface ValidateFieldCallback {
    /**
     * 回调以告知字段验证结果
     *
     * @param data 表单验证结果
     */
    (data: FormValidateResult): void;
}

/** 表单验证结果 */
export interface FormValidateResult extends Record <string, any> {
    /** 表单域验证结果 */
    valid: boolean;

    /** 表单域每项详情 */
    validFields: { [key: string]: ValidField };
}

/** 表单域每项详情 */
export interface ValidField {
    /** 表单项验证结果 */
    valid: boolean;

    /** 错误提示 */
    message: string;

    /** 表单每项标识字段 */
    prop: string;
}

export interface ISnFormProps extends SnUIComponentProps {
    /** 是否显示必填字段的标签旁边的红色星号 */
    required: boolean;

    /** 行内表单模式 */
    inline: boolean;

    /** 表单域标签的位置，如果值为left/right时，则需要设置label-width */
    labelPosition: FormItemLabelPosition;

    /** 表单域标签的宽度，作为Form直接子元素的form-item会继承该值 */
    labelWidth: string;

    /** 用于控制该表单内组件的尺寸 */
    size: SnUIComponentSize;

    /** 是否显示校验错误信息 */
    showMessage: boolean;

    /** 以行内形式展示校验信息 */
    inlineMessage: boolean;

    /** 是否展示验证状态图标 */
    statusIcon: boolean;

    /** 表单数据对象 */
    model: { [key: string]: any };

    /** 表单验证规则-父子都有传，取子的值 */
    rules: { [key: string]: FormRule[] };
}

export interface ISnFormState {

}
