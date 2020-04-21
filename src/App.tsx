import React from "react";
import {RouteComponentProps, RouteProps, withRouter} from "react-router-dom";

import {RouterConfig} from "./routers";


class App extends React.Component<RouteComponentProps> {

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
        console.log(RouterConfig);

        return (
            RouterConfig.map(item => {
                return (
                    <div>
                        <div key={item.component.name}
                             onClick={() => this.jumpRouter(item)}>
                            {item.component.name}
                        </div>
                        <div>{}</div>
                    </div>
                )
            })
        );
    }

    private jumpRouter(params: RouteProps): void {
        console.log(111, params);

        if (params.path !== this.props.location.pathname) {
            // this.props.history.push(params.path);
            this.props.history.push({pathname: params.path} as any)
        }
    }

}

export default withRouter(App);
