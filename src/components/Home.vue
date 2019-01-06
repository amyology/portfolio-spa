<template>
  <div class="content home">
    <h1>Hello!</h1>
    <div class="text">
      My name is <span class="link" @mouseover="appear()" @mouseout="disappear()">Amy Chan</span>. I am a full-stack developer based in Chicago. 
      I am a web developer/designer at heart who took a brief detour to go to law school, 
      learned some valuable skills while I was there, and am now back to doing what I love.
    </div>
    <img src="/me.png" id="pic" alt="me"/>
  </div>
</template>

<script type="text/javascript">
  export default {
    methods: {
      appear: function() {
        document.getElementById('pic').className = 'visible'
      },
      disappear: function() {
        document.getElementById('pic').className = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    margin-bottom: 30px;
  }
</style>

