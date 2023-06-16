import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import unocss from 'unocss/vite'
function _resolve(dir) {
  return path.resolve(__dirname, dir);
}
export default (({ mode }) => {
  const VITE_APP_SERVER_URL = loadEnv(mode, process.cwd())
  console.log(VITE_APP_SERVER_URL);
  return defineConfig({
    base: "./",
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router", "vue-i18n", "@vueuse/core"],
        dts: "src/auto-imports.d.ts",
        vueTemplate: true,
        eslintrc: { // 生成eslint的配置文件，需要在eslint配置中导入
          enabled: true, // Default `false`
        },
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dirs: ['src/components'],
        extensions: ['vue'],
        dts: 'src/components.d.ts'
      }),
      unocss()
    ],
    resolve: {
      alias: {
        '~': _resolve('src'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      },
    },
    server: {
      open: true,
      base: "./ ",
      proxy: {
        "^/admin-mock": {
          target: VITE_APP_SERVER_URL.VITE_MOCK,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/admin-mock/, ""),
          bypass(req, res, options) {
            const proxyUrl = new URL(options.rewrite(req.url) || '', (options.target) as string)?.href || ''
            req.headers["x-req-proxyUrl"] = proxyUrl
            res.setHeader('x-res-proxyUrl', proxyUrl)
          },
        },
        "^/admin-api": {
          target: VITE_APP_SERVER_URL.VITE_BASEURL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/admin-api/, ""),
          bypass(req, res, options) {
            const proxyUrl = new URL(options.rewrite(req.url) || '', (options.target) as string)?.href || ''
            req.headers["x-req-proxyUrl"] = proxyUrl
            res.setHeader('x-res-proxyUrl', proxyUrl)
          },
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // 将 node_modules 中的代码单独打包成一个 JS 文件
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
        },
      },
    },
  })
})
