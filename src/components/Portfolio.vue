<template>
  <div class="content portfolio">
    <h1>Portfolio</h1>

    <h2>Client Work</h2>

    <div class="projects">
      <div class="project">
        <h3>
          <i class="fas fa-angle-right"></i>
          <a href="https://www.arlo.com" target="_blank">Arlo</a>
        </h3>
        <p>Front End Development</p>
        <p>Tools Used: Salesforce B2C Commerce</p>
      </div>

      <div class="project">
        <h3>
          <i class="fas fa-angle-right"></i>
          <a href="https://www.toysrus.dk" target="_blank">Toys R Us (Nordic Countries)</a> /
          <a href="https://www.br.dk" target="_blank">BR Toys</a>
        </h3>
        <p>Front End Development, Back End Development</p>
        <p>Tools Used: Salesforce B2C Commerce</p>
      </div>

      <div class="project">
        <h3>
          <i class="fas fa-angle-right"></i>
          <a href="http://www.elfcosmetics.com" target="_blank">ELF Cosmetics</a>
        </h3>
        <p>Front End Development, Back End Development</p>
        <p>Tools Used: Salesforce B2C Commerce</p>
      </div>

      <div class="project">
        <h3>
          <i class="fas fa-angle-right"></i>
          <a href="https://www.nydj.com" target="_blank">NYDJ</a>
        </h3>
        <p>Front End Development, Back End Development</p>
        <p>Tools Used: Salesforce B2C Commerce</p>
      </div>

      <div class="project">
        <h3><i class="fas fa-angle-right"></i>
          <a href="https://www.gymboree.com" target="_blank">Gymboree</a> /
          <a href="https://www.crazy8.com" target="_blank">Crazy 8</a> /
          <a href="https://www.janieandjack.com/" target="_blank">Janie and Jack</a>
        </h3>
        <p>Front End Development, Back End Development</p>
        <p>Tools Used: Salesforce B2C Commerce</p>
      </div>

      <div class="project">
        <h3>
          <i class="fas fa-angle-right"></i>
          <a href="http://jieyisushi.com" target="_blank">Jieyi Sushi</a>
        </h3>
        <p>Design, Front End Development</p>
        <p>Tools Used: Materialize, Javascript, jQuery, PHP, Photoshop</p>
      </div>

      <div class="project">
        <h3><i class="fas fa-angle-right"></i>
          <a href="http://www.paramountoakpark.com" target="_blank">Paramount of Oak Park</a>
        </h3>
        <p>Front End Development, Back End Development</p>
        <p>Tools Used: Ruby on Rails, Javascript, Bootstrap</p>
      </div>
    </div>

    <div class="projects">
      <h2>Personal Projects</h2>

      <div class="project">
        <h3>
          <i class="fas fa-angle-right"></i>
          <a href="http://color-crush.herokuapp.com" target="_blank">ColorCrush</a>
        </h3>
        <p>Tools Used: Ruby on Rails, Javascript, AngularJS, Foundation, Colorthief.js</p>
        <p><a href="https://github.com/amyology/colorcrush" target="_blank">See code</a></p>
      </div>

      <div class="project">
        <h3><i class="fas fa-angle-right"></i>
          <a href="http://prod-spark-start.herokuapp.com" target="_blank">Spark Start</a>
        </h3>
        <p>Tools Used: Ruby on Rails, Vue.js, Bootstrap</p>
      </div>

      <div class="project">
        <h3><i class="fas fa-angle-right"></i>
          <a href="http://tde-analytics.herokuapp.com" target="_blank">Analytics Dashboard</a>
        </h3>
        <p>Tools Used: Rails, AngularJS, Materialize</p>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .projects div {
    margin: 50px 0;

    &:first-of-type {
      margin-top: 0;
    }
  }

  h2 {
    text-decoration: underline;
  }

  i:after {
    content: '';
    margin-right: 5px;
  }
</style>
