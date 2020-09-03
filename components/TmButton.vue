<template>
  <component
    :is="tag"
    v-bind="{ target, type, disabled, href, variant, size }"
    :class="[
      'tm-button',
      `tm-button__size__${size}`,
      `tm-button__variant__${variant}`,
      'lh-solid',
      styles,
    ]"
    :style="{
      '--background-color': backgroundColor,
      '--border-color': borderColor,
      '--color': color,
      '--glow-color': glowColor,
    }"
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
     * Variant: `text` | `outlined` | `contained`
     */
    variant: {
      type: String,
      default: 'contained',
    },
    /**
     * CSS color of background
     */
    backgroundColor: {
      type: String,
      default: 'rgb(80, 100, 251)', // TODO: use a color variable
    },
    /**
     * CSS color of border
     */
    borderColor: {
      type: String,
      default: 'rgb(80, 100, 251)', // TODO: use a color variable
    },
    /**
     * CSS color of border
     */
    color: {
      type: String,
      default: '#ffffff', // TODO: use a color variable
    },
    /**
     * CSS color of glow
     */
    glowColor: {
      type: String,
      default: null, // TODO: use a color variable
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
     * Tag
     */
    tag: {
      type: String,
      default: 'button',
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
          classes += ' rf-1'
          break
        case 'l':
          classes += ' rf1'
          break
        case 'xl':
          classes += ' rf2'
          break
        default:
          classes += ' rf0'
      }
      return classes
    },
  },
}
</script>

<style lang="stylus" scoped>
.tm-button
  display inline-block
  font-weight var(--font-weight-b--1)
  color var(--color)
  border 0.125rem solid transparent
  border-radius 0.5em // relative border-radius
  outline 0
  cursor pointer
  user-select none
  hover-raise()
  text-align center
  text-decoration none

  // sizes
  &__size__s
    padding var(--spacing-4) var(--spacing-6)
  &__size__m
    padding var(--spacing-5) var(--spacing-7)
  &__size__l
    padding var(--spacing-6) var(--spacing-8)
  &__size__xl
    padding var(--spacing-7) var(--spacing-9)

  &__variant__text
    background-color transparent
  &__variant__outlined
    background-color transparent
    border-color var(--border-color)
  &__variant__contained
    background-color var(--background-color)
    box-shadow var(--elevation-4)
    hover-elevation(8, offset: -0.125rem, shadow: var(--glow-12) var(--glow-color, var(--background-color, #00ff00)))

button:disabled
  opacity 0.5
</style>
