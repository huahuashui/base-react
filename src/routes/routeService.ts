import {IRouteConfig, routeConfig} from "./routeConfig";

export const routeService = {

    // 根据路由key获取路由配置
    getRouteByPath(key?: string): IRouteConfig[] {
        if (!key) {
            return routeConfig.map(item => {
                return {
                    key: item.key,
                    path: item.path,
                    moduleName: item.moduleName,
                    component: item.component
                } as IRouteConfig
            })
        } else {
            const target = routeConfig.filter(item => item.key === key);
            let children = [] as IRouteConfig[];
            if (target) {
                children = target[0].children
            }
            return children;
        }
    }
};
