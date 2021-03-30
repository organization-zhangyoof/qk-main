import { defineConfig } from 'umi';
const routes = require('./src/routes')

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes:routes,
  fastRefresh: {},
  qiankun: {
    master: {},
  },
});
