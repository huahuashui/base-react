import React from "react";
import {ISnButtonGroupProps, ISnButtonGroupState} from "../../types/button-group";
import {ISnButtonProps} from "../../types/button";

export default class SnButtonGroup extends React.Component<ISnButtonGroupProps, ISnButtonGroupState> {
    // 赋默认值
    public static defaultProps: Partial<ISnButtonProps> = {
        style: null,
        className: '',
    };

    constructor(props: Readonly<ISnButtonGroupProps>) {
        super(props);
    }

    public render() {
        const className = ['sn-button-group', this.props.className].join(' ').trim();
        return (
            <div className={className}
                 style={this.props.style}>{this.props.children}</div>
        )
    }
}
