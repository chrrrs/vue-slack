<template>
    <div>
        <div class="jumbotron">
        </div>

        <searchbar class="searchbar__position"></searchbar>

        <section class="container main__section">
            <div class="row">
                <div class="col-sm" v-for="mainContent in mainContents" :key="mainContent.id">
                    <router-link :to="mainContent.link">
                        <img :src="mainContent.image" :alt="mainContent.title" class="img-fluid">
                        <h2>{{ mainContent.title }}</h2>
                    </router-link>
                </div>
            </div>
        </section>

        <section class="new__user__content">

        </section>
        
    </div>  
</template>

<script>
import Searchbar from '../components/search/Searchbar'

export default {
    name: 'home',
    components: {Searchbar},
    data() {
        return {
            mainContents: [
                {image: 'https://images.pexels.com/photos/407237/pexels-photo-407237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', title: 'Support', link: '/support'},
                {image: 'https://images.pexels.com/photos/407237/pexels-photo-407237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', title: 'ICPC', link: '/icpc'},
                {image: 'https://images.pexels.com/photos/407237/pexels-photo-407237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', title: 'DANPEP', link: '/danpep'},
                {image: 'https://images.pexels.com/photos/407237/pexels-photo-407237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', title: 'Akkreditering', link: '/akkreditering'}
            ]
        }
    }
}
</script>

<style scoped>

.jumbotron {
    height: 45vh;
    background-color: #4A33E8;
    border-radius: 0;
}

.main__section {
    width: 90%;
    text-align: center;
    margin-top: 10vh;
}

.img-thumbnail {
    border: none;
}

.searchbar__position {
        position: absolute;
        z-index: 2;
        top: 42.5vh;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 60%;
    }


</style>
