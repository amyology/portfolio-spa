<template>
  <div>
    <div class="clearfix">
      <div class="img1">
        <p class="header">{{ header }}</p>
        <img src="../assets/index1.png" id="index1">
      </div>
      <div class="img2">
        <img src="../assets/index2.png" id="index2">
        <h1>{{ title }}</h1>
      </div>
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
  h1 {
    text-align: right;
    padding-right: 5%;
    font-style: italic;
  }

  .header {
    padding-left: 5%;
  }

  .img1 {
    padding-top: 50px;
  }

  #index1 {
    float: left;
    width: 45%;
    padding-left: 5%;
  }

  .img2 {
    padding-bottom: 50px;
  }

  #index2 {
    float: right;
    width: 45%;
    padding-right: 5%;
    margin-top: -80px;
  }

  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }
</style>
