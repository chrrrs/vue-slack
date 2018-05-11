<template>
  <form>
      <div class="input-group searchbar__position">
        <input v-model="searchContent" v-on:input="searchbarListener" class="form-control form-control-lg" type="text" aria-label="search" placeholder="Søg..." />
        <i class="search__icon__wrapper fas fa-search"></i>
      </div>
      <div class="search__view">
        <div v-for="post in searchPosts" :key="post.id">
          <router-link :to="{ name: 'Article', params: {id: post.id} }">
            {{ post.title.rendered }}
          </router-link>
        </div>
      </div>
  </form>
</template>

<script>
export default {
  name: 'Searchbar',
  data() {
    return {
      searchContent: '',
      searchPosts: []
    }
  },
  methods: {
    searchbarListener() {
        fetch('http://www.kiap.chriseckert.dk/wp-json/wp/v2/posts/?search=' + this.searchContent)
          .then(response => response.json())
          .then(posts => {
              this.searchPosts = posts
          })
    }
  }
}
</script>

<style scoped>
    
    .input-group>.form-control:not(:last-child) {
        border-top-right-radius: .3rem;
        border-bottom-right-radius: .3rem;
    }

    .search__icon__wrapper {
        background-color: white;
        border: none;
        border-radius: 0;
        z-index: 5;
        position: absolute;
        right: 1rem;
        bottom: 0;
        top: 0;
        margin-top: 1rem;
        color: #4A33E8;
        cursor: pointer;
    }

    .search__view {
      
    }
</style>
