<template>
  <div>
    <div @click="showMenu=true" class="menu-button">☰</div>
    <my-menu-layer :visible="showMenu" @layoutClick="showMenu = false">
      <flex-column class="menu" :class="{ opaque:showMenu }">
        <div v-for="menuItem in items" v-if="menuItem" @click="menuItem.action">{{menuItem.label}}</div>
      </flex-column>
    </my-menu-layer>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Version from './Version'
  import MessagesList from './messages-list'
  import ChatInput from './chat-input'
  import FlexLine from './layout/FlexLine'
  import MyMenuLayer from './my-menu-layer'
  import FlexColumn from './layout/FlexColumn'

  export default {
    name: 'my-menu',
    data: () => ({ showMenu: false }),
    props: ['items'],
    components: { FlexColumn, MyMenuLayer, FlexLine, ChatInput, MessagesList, Version },
    computed: {
      ...mapState('socket', ['connected']),
    },
  }
</script>

<style scoped>

  .menu-button {
    cursor: pointer;
    position: absolute;
    left: 0.5em;
    bottom: 0.5em;
  }

  .menu {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: whitesmoke;
    border-radius: 2px;
    -webkit-box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
    transform: translate(-120%, 0);
    transition: transform ease-in .2s;
  }

  .menu > * {
    padding: 0.3em;
  }

  .menu > *:hover {
    background-color: #508b4a;
    cursor: pointer;
  }

  .opaque {
    transform: translate(0, 0);
  }

</style>