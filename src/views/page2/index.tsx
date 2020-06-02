import React from "react";
import {Link, Route, RouteComponentProps, Switch} from "react-router-dom";

import {routeService} from "../../routes/routeService";
import {IRouteConfig} from "../../routes/routeConfig";

import SnButton from "../../components/button";

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
        let routeConfig: IRouteConfig[] = routeService.getRouteByPath('page2');
        return (
            <div>
                <div>
                    Page2视口
                </div>
                <SnButton type="primary">
                    {
                        routeConfig.map(item => {
                            return <li key={item.key}><Link to={item.path}>{item.moduleName}</Link></li>
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
