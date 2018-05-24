<template>
    <div class="support__container container">
        <div>
            <h2 class="col-md-12 text-center font-weight-bold">Har du brug for hjælp? Vi står til rådighed hvor du behøver det.</h2>
            <p class="col-md-12 text-center">Forsøg vores nye chat system, her vil det ikke kun være muligt at kontakte support men også dine kollegaer. </p>
            <div class="support__text__btn text-center">Hello</div>
        </div>
        <div class="row">
            <div class="col-sm-4 support__side__container text-center">
                <i class="far fa-envelope"></i><a href="support@dak-e.dk"> support@dak-e.dk</a>
            </div>
            <div class="col-sm-4 support__middle__container text-center">
                <router-link to="/chat">besøg chatten</router-link>
            </div>
            <div class="col-sm-4 support__side__container text-center">
                <i class="fas fa-phone"></i> 65 50 45 50
            </div>
        </div>
    </div>
</template>

<style>
    .support__container {
        margin-top: 100px;
    }

    .support__text__btn {
        margin: 0 auto;
        background-color: #2962ff;
        margin: 0 auto;
        margin: 1rem auto;
        padding: .5rem;
        border-radius: .3rem;
        font-weight: 500;
        color: white;
        width: 6rem;
        cursor: pointer;
    }

    .support__side__container {
        border-top: 2px solid #e9e9e9;
        font-weight: 500;
        padding: 1rem 0;
    }

    .support__middle__container {
        border-top: 10px solid #2962ff;
        font-weight: 500;
        padding: 1rem 0;
    }

    @media screen and (max-width: 575px) {
        .support__side__container {
            border-right: 20px solid #e9e9e9;
            border-top: 0;
        }

        .support__middle__container {
            border-right: 20px solid #2962ff;
            border-top: 0;
        }
    }

</style>



