<template>
    <footer>
        <div class="support__banner" v-if="this.currentUser == null">
            <div class="container">
                <div class="row">
                    <h4 class="col banner__text">Interesseret i mere information eller brug for hjælp?</h4>
                    <router-link class="contact__button" to="/support">Kontakt support</router-link>
                </div>
            </div>
        </div>
        <div class="container border-top footer__divider" v-else></div>
        <div class="container"> 
            <div class="row">
                <div class="col-12 col-md footer__signature">
                    <img class="mb-2" src="../../assets/pkap_logo.png" alt="KiAP Logo" width="100" height="40">
                    <p class="text-muted">Kommunikationsløsning samt informationssøgning i verdensklasse til din praksis. </p>
                    <small class="d-block mb-3 text-muted">&copy; 2018 Kvalitet i Almen Praksis.</small>
                </div>
                <div class="col-6 col-md">
                    <h5>Services</h5>
                    <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="#">ICPC</a></li>
                    <li><a class="text-muted" href="#">DANPEP</a></li>
                    <li><a class="text-muted" href="#">Akkreditering</a></li>
                        <ul class="list-unstyled text-small" v-if="this.currentUser">
                            <li><a class="text-muted" href="#">Chat</a></li>
                            <li><a class="text-muted" href="#">Filer</a></li>
                        </ul>
                    </ul>
                </div>
                <div class="col-6 col-md">
                    <h5>Om KiAP</h5>
                    <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="#">Medarbejdere</a></li>
                    <li><a class="text-muted" href="#">Historie</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md">
                    <h5>Kontakt</h5>
                    <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="#">Support</a></li>
                        <ul class="list-unstyled text-small" v-if="this.currentUser">
                            <li><a class="text-muted" href="#">Hjælp</a></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CostumeFooter',
  computed: {
      ...mapGetters(['currentUser'])
    },
}
</script>

<style scoped>

    footer {
        margin-top: 70px;
    }

    .support__banner {
        background-color: #4a33e8;
    }

    .banner__text {
        color: white;
        padding-left: 0;
        font-weight: 600;
    }

    .contact__button {
        background-color: white;
        border-radius: .5rem;
        padding: .5rem 1rem;
        color: #4a33e8;
        font-weight: 600;
    }


    .row {
        padding: 1rem 0;
    }

    .footer__divider {
        margin-top: 50px;
    }

    .footer__signature {
        padding-right: 10rem;
    }

    @media screen and (max-width: 780px) {
        .row {
            display: block;
        }
    }

</style>
