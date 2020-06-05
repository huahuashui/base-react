import React from "react";
import {Link, Route, RouteComponentProps, Switch} from "react-router-dom";

import {routeService} from "../../routes/routeService";
import {IRouteConfig} from "../../routes/routeConfig";

import SnButton from "../../components/button";

interface IProps extends RouteComponentProps {
    count: number;
}

interface IState {
    count: number;
}

export default class Page2 extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            count: this.props.count ? this.props.count : 0
        }
    }

    public componentDidMount() {
        console.log('componentDidMount', this.props);
    };

    public componentWillReceiveProps() {
        console.log('componentWillReceiveProps', this.props);
    }

    public render() {
        let routeConfig: IRouteConfig[] = routeService.getRouteByPath('RouteDemo');
        return (
            <div>
                <div>
                    Page2视口

                    <SnButton onClick={() => this.setState(() => {return {count: this.state.count + 1}})}>+</SnButton>
                    <span>{this.state.count}</span>
                    <SnButton onClick={() => this.setState(() => {return {count: this.state.count - 1}})}>-</SnButton>
                </div>
                <SnButton type="primary">
                    {
                        routeConfig.map(item => {
                            return <div key={item.key}><Link to={item.path}>{item.moduleName}</Link></div>
                        })
                    }
                </SnButton>

                <div>
                    <Switch>
                        {
                            routeConfig.map(item => {
                                return <Route key={item.key} path={item.path} component={item.component}></Route>
                            })
                        }
                    </Switch>
                </div>
            </div>
        );
    }
}
