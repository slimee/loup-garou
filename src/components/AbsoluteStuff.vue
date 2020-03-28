<template>
  <div>
    <version/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Version from './Version'
  import Chat from './chat'

  export default {
    name: 'absolute-stuff',
    components: { Chat, Version },
    computed: {
      ...mapState('socket', ['connected']),
    },
  }
</script>

<style scoped>

</style>