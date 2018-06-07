<template>
    <div>
        <div class="jumbotron">
            <img src="../assets/frontpage/arrow__home.svg" alt="chat mockup" class="img-responsive arrow__cta__search">
        </div>

        <searchbar class="searchbar__position"></searchbar>

        <section class="container main__section">
            <div class="row">
                <div class="col-md" v-for="mainContent in mainContents" :key="mainContent.id">
                    <router-link class="img__link" :to="mainContent.link">
                        <img :src="mainContent.image" :alt="mainContent.title" class="img-fluid home__featured__img lazy">
                        <span class="content__tag">{{ mainContent.title }}</span>
                    </router-link>
                </div>
            </div>
        </section>

        <section class="new__user__content container">
            <div class="row info__container">
                <div class="col-lg">
                    <h5>Hvordan kommer vi i gang med klyngearbejdet?</h5>
                    <p>Denne vejledning guider dig som klyngekoordinator samt dine klyngekollegaer igennem den første proces omkring opstart af en klynge. Der arbejdes i Programsekretariatet samt i PLO og Danske Regioner løbende på at få både rammer og indhold for klyngerne på plads, men vi opfordrer jer til at gå i gang med at etablere klyngerne og tage hul på arbejdet så snart I har fundet sammen i en klynge. </p>    
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
                    <h5>Datadrevet Kvalitetsudvikling</h5>
                    <p>Udviklingen i sundhedsvæsnet stiller store krav til alle aktører – også til de praktiserende læger. De kendte krav om høj faglighed suppleres med krav om at prioritere rigtigt, om at kunne sætte ind overfor nye problemområder og om at kunne arbejde med kvalitet på tværs af sektorerne i sundhedsvæsnet. PLO og RLTN har set på, hvordan der kan skabes et kvalitetsarbejde, som kontinuerligt udvikler fagligheden og indsatserne i almen praksis. Det er ambitionen, at kvalitetsarbejdet skal nå ud til alle praktiserende læger og dermed komme alle patienter til gavn. Kvalitet i almen praksis (KiAP) har i samarbejde med PLO udviklet et system, der har til formål at forbedre den interne kommunikation for praktiserende læger. Det er nøgleord som reflektion over egen praksis, og muligheden for at bruge andre læger som sparringspartnere. KiAP har i tæt samarbejde med tilknyttede læger udviklet et internt chat system, der giver mulighed for at oprette klynger, og udveklse data med hinanden. Derudover er det blevet nemmere at komme i kontakt med support og få hjælp til eventuelle problemer.</p>    
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
                {image: 'https://images.pexels.com/photos/813940/pexels-photo-813940.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', title: 'Om KiAP', link: '/om'},
                {image: 'https://images.pexels.com/photos/1112643/pexels-photo-1112643.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', title: 'Chat', link: '/chat'}
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
    background: linear-gradient(
      rgb(41, 98, 255, 0.85), 
      rgb(41, 98, 255, 0.85)
    ), url('https://images.pexels.com/photos/590037/pexels-photo-590037.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260') no-repeat;
    background-size: cover;
    position: relative;
}

.arrow__cta__search {
    position: absolute;
    /* top: 350px; */
    width: 25%;
    left: 5%;
    bottom: 50px;
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

    @media screen and (max-width: 760px) {
        .arrow__cta__search {
            display: none;
        }
    }

</style>
