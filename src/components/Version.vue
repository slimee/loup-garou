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
        return `v.${this.versionNumber}`
      },
    },
  }
</script>

<style scoped>
</style>