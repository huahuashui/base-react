import React from "react";
import {connect} from "react-redux";
import {ActionType} from "../../redux/action-type";

function mapStateToProps(state: any) {
    return {
        count: state.count
    };
}

class Page1 extends React.Component<Record<string, any>, {}> {

    constructor(props: Record<string, any>) {
        super(props)
    }

    public componentDidMount(): void {
        console.log('componentDidMount', this);
    }

    public render() {
        return (
            <div>
                <p>page1</p>
                <button onClick={this.increment}>+</button>
                <p>{this.props.count}</p>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }

    private increment = () => {
        this.props.dispatch({type: ActionType.INCREMENT});
    };

    private decrement = () => {
        this.props.dispatch({type: ActionType.DECREMENT});
    };
}

export default connect(mapStateToProps)(Page1);
