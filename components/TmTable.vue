<template>
  <div>
    <table>
      <tbody>
        <tr>
          <td>Sept 1-17</td>
          <td>Tuesdays</td>
          <td>16:00-17:00 UTC</td>
        </tr>
        <tr>
          <td>Sept 1-17</td>
          <td>Wednesdays</td>
          <td>16:00-17:00 UTC</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
table
  border-collapse collapse
  border-radius 0.5rem
  overflow hidden
  width 100%
  margin 2rem 0

td, th
  text-align left
  padding 1rem 2rem
  font-size 1rem
  line-height 1.5
  letter-spacing 0.02em
  color var(--gray-900)

tr
  background-color #121435
  & + &
    border-top 1px solid #282B53

td
  &:nth-child(2)
    font-weight 600
</style>
