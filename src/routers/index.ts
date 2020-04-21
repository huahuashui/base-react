import {RouteProps} from 'react-router-dom';

import Page1 from "../views/page1/index";
import Page2 from "../views/page2/index";

export const RouterConfig: RouteProps[] =
    [
        {
            path: '/page1',
            exact: true,
            component: Page1,
        },
        {
            path: '/page2',
            exact: true,
            component: Page2,
        },

    ];
