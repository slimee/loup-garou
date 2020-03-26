<template>
  <div id="home">
    <centered>
      <get-name v-if="playerUnknown"/>
    </centered>
    <version/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Version from '../components/Version'
  import Centered from '../components/layout/Centered'
  import FlexColumn from '../components/layout/FlexColumn'
  import GetName from '../components/GetName'

  export default {
    name: 'Home',
    components: {
      GetName,
      FlexColumn,
      Centered,
      Version,
    },
    mounted() {
      this.$store.dispatch('app/mount')
    },
    computed: {
      ...mapGetters('player', { playerUnknown: 'unknown' }),
    },
  }
</script>
