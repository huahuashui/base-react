import React from "react";
import {Link, Route, Switch, Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import "./App.scss";
import "./reset.scss";

import {routeService} from "./routes/routeService";
import {IRouteConfig} from "./routes/routeConfig";

interface IProps extends RouteComponentProps {

}

interface IState {
    // currentRoute: string;
}

class App extends React.Component<IProps, IState> {

    constructor(props: Readonly<IProps>) {
        super(props);

        this.state = {

        };
    }

    public render() {
        const currentRoute = '/' + this.props.location.pathname.split('/').filter(item => !!item)[0];



        const routeConfig: IRouteConfig[] = routeService.getRouteByPath();

        return (
            <div>
                <ul className="g-menu">
                    {
                        routeConfig.map(item => {
                            const activeClass = currentRoute === item.path ? 'is-active' : null;
                            return (
                                <li className={'menu-item ' + activeClass}
                                    key={item.key}>
                                    <Link to={item.path}>{item.moduleName}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Redirect from="/" to={routeConfig[0].path}></Redirect>
                <div className="g-main">
                    <Switch>
                        {
                            routeConfig.map(item => {
                                return <Route key={item.key} path={item.path} component={item.component}></Route>
                            })
                        }
                    </Switch>
                </div>
            </div>
        )
    }

    // 在最近一次渲染输出（提交到 DOM 节点）之前调用
    // public getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>): any | null {}

    // 此生命周期在后代组件抛出错误后被调用
    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {}
}

export default withRouter(App);
