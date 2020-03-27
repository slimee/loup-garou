<template>
  <centered>
    <flex-column>
      <img alt="Loup-garou logo" src="../assets/logo-jeu.png">
      <display-text class="text-dark text-alone">Quel est ton nom?</display-text>
      <input type="text" class="text-dark input-text-alone margin-top" autofocus v-model="name" v-on:keyup.enter="go"/>
      <flex-line>
        <input type="button" class="text-dark input-button-alone" :disabled="!hasName" @click="go" value="Ok"/>
        <input type="button" class="text-dark input-button-alone" disabled value="Partir!"/>
      </flex-line>
    </flex-column>
  </centered>
</template>

<script>
  import { mapActions } from 'vuex'
  import Centered from '../components/layout/Centered'
  import FlexLine from '../components/layout/FlexLine'
  import DisplayText from '../components/display/DisplayText'
  import FlexColumn from '../components/layout/FlexColumn'

  export default {
    name: 'GetName',
    components: { FlexColumn, DisplayText, FlexLine, Centered },
    data: () => ({
      name: '',
    }),
    computed: {
      hasName() {
        return this.name && this.name.length > 2
      },
    },
    methods: {
      ...mapActions('player', ['selectName']),
      go() {
        if (this.hasName) {
          this.selectName(this.name)
        }
      },
    },
  }
</script>

<style scoped>

</style>