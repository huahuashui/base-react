import React, {Component} from "react";

import {SnUIComponentSize} from "../../types/component";
import {ValidField} from "../../types/form";
import {ISnFormItemProps, ISnFormItemState} from "../../types/form-item";
import PropTypes from "prop-types";

export default class SnFormItem extends React.Component<ISnFormItemProps, ISnFormItemState> {

    public static contextTypes = {
        SnForm: PropTypes.any
    };

    // public static childContextTypes = {
    //     component: PropTypes.any
    // };

    public static propTypes = {
        model: PropTypes.object,
        rules: PropTypes.object,
        labelPosition: PropTypes.oneOf(['right', 'left', 'top']),
        labelWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        labelSuffix: PropTypes.string,
        inline: PropTypes.bool,
        onSubmit: PropTypes.func
    };

    // 赋默认值
    public static defaultProps: Partial<ISnFormItemProps> = {
        prop: '',
        rules: null,
        trigger: null,

        label: '',
        labelWidth: 'false',
        size: '' as SnUIComponentSize,
        required: false,
        showMessage: false,
        inlineMessage: false,
    };

    constructor(props: ISnFormItemProps) {
        super(props);
    }

    public render() {
        console.log('props', this.props);
        const formItemClass = [
            'sn-form-item',

        ].join(' ').trim();


        return (
            <div className={formItemClass}>
                {this.props.children}
            </div>
        );
    }

    public componentDidMount(): void {
        console.log('componentDidMount', this)
    }

    public buble(arr: any[] = []): any[] {
        if (Array.isArray(arr) && arr.length) {
            // 冒泡排序
            // let len = arr.length - 1;
            //
            // for (let i = len; i > 0; i--) {
            //     for (let j = 0; j < i; j++) {
            //         if (arr[j] > arr[j + 1]) {
            //             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            //         }
            //     }
            // }


            // 选择排序
            const len = arr.length;

            for (let i = 0; i < len - 1; i++) {
                let min = i;

                for (let j = i + 1; j < len; j++) {
                    min = arr[min] > arr[j] ? j : min;
                }

                [arr[min], arr[i]] = [arr[i], arr[min]];
            }
        }

        return arr;
    }
}
