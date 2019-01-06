<template>
  <div class="content resume">
    <h1>Resume</h1>
    <p>
      <i class="fas fa-angle-double-down"></i>&nbsp;
      <a href="/AmyChanResume.pdf">Download</a> a copy of my resume.
    </p>

    <h2>Skills</h2>
    <ul id="list">
      <li v-for="skill in skills" v-bind:key="skill">
        <i class="fas fa-angle-right"></i>
        {{ skill }}
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Resume',
  data () {
    return {
      skills: [
        'Salesforce Commerce Cloud (Demandware)',
        'Javascript',
        'Node.js',
        'Express.js',
        'Vue.js',
        'AngularJS',
        'jQuery',
        'Ruby',
        'Ruby on Rails',
        'Sass',
        'C#',
        'HTML',
        'CSS',
        'Git',
        'SQL',
        'MySQL',
        'PostGreSQL',
        'Unity 3D',
        'Photoshop',
        'Illustrator'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/variables';

  h2 {
    margin-top: 50px;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  li {
    transition: all 0.5s;

    &:hover {
      margin-left: 15px;

      i {
        color: $accent-color;
      }
    }
  }

  p:hover i {
    position: relative;
    top: 3px;
  }
</style>
