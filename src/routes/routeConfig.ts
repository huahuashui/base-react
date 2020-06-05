// 模块示例
import ReduxDemo from "../views/redux-demo";
import RouteDemo from "../views/route-demo";
import Detail from "../views/route-demo/detail";

// 组件示例
import ButtonDemo from "../views/button-demo";
import FormDemo from "../views/form-demo";

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
        key: 'ReduxDemo',
        path: '/ReduxDemo',
        moduleName: 'redux示例',
        component: ReduxDemo
    },
    {
        key: 'RouteDemo',
        path: '/RouteDemo',
        moduleName: '路由嵌套示例',
        component: RouteDemo,
        children: [
            {
                key: 'Detail',
                path: '/RouteDemo/Detail',
                moduleName: '路由嵌套示例-详情',
                component: Detail,
            }
        ]
    },
    {
        key: 'ButtonDemo',
        path: '/ButtonDemo',
        moduleName: '按钮示例',
        component: ButtonDemo
    },
    {
        key: 'FormDemo',
        path: '/FormDemo',
        moduleName: '表单示例',
        component: FormDemo
    }
];
