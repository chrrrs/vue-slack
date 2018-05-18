<template>
    <div class="container article__container">
        <router-link class="back__btn" to="/icpc"><i class="back__icon fas fa-angle-left"></i>tilbage</router-link>
        <div v-for="post in postById" :key="post.index">
            <h2>{{ post.title.rendered }}</h2>
            <div class="container">
                <iframe class="embed-responsive-item container" width="500" height="515" src="https://www.youtube.com/embed/itkRVTqfPsE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
           <div v-html="post.content.rendered"></div>
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
          fetch('http://www.kiap.chriseckert.dk/wp-json/wp/v2/posts/?include[]=' + this.id)
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

.back__btn {
    padding: 1rem 0;
}

.fa-angle-left {
    margin-right: .5rem;
}

</style>
