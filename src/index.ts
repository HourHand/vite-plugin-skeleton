/* eslint-disable @typescript-eslint/no-unused-vars */
// import path from 'path'
import type { PluginOption } from 'vite'
// const fs = require('fs')
import { parse } from '@vue/compiler-sfc'

console.log('path', process.cwd())

let exclude = ['App.vue']

export default function vitePluginTemplate(options: any): PluginOption {
  function validId(id: string): boolean {
    exclude = exclude.concat(options?.excludes)
    const isIn = exclude.find((item) => {
      return id.includes(item)
    })
    return isIn ? true : false
  }

  return {
    name: 'vite-plugin-vue-skeleton',
    enforce: 'pre', // post
    transform(code, id) {
      // v-for v-if/v-else-if/v-else {{ }} v-model v-text v-html v-show v-model v-slot
      const vueRE = /\.vue$/
      const vi = validId(id)
      if (!vueRE.test(id) || vi) return code
      // const list = code.match(flagRE)

      // let transformCode = code
      console.log('\n----', id)
      const { descriptor } = parse(code)
      const { template } = descriptor
      console.log(template?.content)
      // eslint-disable-next-line no-debugger
      debugger
      // template!.ast.children = [
      //   ...template!.ast.children,
      //   ...template!.ast.children,
      // ]
    },
  }
}
