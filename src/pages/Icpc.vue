<template>
    <div class="container icpc__wrapper">
        <div>
            <h1>ICPC Søgemaskine<span class="icon-wrapper"><i class="fas fa-question-circle"></i></span></h1>
        </div>
        <searchbar></searchbar>
        <div>
            <search-component></search-component>
        </div>
    </div>
</template>

<script>
import Searchbar from '../components/search/Searchbar'
import SearchComponent from '../components/search/SearchComponent'

export default {
  name: 'ICPC',
  components: {
      Searchbar, SearchComponent
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


</style>
