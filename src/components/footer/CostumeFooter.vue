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
                    <img class="mb-2" src="../../assets/kiap_blue.svg" alt="KiAP Logo" width="100" height="40">
                    <p class="text-muted">Kommunikationsløsning samt informationssøgning i verdensklasse til din praksis. </p>
                    <small class="d-block mb-3 text-muted">&copy; 2018 Kvalitet i Almen Praksis.</small>
                </div>
                <div class="col-6 col-md">
                    <h5>Services</h5>
                    <ul class="list-unstyled text-small">
                    <li @click="scrollToTop"><router-link class="text-muted" to="/icpc">ICPC</router-link></li>
                        <ul class="list-unstyled text-small" v-if="this.currentUser">
                            <li @click="scrollToTop"><router-link class="text-muted" to="/chat">Chat</router-link></li>
                        </ul>
                    </ul>
                </div>
                <div class="col-6 col-md">
                    <h5>Om KiAP</h5>
                    <ul class="list-unstyled text-small">
                    <li @click="scrollToTop"><router-link class="text-muted" to="/om">Om</router-link></li>
                    </ul>
                </div>
                <div class="col-6 col-md">
                    <h5>Kontakt</h5>
                    <ul class="list-unstyled text-small">
                    <li @click="scrollToTop"><router-link class="text-muted" to="/support">Support</router-link></li>
                    <li><p class="text-muted"><i class="fas fa-mobile-android-alt"></i> 6550 4550</p></li>
                    <li><p class="text-muted"><i class="far fa-envelope"></i> support@dak-e.dk</p></li>
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
    methods: {
        scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
}
</script>

<style scoped>

    footer {
        margin-top: 70px;
    }

    .support__banner {
        background-color: #2962ff;
    }

    .banner__text {
        color: white;
        padding-left: 0;
        font-weight: 600;
        padding-top: 5px;
    }

    .contact__button {
        background-color: white;
        border-radius: .5rem;
        padding: .5rem 1rem;
        color: #2962ff;
        font-weight: 600;
        height: 50%;
    }

    li p {
        margin-bottom: 0px;
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
