<template>
    <div class="about__container">
        <div class="container">
            <div class="row">
                <div class="col-lg">
                    <h5>Samarbejde</h5>
                    <p>KiAP er etableret af PLO (Praktiserende Lægers Organisation) og Danske Regioner i fællesskab med henblik på at udvikle og sikre kvaliteten i almen praksis som en del af det samlede sundhedsvæsen. Derudover er det at fremme forskning, som har betydning for kvaliteten i almen praksis og det samlede sundhedsvæsen.</p>
                </div>
                <div class="col-lg">
                    <h5>KiAP</h5>
                    <p>KiAP skal arbejde fokuseret med kvalitetsudvikling i almen praksis, først og fremmest skal KiAP fremme og understøtte de klynger, der løbende etableres over hele landet. KiAP skal drive det arbejde, der skal sikre klyngerne et godt fundament at drive kvalitetsudvikling på.</p>
                </div>
            </div>
        </div>
        <div class="container-fluid about__video__container">
            <div class="container">
                <div class="row">
                    <div class="col-lg">
                        <h5>KiAP Projektet</h5>
                        <p>Det helt store indsatsområde er blevet udvikling af IT-værktøjer, der kan hente kvalitetsoplysninger fra praksis’ elektroniske journalsystemer. Formålet med at indhente data er at tilbagelevere analyserede oplysninger, som den enkelte læge kan bruge til udviklingen af kvaliteten i sin patientbehandling. </p>
                    </div>
                    <div class="col-lg">
                        <video controls class="embed-responsive" poster="../assets/videos/Overgang.png">
                            <source src="../assets/videos/overgang.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <h3 class="text-center">Medarbejdere</h3>
            <hr width="50%">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-3 employee__container" v-for="employee in employees" :key="employee.index">
                    <img :src="employee.image" :alt="employee.altText">
                    <p>{{ employee.altText }}</p>
                    <p class="text-muted">{{ employee.title }}</p>
                    <a :href="employee.mail">
                        <i class="far fa-envelope"></i> {{ employee.mail }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            employees: [
                {image: 'https://www.dak-e.dk/resources/images/dake/medarbejdere/thomasnielsen.png', altText: 'Thomas Bo Nielsen', title: 'Konstitueret direktør', mail: 'tbonielsen@dak-e.dk'},
                {image: 'https://www.dak-e.dk/resources/images/dake/medarbejdere/majapaulsen.png', altText: 'Maja Skov Paulsen', title: 'Daglig leder', mail: 'mspaulsen@dak-e.dk'},
                {image: 'https://www.dak-e.dk/resources/images/dake/medarbejdere/mariannethamdrup.png', altText: 'Marianne Thamdrup', title: 'Sekretær', mail: 'mthamdrup@dak-e.dk'},
                {image: 'https://www.dak-e.dk/resources/images/dake/medarbejdere/sorenskjoldaa.png', altText: 'Søren Skjoldå', title: 'Second Line Support', mail: 'srathje@dak-e.dk'},
                {image: 'https://www.dak-e.dk/resources/images/dake/medarbejdere/susiehansen.png', altText: 'Susie Hejring Hansen', title: 'IT-supporter', mail: 'support@dak-e.dk'},
                {image: 'https://www.dak-e.dk/resources/images/dake/medarbejdere/henrikrasmussen.png', altText: 'Henrik Rasmussen', title: 'Kvalitetsudviklingskonsulent', mail: 'hprasmussen@dak-e.dk'},
                {image: 'https://www.dak-e.dk/resources/images/dake/medarbejdere/prebenlarsen.png', altText: 'Preben Larsen', title: 'ICPC-konsulent', mail: 'preben_larsen@dadlnet.dk'},
                {image: 'https://www.dak-e.dk/resources/images/dake/medarbejdere/bojakobsen.png', altText: 'Bo Gandil Jakobsen', title: 'Konsulent', mail: 'bo.gandil@dadlnet.dk'},
                {image: 'https://www.dak-e.dk/resources/images/dake/medarbejdere/finnsvanberg.png', altText: 'Finn Svanberg', title: 'Systemadministrator', mail: 'fsnielsen@dak-e.dk'},
                {image: 'https://www.dak-e.dk/resources/images/dake/medarbejdere/anitaeckert.png', altText: 'Anita Eckert', title: 'Programmør', mail: 'aeckert@dak-e.dk'},
                {image: 'https://www.dak-e.dk/resources/images/dake/medarbejdere/larsjacobsen.png', altText: 'Lars Jacobsen', title: 'Programmør', mail: 'ljacobsen@dak-e.dk'},
                {image: 'https://www.dak-e.dk/resources/images/dake/medarbejdere/matthiasharder.png', altText: 'Matthias Harder', title: 'Programmør', mail: 'mharder@dak-e.dk'},
                {image: 'https://www.dak-e.dk/resources/images/dake/medarbejdere/hansclausen.png', altText: 'Hans Chr. Larsen', title: 'Programmør', mail: 'hclausen@dak-e.dk'},
                {image: 'https://www.dak-e.dk/resources/images/dake/medarbejdere/tanjasorensen.png', altText: 'Tanja Sørensen', title: 'Grafisk designer', mail: 'tsoerensen@dak-e.dk'}
            ]
        }
    }

}
</script>

<style scoped>
    .about__container {
        margin-top: 100px;
    }

    .about__video__container {
        background-color: #f3f3f3;
        padding: 2rem;
        margin: 2rem 0;
    }

    .employee__container {
        margin: 1rem 0;
    }

    .employee__container p {
        margin-bottom: 0;
    }
    
    .employee__container svg {
        fill: #212529;
        vertical-align: sub;
    }
</style>
