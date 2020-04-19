<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import FlexColumn from './components/layout/FlexColumn'

  export default {
    components: { FlexColumn },
    computed: {
      ...mapState('socket', ['connected']),
    },
    mounted() {
      this.$store.dispatch('app/mount')
    },
  }
</script>