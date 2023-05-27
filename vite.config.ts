import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
function _resolve(dir) {
  return path.resolve(__dirname, dir);
}
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n"],
      // resolvers: [ElementPlusResolver()],
      dts: "src/auto-imports.d.ts",
      vueTemplate: true,
      eslintrc: { // 生成eslint的配置文件，需要在eslint配置中导入
        enabled: true, // Default `false`
      },
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      dts: 'src/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '~': _resolve('src')
    },
  },
})
