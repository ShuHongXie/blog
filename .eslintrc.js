/*
 * @Author: shuhongxie
 * @Date: 2021-05-21 09:30:59
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-21 18:33:47
 * @FilePath: /nuxt-blog/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error',
      // 如果插件配置中修改了相关选项，
      // 则必须在此添加相对应的自定义规则否则就会出现编辑器格式化后ESlint检查无法通过的情况。
      {
        semi: false, // 是否需要分号
        singleQuote: true, // 是否启用单引号
        trailingComma: 'none', // 对象后面是否加逗号
        arrowParens: 'avoid', // 箭头函数参数是否必须加括号 always: 总是 avoid: 随意
        endOfLine: 'auto',
        eslintIntegratio: true,
        htmlWhitespaceSensitivity: 'ignore',
        vueIndentScriptAndStyle: true, // 缩进vue文件里面的 script,style标签里面的代码
        tabWidth: 2,
        printWidth: 100
      }
    ]
  }
}
