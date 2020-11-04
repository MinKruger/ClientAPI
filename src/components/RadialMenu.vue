<template>
  <div id="app">
    <radial-menu
      id = "radial"
      style=""
      :itemSize="50"
      :radius="120"
      :angle-restriction="180">
        <radial-menu-item 
          v-for="(item, index) in items" 
          :key="index" 
          style="background-color: white" 
          @click="() => handleClick(item)">
          <span>{{item}}</span>
        </radial-menu-item>
      </radial-menu>
  </div>
</template>

<script>
import { RadialMenu,  RadialMenuItem } from 'vue-radial-menu'

export default {
  name: 'app',
  components: {
    RadialMenu,
    RadialMenuItem
  },
  data () {
    return {
      items: ['Home','Clients', 'Products', 'Sales'],
    }
  },
  methods: {
    handleClick (item) {
      this.$router.push({ name: item })
    }
  }
}
</script>

<style scoped>
  #radial {
    position:absolute;
    bottom: 5%;
    right: 10%;
    background-color: white;
  }
</style>