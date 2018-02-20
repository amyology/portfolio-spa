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
      <div class="nav-link"><router-link v-bind:to="'/'">Home</router-link></div>
      <div class="nav-link"><router-link v-bind:to="'/about'">About</router-link></div>
      <div class="nav-link"><router-link v-bind:to="'/resume'">Resume</router-link></div>
      <div class="nav-link"><router-link v-bind:to="'/portfolio'">Portfolio</router-link></div>
      <div class="nav-link"><router-link v-bind:to="'/contact'">Contact</router-link></div>
    </div>
    <transition name="fade">
      <div class="main">
        <router-view/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}

window.onscroll = function () { scroll() }

function scroll () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById('navbar').className = 'scrolled'
  } else {
    document.getElementById('navbar').className = ''
  }
}
</script>

<style lang="scss">
  $dark-gray: #424242;

  body {
    background: url('assets/bg.png') no-repeat fixed center;
  }

  a {
    text-decoration: none;
    color: $dark-gray;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $dark-gray;
    margin: 60px auto 0;
  }

  .main {
    margin: 100px auto;
    padding: 30px 50px;
    background-color: #fff;
    width: 50%;
  }

  #navbar {
    width: 100%;
    text-align: right;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 50px;
    a {
      color: $dark-gray;
    }
    .nav-link {
      display: inline;
      margin-right: 50px;
    }
  }

  .scrolled {
    background-color: rgba(0,0,0,0.6);
    a {
      color: #fff !important;
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

  @media only screen and (max-width: 1024px) {
    #navbar {
      display: none;
    }
  }

  @media only screen and (min-width: 1024px) {
    #sidenav {
      display: none;
    }
  }
</style>
