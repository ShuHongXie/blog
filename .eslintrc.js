/*
 * @Author: shuhongxie
 * @Date: 2021-05-21 09:30:59
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-07 11:30:02
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
    'vue/no-v-html': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/class-name-casing': 'off'
  }
}
