const path = require('path');

const server = 'http://localhost:3000';

// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        dll: true,
        routes: {
          exclude: [
            /model\.(j|t)sx?$/,
            /service\.(j|t)sx?$/,
            /models\//,
            /components\//,
            /services\//,
          ],
        },
        hardSource: false,
      },
    ],
  ],
  // proxy: {
  //   "/api": {
  //     "target": 'http://192.168.2.120:8081',
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api" : "/api" }
  //   }
  // }
};
