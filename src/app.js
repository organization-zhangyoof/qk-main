import Password from "antd/lib/input/Password";

export function render(oldRender) {
    oldRender();
}

export const qiankun = Promise.resolve().then(() => {
    debugger
    return ({
        // 注册子应用信息
        apps: [
            {
              name: 'app1', // 唯一 id
              entry: '//localhost:9001', // html entry
            },
          ],
          routes: [
            {
              path: '/app1',
              microApp: 'app1',
            },
          ],
        // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
        lifeCycles: {
            afterMount: (props) => {
                console.log(props);
            },
        },
        // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
    })
});