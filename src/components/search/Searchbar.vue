<template>
  <form>
      <div class="input-group searchbar__position">
        <input v-model="searchContent" v-on:input="searchbarListener" class="form-control form-control-lg" type="text" aria-label="search" placeholder="Søg..." />
        <i class="search__icon__wrapper fas fa-search"></i>
      </div>
      <div :class="{'search__view': searchContent}">
        <div v-for="post in searchPosts" :key="post.id" class="searchDiv">
          <router-link v-if="searchContent.length >= 1" :to="{ name: 'Article', params: {id: post.id} }" v-html="post.title.rendered"></router-link>
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
        if(this.searchContent.length > 1) {
          fetch('https://www.kiap.chriseckert.dk/wp-json/wp/v2/posts/?search=' + this.searchContent + '&per_page=5')
            .then(response => response.json())
            .then(posts => {
                this.searchPosts = posts
            })
        } else if (this.searchContent.length < 1 || this.searchContent == '') {
          this.searchPosts = []
        }
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
        border: none;
        border-radius: 0;
        z-index: 5;
        position: absolute;
        right: 1rem;
        bottom: 0;
        top: 0;
        margin-top: 1rem;
        color: #2962ff;
        cursor: pointer;
    }

    .search__view {
      position: absolute;
      line-height: 2;
      border: 1px solid #e4e4e4;
      border-top: none;
      width: 100%;
      border-radius: 0 0 .5rem .5rem;
      padding: .5rem 1rem;
      z-index: -1;
      top: 39px;
      background-color: white;
      font-weight: 500;
    }
</style>
