import React, {SyntheticEvent} from "react";
import {SnUIComponentSizeEnum} from "../../enum/component";
import {ISnButtonProps, ISnButtonState} from "../../types/button";


export default class SnButton extends React.Component<ISnButtonProps, ISnButtonState> {

    // 赋默认值
    public static defaultProps: Partial<ISnButtonProps> = {
        type: null,
        nativeType: "button",
        size: 'small',
        icon: null,
        disabled: false,
        plain: false,
        autofocus: false,
        onClick: () => {}
    };

    constructor(props: ISnButtonProps) {
        super(props);
    }

    public render() {
        const {
            handleClick,
            typeClasses,
            buttonStyle,
            props: {
                children,
                disabled,
                autofocus,
                nativeType,
                icon
            }
        } = this;

        return (
            <button className={typeClasses()}
                    style={buttonStyle()}
                    disabled={disabled}
                    autoFocus={autofocus}
                    type={nativeType}
                    onClick={handleClick}>
                {icon && <i className={'n-button__icon ' + icon}></i>}
                {children &&
                <span className={'sn-button__text ' + (icon ? 'is-margin' : '')}>{this.props.children}</span>}
            </button>
        )
    }

    private handleClick = (e: SyntheticEvent<any>) => {
        this.props.onClick && this.props.onClick(e);
    };

    private buttonStyle = (): Record<string, string> => {
        const size = this.props.size;
        const ret = {} as Record<string, string>;
        ret.height = SnUIComponentSizeEnum[size] + 'px';
        ret.lineHeight = SnUIComponentSizeEnum[size] + 'px';
        return ret;
    };

    private typeClasses = (): string => {
        const {
            props: {
                type,
                disabled,
                plain
            }
        } = this;

        const typeC = type ? `sn-button--${type}` : '';
        const disabledC = disabled ? 'is-disabled' : '';
        const plainC = plain ? 'is-plain' : '';

        return ['sn-button', typeC, disabledC, plainC].join(' ');
    }
}
