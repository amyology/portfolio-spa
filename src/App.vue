<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

    <div class="wrapper">

      <div class="bg-image">
        <div class="header">
          <div class="heading">a.chan</div>
          <div class="subheading">Web Developer</div>
        </div>
      </div>

      <div class="container">

        <div class="mobile-nav">
          <div class="nav-link">
            <router-link to="/" @click.native="navigate()">
              <div class="nav-button"></div>
            </router-link>
            <div class="nav-link-text">About</div>
          </div>
          <div class="nav-link">
            <router-link to="/resume" @click.native="navigate()">
              <div class="nav-button"></div>
            </router-link>
            <div class="nav-link-text">Resume</div>
          </div>
          <div class="nav-link">
            <router-link to="/portfolio" @click.native="navigate(true)">
              <div class="nav-button"></div>
            </router-link>
            <div class="nav-link-text">Portfolio</div>
          </div>
          <div class="nav-link">
            <router-link to="/contact" @click.native="navigate()">
              <div class="nav-button"></div>
            </router-link>
            <div class="nav-link-text">Contact</div>
          </div>
          <div class="nav-link">
            <router-link to="/blog" @click.native="navigate(true)">
              <div class="nav-button"></div>
            </router-link>
            <div class="nav-link-text">Blog</div>
          </div>
        </div>
        
        <router-view/>
      
        <div class="nav">
          <div class="nav-link">
            <router-link to="/" @click.native="navigate()">
              <div class="nav-button"></div>
            </router-link>
            <div class="nav-link-text">About</div>
          </div>
          <div class="nav-link">
            <router-link to="/resume" @click.native="navigate()">
              <div class="nav-button"></div>
            </router-link>
            <div class="nav-link-text">Resume</div>
          </div>
          <div class="nav-link">
            <router-link to="/portfolio" @click.native="navigate(true)">
              <div class="nav-button"></div>
            </router-link>
            <div class="nav-link-text">Portfolio</div>
          </div>
          <div class="nav-link">
            <router-link to="/contact" @click.native="navigate()">
              <div class="nav-button"></div>
            </router-link>
            <div class="nav-link-text">Contact</div>
          </div>
          <div class="nav-link">
            <router-link to="/blog" @click.native="navigate(true)">
              <div class="nav-button"></div>
            </router-link>
            <div class="nav-link-text">Blog</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/javascript">
  (function(){
    var redirect = sessionStorage.redirect
    delete sessionStorage.redirect
    if (redirect && redirect != location.href) {
      history.replaceState(null, null, redirect)
    }
  })()

  export default {
    methods: {
      navigate: function(e) {
        let container = document.getElementsByClassName('container')[0]
        if (e == true && !container.className.includes('embiggen')) {
          container.className += ' embiggen'
        } else {
          container.className = container.className.replace(/\bembiggen\b/g, '')
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/global";
</style>
