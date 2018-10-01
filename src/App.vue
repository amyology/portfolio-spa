<template>
  <div id="app">
    <div id="navbar">
      <div class="nav-link"><router-link v-bind:to="'/'">Home</router-link></div>
      <div class="nav-link"><router-link v-bind:to="'/about'">About</router-link></div>
      <div class="nav-link"><router-link v-bind:to="'/resume'">Resume</router-link></div>
      <div class="nav-link"><router-link v-bind:to="'/portfolio'">Portfolio</router-link></div>
      <div class="nav-link"><router-link v-bind:to="'/contact'">Contact</router-link></div>
    </div>

    <div id="sidenav">
      <div class="burger" @click="sidenav">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>

      <div class="nav-link"><router-link v-bind:to="'/'">Home</router-link></div>
      <div class="nav-link"><router-link v-bind:to="'/about'">About</router-link></div>
      <div class="nav-link"><router-link v-bind:to="'/resume'">Resume</router-link></div>
      <div class="nav-link"><router-link v-bind:to="'/portfolio'">Portfolio</router-link></div>
      <div class="nav-link"><router-link v-bind:to="'/contact'">Contact</router-link></div>
    </div>

    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      sidenavOpen: false
    }
  },
  methods: {
    sidenav: function () {
      this.sidenavOpen = !this.sidenavOpen

      if (this.sidenavOpen === false) {
        document.getElementById('sidenav').className = 'active'
      } else {
        document.getElementById('sidenav').removeAttribute('class')
      }
    }
  }
}

window.onscroll = function () { scroll() }

function scroll () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById('navbar').className = 'scrolled'
  } else {
    document.getElementById('navbar').removeAttribute('class')
  }
}
</script>

<style lang="scss">
@import "./assets/global";
</style>
