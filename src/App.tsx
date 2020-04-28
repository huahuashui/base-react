import React from "react";
import {RouteComponentProps, RouteProps, withRouter, Link, Route, Switch, BrowserRouter} from "react-router-dom";

import Page1 from "./views/page1";
import Page2 from "./views/page2";
import {ReactNode} from "base-react/node_modules/@types/react";

export default class App extends React.Component<{}, {}, any> {

    public render(): ReactNode {
        return (
            <BrowserRouter>
                <ul>
                    <li><Link to="/page1">page1</Link></li>
                    <li><Link to="/page2">page2</Link></li>
                    <li><Link to="/page2/detail">page2</Link></li>
                </ul>
                <Switch>
                    <Route path="/page1" component={Page1}></Route>
                    <Route path="/page2" component={Page2}></Route>
                </Switch>
            </BrowserRouter>
        )
    }

    public componentDidMount(): void {

    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {}
}
