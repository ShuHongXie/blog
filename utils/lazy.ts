/*
 * @Author: 谢树宏
 * @Date: 2021-06-09 11:36:22
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-10 11:44:30
 * @FilePath: /nuxt-blog/utils/lazy.ts
 */
import Vue from 'vue'
import { ComponentOptions } from 'vue/types/options'

/**
 * @Description: 设置样式
 * @Author: shuhongxie
 * @param {any} arg 传入的类型
 * @param {HTMLElement} el DOM元素
 * @param {string} value 图片url值
 */
function setStyle(el: Element, value: string) {
  el.setAttribute('src', value)
}

/**
 * @Description: 初始化图片懒加载
 * @Author: shuhongxie
 * @param {HTMLElement} el DOM元素
 * @param {DirectiveBinding} binding
 */
const lazy: ComponentOptions<Vue> = {
  methods: {
    initLazy(className: string) {
      const imgList = document.querySelectorAll(`${className} img`)
      console.log(imgList)
      // 默认图片
      const beforeHandImage = 'http://www.ay1.cc/img?w=300&h=300'
      // 屏幕高度
      const contentHeight = document.body.clientHeight
      // 图片原始值
      const originImgSrcList: string[] = []
      // 不使用offsetTop是因为如果父级有定位的话 那么offsetTop是相对于父级而不是浏览器窗口
      const elOffsetTopList: number[] = []
      imgList.forEach((el, index) => {
        const elOffsetTop = el.getBoundingClientRect().top + document.documentElement.scrollTop
        elOffsetTopList.push(elOffsetTop)
        originImgSrcList.push(el.getAttribute('src') as string)
        if (elOffsetTop > contentHeight) {
          // 没有就直接赋值当前图片
          setStyle(el, beforeHandImage)
        } else {
          // setStyle(el, binding.value)
        }
      })

      window.addEventListener('scroll', () => {
        const scrollTop =
          document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        // 刷新完重新定义高度
        imgList.forEach((el, index) => {
          const elOffsetTop = el.getBoundingClientRect().top + document.documentElement.scrollTop
          if (scrollTop + contentHeight > elOffsetTop) {
            setStyle(el, originImgSrcList[index])
          }
        })
      })
    }
  }
}

export default lazy
