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

    <transition name="fade">
      <div class="main">
        <router-view/>
      </div>
    </transition>
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
$dark-gray: #424242;
$light-gray: #eceff1;
$accent-color: #ffcdd2;

body {
  background-color: $light-gray;
}

h1 {
  text-transform: uppercase;
}

h2 {
  text-decoration: underline;
}

a {
  position: relative;
  text-decoration: none;
  color: $dark-gray;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 20%;
    left: 0;
    width: 100%;
    height: 20%;
    background-color: $accent-color;
    z-index: -1;
    transition: height 0.2s ease-in;
  }

  &:hover {
    transition: color 0.2s ease-in;
  }

  &:hover::after {
    height: 65%;
    background-image: linear-gradient(to top, $accent-color, transparent);
  }
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
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

#navbar,
#sidenav {
  width: 100%;
  text-align: right;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 50px;
  padding-bottom: 10px;
  transition: background-color 0.2s;
  z-index: 2;

  .nav-link {
    display: inline;
    margin-right: 50px;

    a {
      font-size: 18px;

      &::after {
        bottom: 10px;
        height: 20%;
        width: 100%;
        background-color: $accent-color;
        opacity: 0;
        transition: opacity 0.2s, bottom 0.2s;
      }

      &:hover::after {
        bottom: 0;
        opacity: 1;
      }
    }
  }
}

#sidenav {
  float: left;
  height: 100vh;
  position: fixed;
  width: 60vw;
  left: -45%;
  transition: left 0.7s;

  .nav-link {
    display: block;
    text-align: left;
    margin-right: 0;
    padding: 15px 20px;

    a {
      color: white;
    }
  }

  &.active {
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);

    & .line1,
    & .line2,
    & .line3 {
      background-color: white;
    }

    & .line1 {
      transform: rotate(45deg) translate(8px, 7px);
    }

    & .line2 {
      display: none;
    }

    & .line3 {
      transform: rotate(-45deg) translate(0, 1px);
    }
  }
}

.burger {
  position: absolute;
  padding: 10px;
  top: 0;
  right: 0;

  &:hover {
    cursor: pointer;
  }
}

.line1,
.line2,
.line3 {
  height: 5px;
  width: 35px;
  background-color: $dark-gray;
  margin: 5px;
  transition: transform 0.5s;
}

.scrolled {
  background-color: rgba(0, 0, 0, 0.4);

  a {
    color: #fff;
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
    opacity: 0;
  }
}

@media only screen and (max-width: 1024px) {
  #navbar {
    display: none;
  }

  #app {
    margin: 0 auto;
  }

  .main {
    width: 75%;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 1024px) {
  #sidenav {
    display: none;
  }

  .main {
    width: 50%;
  }
}
</style>
