<template>
  <div>
    <surface-svg>
      <landscape/>
      <players :players="players"/>
    </surface-svg>
    <my-menu class="menu-button" @click="showMenu=true"></my-menu>
    <my-menu-layer :visible="showMenu" @layoutClick="showMenu = false">
      <div class="menu" :class="{ opaque:showMenu }">
        <flex-column>
          <div @click="goToHome">🚪Quitter</div>
          <flex-line><version/></flex-line>
        </flex-column>
      </div>
    </my-menu-layer>
  </div>
</template>

<script>
  import { mapGetters, mapState, mapActions } from 'vuex'
  import FlexColumn from '../components/layout/FlexColumn'
  import PlayersList from '../components/players-list'
  import SurfaceSvg from '../components/layout/SurfaceSvg'
  import Landscape from '../components/loupgarou/Landscape'
  import Players from '../components/loupgarou/Players'
  import MyMenu from '../components/my-menu'
  import MyMenuLayer from '../components/my-menu-layer'
  import Version from '../components/Version'
  import FlexLine from '../components/layout/FlexLine'

  export default {
    name: 'loup-garou',
    components: { FlexLine, Version, MyMenuLayer, MyMenu, Players, Landscape, SurfaceSvg, PlayersList, FlexColumn },
    data: () => ({ showMenu: false }),
    computed: {
      ...mapState('game', { game: 'current' }),
      ...mapGetters('game', ['players']),
      players() {
        return this.game && this.game.players
      },
      name() {
        return this.game && this.game.name
      },
    },
    methods:{
      ...mapActions('router', ['goToHome'])
    }
  }
</script>

<style scoped>
  .menu-button {
    position: absolute;
    left: 0.5em;
    bottom: 0.5em;
  }

  .menu {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: whitesmoke;
    padding: 0.3em;
    border-radius: 2px;
    -webkit-box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);
    transform: translate(-120%, 0);
    transition: transform ease .3s;
  }

  .opaque {
    transform: translate(0, 0);
  }
</style>