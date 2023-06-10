import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons({ scale: 1.2, warn: true })],
  shortcuts: [
    ['wh-full', 'w-full h-full'],
    ['f-c-c', 'flex justify-center items-center'],
    ['flex-col', 'flex flex-col'],
    ['text-ellipsis', 'truncate'],
    ['enter-from', 'animate-name'],
    ['icon-btn', 'text-16 inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary !outline-none']
  ],
  rules: [
    ['enter-x', { animation: 'names .4s ease-in-out 0.3s', }],
    [/^bc-(.+)$/, ([, color]) => ({ 'border-color': `#${color}` })],
    ['card-shadow', { 'box-shadow': '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017' }],
    ['sm', { width: '576px' }],
    ['md', { width: '768px' }],
    ['lg', { width: '992px' }],
    ['xl', { width: '1200px' }],
    ['2xl', { width: '1600px' }],
    ['2xl', { animation: '1600px', }],
    ['bg-main', { background: '#f0f2f5' }],
    [/^py-(.+)$/, ([, index]) => ({ 'padding': `${index}px 0` })],
    [/^br-(.+)$/, ([, index]) => ({ 'borderRadius: ': `${index}px` })],
  ],
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      dark_bg: 'var(--dark-bg)',
    },
  },
  safelist: [...["search", "edit", "check", "message", "star-off", "delete", "add", "share", "close-small"].map((v) => `ci:${v}`)],
})
