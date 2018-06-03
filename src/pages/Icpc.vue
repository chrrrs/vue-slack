<template>
    <div class="container icpc__wrapper">
        <div>
            <h1>ICPC Søgemaskine<span class="icon-wrapper" @click="toggleHelp"><i class="fas fa-question-circle" data-toggle="tooltip" data-placement="right" title="Hvad er ICPC?"></i></span></h1>
        </div>
        <div class="container help__video__container">
            <div class="container">
                <h5>[THIS IS TITLE]</h5>
                <video controls class="embed-responsive">
                    <source src="../assets/videos/icpc.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <p>[HERE GOES CONTENT]</p>
            </div>
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
                        <div class="card-header" data-toggle="collapse"  data-target=".multi-collapse" aria-expanded="false" :aria-controls="bPost.id">
                        <h5 class="mb-0"  v-html="bPost.title.rendered">
                        </h5>
                            <router-link :to="{ name: 'Article', params: {id: bPost.id} }">
                                <span class="article__arrow"><i class="fas fa-angle-right"></i></span>
                            </router-link>
                        </div>

                        <div class="collapse multi-collapse" :id="bPost.id">
                            <div class="card card-body" v-html="bPost.excerpt.rendered">
                            </div>
                        </div>
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
      this.tooltips()
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
      },
      tooltips() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
      },
      toggleHelp() {
        $('.help__video__container').toggle()
        
      }
  }
}
</script>


<style scoped>

.icpc__wrapper {
    margin-top: 100px;
    min-height: 85vh;
}

h1 {
    text-align: center;
    color: #2962ff;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1rem 0;
}

.fa-question-circle {
    padding-bottom: 10px;
    font-size: 1.7em;
    cursor: pointer;
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
        color: #2962ff;
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

    .article__arrow {
        position: absolute;
        right: 0;
        bottom: 14%;
        padding: 0 1.5rem;
        font-size: 1.5em;
        border-left: solid 2px #cecece;
    }

    .fa-angle-right {
        color: #cecece;
    }

    .help__video__container {
        background: rgb(241, 241, 241);
        border-radius: 0.5rem;
        margin: 0px auto 2rem;
        padding: 20px;
        display: none;
    }

    .card {
        border: none;
    }

    .card-header {
        border: none;
    }

</style>
