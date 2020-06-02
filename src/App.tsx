import React from "react";
import {Link, Route, Switch, BrowserRouter, Redirect} from "react-router-dom";

import {routeService} from "./routes/routeService";
import {IRouteConfig} from "./routes";

export default class App extends React.Component<{}, {}, any> {

    constructor(props: Readonly<{}>) {
        super(props);
    }

    public render() {
        const routeConfig: IRouteConfig[] = routeService.getRouteByPath();
        return (
            <BrowserRouter basename="/">
                <ul>
                    {
                        routeConfig.map(item => {
                            return <li key={item.key}><Link to={item.path}>{item.moduleName}</Link></li>
                        })
                    }
                </ul>
                <Redirect from="/" to={routeConfig[0].path}></Redirect>
                <Switch>
                    {
                        routeConfig.map(item => {
                            return <Route key={item.key} path={item.path} component={item.component}></Route>
                        })
                    }
                </Switch>
            </BrowserRouter>
        )
    }

    // 在最近一次渲染输出（提交到 DOM 节点）之前调用
    // public getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>): any | null {}

    // 此生命周期在后代组件抛出错误后被调用
    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {}
}
