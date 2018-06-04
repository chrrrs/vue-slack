<template>
    <div>
        <div class="jumbotron">
            <img src="../assets/frontpage/hand__arrow__front.svg" alt="chat mockup" class="img-responsive arrow__cta__search">
        </div>

        <searchbar class="searchbar__position"></searchbar>

        <section class="container main__section">
            <div class="row">
                <div class="col-md" v-for="mainContent in mainContents" :key="mainContent.id">
                    <router-link class="img__link" :to="mainContent.link">
                        <img :src="mainContent.image" :alt="mainContent.title" class="img-fluid home__featured__img">
                        <span class="content__tag">{{ mainContent.title }}</span>
                    </router-link>
                </div>
            </div>
        </section>

        <section class="new__user__content container">
            <div class="row info__container">
                <div class="col-lg">
                    <h5>Program for kvalitetsudvikling i almen praksis har til formål.</h5>
                    <p>At fremme og understøtte at alle praktiserende læger finder sammen i faglige fællesskaber (klynger), som mødes og arbejder med kvalitetsdata og kvalitetsudvikling. Det forudsættes, at programmet inddrager og bygger videre på den og de erfaringer, som allerede er etableret i relation til datadrevet kvalitetsudvikling og samarbejdet mellem almen praksis og regionerne.</p>    
                </div>
                <div class="col-lg">
                    <video controls class="embed-responsive" poster="../assets/videos/Klynger.png">
                        <source src="../assets/videos/klynger.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="row info__container">
                <div class="col-lg">
                    <img src="../assets/frontpage/chat.svg" alt="chat mockup" class="img-responsive">
                </div>
                <div class="col-lg">
                    <h5>[OVERSKRIFT]</h5>
                    <p>Udviklingen i sundhedsvæsnet stiller store krav til alle aktører – også til de praktiserende læger. De kendte krav om høj faglighed suppleres med krav om at prioritere rigtigt, om at kunne sætte ind overfor nye problemområder og om at kunne arbejde med kvalitet på tværs af sektorerne i sundhedsvæsnet. PLO og RLTN har set på, hvordan der kan skabes et kvalitetsarbejde, som kontinuerligt udvikler fagligheden og indsatserne i almen praksis. Det er ambitionen, at kvalitetsarbejdet skal nå ud til alle praktiserende læger og dermed komme alle patienter til gavn. [TILFØJ TEKST OMKRING VORES SYSTEM]</p>    
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
    background-color: #2962ff;
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

    .img__link {
        height: auto;
        margin: auto;
        text-align: center;
        position: relative;
    }

    .content__tag {
        position: absolute;
        top: 50px;
        font-size: 1.5em;
        font-weight: 500;
        color: white;
        left: 0;
        right: 0;
    }

    .info__container {
        margin-top: 4rem;
        margin-bottom: 4rem;
    }

    .info__container .img-responsive {
        width: 60%;
        margin: 0 20%;
    }

    .home__featured__img {
        height: 170px;
        width: 100%;
        object-fit: cover;
    }

    .arrow__cta__search {
        position: relative;
        top: 270px;
        width: 80%;
        height: 20%;
    }
</style>
