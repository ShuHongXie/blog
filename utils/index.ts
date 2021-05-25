/* eslint-disable no-lonely-if */
/*
 * @Author: shuhongxie
 * @Date: 2021-05-24 10:41:44
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-25 19:48:43
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

/**
 * @description: 初始化复制按钮
 * @param {*}
 * @return {*}
 */
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
        ;(window as any).getSelection().removeAllRanges() // 添加新的内容到剪切板
        ;(window as any).getSelection().addRange(range)
        document.execCommand('copy')
        ;(window as any).getSelection().removeAllRanges()
        setTimeout(() => {
          ;(pre[i] as any).lastChild.lastChild.style.opacity = '0'
        }, 1000)
      }
    })
  }
}
export interface ParticlesObjct {
  x: number
  y: number
  r: number
  d: number
}

/**
 * @description: 初始化雪花
 * @param {string} className 类名
 * @return {*}
 */
export function initSnowflake(className: string): void {
  const canvas = document.getElementById(className) as HTMLCanvasElement
  console.log(canvas)

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  // canvas dimensions
  const W = window.innerWidth
  const H = window.innerHeight
  canvas.width = W
  canvas.height = H

  // snowflake particles
  const mp = 25 // max particles
  const particles: ParticlesObjct[] = []
  for (let i = 0; i < mp; i++) {
    particles.push({
      x: Math.random() * W, // x-coordinate
      y: Math.random() * H, // y-coordinate
      r: Math.random() * 4 + 1, // radius
      d: Math.random() * mp // density
    })
  }

  // Lets draw the flakes
  function draw(): void {
    ctx.clearRect(0, 0, W, H)

    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
    ctx.beginPath()
    for (let i = 0; i < mp; i++) {
      const p = particles[i]
      ctx.moveTo(p.x, p.y)
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true)
    }
    ctx.fill()
    update()
  }

  // Function to move the snowflakes
  // angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
  let angle = 0
  function update(): void {
    angle += 0.01
    for (let i = 0; i < mp; i++) {
      const p = particles[i]
      // Updating X and Y coordinates
      // We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
      // Every particle has its own density which can be used to make the downward movement different for each flake
      // Lets make it more random by adding in the radius
      p.y += Math.cos(angle + p.d) + 1 + p.r / 2
      p.x += Math.sin(angle) * 2

      // Sending flakes back from the top when it exits
      // Lets make it a bit more organic and let flakes enter from the left and right also.
      if (p.x > W + 5 || p.x < -5 || p.y > H) {
        if (i % 3 > 0) {
          // 66.67% of the flakes
          particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d }
        } else {
          // If the flake is exitting from the right
          if (Math.sin(angle) > 0) {
            // Enter from the left
            particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d }
          } else {
            // Enter from the right
            particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d }
          }
        }
      }
    }
  }

  // animation loop
  setInterval(draw, 33)
}
