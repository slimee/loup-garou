<template>
  <flex-column class="full-height">
    <spacer/>
    <flex-line>
      <spacer/>
      <slot/>
      <spacer/>
    </flex-line>
    <spacer/>
  </flex-column>
</template>
<script>
  import FlexColumn from './FlexColumn'
  import FlexLine from './FlexLine'
  import Spacer from './Spacer'

  export default {
    name: 'Centered',
    components: { FlexColumn, FlexLine, Spacer },
  }
</script>