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
                        <span class="content__tag">{{ mainContent.title }}</span>
                    </router-link>
                </div>
            </div>
        </section>

        <section class="new__user__content container">
            <div class="row info__container">
                <div class="col-sm">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>    
                </div>
                <div class="col-sm">
                    <img src="../assets/frontpage/document.svg" alt="document illustration" class="img-fluid">
                </div>
            </div>
            <div class="row info__container">
                <div class="col-sm">
                    <img src="../assets/frontpage/chat.svg" alt="chat mockup" class="img-fluid">
                </div>
                <div class="col-sm">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>    
                </div>
            </div>
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
                {image: 'https://images.pexels.com/photos/462680/pexels-photo-462680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', title: 'ICPC', link: '/icpc'},
                {image: 'https://images.pexels.com/photos/429248/pexels-photo-429248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', title: 'DANPEP', link: '/danpep'},
                {image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', title: 'Akkreditering', link: '/akkreditering'}
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

    .content__tag {
        position: absolute;
        bottom: 30px;
        font-size: 1.5em;
        font-weight: 500;
        color: white;
        left: 33%;
    }

    .info__container {
        margin-top: 4rem;
        margin-bottom: 4rem;
    }
</style>
