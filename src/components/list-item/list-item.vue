<template>
  <a class="am-list-item" :href="href">
    <div class="am-list-thumb" v-once>
      <slot name="icon"></slot>
    </div>

    <div class="am-list-content">
      <div class="am-list-title">{{title}}<i v-if="reddot" class="reddot"></i></div>
      <div class="am-list-brief" v-text="label"></div>
    </div>
    <div class="am-list-extra" v-if="hasEmpty(value)" v-text="value"></div>

    <div class="am-list-thumb right" v-once>
      <slot name="icon right"></slot>
    </div>

    <div class="am-list-arrow" v-if="isLink" v-once>
      <span class="am-icon arrow horizontal"></span>
    </div>
  </a>
</template>

<script>
function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}
/**
 * list-item
 * @module components/list-item
 * @desc 单元格，依赖 list
 *
 * @param {string} [to] - 跳转链接
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {string} [value] - 右侧显示文字
 * @param {boolean} [reddot=false]  - 消息红点提示
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {slot} [icon] - 左侧图标
 * @param {slot} [icon right] - 右侧图标
 *
 * @example
 * <list-item title="标题文字" is-link value="描述文字"></list-item>
 */
export default {
  name: 'list-item',
  props: {
    to: String,
    title: [String, Number],
    label: [String, Number],
    value: [String, Number],
    reddot: Boolean,
    isLink: Boolean
  },
  computed: {
    href () {
      let href
      if (this.$router && this.to) {
        const base = this.$router.history.base
        const resolved = this.$router.match(this.to)
        const fullPath = resolved.redirectedFrom || resolved.fullPath
        href = base ? cleanPath(base + fullPath) : fullPath
      } else {
        href = this.to
      }
      if (href && !this.added && this.$router) {
        this.$nextTick(() => {
          this.added = true
          this.$el.addEventListener('click', this.handleClick)
        })
      }
      return href
    }
  },
  methods: {
    handleClick ($event) {
      $event.preventDefault()
      this.$router.push(this.href)
    },
    hasEmpty (value) {
      return !(value === undefined || value.toString().trim() === '')
    }
  }
}
</script>

<style lang="sass">
/**
 * am-list
 * 样式详见：http://am-team.github.io/antui/docs/#List%20列表
 */

.am-list:not([am-version]) .am-list-item .am-list-thumb:empty {
  margin-left: 0;
  margin-right: 0;
}
</style>
