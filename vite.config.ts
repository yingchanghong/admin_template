import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
function _resolve(dir) {
  return path.resolve(__dirname, dir);
}
export default defineConfig({
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
    })
  ],
  resolve: {
    alias: {
      '~': _resolve('src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
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
