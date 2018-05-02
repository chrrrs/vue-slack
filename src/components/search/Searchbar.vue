<template>
  <form>
      <div class="input-group searchbar__position">
        <input @click.prevent="searchbarListener" class="form-control form-control-lg" type="text" aria-label="search" placeholder="Søg..." />
        <i class="search__icon__wrapper fas fa-search"></i>
      </div>
  </form>
</template>

<script>
export default {
  name: 'Searchbar',
  methods: {
    searchbarListener() {
        
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
</style>
