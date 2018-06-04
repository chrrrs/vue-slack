<template>
    <div class="container article__container">
        <router-link class="back__btn" to="/icpc"><i class="back__icon fas fa-angle-left"></i>tilbage</router-link>
        <div class="container" v-for="post in postById" :key="post.index">
            <h2 v-html="post.title.rendered"></h2>
           <div class="article__content__container" v-html="post.content.rendered"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Article',
  data() {
      return {
          id: null,
          postById: null
      }
  },
  created() {
      this.id = this.$route.params.id
  },
  mounted() {
      this.getPost()
  },
  methods: {
      getPost() {
          fetch('https://www.kiap.chriseckert.dk/wp-json/wp/v2/posts/?include[]=' + this.id)
          .then(response => response.json())
          .then(post => {
              this.postById = post
          })
      }
  }
}
</script>

<style scoped>

.article__container {
    margin-top: 5rem
}

.article__container h2 {
    margin-top: 1rem;
}

img {
    width: 100%;
    height: auto;
    margin: 0 auto;
}

.back__btn {
    padding: 1rem 0;
}

.fa-angle-left {
    margin-right: .5rem;
}

</style>
