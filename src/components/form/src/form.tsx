import React from "react";
import PropTypes from 'prop-types';
import {FormValidateResult, ISnFormProps, ISnFormState} from "../../types/form";

interface ISnFormItem {
    prop: string;
}

export default class SnForm extends React.Component<ISnFormProps, ISnFormState> {

    static childContextTypes = {
        SnForm: PropTypes.any
    };

    static propTypes = {

    };

    // 赋默认值
    static defaultProps: Partial<ISnFormProps> = {
        inline: false,
        labelPosition: "right",
        labelWidth: '',
        size: "small",

        required: false,
        showMessage: true,
        inlineMessage: false,
        statusIcon: false,
        model: null,
        rules: null,
    };

    /** 子组件集合 */
    private fields: ISnFormItem[] = [];

    /** form表单验证结果 */
    private formValidateResult = {
        valid: false,
        validFields: {}
    } as FormValidateResult;

    constructor(props: ISnFormProps) {
        super(props);
    }

    public render() {
        return (
            <form className="sn-form">{this.props.children}</form>
        )
    }

    public getChildContext(): { SnForm: SnForm } {
        return {
            SnForm: this
        };
    }

    /** 注册子组件 */
    public addField(field: ISnFormItem) {
        if (field) {
            this.fields.push(field);
        }
    }

    /** 移除子组件 */
    public removeField(field: ISnFormItem) {
        if (field.prop) {
            this.fields.splice(this.fields.indexOf(field), 1);
            delete this.formValidateResult.validFields[field.prop];
        }
    }
}
