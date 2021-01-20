<template>
  <div></div>
</template>

<script>
export default {
  // https://nuxtjs.org/docs/2.x/get-started/routing/#automatic-routes
  // https://stackoverflow.com/questions/49952420/how-to-use-asterisk-in-nuxtjs-route
  asyncData({ params, redirect }) {
    redirect(302, '/testnet')
  },
}
</script>

<style lang="stylus" scoped></style>
