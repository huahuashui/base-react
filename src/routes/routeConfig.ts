import ButtonDemo from "../views/button-demo";
import Page1 from "../views/page1";
import Page2 from "../views/page2";
import Detail from "../views/page2/detail";

export interface IRouteConfig {
    key: string;
    path: string;
    redirect?: string;
    moduleName?: string;
    component: any;
    children?: IRouteConfig[];
}

// 路由配置
export const routeConfig: IRouteConfig[] = [
    {
        key: 'buttonDemo',
        path: '/buttonDemo',
        moduleName: '按钮示例',
        component: ButtonDemo
    },
    {
        key: 'page1',
        path: '/page1',
        moduleName: '界面1',
        component: Page1
    },
    {
        key: 'page2',
        path: '/page2',
        moduleName: '界面2',
        component: Page2,
        children: [
            {
                key: 'detail',
                path: '/page2/detail',
                moduleName: '界面2详情',
                component: Detail,
            }
        ]
    }
];
