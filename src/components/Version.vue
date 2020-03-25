<template>
  <div class="version">{{version}}</div>
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
  .version {
    position: absolute;
    bottom: 0;
    left: 0;
    color:grey;
  }
</style>