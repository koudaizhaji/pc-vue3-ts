// uno.config.ts
import { defineConfig } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        //把自己的svg文件转换为class，这里的my-icon名称随便取，使用的时候通过i-my-icon-[filename]。
        // 'my-icon': FileSystemIconLoader(
        //    './src/assets/svg',
        //     svg => svg.replace(/#FFF/, 'currentColor'),
        // ),
        // carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        // mdi: () => import('@iconify-json/mdi/icons.json').then((i) => i.default)
        // logos: () => import('@iconify-json/logos/icons.json').then(i => i.default),
        // tabler: () => import('@iconify-json/tabler/icons.json').then((i) => i.default)
        ic: () => import('@iconify-json/ic/icons.json').then((i) => i.default)
      },
      scale: 1.2,
      warn: true
    })
  ]
})
