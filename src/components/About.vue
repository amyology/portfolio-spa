<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ header }}</h2>
    <p>{{ blurb }}</p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'About',
  data () {
    return {
      title: 'About',
      header: 'Hi! My name is Amy Chan.',
      blurb: 'I am a full-stack developer based in Chicago. I am a web developer/designer at heart who took a brief detour to go to law school, learned some valuable skills while I was there, and am now back to doing what I love.'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
