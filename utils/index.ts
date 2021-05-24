/*
 * @Author: shuhongxie
 * @Date: 2021-05-24 10:41:44
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-24 19:35:02
 * @FilePath: /nuxt-blog/utils/index.ts
 */

/**
 * @description: 根据页面自动展开或者关闭侧边栏效果
 * @param {boolean} sidebarStatus 侧边栏状态
 * @param {function} func 执行函数
 * @return {*}
 */
export function handleSidebar(sidebarStatus: boolean, func: () => any): void {
  const bodyWidth: number = document.body.clientWidth
  const navNode = document.querySelector('.header') as HTMLElement
  if (!sidebarStatus) {
    document.body.style.paddingLeft = '300px'
    navNode.style.width = bodyWidth - 300 + 'px'
  } else {
    document.body.style.paddingLeft = '0'
    navNode.style.width = '100%'
  }
  typeof func === 'function' && func()
}

// 初始化创建复制按钮
export function initCopyBtn(): void {
  const pre = document.querySelectorAll('pre') as NodeList
  for (let i = 0; i < pre.length; i++) {
    const copyElDiv = document.createElement('div')
    const copyElIcon = document.createElement('i')
    const copyElSpan = document.createElement('span')
    const copyTextNode = document.createTextNode('Copy Success')
    copyElDiv.setAttribute('class', 'copy_box')
    copyElDiv.appendChild(copyElIcon)
    copyElSpan.appendChild(copyTextNode)
    copyElDiv.appendChild(copyElSpan)
    pre[i].appendChild(copyElDiv)
  }

  for (let i = 0; i < pre.length; i++) {
    pre[i].addEventListener('click', (e: Event | null): void => {
      if ((e?.target as Node).nodeName === 'I') {
        ;(pre[i] as any).lastChild.lastChild.style.opacity = '1'
        const range = document.createRange()
        range.selectNode((pre[i] as any).firstElementChild) // 移除剪切板中内容
        ;(window as any)
          .getSelection()
          .removeAllRanges()(
            // 添加新的内容到剪切板
            window as any
          )
          .getSelection()
          .addRange(range)
        document.execCommand('copy')
        ;(window as any).getSelection().removeAllRanges()
        setTimeout(() => {
          ;(pre[i] as any).lastChild.lastChild.style.opacity = '0'
        }, 1000)
      }
    })
    // pre[i].onclick = (e: Event): void => {
    //   if (e.target.nodeName === 'I') {
    //     pre[i].lastChild.lastChild.style.opacity = '1'
    //     const range = document.createRange()
    //     range.selectNode(pre[i].firstElementChild)
    //     // 移除剪切板中内容
    //     window.getSelection().removeAllRanges()
    //     // 添加新的内容到剪切板
    //     window.getSelection().addRange(range)
    //     document.execCommand('copy')
    //     window.getSelection().removeAllRanges()
    //     setTimeout(() => {
    //       pre[i].lastChild.lastChild.style.opacity = '0'
    //     }, 1000)
    //   }
    // }
  }
}
