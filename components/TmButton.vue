<template>
  <component
    :is="tag"
    v-bind="{ target, type, disabled, href }"
    :class="[
      'button',
      styles,
      'dib',
      'lh-solid',
      'fw6',
      'bn',
      'outline-0',
      'elevation-1',
      'elevation-hover',
      'elevation-hover-8',
    ]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    size: {
      /**
       * `s` | `m` | `l` | `xl`
       */
      type: String,
      default: 'm',
    },
    /**
     * Disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Type
     */
    type: {
      type: String,
      default: 'submit',
    },
    /**
     * href
     */
    href: {
      type: String,
      default: null,
    },
    /**
     * target
     */
    target: {
      type: String,
      default: null,
    },
    /**
     * Classes
     */
    classes: {
      type: String,
      default: '',
    },
  },
  computed: {
    styles() {
      let classes = this.classes
      switch (this.size) {
        case 's':
          classes += ' rf-1 pv4 ph6'
          break
        case 'l':
          classes += ' rf1 pv6 ph8'
          break
        case 'xl':
          classes += ' rf2 pv7 ph9'
          break
        default:
          classes += ' rf0 pv5 ph7'
      }
      return classes
    },
    tag() {
      if (this.href) {
        return 'a'
      } else {
        return 'button'
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.button
  background-color #CFD1E7
  color #000000
  border-radius 0.5em // relative border-radius
  // testing for sub-pixel rounding glitches on transform
  &:hover
    transform translateY(-2px)
  &:active
    transform none
</style>
