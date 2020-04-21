import React from "react";
import {Link, Route, RouteComponentProps} from "react-router-dom";

import Detail from "./detail";

export default class Page2 extends React.Component<RouteComponentProps> {

    constructor(props: RouteComponentProps) {
        super(props)
    }

    componentDidMount() {
        console.log(111, this.props);
    };

    componentWillReceiveProps() {
        console.log(222, this.props);
    }

    public render() {
        return (
            <div>
                Page2
                <Route path="/page2/detail" component={Detail}></Route>
            </div>
        );
    }
}
