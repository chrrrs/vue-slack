<template>
    <div class="container icpc__wrapper">
        <div>
            <h1>ICPC Søgemaskine<span class="icon-wrapper"><i class="fas fa-question-circle"></i></span></h1>
        </div>
        <form>
            <div class="input-group searchbar__position">
                <input v-model="searchContent" v-on:input="getPosts" class="form-control form-control-lg" type="text" aria-label="search" placeholder="Søg..." />
                <i class="search__icon__wrapper fas fa-search"></i>
            </div>
        </form>
        <ul>
            <li class="search__container__component" v-for="bPost in blogPosts" :key="bPost.id">
                <div id="accordion container">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <router-link :to="{ name: 'Article', params: {id: bPost.id} }" class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" v-html="bPost.title.rendered">
                            </router-link>
                        </h5>
                        </div>

                        <!-- <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body" v-html="bPost.content.rendered">
                        </div>
                        </div> -->
                    </div>
                            <!-- <router-link :to="{ name: 'Article', params: {id: bPost.id} }">Læs mere</router-link> -->
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'ICPC',
  data() {
      return {
          blogPosts: [],
          searchContent: ''
      }
  },
  mounted() {
      this.getPosts()
  },
  methods: {
      getPosts() {

          if(this.searchContent.length > 0) {
              fetch('http://www.kiap.chriseckert.dk/wp-json/wp/v2/posts/?search=' + this.searchContent + '&per_page=10')
                .then(response => response.json())
                .then(posts => {
                    this.blogPosts = posts
                })
          } else {
            fetch('http://www.kiap.chriseckert.dk/wp-json/wp/v2/posts')
            .then(response => response.json())
            .then(posts => {
                this.blogPosts = posts
            })
          }
      }
  }
}
</script>


<style scoped>

.icpc__wrapper {
    margin-top: 100px;
}

h1 {
    text-align: center;
    color: #4A33E8;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1rem 0;
}

.fa-question-circle {
    padding-bottom: 10px;
    font-size: 1.2em;
}

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

    ul {
        padding: 0;
    }

    li {
        list-style-type: none;
    }

    .search__container__component {
        margin: 1rem 0;
    }

</style>
