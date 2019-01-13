<template>
  <div class="content blog">
    <h1>Blog</h1>
    <div class="text" v-if="posts.length < 1">No posts yet. =(</div>

    <div class="text" v-if="posts.length > 0">
      <div class="post" v-for="(post, index) in posts" v-bind:key="index">
        <h2><a :href="post.link" target="_blank"><span v-html="post.title.rendered"></span></a></h2>
        <div class="date">{{ post.date | formatDate }}</div>
        <p><span v-html="post.content.rendered"></span></p>

        <div v-if="post.tags.length > 0">
          <div class="tag" v-for="(tagId, index) in post.tags" v-bind:key="index">
            <a :href="findTag(tagId).link" target="_blank">#{{ findTag(tagId).name }}</a>
            <span v-if="index < post.tags.length - 1">, </span>
          </div>
        </div>

        <div v-if="post.categories.length > 0">
          <span v-if="post.categories.length == 1">Category: </span>
          <span v-else>Categories: </span>
          <div class="category" v-for="(categoryId, index) in post.categories" v-bind:key="index">
            <a :href="findCategory(categoryId).link" target="_blank">{{ findCategory(categoryId).name }}</a>
            <span v-if="index < post.categories.length - 1">, </span>
          </div>
        </div>
      </div>
    </div>

    <button v-if="totalPages > 1" @click="goPage(-1)"><i class="fas fa-arrow-left"></i> </button>
    {{page}} / {{totalPages}}
    <button v-if="page < totalPages" @click="goPage(1)"> <i class="fas fa-arrow-right"></i></button>

  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import moment from 'moment'

  export default {
    data() {
      return {
        posts: [],
        categories: [],
        tags: [],
        postsPerPage: 1,
        page: 1,
        totalPages: 0
      }
    },
    mounted () {
      let url = 'https://public-api.wordpress.com/wp/v2/sites/amyologie.wordpress.com/'

      axios.get(url + 'categories')
        .then(response => {
            this.categories = response.data
        })
        .catch(error => {
          throw(error)
        })

      axios.get(url + 'tags')
        .then(response => {
            this.tags = response.data
        })
        .catch(error => {
          throw(error)
        })

      axios.get(url + 'posts?per_page=' + this.postsPerPage)
        .then(response => {
            this.posts = response.data
            this.totalPages = response.headers['x-wp-totalpages']
        })
        .catch(error => {
          throw(error)
        })
    },
    methods: {
      findCategory: function(categoryId) {
        return this.categories.find(category => {
          return category.id == categoryId
        })
      },
      findTag: function(tagId) {
        return this.tags.find(tag => {
          return tag.id == tagId
        })
      },
      goPage: function(direction) {
        axios.get('https://public-api.wordpress.com/wp/v2/sites/amyologie.wordpress.com/posts?per_page=1&page=' + (this.page + direction))
          .then(response => {
              this.posts = response.data
              this.page += direction
          })
          .catch(error => {
            throw(error)
          })}
    },
    filters: {
      formatDate: date => {
        return moment(date).format('MMMM D, YYYY')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .date {
    font-style: italic;
  }

  .post {
    margin-bottom: 50px;
  }

  .category, .tag {
    display: inline;
  }
</style>
