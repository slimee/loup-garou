<template>
  <span>{{version}}</span>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Version',
    computed: {
      ...mapState('app', { versionNumber: 'version' }),
      version() {
        return `${this.versionNumber}`
      },
    },
  }
</script>

<style scoped>
</style>