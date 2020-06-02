import React, {Ref, RefObject} from "react";
import {connect} from "react-redux";
import {ActionType} from "../../redux/action-type";

interface IProps {
    count: number;
    dispatch: any
}

interface IState {
    count: number;
}

class Page1 extends React.Component<Readonly<IProps>, Readonly<IState>> {

    // 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
    // 它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
    // static getDerivedStateFromProps(props: Readonly<IProps>, state: Readonly<IState>): IState {
    //     return null
    // }


    private readonly pageRef: RefObject<any>;

    constructor(props: Readonly<IProps>) {
        super(props);

        this.pageRef = React.createRef();
    }

    // 判断 React 组件的输出是否受当前 state 或 props 更改的影响
    public shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>, nextContext: any): boolean {
        return true;
    }

    public render() {
        return (
            <div className="page1" ref={this.pageRef}>
                <p>page1</p>
                <button onClick={this.increment}>+</button>
                <p>{this.props.count}</p>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }

    public componentDidMount(): void {
        console.error('page1-componentDidMount', this.pageRef, this.pageRef.current);
    }

    public componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {

    }

    // 当组件从 DOM 中移除时会调用如下方法
    public componentWillUnmount(): void {
        console.error('page1-componentWillUnmount')
    }

    private increment = () => {
        this.props.dispatch({type: ActionType.INCREMENT});
    };

    private decrement = () => {
        this.props.dispatch({type: ActionType.DECREMENT});
    };
}

function mapStateToProps(state: Readonly<IState>) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Page1);
