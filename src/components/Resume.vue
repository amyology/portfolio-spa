<template>
  <div class="content resume">
    <div class="title">Resume</div>
    <h2>Skills</h2>
    <ul id="list">
      <li v-for="skill in skills" v-bind:key="skill">{{ skill }}</li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Resume',
  data () {
    return {
      skills: [
        'Salesforce Commerce Cloud/Demandware',
        'Ruby/Rails',
        'Javascript',
        'Node.js',
        'Express.js',
        'Vue.js',
        'AngularJS',
        'jQuery',
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
#list {
  width: 50%;
}
</style>
