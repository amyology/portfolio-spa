<template>
  <div>
    <div class="clearfix">
        <h1>{{ title }}</h1>

        {{ header }}
      </div>
    </div>
</template>

<script type="text/javascript">
export default {
  name: 'Index',
  data () {
    return {
      title: 'a.chan',
      header: 'web developer'
    }
  }
}
</script>

<style lang="scss" scoped>
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>
