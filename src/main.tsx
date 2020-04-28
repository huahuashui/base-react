/** 项目入口文件 */
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import store from "./redux";
import App from "./App";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app-root') as HTMLElement
);

