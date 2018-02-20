<template>
  <div id="app">
    <div class="nav-links">
      <div class="nav-link"><router-link v-bind:to="'/'">Home</router-link></div>
      <div class="nav-link"><router-link v-bind:to="'/about'">About</router-link></div>
      <div class="nav-link"><router-link v-bind:to="'/portfolio'">Portfolio</router-link></div>
      <div class="nav-link"><router-link v-bind:to="'/contact'">Contact</router-link></div>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav-link {
  display: inline;
  margin-right: 10px;
  &:last {
    margin-right: 0;
  }
}

.fade- {
  &enter-active, &leave-active {
    transition: opacity .25s;
  }
  &enter-active {
    transition-delay: .25s;
  }
  &enter, &leave-active {
    opacity: 0
  }
}

</style>
