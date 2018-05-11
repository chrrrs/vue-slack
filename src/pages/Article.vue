<template>
    <div>
        {{ id }}
        <div v-for="post in postById">
            {{ post.title.rendered }}
            {{ post.content.rendered }}
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

</style>
