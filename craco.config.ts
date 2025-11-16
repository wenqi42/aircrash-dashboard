/* eslint-disable import/no-anonymous-default-export */
import path from "path";
import { Configuration } from "webpack";
import { ProvidePlugin } from "webpack";
import {} from "webpack";
export default {
  webpack: {
    configure: (
      webpackConfig: Configuration,
      { env }: { env: "development" | "production" }
    ) => {
      // 移除 ModuleScopePlugin，允许从 src 目录外导入文件
      if (webpackConfig.resolve?.plugins) {
        webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
          (plugin) => plugin?.constructor.name !== "ModuleScopePlugin"
        );
      }
      if (webpackConfig.module?.rules) {
        webpackConfig.module.rules.push({
          test: "/.(scss|sass)$/",
          use: ["sass-loader"],
        });
      }

      const config: Configuration = {
        ...webpackConfig,
        plugins: [
          ...(webpackConfig.plugins as any),
          new ProvidePlugin({
            dayjs: "dayjs", // 会自动将 dayjs 注入到每个模块
          }),
        ],
        externals: {
          "@antv/l7": "window.L7",
          react: "window.React",
          "react-dom": "window.ReactDOM",
        },
        resolve: {
          ...webpackConfig.resolve,
          alias: {
            ...webpackConfig.resolve?.alias,
            "@": path.resolve(__dirname, "src"),
          },
        },
      };

      if (env === "development") {
        return {
          ...config,
          devServer: {
            port: 3000,
            hot: true,
            open: true,
            proxy: {
              "/api": {
                target: "http://localhost:8080",
                changeOrigin: true,
                pathRewrite: {
                  "^/api": "",
                },
              },
            },
          },
        };
      }

      return {
        ...config,
        devtool: false,
        optimization: {
          splitChunks: {
            chunks: "all",
            minSize: 20000,
            maxSize: 244000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            cacheGroups: {
              defaultVendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                reuseExistingChunk: true,
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
              },
              // antdLocale: {
              //   name: "antd-locale",
              //   test: /[\\/]node_modules[\\/]antd[\\/]es[\\/]locale/,
              //   priority: 10,
              //   chunks: "async",
              // },
            },
          },
        },
        performance: {
          hints: "warning",
          maxEntrypointSize: 512000,
          maxAssetSize: 512000,
        },
      };
    },
  },
};
