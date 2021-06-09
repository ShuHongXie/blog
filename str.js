/*
 * @Author: shuhongxie
 * @Date: 2021-05-24 15:53:43
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-05 14:08:02
 * @FilePath: /nuxt-blog/str.js
 */

import marked from 'marked'

marked.setOptions({
  // highlight: code => hljs.highlightAuto(code).value
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  smartLists: true,
  xhtml: true,
  smartypants: false,
  sanitize: true
})

export const str = `## 前言

前段时间自己用Next.js的项目部署上线了，记录下Next.js的部署方式

## Next.js项目模块建议

使用自带的dynamic动态导入模块

## 开始部署


1. 删除node_modules文件夹(文件过大，等在服务器重新下载比较合适)

2. Linux下使用scp命令传输到服务器/window下使用xftp工具直接拖
   > scp -r 本地文件夹地址 服务器用户名@服务器ip:远程目录地址

3. 远程目录下npm install 安装依赖 修改package.json 的npm start命令为
   > NODE_ENV=production node server.js

4. npm run build 

5. pm2启动 
   > pm2 start npm --name "your_server_name" -- run start`
