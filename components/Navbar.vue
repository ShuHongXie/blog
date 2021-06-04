<!--
 * @Author: 谢树宏
 * @Date: 2021-06-04 16:12:41
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-04 18:00:42
 * @FilePath: /nuxt-blog/components/Navbar.vue
-->
<template>
  <div class="markdown-navigation">
    <div
      v-for="t in getNavStructure()"
      :key="`title_anchor_${Math.random().toString(36).substring(2)}`"
      :class="['title-anchor', `title-level${t.level}`, currentListNo === t.listNo ? 'active' : '']"
      @click="evt => setEdit(evt, item)"
    >
      <small v-if="ordered">{{ t.listNo }}</small>
      {{ t.text }}
    </div>
  </div>
</template>

<script>
  const throttle = require('lodash.throttle')
  export default {
    props: {
      source: {
        type: String,
        default: ''
      },
      ordered: {
        type: Boolean,
        default: true
      },
      headingTopOffset: {
        type: Number,
        default: 0
      },
      updateHashAuto: {
        type: Boolean,
        default: true
      },
      declarative: {
        type: Boolean,
        default: false
      },
      onNavItemClick: {
        type: Function,
        default: () => {}
      },
      onHashChange: {
        type: Function,
        default: () => {}
      }
    },
    data() {
      return {
        currentListNo: '',
        navStructure: []
      }
    },
    mounted() {
      console.log(this.source)
      this.refreshNav(this.source)
    },
    beforeDestroy() {
      if (this.addTargetTimeout) {
        clearTimeout(this.addTargetTimeout)
      }
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout)
      }
      document.removeEventListener('scroll', this.winScroll, false)
      window.removeEventListener('hashchange', this.winHashChange, false)
    },
    methods: {
      setEvt(evt, t) {
        const currentHash = this.declarative
          ? `${t.listNo}-${t.text}` // 加入listNo确保hash唯一ZZ
          : `heading-${t.index}`
        if (t.listNo !== this.currentListNo) {
          this.onHashChange(currentHash, this.getCurrentHashValue())
        }

        // Nav item clicking callback
        this.onNavItemClick(evt, evt.target, currentHash)

        this.updateHash(currentHash)
        this.scrollToTarget(currentHash)
        this.currentListNo = t.listNo
      },
      safeScrollTo(element, top, left = 0, smooth) {
        if (!element) return
        if (typeof element.scrollTo === 'function') {
          const scrollConfig = {
            top,
            left
          }
          if (smooth) {
            scrollConfig.behavior = 'smooth'
          }
          element.scrollTo(scrollConfig)
        } else if (element === window) {
          document.documentElement.scrollTop = top
          document.documentElement.scrollLeft = left
        } else {
          element.scrollTop = top
          element.scrollLeft = left
        }
      },
      refreshNav(source) {
        if (this.addTargetTimeout) {
          clearTimeout(this.addTargetTimeout)
        }
        this.navStructure = this.getNavStructure(source)
        this.addTargetTimeout = setTimeout(() => {
          this.initHeadingsId()
          if (this.navStructure.length) {
            const { listNo } = this.navStructure[0]
            this.currentListNo = listNo
          }
          document.addEventListener('scroll', this.winScroll, false)
          window.addEventListener('hashchange', this.winHashChange, false)
        }, 500)
      },
      trimArrZero(arr) {
        let start, end
        for (start = 0; start < arr.length; start++) {
          if (arr[start]) {
            break
          }
        }
        for (end = arr.length - 1; end >= 0; end--) {
          if (arr[end]) {
            break
          }
        }
        return arr.slice(start, end + 1)
      },
      getNavStructure(source) {
        console.log(source)
        // const contentWithoutCode = source
        //   .replace(/^[^#]+\n/g, '')
        //   .replace(/(?:[^\n#]+)#+\s([^#\n]+)\n*/g, '') // 匹配行内出现 # 号的情况
        //   .replace(/^#\s[^#\n]*\n+/, '')
        //   .replace(/```[^`\n]*\n+[^```]+```\n+/g, '')
        //   .replace(/`([^`\n]+)`/g, '$1')
        //   .replace(/\*\*?([^*\n]+)\*\*?/g, '$1')
        //   .replace(/__?([^_\n]+)__?/g, '$1')
        //   .trim()

        // const pattOfTitle = /#+\s([^#\n]+)\n*/g
        // const matchResult = contentWithoutCode.match(pattOfTitle)

        // if (!matchResult) {
        //   return []
        // }

        // const navData = matchResult.map((r, i) => ({
        //   index: i,
        //   level: r.match(/^#+/g)[0].length,
        //   text: r.replace(pattOfTitle, '$1')
        // }))

        // let maxLevel = 0
        // navData.forEach(t => {
        //   if (t.level > maxLevel) {
        //     maxLevel = t.level
        //   }
        // })
        // const matchStack = []
        // // 此部分重构，原有方法会出现次级标题后再次出现高级标题时，listNo重复的bug
        // for (let i = 0; i < navData.length; i++) {
        //   const t = navData[i]
        //   const { level } = t
        //   while (matchStack.length && matchStack[matchStack.length - 1].level > level) {
        //     matchStack.pop()
        //   }
        //   if (matchStack.length === 0) {
        //     const arr = new Array(maxLevel).fill(0)
        //     arr[level - 1] += 1
        //     matchStack.push({
        //       level,
        //       arr
        //     })
        //     t.listNo = this.trimArrZero(arr).join('.')
        //     continue
        //   }
        //   const { arr } = matchStack[matchStack.length - 1]
        //   const newArr = arr.slice()
        //   newArr[level - 1] += 1
        //   matchStack.push({
        //     level,
        //     arr: newArr
        //   })
        //   t.listNo = this.trimArrZero(newArr).join('.')
        // }
        // return navData
        return []
      },
      scrollToTarget(dataId) {
        if (this.scrollTimeout) {
          clearTimeout(this.scrollTimeout)
        }

        this.scrollTimeout = setTimeout(() => {
          const target = document.querySelector(`[data-id="${dataId}"]`)
          if (target && typeof target.offsetTop === 'number') {
            this.safeScrollTo(window, target.offsetTop - this.headingTopOffset, 0)
          }
        }, 0)
      },
      initHeadingsId() {
        const headingId = decodeURIComponent(
          this.declarative
            ? window.location.hash.replace(/^#/, '').trim()
            : (window.location.hash.match(/heading-\d+/g) || [])[0]
        )

        this.navStructure.forEach(t => {
          const headings = document.querySelectorAll(`h${t.level}`)
          const curHeading = Array.prototype.slice
            .apply(headings)
            .find(h => h.innerText.trim() === t.text.trim() && (!h.dataset || !h.dataset.id))

          if (curHeading) {
            curHeading.dataset.id = this.declarative
              ? `${t.listNo}-${t.text}`
              : `heading-${t.index}`

            if (headingId && headingId === curHeading.dataset.id) {
              this.scrollToTarget(headingId)
              this.currentListNo = t.listNo
            }
          }
        })
      },
      getHeadingList() {
        const headingList = []

        this.navStructure.forEach(t => {
          const headings = document.querySelectorAll(`h${t.level}`)
          const curHeading = Array.prototype.slice
            .apply(headings)
            .find(
              h =>
                h.innerText.trim() === t.text.trim() &&
                !headingList.find(x => x.offsetTop === h.offsetTop)
            )
          if (curHeading) {
            headingList.push({
              dataId: this.declarative ? t.text : `heading-${t.index}`,
              listNo: t.listNo,
              offsetTop: curHeading.offsetTop
            })
          }
        })

        return headingList
      },
      getCurrentHashValue() {
        return decodeURIComponent(window.location.hash.replace(/^#/, ''))
      },
      winScroll: throttle(() => {
        if (this.scrollEventLock) return

        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

        const newHeadingList = this.getHeadingList().map(h => ({
          ...h,
          distanceToTop: Math.abs(scrollTop + this.headingTopOffset - h.offsetTop)
        }))
        const distanceList = newHeadingList.map(h => h.distanceToTop)
        const minDistance = Math.min(...distanceList)
        const curHeading = newHeadingList.find(h => h.distanceToTop === minDistance)

        if (!curHeading) return

        if (this.updateHashAuto) {
          // Hash changing callback
          if (curHeading.dataId !== this.getCurrentHashValue()) {
            this.onHashChange(curHeading.dataId, this.getCurrentHashValue())
          }

          this.updateHash(curHeading.dataId)
        }
        if (currentNavElement) {
          const { container } = this.refs
          const { offsetTop } = currentNavElement
          const { scrollTop: containerScrollTop, offsetHeight: containerOffsetHeight } = container
          const min = containerScrollTop + 0.3 * containerOffsetHeight
          const max = containerScrollTop + 0.7 * containerOffsetHeight
          if (offsetTop < min || offsetTop > max) {
            const targetTop = offsetTop - 0.2 * containerOffsetHeight
            this.safeScrollTo(container, targetTop, 0, true)
          }
        }
        this.currentListNo = curHeading.listNo
      }, 300),
      winHashChange() {
        this.scrollToTarget(this.navStructure)
      },
      updateHash(value) {
        if (this.updateHashTimeout) {
          clearTimeout(this.updateHashTimeout)
        }

        this.updateHashTimeout = setTimeout(() => {
          window.history.replaceState(
            {},
            '',
            `${window.location.pathname}${window.location.search}#${value}`
          )
        }, 0)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .markdown-navigation {
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Helvetica', 'Arial',
      'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-width: 0;
    width: 200px;
  }
  .markdown-navigation::-webkit-scrollbar {
    width: 0;
  }

  .markdown-navigation .title-anchor {
    display: block;
    color: #bbb;
    transition: all 0.2s;
    margin: 0.8em 0;
    font-weight: lighter;
    line-height: 2em;
    padding-right: 1.8em;
    cursor: pointer;
  }

  .markdown-navigation .title-anchor:hover,
  .markdown-navigation .title-anchor.active {
    background-color: #f8f8f8;
    text-decoration: inherit;
  }

  .markdown-navigation .title-anchor.active {
    color: #007fff;
  }

  .markdown-navigation .title-anchor small {
    margin: 0 0.8em;
  }

  .markdown-navigation .title-level1 {
    color: #000;
    font-size: 1.2em;
    padding-left: 1em;
    font-weight: normal;
  }

  .markdown-navigation .title-level2 {
    color: #333;
    font-size: 1em;
    padding-left: 1em;
    font-weight: normal;
  }

  .markdown-navigation .title-level3 {
    color: #666;
    font-size: 0.8em;
    padding-left: 3em;
    font-weight: normal;
  }

  .markdown-navigation .title-level4 {
    color: #999;
    font-size: 0.72em;
    padding-left: 5em;
  }

  .markdown-navigation .title-level5 {
    color: #aaa;
    font-size: 0.72em;
    padding-left: 7em;
  }

  .markdown-navigation .title-level6 {
    color: #bbb;
    font-size: 0.72em;
    padding-left: 9em;
  }
</style>
