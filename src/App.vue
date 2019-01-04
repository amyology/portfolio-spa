<template>
  <div id="app">
    <div class="wrapper">

      <div class="bg-image">
        <div class="header">
          <div class="heading">a.chan</div>
          <div class="subheading">Web Developer</div>
        </div>
      </div>

      <div class="container">
        <router-view/>
      
        <div class="nav">
          <div class="nav-link active" link-id="about">
            <router-link to="/"><div class="nav-button"></div></router-link>
            <div class="nav-link-text">About</div>
          </div>
          <div class="nav-link" link-id="resume">
            <router-link to="/resume"><div class="nav-button"></div></router-link>
            <div class="nav-link-text">Resume</div>
          </div>
          <div class="nav-link" link-id="portfolio">
            <router-link to="/portfolio"><div class="nav-button"></div></router-link>
            <div class="nav-link-text">Portfolio</div>
          </div>
          <div class="nav-link" link-id="contact">
            <router-link to="/contact"><div class="nav-button"></div></router-link>
            <div class="nav-link-text">Contact</div>
          </div>
          <div class="nav-link" link-id="blog">
            <router-link to="/blog"><div class="nav-button"></div></router-link>
            <div class="nav-link-text">Blog</div>
          </div>
        </div>
        
      </div>

    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/global";
</style>
