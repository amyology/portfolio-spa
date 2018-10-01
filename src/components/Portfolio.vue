<template>
  <div>
    <h1>{{ title }}</h1>

    <h2>Works</h2>

    <div class="projects">

      <div class="project">
        <h3><a href="http://www.elfcosmetics.com" target="_blank">ELF Cosmetics</a></h3>
        <p>Front End Development</p>
        <p>Back End Development</p>
      </div>

      <div class="project">
        <h3><a href="https://www.nydj.com" target="_blank">NYDJ</a></h3>
        <p>Front End Development</p>
        <p>Back End Development</p>
      </div>

      <div class="project">
        <h3><a href="https://www.gymboree.com" target="_blank">Gymboree</a> /
            <a href="https://www.crazy8.com" target="_blank">Crazy 8</a> /
            <a href="https://www.janieandjack.com/" target="_blank">Janie and Jack</a></h3>
        <p>Front End Development</p>
        <p>Back End Development</p>
      </div>

      <div class="project">
        <h3><a href="http://jieyisushi.com" target="_blank">Jieyi Sushi</a></h3>
        <p>Design</p>
        <p>Front End Development</p>
        <p>Tools Used: Materialize, javascript, jQuery, PHP, Photoshop</p>
      </div>

      <div class="project">
        <h3><a href="http://www.paramountoakpark.com" target="_blank">Paramount of Oak Park</a></h3>
        <p>Front End Development</p>
        <p>Back End Development</p>
        <p>Tools Used: Ruby on Rails, javascript, Bootstrap</p>
      </div>
    </div>

    <div class="projects">
      <h2>Personal Projects</h2>

      <div class="project">
        <h3>ColorCrush</h3>
      </div>

      <div class="project">
        <h3>Analytics Dashboard</h3>
      </div>

      <div class="project">
        <h3>Spark Start</h3>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Portfolio',
  data () {
    return {
      title: 'Portfolio'
    }
  }
}
</script>

<style lang="scss" scoped>
.projects div {
  margin: 50px 0;

  &:first-of-type {
    margin-top: 0;
  }
}
</style>
